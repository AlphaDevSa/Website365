# GitHub Rate Limit Fix - Quick Start Guide

## Problem
During Docker builds on Coolify, npm was making unauthenticated requests to GitHub's API, hitting the public rate limit (60 requests/hour) even though you upgraded your account.

## Solution
Pass your GitHub personal access token to the Docker build process.

## Steps to Fix and Resume Deployment

### 1. Generate GitHub Token (2 minutes)
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Give it a name like "Coolify Deployment"
4. Select scope: **"read:packages"** (that's it, only one)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again)

### 2. Add Token to Coolify

**If deploying via SSH/CLI:**
- Edit `.env` file on your Coolify server and add:
  ```
  GITHUB_TOKEN=ghp_xxxxxxxxxxxx
  ```

**If deploying via Coolify Dashboard:**
1. Go to http://83.229.75.26:8000/
2. Go to your Website365 project
3. Go to **Environment** or **Variables**
4. Add new variable:
   - Name: `GITHUB_TOKEN`
   - Value: `ghp_xxxxxxxxxxxx` (paste your token)
5. Save/Apply changes

### 3. Trigger Deployment
- **Via CLI:** `bash deploy.sh`
- **Via Dashboard:** Click redeploy/rebuild
- **Via Git:** Push to master (if auto-deploy enabled)

## What Changed in Your Codebase
✅ Updated Dockerfiles to accept GitHub token as build argument
✅ Updated docker-compose.yml to pass token to builds
✅ Updated .npmrc to support token authentication
✅ Updated deploy.sh to handle GitHub token
✅ Added .env.example with all required variables
✅ Updated .gitignore to prevent accidental token commits
✅ Updated deployment docs with clear instructions

## Build Timeouts Fixed
- Added network timeout settings to .npmrc (60 seconds)
- Added fetch timeout to pnpm install commands
- These prevent timeouts during slow npm registry access

## Security Notes
- Your GitHub token is only used during Docker build
- Token never appears in final image layers (cleaned up after build)
- .env files are not committed to git (protected by .gitignore)
- Each deployment uses fresh builds with fresh auth

## Testing
After deployment, verify:
```bash
# Check if services are running
docker-compose ps

# Check logs
docker-compose logs -f api
docker-compose logs -f web

# Test API
curl http://localhost:3001/api/health

# Test Web
curl http://localhost:3000/
```

## Troubleshooting
If you still get rate limit errors:
1. Verify `GITHUB_TOKEN` is set in environment
2. Check that token has "read:packages" scope
3. Run: `docker system prune -a` to clear cache
4. Rebuild fresh: `docker-compose build --no-cache`

If builds timeout:
- Your token may be invalid/expired
- Generate a new token and update in Coolify
- Check your network connection to GitHub

---
**Status:** Ready to deploy 🚀
