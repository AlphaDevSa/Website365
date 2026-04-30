# Website365 Coolify Deployment Guide

## Overview
Website365 is a monorepo containing:
- **API Server**: Express.js backend with Neon PostgreSQL
- **Frontend**: React/Vite static site
- **Database**: Neon PostgreSQL

## Prerequisites
- Coolify instance running at `http://83.229.75.26:8000/`
- Environment variables configured
- GitHub repository access

## Deployment Steps

### 1. Connect GitHub Repository
1. Go to Coolify dashboard: `http://83.229.75.26:8000/`
2. Click "New Project"
3. Select "GitHub" as source
4. Authorize and select `AlphaDevSa/Website365`
5. Click "Connect"

### 2. Configure Environment Variables
In Coolify, set the following environment variables:

```
# CRITICAL: Set GITHUB_TOKEN to avoid npm rate limit errors during builds!
GITHUB_TOKEN=your-github-token-here

DATABASE_URL=postgresql://neondb_owner:npg_3TBaWqD7irSb@ep-ancient-meadow-al0sbbrt-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
JWT_SECRET=<generate-a-secure-secret>
ADMIN_PASSWORD_HASH=$2b$12$BLOstwhYL7PPa/osw6KjO.qW9vhYnPsMNZ9l5LGjUJAqJJXsMl.jG
# (The hash above corresponds to the password: admin123)
SMTP_HOST=<your-smtp-host>
SMTP_PORT=587
SMTP_USER=<your-smtp-user>
SMTP_PASS=<your-smtp-password>
NODE_ENV=production
LOG_LEVEL=info
CORS_ORIGIN=https://website365.your-domain.com
API_ORIGIN=https://api.website365.your-domain.com
```

**⚠️ GITHUB_TOKEN FIX FOR RATE LIMITS:**
This was causing your build errors. To generate:
1. Go to https://github.com/settings/tokens
2. Create new token (classic) with "read:packages" scope
3. Copy and paste the token in Coolify as `GITHUB_TOKEN`

### 3. Create Services

#### Option A: Using Docker Compose (Recommended)
Coolify will automatically detect and use `docker-compose.yml`

1. In Coolify, select "Docker Compose"
2. Point to the repository
3. Coolify will:
   - Build both API and Web services
   - Set up networking
   - Configure health checks
   - Auto-deploy on GitHub push

#### Option B: Create Individual Services

**API Service:**
1. Create new service → Docker → Custom
2. Dockerfile: `Dockerfile.api`
3. Build context: `/`
4. Port: `3001:3001`
5. Set environment variables

**Web Service:**
1. Create new service → Docker → Custom
2. Dockerfile: `Dockerfile.coolify.web`
3. Build context: `/`
4. Port: `80:80` (serves static files via Nginx internally)
5. Set `VITE_API_URL=https://api.website365.your-domain.com`

### 4. Configure Reverse Proxy (Nginx)

If you are using Method B (Individual Services), the Web service uses a specialized Nginx configuration.

**Web Nginx Config (Internal):**
The `Dockerfile.coolify.web` uses `nginx.web.conf` which handles React routing and caching:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://website365-api:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

**Coolify Reverse Proxy (External):**
Point your domain to Coolify services:

```nginx
# api.website365.your-domain.com
server {
    server_name api.website365.your-domain.com;
    
    location / {
        proxy_pass http://website365-api:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# website365.your-domain.com
server {
    server_name website365.your-domain.com;
    
    location / {
        proxy_pass http://website365-web:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 5. Enable GitHub Auto-Deploy

1. In Coolify project settings
2. Enable "Auto Deploy" or "Auto Redeploy on Push"
3. Set GitHub webhook

### 6. Monitor Deployment

1. Watch build logs in Coolify dashboard
2. Check service status and health checks
3. Verify database connection via logs

## Troubleshooting

### Build Fails
- Check Docker logs in Coolify
- Verify all environment variables are set
- Ensure Docker has sufficient disk space

### Database Connection Error
- Verify `DATABASE_URL` is correct
- Check Neon console for connection limits
- Ensure SSL parameters are correct

### Frontend Can't Connect to API
- Check `CORS_ORIGIN` in API environment
- Verify `VITE_API_URL` in frontend service
- Check API service is running and healthy

### Port Conflicts
- Change port mappings if needed
- Ensure ports 3000 and 3001 are available
- Or use Coolify's internal networking

## Monitoring & Logs

In Coolify:
1. Click on each service
2. View "Logs" tab
3. Search for errors or issues
4. Check health status

## Scaling

To scale services:
1. In Coolify, go to service settings
2. Increase replicas (if using Kubernetes)
3. Or scale via reverse proxy load balancing

## Updates & Redeployment

After pushing to GitHub:
1. Coolify auto-detects changes (if webhook enabled)
2. Rebuilds Docker images
3. Restarts services
4. Maintains zero-downtime if configured

## Support

For Coolify-specific questions: https://coolify.io/docs
For Website365 issues: https://github.com/AlphaDevSa/Website365
