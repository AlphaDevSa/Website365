# Coolify Server Diagnostics

## Step 1: SSH into your Coolify server
```bash
ssh root@83.229.75.26
```

## Step 2: Check if containers are running
```bash
cd /home/coolify/website365
docker-compose ps
```
**Expected output:** All services should show "Up" status

## Step 3: If containers aren't running, check the deployment directory
```bash
ls -la /home/coolify/website365/
```

## Step 4: Check Docker logs for build/startup errors
```bash
# Full logs
docker-compose logs

# Just API errors
docker-compose logs api

# Just Web errors  
docker-compose logs web

# Watch logs live
docker-compose logs -f
```

## Step 5: If you see GitHub rate limit errors in logs
- This means GITHUB_TOKEN wasn't passed during build
- Solution: Add GITHUB_TOKEN to .env and rebuild

```bash
# Add GitHub token to .env
nano .env
# Find this line and update it:
# GITHUB_TOKEN=your-token-here

# Rebuild and restart
docker-compose build --no-cache
docker-compose up -d
```

## Step 6: Test if services respond locally
```bash
# Test API service
curl http://localhost:3001/api

# Test Web service
curl http://localhost:3000
```

## Step 7: Check container health
```bash
docker ps --format "table {{.Names}}\t{{.Status}}"
docker inspect website365-api --format='{{.State.Status}} - {{.State.Health.Status}}'
```

## Common Issues & Fixes

### "Connection refused" or "502 Bad Gateway"
- Containers aren't running: Check `docker-compose ps`
- Health checks failing: See logs with `docker-compose logs`

### Rate limit errors in logs
- GITHUB_TOKEN not set in .env
- Add it and run: `docker-compose build --no-cache && docker-compose up -d`

### Containers keep restarting (CrashLoopBackOff)
- App crashed on startup
- Check logs: `docker-compose logs api` to see the error
- Common causes: Missing env vars, database connection failed

### Nginx can't find containers
- Docker network issue
- Rebuild: `docker-compose down && docker-compose up -d`

---

**Run the diagnostics and paste the output here so I can see what's failing.**
