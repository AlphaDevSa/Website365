# Website365 - Coolify Deployment Guide

This guide explains how to deploy the Website365 application using Coolify. The project has been streamlined into a **single-container deployment** which hosts both the API and serves the static React frontend, eliminating the need for complex proxy configurations.

## Prerequisites

1. **GitHub Token**: You must add `GITHUB_TOKEN` to your Coolify environment variables before building. This is required to bypass GitHub's package registry rate limits. Create a Classic Token with `read:packages` scope.
2. **Database**: A Neon PostgreSQL database URL.

## Deployment Instructions

The easiest and recommended way to deploy is using the unified Dockerfile.

### Unified Deployment (Recommended)

This method builds both the frontend and backend and serves them from a single Node.js container on port `3001`.

1. In Coolify, click **New Resource** -> **Git Repository** (or **Private Repository**).
2. Select your repository.
3. Choose **Dockerfile** as the Build Pack.
4. Set the following build configuration:
   - **Dockerfile Path**: `Dockerfile.unified`
   - **Build Context**: `./`
5. Set the **Port Mapping** to map the container port `3001` to your desired public port (e.g., `80:3001` or `443:3001` depending on your SSL setup, though Coolify handles SSL automatically, so just expose `3001` internally).
6. In the **Environment Variables** section, add:
   - `GITHUB_TOKEN`: Your GitHub token (required for build).
   - `DATABASE_URL`: Your PostgreSQL connection string.
   - `JWT_SECRET`: A strong random string.
   - `ADMIN_PASSWORD_HASH`: The bcrypt hash of your admin password (default: `admin123` is `$2b$12$BLOstwhYL7PPa/osw6KjO.qW9vhYnPsMNZ9l5LGjUJAqJJXsMl.jG`).
   - `API_ORIGIN`: Optional, but defaults to `/api`. The frontend now automatically calls the same origin it's hosted on.
7. Click **Deploy**.

That's it! Coolify will build the unified image and start the service. The API will run on `/api/*` and the frontend will be served on all other routes.

## Troubleshooting

- **Build Fails**: Ensure `GITHUB_TOKEN` is set.
- **Login Fails**: Ensure the database is connected properly and the API server logs don't show any connection errors. Since the frontend and backend are now in the same container, there are no Nginx proxy issues to worry about.
