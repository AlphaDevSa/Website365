# Production Dockerfile for Coolify Deployment
# This is a unified approach that builds both API and Web

FROM node:22.13-alpine as builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.33.0

# Copy configuration files
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY tsconfig.* ./

# Copy library and artifact source
COPY lib ./lib
COPY artifacts ./artifacts

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build TypeScript and all packages
RUN pnpm run typecheck
RUN pnpm -r --filter "./artifacts/**" --if-present run build

# Production stage - API
FROM node:22.13-alpine as api-runtime

WORKDIR /app

# Install pnpm for production dependencies
RUN npm install -g pnpm@10.33.0

# Copy only necessary files
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY lib ./lib
COPY artifacts/api-server ./artifacts/api-server

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Copy built API
COPY --from=builder /app/artifacts/api-server/dist ./artifacts/api-server/dist

EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/api', (r) => {process.exit(r.statusCode === 404 ? 0 : 1);})" || exit 1

# Start API server
CMD ["node", "--enable-source-maps", "./artifacts/api-server/dist/index.mjs"]

---

# Production stage - Web (alternative)
FROM node:22.13-alpine as web-runtime

WORKDIR /app

# Install serve for static file serving
RUN npm install -g serve

# Copy built frontend from builder
COPY --from=builder /app/artifacts/website365/dist/public ./public

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Serve static files
CMD ["serve", "-s", "public", "-l", "3000"]
