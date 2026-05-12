#!/bin/bash
# SpaceCRM deployment script — run once on a fresh server
# Usage: bash deploy.sh
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[INFO]${NC} $1"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# Must run from project root
[ -f "docker-compose.yml" ] || error "Run this script from the project root directory."
[ -f ".env" ] || error ".env file not found. Copy it from your previous server or create it before deploying."

# ── Step 1: Create required host directories ──────────────────────────────────
info "Creating required host directories..."
mkdir -p postgresql-socket postgresql-data
mkdir -p rspamd-data/dkim redis-data vmail-data
mkdir -p postfix-data webmail-data core-data php-sock
mkdir -p ssl ssl-self-signed
mkdir -p logs/core logs/postfix logs/dovecot logs/rspamd logs/fail2ban
mkdir -p conf/core/fail2ban/filter.d conf/core/fail2ban/jail.d
mkdir -p conf/postfix/conf conf/postfix/sql

chmod 777 postgresql-socket
chmod -R 755 rspamd-data

# ── Step 2: Build Go binary ───────────────────────────────────────────────────
info "Building Go binary (this takes ~3 minutes)..."
ARCH=$(uname -m)
if [ "$ARCH" = "x86_64" ]; then
  BUILD_PLATFORM="x86"
elif [ "$ARCH" = "aarch64" ]; then
  BUILD_PLATFORM="arm"
else
  error "Unsupported architecture: $ARCH"
fi

docker run --rm \
  -v "$(pwd)/core:/opt/core" \
  golang:1.24-alpine \
  sh -c "apk add --no-cache file && cd /opt/core && sh go-build.sh $BUILD_PLATFORM"

info "Go binary built successfully."

# ── Step 3: Copy Dockerfile scripts to build context ─────────────────────────
info "Preparing Docker build context..."
cp Dockerfiles/core/core.sh \
   Dockerfiles/core/stop-supervisor.sh \
   Dockerfiles/core/restart_fail2ban.sh \
   Dockerfiles/core/supervisord.conf \
   Dockerfiles/core/fail2ban.conf .

# ── Step 4: Build frontend ────────────────────────────────────────────────────
if command -v pnpm &>/dev/null; then
  info "Building frontend..."
  cd core/frontend && pnpm install --frozen-lockfile && pnpm run build && cd ../..
elif command -v npm &>/dev/null; then
  info "Installing pnpm and building frontend..."
  npm install -g pnpm
  cd core/frontend && pnpm install --frozen-lockfile && pnpm run build && cd ../..
else
  warn "pnpm/npm not found — skipping frontend build. The dist/ directory must already exist."
fi

# ── Step 5: Build core Docker image ──────────────────────────────────────────
info "Building core Docker image..."
docker compose build core-billionmail

# Clean up temporary build context files
rm -f core.sh stop-supervisor.sh restart_fail2ban.sh supervisord.conf fail2ban.conf

# ── Step 6: Pull remaining images ────────────────────────────────────────────
info "Pulling remaining service images..."
docker compose pull pgsql-billionmail redis-billionmail rspamd-billionmail \
                    dovecot-billionmail postfix-billionmail webmail-billionmail

# ── Step 7: Start all services ────────────────────────────────────────────────
info "Starting all services..."
docker compose up -d

# ── Step 8: Wait and verify ───────────────────────────────────────────────────
info "Waiting 20 seconds for services to initialize..."
sleep 20

echo ""
info "Container status:"
docker compose ps

echo ""
info "Core container logs (last 15 lines):"
docker compose logs --tail=15 core-billionmail

echo ""
info "================================================================"
info "Deployment complete!"
info ""
info "Next steps:"
info "  1. Install nginx:  apt-get install -y nginx"
info "  2. Install certbot: apt-get install -y certbot python3-certbot-nginx"
info "  3. Enable nginx site:"
info "       cp conf/nginx-spacecrm-mail.conf /etc/nginx/sites-available/spacecrm-mail"
info "       ln -s /etc/nginx/sites-available/spacecrm-mail /etc/nginx/sites-enabled/spacecrm-mail"
info "       nginx -t && systemctl reload nginx"
info "  4. Get SSL cert:"
info "       certbot --nginx -d mail.spacecrm.net --agree-tos -m pmspaceai7@gmail.com"
info "  5. Visit https://mail.spacecrm.net/spacecrm to access the panel"
info "================================================================"
