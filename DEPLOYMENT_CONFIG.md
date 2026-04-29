# Deployment Configuration for Website365
# This file contains all necessary information for deploying to Coolify

## Environment Variables Required
# === Database ===
DATABASE_URL=postgresql://neondb_owner:npg_3TBaWqD7irSb@ep-ancient-meadow-al0sbbrt-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

# === Security ===
# Generate a new secure JWT_SECRET
JWT_SECRET=your-secure-random-jwt-secret-change-this

# Password hash for admin (bcrypt format)
ADMIN_PASSWORD_HASH=$2b$12$8jXjKjn3vuZRCrU/NLzTmeAH5Vllip/n6wI4oBLyK.aMOdSU.NNii

# === Email Configuration (Optional) ===
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# === URLs ===
# Update these with your actual domain
API_ORIGIN=https://api.website365.your-domain.com
CORS_ORIGIN=https://website365.your-domain.com

# === Logging ===
LOG_LEVEL=info
NODE_ENV=production

# === Build Variables ===
REGISTRY=registry.your-domain.com
VERSION=latest

## Deployment Steps

### Step 1: SSH into your Coolify server
ssh root@83.229.75.26 -p 22

### Step 2: Clone the repository
cd /home/coolify
git clone https://github.com/AlphaDevSa/Website365.git Website365
cd Website365

### Step 3: Create .env file
# Copy the environment variables above to .env file
cp .env.example .env
# Edit with your actual values
nano .env

### Step 4: Build and Deploy with Docker Compose
# Build images
docker-compose build

# Start services
docker-compose up -d

# Check logs
docker-compose logs -f

### Step 5: Verify Deployment
# Check if services are running
docker-compose ps

# Test API endpoint
curl http://localhost:3001/api

# Test Web endpoint
curl http://localhost:3000

### Step 6: Configure Coolify UI (if using Coolify dashboard)
1. Go to http://83.229.75.26:8000/
2. Create new project
3. Add repository: https://github.com/AlphaDevSa/Website365
4. Set environment variables
5. Enable auto-deploy on push

### Step 7: Setup SSL with Let's Encrypt (Optional but Recommended)
# If using Coolify's SSL support
docker-compose down
# Edit docker-compose.yml to add SSL configuration
# Or use Coolify's built-in SSL management

### Step 8: Configure Domain DNS
Point your domain A record to: 83.229.75.26

### Monitoring
# View all logs
docker-compose logs -f

# Check specific service
docker-compose logs -f api
docker-compose logs -f web

# Check Docker stats
docker stats

# View resource usage
docker system df

## Troubleshooting

### Services won't start
1. Check logs: docker-compose logs
2. Verify environment variables: docker-compose config
3. Check Docker disk space: docker system df

### Database connection fails
1. Verify DATABASE_URL is correct
2. Check Neon connection limits
3. Test connection: docker exec website365-api node -e "require('pg').Pool(...)"

### Frontend can't connect to API
1. Check CORS_ORIGIN environment variable
2. Verify API_ORIGIN is set correctly
3. Check API service logs: docker-compose logs api

### Port conflicts
1. Check if ports 3000/3001 are in use: netstat -tulpn
2. Change ports in docker-compose.yml if needed
3. Update firewall rules

## Updates & Redeployment

When code is pushed to GitHub:
1. SSH into server
2. cd /home/coolify/Website365
3. git pull origin master
4. docker-compose build
5. docker-compose up -d

Or setup GitHub webhook in Coolify for automatic deployment.

## Rollback
# Keep previous images
docker images | grep website365

# Use specific image tag
docker-compose.yml with specific version tag
docker-compose up -d

## Backup Database
# Backup Neon database
pg_dump -h ep-ancient-meadow-al0sbbrt-pooler.c-3.eu-central-1.aws.neon.tech \
  -U neondb_owner \
  -d neondb \
  -f backup.sql

## Additional Resources
- Coolify Docs: https://coolify.io/docs
- Docker Compose: https://docs.docker.com/compose/
- Website365 GitHub: https://github.com/AlphaDevSa/Website365
