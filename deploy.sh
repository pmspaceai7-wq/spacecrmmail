#!/bin/bash
# SpaceCRM deployment script — run once from a fresh project directory
# Usage: bash deploy.sh
set -euo pipefail

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

# Fail before building or starting anything if shared-host ports are in use.
command -v docker >/dev/null || error "Docker is required."
command -v ss >/dev/null || error "Install iproute2 for the port preflight check."
docker info >/dev/null 2>&1 || error "Docker access is required (use sudo if necessary)."
docker compose config --quiet || error "Invalid Compose configuration."
ENV_CONFIG=$(docker compose config --environment)
env_value() { printf '%s\n' "$ENV_CONFIG" | sed -n "s/^$1=//p"; }
for key in DBPASS REDISPASS; do
  value=$(env_value "$key")
  [[ -n "$value" && "$value" != CHANGE_ME* ]] || error "Set a strong random $key in .env."
done
for key in SMTP_PORT SMTPS_PORT SUBMISSION_PORT IMAP_PORT IMAPS_PORT POP_PORT POPS_PORT HTTP_PORT HTTPS_PORT SQL_PORT REDIS_PORT; do
  value=$(env_value "$key")
  [[ -n "$value" ]] || error "Set $key explicitly in .env before deploying."
  port=${value##*:}
  [[ "$port" =~ ^[0-9]+$ ]] || error "Invalid port in $key."
  if ss -H -lntu | awk '{print $5}' | grep -Eq ":${port}$"; then
    error "$key ($port) is already in use. Do not stop existing apps; resolve the conflict first."
  fi
done
if docker network inspect billionmail_billionmail-network >/dev/null 2>&1 || ip link show br-billionmail >/dev/null 2>&1; then
  error "An existing BillionMail network was found. This script is for a fresh installation, not an update."
fi
info "Port preflight passed. Also verify the configured subnet does not overlap host/VPN/Docker routes."

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
  --cpus=1 --memory=2g \
  -e GOMAXPROCS=1 -e GOFLAGS=-p=1 \
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
else
  info "Building frontend in Docker without changing host Node/npm/PM2..."
  docker run --rm --cpus=1 --memory=2g \
    -v "$(pwd)/core/frontend:/app" -w /app node:22-alpine \
    sh -c 'corepack enable && pnpm install --frozen-lockfile && pnpm run build'
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
echo ""
info "Container status:"
docker compose ps

echo ""
info "Core container logs (last 15 lines):"
docker compose logs --tail=15 core-billionmail

echo ""
info "================================================================"
info "Containers started; verify application readiness and logs before routing traffic."
info ""
info "Next steps:"
info "  Follow docs/SHARED_SERVER_DEPLOY.md for the existing nginx server."
info "  Do not enable the HTTPS nginx template until its certificate files exist."
info "  Visit https://mail.spacecrm.net/spacecrm once DNS, nginx and TLS are configured."
info "================================================================"
