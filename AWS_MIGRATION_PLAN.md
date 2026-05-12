# SpaceCRM → AWS Migration: Full Implementation Plan

## Overview

Moving SpaceCRM from Emirates Internet (blocked ports, ngrok access) to AWS EC2 
(open ports, real domain, proper SSL, working email send/receive).

Current problems on Emirates Internet:
- Port 25 outbound blocked → can't send email directly to Gmail
- Port 80 inbound blocked → Let's Encrypt fails
- No stable public IP → relying on ngrok

What AWS gives you:
- Open ports (via Security Groups you control)
- Elastic IP (stable, static)
- Port 25 unblockable via support ticket
- Let's Encrypt works on port 80
- Full PTR/rDNS control

---

## PHASE 1: Code Preparation (on this machine, before GitHub)

### Step 1.1 — docker-compose.yml (DONE ✅)
Added `build:` directive so AWS can build the core image locally.
The image won't be pulled from Docker Hub — it's built from source on the server.

### Step 1.2 — deploy.sh (DONE ✅)
Created `deploy.sh` — a single script that handles the entire first-time setup on AWS:
- Creates all required directories
- Builds the Go binary via Docker
- Builds the frontend via pnpm
- Builds the core Docker image
- Pulls other service images
- Starts all containers

### Step 1.3 — conf/nginx-spacecrm-mail.conf (DONE ✅)
Already created. Will be committed to git as a deployment template.

---

## PHASE 2: GitHub Setup

### Step 2.1 — Create a new PRIVATE GitHub repo

1. Go to https://github.com/new
2. Repository name: `spacecrm-mail`
3. Select: **Private**
4. Do NOT initialize with README (repo will be pushed from local)
5. Click **Create repository**
6. Copy the repo URL: `https://github.com/YOUR_USERNAME/spacecrm-mail.git`

### Step 2.2 — Change the git remote

Currently the remote points to the upstream BillionMail repo. Change it to your new repo:
```bash
cd /home/sijo/Desktop/BillionMail
git remote set-url origin https://github.com/YOUR_USERNAME/spacecrm-mail.git
```

### Step 2.3 — Stage and commit all changes

Run when ready (after confirming):
```bash
git add \
  conf/dovecot/ \
  conf/postfix/main.cf conf/postfix/master.cf conf/postfix/main.test.cf \
  conf/rspamd/local.d/dkim_signing.conf \
  conf/webmail/custom.inc.php \
  conf/nginx-spacecrm-mail.conf \
  core/frontend/ \
  core/go.mod core/go.sum \
  core/internal/service/database_initialization/smtp_relay.go \
  core/internal/service/mail_service/sending.go \
  core/public/html/ \
  core/template/ \
  docker-compose.yml \
  deploy.sh

git commit -m "SpaceCRM: branding, bug fixes, AWS deployment setup"
git push -u origin dev
```

**Files intentionally NOT committed (already in .gitignore):**
- `.env` — has passwords, never commit
- `ssl/` and `ssl-self-signed/` — server-specific certs
- `postgresql-data/`, `rspamd-data/`, `redis-data/`, `vmail-data/` — runtime data
- `postgresql-socket/` — socket files
- `logs/` — log files
- `core/billionmail-amd64` — compiled binary
- `conf/postfix/sql/` — has hardcoded DB password

### Step 2.4 — Create .env.example for the repo

A template `.env.example` (no passwords) will be committed so AWS setup is clear:

```
# SpaceCRM environment — copy to .env and fill in values

BILLIONMAIL_HOSTNAME=mail.spacecrm.net
DBNAME=billionmail
DBUSER=billionmail
DBPASS=CHANGE_ME_STRONG_PASSWORD
REDISPASS=CHANGE_ME_STRONG_PASSWORD
SafePath=spacecrm
HTTP_PORT=8888
HTTPS_PORT=8443
TZ=Etc/UTC
IPV4_NETWORK=172.66.1
ADMIN_USERNAME=billion
RETENTION_DAYS=7
FAIL2BAN_INIT=y
IP_WHITELIST_ENABLE=false
```

---

## PHASE 3: AWS EC2 Setup

### Step 3.1 — Launch EC2 Instance

In AWS Console → EC2 → Launch Instance:
- **Name:** spacecrm-mail
- **AMI:** Ubuntu Server 22.04 LTS (64-bit x86)
- **Instance type:** `t3.medium` (2 vCPU, 4 GB RAM) minimum — mail servers need RAM
- **Key pair:** Create or select existing SSH key
- **Storage:** 30 GB GP3 (can expand later)
- **Security Group:** Create new (configure in Step 3.3)

### Step 3.2 — Allocate Elastic IP

EC2 → Elastic IPs → Allocate Elastic IP address → Allocate
Then: Actions → Associate Elastic IP → select your instance

This gives you a permanent IP that survives reboots/stops.

### Step 3.3 — Security Group — Open Required Ports

In Security Group → Inbound Rules → Add these rules:

| Port  | Protocol | Source    | Purpose                   |
|-------|----------|-----------|---------------------------|
| 22    | TCP      | Your IP   | SSH access                |
| 25    | TCP      | 0.0.0.0/0 | SMTP (receiving mail)     |
| 80    | TCP      | 0.0.0.0/0 | HTTP (Let's Encrypt)      |
| 443   | TCP      | 0.0.0.0/0 | HTTPS (web UI)            |
| 465   | TCP      | 0.0.0.0/0 | SMTPS                     |
| 587   | TCP      | 0.0.0.0/0 | SMTP Submission           |
| 143   | TCP      | 0.0.0.0/0 | IMAP                      |
| 993   | TCP      | 0.0.0.0/0 | IMAPS                     |
| 110   | TCP      | 0.0.0.0/0 | POP3                      |
| 995   | TCP      | 0.0.0.0/0 | POP3S                     |

### Step 3.4 — Request AWS Port 25 Unblock (CRITICAL)

AWS blocks outbound port 25 by default on all new accounts. Without this, email to Gmail won't work (same problem as now, different reason).

1. Go to AWS Console → Support → Create Case
2. **Service limit increase** → **EC2 Email** → **Request to remove email sending limitation**
3. Fill in:
   - Use case: "Self-hosted transactional email server for business communication"
   - Website: your domain
   - Contact email: pmspaceai7@gmail.com
4. Submit — usually approved in **24–48 hours**

**Until port 25 is approved:** Use the BillionMail SMTP relay feature with Brevo/SendGrid (free tier works).

### Step 3.5 — Update DNS Records

At your domain registrar (for `spacecrm.net`), update/add:

| Record | Name | Value | TTL |
|--------|------|-------|-----|
| A | `mail` | `<AWS Elastic IP>` | 300 |
| MX | `@` | `mail.spacecrm.net` | 300 |
| TXT | `@` | `v=spf1 ip4:<AWS Elastic IP> ~all` | 300 |
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:pmspaceai7@gmail.com` | 300 |

DKIM TXT record: Generate this after deployment via SpaceCRM UI → Domains.

### Step 3.6 — Set PTR/rDNS (Critical for email deliverability)

In AWS Console → EC2 → Elastic IPs → select your IP
→ Actions → Update reverse DNS
→ Enter: `mail.spacecrm.net`

This tells receiving servers that your IP belongs to `mail.spacecrm.net`.

---

## PHASE 4: Deploy on AWS

### Step 4.1 — SSH into the instance
```bash
ssh -i your-key.pem ubuntu@<AWS-Elastic-IP>
```

### Step 4.2 — Install Docker and Git
```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-plugin git nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker
sudo usermod -aG docker ubuntu   # allow docker without sudo
# Log out and back in for group change to take effect
```

### Step 4.3 — Clone your repo
```bash
git clone https://github.com/YOUR_USERNAME/spacecrm-mail.git /opt/spacecrm
cd /opt/spacecrm
```

### Step 4.4 — Create .env
```bash
cp .env.example .env
nano .env   # fill in passwords (use same passwords as current server to keep DB compatibility)
```

### Step 4.5 — Run deploy.sh
```bash
chmod +x deploy.sh
bash deploy.sh
```

This single command:
- Creates all directories
- Builds the Go binary (~3 min)
- Builds frontend
- Builds Docker image
- Starts all containers

### Step 4.6 — Configure nginx
```bash
sudo cp conf/nginx-spacecrm-mail.conf /etc/nginx/sites-available/spacecrm-mail
sudo ln -s /etc/nginx/sites-available/spacecrm-mail /etc/nginx/sites-enabled/spacecrm-mail
sudo nginx -t && sudo systemctl reload nginx
```

### Step 4.7 — Get SSL Certificate
Port 80 IS accessible on AWS, so the HTTP challenge works:
```bash
sudo certbot --nginx -d mail.spacecrm.net \
  --non-interactive --agree-tos \
  -m pmspaceai7@gmail.com
sudo systemctl reload nginx
```

Certbot auto-renewal is enabled by default. Cert renews every 90 days.

### Step 4.8 — Access SpaceCRM
Visit: `https://mail.spacecrm.net/spacecrm` (SafePath gate)
Then: `https://mail.spacecrm.net/login`

---

## PHASE 5: Email Configuration Inside SpaceCRM

### Step 5.1 — Add your domain
Settings → Domains → Add domain → `spacecrm.net`
This generates the DKIM keys and shows the DNS records to add.

### Step 5.2 — Add the DKIM DNS record
Copy the DKIM TXT record from SpaceCRM UI → add at your registrar.

### Step 5.3 — Test email sending
Send a test email to pmspaceai7@gmail.com. 
Check Gmail → View source → look for:
- `DKIM=pass`
- `SPF=pass`
- `DMARC=pass`

### Step 5.4 — Configure SMTP relay (temporary, until AWS unblocks port 25)

Sign up at https://app.brevo.com (free, 300 emails/day):
1. Get SMTP credentials from Brevo → SMTP & API → SMTP
2. In SpaceCRM → Settings → SMTP Relay → Add relay:
   - Host: `smtp-relay.brevo.com`
   - Port: `587`
   - Username: your Brevo email
   - Password: Brevo SMTP key
3. Map your domain to this relay

Once AWS approves port 25, remove the relay and send directly.

---

## Port Summary: Current vs AWS

| Port | Current Server | AWS |
|------|---------------|-----|
| 25 outbound | ❌ Blocked by ISP | ✅ Open (after support ticket) |
| 25 inbound | ✅ Open | ✅ Open |
| 80 inbound | ❌ Blocked by ISP | ✅ Open |
| 443 inbound | ❌ No cert works | ✅ Let's Encrypt works |
| 587 outbound | ✅ Open (to some relays) | ✅ Open |
| 143/993 | ✅ Open | ✅ Open |

---

## What to Migrate from Current Server

When you're ready to cut over, you need to copy these directories from the old server:

```bash
# On the OLD server — package data
tar czf spacecrm-data.tar.gz postgresql-data/ rspamd-data/ vmail-data/ ssl/ .env

# Transfer to AWS
scp -i your-key.pem spacecrm-data.tar.gz ubuntu@<AWS-IP>:/opt/spacecrm/

# On AWS — restore
cd /opt/spacecrm && tar xzf spacecrm-data.tar.gz
```

This migrates all emails, contacts, campaigns, and DKIM keys.

---

## Quick Verification Checklist After Deploy

- [ ] `docker compose ps` — all containers show "Up"
- [ ] `https://mail.spacecrm.net` loads without SSL warning
- [ ] Login works
- [ ] Send test email to Gmail → received, not in spam
- [ ] Gmail → View source → DKIM=pass, SPF=pass
- [ ] Send email TO a mailbox → appears in Roundcube webmail
- [ ] `docker compose logs postfix-billionmail | grep "status=sent"` — shows sent
