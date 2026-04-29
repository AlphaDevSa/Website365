#!/bin/bash
# Website365 Coolify Deployment Script
# Run this script on your Coolify server to deploy Website365

set -e  # Exit on any error

echo "================================"
echo "Website365 Deployment Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DEPLOYMENT_DIR="/home/coolify/website365"
REPO_URL="https://github.com/AlphaDevSa/Website365.git"
BRANCH="master"

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_requirements() {
    log_info "Checking requirements..."
    
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed"
        exit 1
    fi
    
    if ! command -v git &> /dev/null; then
        log_error "Git is not installed"
        exit 1
    fi
    
    log_info "All requirements met"
}

setup_directory() {
    log_info "Setting up deployment directory..."
    
    if [ ! -d "$DEPLOYMENT_DIR" ]; then
        mkdir -p "$DEPLOYMENT_DIR"
        cd "$DEPLOYMENT_DIR"
        git clone $REPO_URL .
        log_info "Repository cloned"
    else
        cd "$DEPLOYMENT_DIR"
        git pull origin $BRANCH
        log_info "Repository updated"
    fi
}

setup_environment() {
    log_info "Setting up environment variables..."
    
    if [ ! -f "$DEPLOYMENT_DIR/.env" ]; then
        log_warn ".env file not found"
        echo "Please create .env file with required variables:"
        echo ""
        echo "Required variables:"
        echo "  DATABASE_URL=..."
        echo "  JWT_SECRET=..."
        echo "  ADMIN_PASSWORD_HASH=..."
        echo "  SMTP_HOST=..."
        echo "  SMTP_PORT=..."
        echo "  SMTP_USER=..."
        echo "  SMTP_PASS=..."
        echo "  API_ORIGIN=..."
        echo "  CORS_ORIGIN=..."
        echo ""
        exit 1
    else
        log_info ".env file found"
    fi
}

build_and_deploy() {
    log_info "Building Docker images..."
    docker-compose build --no-cache
    
    log_info "Stopping existing services..."
    docker-compose down || true
    
    log_info "Starting services..."
    docker-compose up -d
    
    log_info "Waiting for services to be ready..."
    sleep 10
}

verify_deployment() {
    log_info "Verifying deployment..."
    
    # Check if containers are running
    if docker-compose ps | grep -q "website365-api"; then
        log_info "API service is running"
    else
        log_error "API service failed to start"
        docker-compose logs api
        exit 1
    fi
    
    if docker-compose ps | grep -q "website365-web"; then
        log_info "Web service is running"
    else
        log_error "Web service failed to start"
        docker-compose logs web
        exit 1
    fi
    
    # Test API endpoint
    log_info "Testing API endpoint..."
    if curl -s http://localhost:3001/api > /dev/null 2>&1; then
        log_info "API endpoint is responding"
    else
        log_warn "API endpoint test failed"
    fi
    
    # Test Web endpoint
    log_info "Testing Web endpoint..."
    if curl -s http://localhost:3000/ > /dev/null 2>&1; then
        log_info "Web endpoint is responding"
    else
        log_warn "Web endpoint test failed"
    fi
}

cleanup() {
    log_info "Cleaning up old Docker images..."
    docker image prune -f --filter "dangling=true"
    docker system df
}

show_status() {
    log_info "Current deployment status:"
    echo ""
    docker-compose ps
    echo ""
    log_info "View logs with:"
    echo "  docker-compose logs -f              # All services"
    echo "  docker-compose logs -f api          # API only"
    echo "  docker-compose logs -f web          # Web only"
    echo ""
    log_info "Services available at:"
    echo "  API:  http://localhost:3001"
    echo "  Web:  http://localhost:3000"
    echo ""
}

main() {
    check_requirements
    setup_directory
    setup_environment
    build_and_deploy
    verify_deployment
    cleanup
    show_status
    
    log_info "Deployment completed successfully!"
}

# Run main function
main
