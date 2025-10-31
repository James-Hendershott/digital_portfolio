# Deployment Guide for jameshendershott.org

This guide covers two deployment options for your Next.js portfolio: **Netlify (recommended)** and **Unraid with Docker**.

## Option 1: Netlify (Free Tier) - RECOMMENDED

### Why Netlify?
- ✅ Free hosting with custom domain
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN for fast loading
- ✅ Automatic deployments from GitHub
- ✅ Zero server maintenance

### Setup Steps

1. **Connect GitHub Repository**
   ```
   1. Go to https://app.netlify.com
   2. Click "Add new site" → "Import an existing project"
   3. Choose GitHub and select: James-Hendershott/digital_portfolio
   4. Build settings (auto-detected):
      - Build command: npm run build
      - Publish directory: .next
   5. Click "Deploy site"
   ```

2. **Configure Custom Domain**
   ```
   1. In Netlify dashboard → Domain settings
   2. Click "Add custom domain"
   3. Enter: jameshendershott.org
   4. Netlify will provide DNS records
   ```

3. **Update Domain DNS (at your registrar)**
   ```
   Add these records where you purchased jameshendershott.org:
   
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   
   (Netlify will show exact values in dashboard)
   ```

4. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Wait 24-48 hours for DNS propagation
   - HTTPS will be enforced automatically

5. **Set Environment Variables** (if needed)
   ```
   Site settings → Environment variables → Add:
   - SITE_URL=https://jameshendershott.org
   - GITHUB_USERNAME=James-Hendershott
   - Any other env vars from .env.local
   ```

### Automatic Deployments
- Every push to `main` branch triggers automatic rebuild
- Preview deployments for pull requests
- Rollback to any previous deploy with one click

---

## Option 2: Unraid with Docker & Nginx

### Prerequisites
- Unraid server with Docker support
- Nginx Proxy Manager (NPM) installed
- Port 80 and 443 accessible

### Setup Steps

#### 1. Create Docker Container for Next.js App

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  portfolio:
    image: node:20-alpine
    container_name: jameshendershott-portfolio
    working_dir: /app
    volumes:
      - /mnt/user/appdata/portfolio:/app
    command: sh -c "npm install && npm run build && npm start"
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - SITE_URL=https://jameshendershott.org
    restart: unless-stopped
```

#### 2. Deploy Application Files
```bash
# SSH into Unraid
ssh root@your-unraid-ip

# Create app directory
mkdir -p /mnt/user/appdata/portfolio
cd /mnt/user/appdata/portfolio

# Clone repo (or rsync files from dev machine)
git clone https://github.com/James-Hendershott/digital_portfolio.git .

# Start container
docker-compose up -d

# Verify it's running
docker logs jameshendershott-portfolio
curl http://localhost:3000
```

#### 3. Configure Nginx Proxy Manager

1. **Add Proxy Host:**
   ```
   Domain Names: jameshendershott.org, www.jameshendershott.org
   Scheme: http
   Forward Hostname/IP: jameshendershott-portfolio (Docker container name)
   Forward Port: 3000
   Cache Assets: ✓
   Block Common Exploits: ✓
   Websockets Support: ✓
   ```

2. **Enable SSL:**
   ```
   SSL tab:
   - SSL Certificate: Request a new SSL Certificate
   - Force SSL: ✓
   - HTTP/2 Support: ✓
   - HSTS Enabled: ✓
   - Email: james_hendershott@outlook.com
   - Agree to Let's Encrypt ToS
   ```

3. **DNS Configuration:**
   ```
   At your domain registrar:
   
   Type: A
   Name: @
   Value: [Your Unraid public IP or DDNS]
   
   Type: CNAME
   Name: www
   Value: jameshendershott.org
   ```

#### 4. Auto-Update Setup (Optional)

Create update script `/mnt/user/appdata/portfolio/update.sh`:
```bash
#!/bin/bash
cd /mnt/user/appdata/portfolio
git pull origin main
docker-compose restart
```

Add to Unraid User Scripts plugin to run daily or on-demand.

---

## Recommendation

**Use Netlify** unless you specifically need:
- Full control over server infrastructure
- Integration with other self-hosted services on Unraid
- Custom server-side features beyond Next.js API routes

Netlify offers:
- Better performance (global CDN)
- Zero maintenance
- Automatic scaling
- Free SSL and DDoS protection
- Built-in analytics

---

## Testing After Deployment

1. Visit https://jameshendershott.org
2. Check all pages load correctly
3. Test contact form submission
4. Verify PDF resume downloads
5. Check mobile responsiveness
6. Run Lighthouse audit (aim for >90 scores)

---

## Troubleshooting

### DNS Not Resolving
```bash
# Check DNS propagation
dig jameshendershott.org
nslookup jameshendershott.org

# Wait up to 48 hours for full propagation
```

### Build Failures (Netlify)
- Check build logs in Netlify dashboard
- Verify Node version (should be 20+)
- Check environment variables are set

### Container Won't Start (Unraid)
```bash
# Check logs
docker logs jameshendershott-portfolio

# Rebuild
cd /mnt/user/appdata/portfolio
docker-compose down
docker-compose up -d --build
```

---

## Post-Deployment Checklist

- [ ] Custom domain configured and DNS propagated
- [ ] HTTPS/SSL enabled and working
- [ ] All pages render correctly
- [ ] Contact form tested
- [ ] Analytics configured (optional)
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] Resume PDF downloads
- [ ] Project pages with private access work
- [ ] Mobile responsive on real devices
- [ ] Performance optimized (Lighthouse >90)
