# SpaceCRM on a server already running PM2 apps

Use a fresh `/var/www/spacecrm` directory. Do not copy local database, mail,
Redis, generated configuration, certificates, or runtime data to the server.
Do not run `install.sh`, restart PM2, stop nginx, prune Docker, change the
default nginx site, or flush firewall rules. This deployment still shares CPU,
RAM, disk and the Docker daemon with other apps; zero impact cannot be guaranteed.
The application mounts the Docker socket, which grants powerful host access even
when mounted read-only. Only deploy trusted code.

## 1. Inspect before changing the server

```bash
cd /var/www
pm2 list
sudo docker ps --format 'table {{.Names}}\t{{.Ports}}'
sudo ss -lntup
free -h
df -h /var/www
ip -4 route
sudo docker network ls
sudo docker network inspect $(sudo docker network ls -q) --format '{{.Name}} {{range .IPAM.Config}}{{.Subnet}} {{end}}'
sudo nginx -t
```

Ensure ports **25, 465, 587, 143, 993, 110, 995, 8888, 8443, 25432, 26379**
are free. nginx keeps its existing 80/443 listeners. If an existing mail service
uses the mail ports, stop here; do not stop it to make room. Receiving internet
email requires public TCP 25, so remapping that port is not an equivalent fix.
Confirm `172.30.66.0/24` does not overlap any host, Docker or VPN network; adjust
`IPV4_NETWORK` in the new environment if needed. Leave enough RAM/disk headroom
for seven additional services and builds. The Docker build helpers are limited
to one CPU and 2 GiB, but application containers and image builds are not.

## 2. Obtain the updated code and configure a fresh environment

Transfer the updated tracked files or clone the repository after publishing
these changes. Use your own GitHub authentication; never put a token in a URL.

```bash
sudo mkdir -p /var/www/spacecrm
sudo chown deploy:deploy /var/www/spacecrm
git clone https://github.com/pmspaceai7-wq/spacecrmmail.git /var/www/spacecrm
cd /var/www/spacecrm
umask 077
cp .env.example .env
DB_SECRET=$(openssl rand -hex 32)
REDIS_SECRET=$(openssl rand -hex 32)
sed -i "s/^DBPASS=.*/DBPASS=$DB_SECRET/; s/^REDISPASS=.*/REDISPASS=$REDIS_SECRET/" .env
unset DB_SECRET REDIS_SECRET
chmod 600 .env
```

The updated example sets:

- Hostname: `mail.spacecrm.net`
- First-login username: `spacecrm`
- First-login password: `spacecrm@123` (temporary, weak; change immediately)
- Safe path: `spacecrm`
- Web binding: `127.0.0.1`, HTTP 8888, HTTPS 8443
- Database/Redis bindings: loopback only
- Fail2ban: disabled initially to avoid introducing automated bans during rollout

These admin defaults initialize a **fresh database**; do not assume they reset
an existing account. Do not change `DBPASS` on an initialized PostgreSQL data
directory without rotating the database role password as well.

## 3. Build and start only this stack

```bash
cd /var/www/spacecrm
sudo bash deploy.sh
sudo docker compose ps
sudo docker compose logs --tail=100 core-billionmail
curl -I http://127.0.0.1:8888/spacecrm
pm2 list
```

The script checks configured port conflicts before builds, uses Docker for Go,
and uses Docker for Node when host pnpm is absent. It does not install global
Node packages or operate on PM2. Do not point other deployments at this directory.
If a step fails, inspect its logs rather than repeatedly running the script.

## 4. Add one nginx virtual host, without replacing existing sites

Point the DNS A record for `mail.spacecrm.net` to this server. Only add an AAAA
record if IPv6 is configured. Ask the provider to set this IP's PTR record to
`mail.spacecrm.net` and confirm inbound/outbound TCP 25 is allowed.

Back up `/etc/nginx` first. Check that `mail.spacecrm.net` is not already configured.
Create `/etc/nginx/sites-available/spacecrm-mail` with this **HTTP-only** bootstrap:

```nginx
server {
    listen 80;
    server_name mail.spacecrm.net;
    client_max_body_size 50m;
    location / {
        proxy_pass http://127.0.0.1:8888;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 300s;
    }
}
```

```bash
sudo cp -a /etc/nginx /etc/nginx.spacecrm-backup-$(date +%Y%m%d-%H%M%S)
# Create the HTTP-only file above before enabling it.
sudo ln -s /etc/nginx/sites-available/spacecrm-mail /etc/nginx/sites-enabled/spacecrm-mail
sudo nginx -t && sudo systemctl reload nginx
# If certbot is absent, review package changes before installing it.
sudo certbot --nginx -d mail.spacecrm.net
sudo nginx -t
```

Do not enable `conf/nginx-spacecrm-mail.conf` before certificate issuance: it
references certificate files that may not yet exist. Use reload, not restart.
If this host uses Caddy/Apache or a different nginx directory layout, integrate
with that existing proxy instead of installing a competing listener.
Do not submit admin credentials over plain HTTP.

## 5. Verify before sending email

Visit **https://mail.spacecrm.net/spacecrm**, then sign in with the initial
credentials and change the password. Set Settings > General > Reverse Proxy
Domain to `https://mail.spacecrm.net`. Verify every existing app still works.
Add the sending domain in SpaceCRM and publish the MX/SPF/DKIM/DMARC records it
provides. Configure and verify mail-protocol certificates separately: nginx
certbot setup alone does not install certificates into Postfix/Dovecot.
Only open the required mail ports in the existing firewall policy; do not reset
it or change existing app rules. Verify TLS and delivery before campaigns.

## Rollback (only the new deployment)

```bash
cd /var/www/spacecrm
sudo docker compose stop
sudo rm /etc/nginx/sites-enabled/spacecrm-mail
sudo nginx -t && sudo systemctl reload nginx
pm2 list
```

Keep the data directory for diagnosis/recovery. Never run global Docker cleanup
or `pm2 stop all`. Disabling this site does not undo DNS or PTR changes.