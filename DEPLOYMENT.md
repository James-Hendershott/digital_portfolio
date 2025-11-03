# Deployment Guide - Quick Reference

## 🚀 Deploy to Netlify (Recommended)

### Step 1: Prepare Your Repository
```powershell
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy on Netlify

1. Go to [https://app.netlify.com/](https://app.netlify.com/)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Select your `digital_portfolio` repository
6. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: Click "Show advanced" → Add environment variable:
     - Key: `NODE_VERSION`
     - Value: `20`

### Step 3: Environment Variables
Click "Add environment variables":
- **GITHUB_USERNAME**: `James-Hendershott`
- **SITE_URL**: (Leave blank for now, update after first deploy)

### Step 4: Deploy!
Click **"Deploy [your-site-name]"**

Build will take 2-5 minutes. Once complete, you'll get a URL like:
`https://random-name-123456.netlify.app`

### Step 5: Customize Domain (Optional)
1. Click **"Domain settings"**
2. Click **"Options"** → **"Edit site name"**
3. Choose a custom name: `james-hendershott-portfolio`
4. Your URL becomes: `https://james-hendershott-portfolio.netlify.app`

### Step 6: Update Environment Variables
1. Go to **Site settings** → **Environment variables**
2. Edit `SITE_URL` to your new Netlify URL
3. Click **"Save"**
4. Trigger a new deploy: **Deploys** → **"Trigger deploy"** → **"Deploy site"**

---

## 🧪 Test Before Submitting

Visit your live site and test:
- [ ] Home page loads
- [ ] All navigation links work
- [ ] GitHub showcase displays repos
- [ ] Projects page shows all 10 projects
- [ ] Each project detail page loads
- [ ] LinkedIn and GitHub links work
- [ ] Contact form submits (test it!)
- [ ] Resume page loads
- [ ] Resume PDF downloads
- [ ] Site is responsive on mobile (resize browser)
- [ ] Dark/light mode works (if implemented)

---

## 📦 Create Submission Zip

### On Windows (PowerShell):
```powershell
# Navigate to parent directory
cd d:\00_Coding_Projects\Personal_Projects\digital_portfolio

# Create zip (excluding node_modules and .next)
Compress-Archive -Path digital_portfolio\* -DestinationPath digital_portfolio_submission.zip -Force -CompressionLevel Optimal
```

### Files to Include:
✅ Include:
- `src/` folder
- `content/` folder
- `public/` folder
- `package.json`
- `package-lock.json`
- `next.config.ts`
- `tsconfig.json`
- `tailwind.config.*`
- `postcss.config.*`
- `README.md`
- `SUBMISSION.md`
- `DEPLOYMENT.md`
- `.env.local` (optional, or create .env.example)

❌ Exclude:
- `node_modules/` (too large, can be reinstalled)
- `.next/` (build output, generated)
- `.git/` (optional, depends on requirement)

---

## 🎓 Submission

### What to Submit:
1. **Live Site URL**: Your Netlify URL
2. **Zipped Folder**: `digital_portfolio_submission.zip`

### Where to Submit:
[Add your course's submission portal here]

### Submission Text Template:
```
Digital Portfolio Submission - Option 2
Name: James Hendershott

Live Site: https://[your-site-name].netlify.app

This portfolio includes:
- 10 documented projects with full context
- Links to 7 GitHub repositories (3 public, 4 private with access requests)
- LinkedIn profile prominently displayed
- Detailed project descriptions explaining problems, solutions, and learnings
- Professional organization and responsive design

Attached: Complete source code as requested.

I'm available for office hours if you'd like to review any private repositories or discuss projects in detail.
```

---

## 🔧 Troubleshooting

### Build Fails on Netlify
**Error**: "Command failed with exit code 1"
- Check Node version is set to 20+
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

### GitHub Showcase Not Showing
- Verify `GITHUB_USERNAME` environment variable is set
- Check GitHub API rate limits (add `GITHUB_TOKEN` if needed)
- Wait 1 hour for cache to refresh (or clear cache and redeploy)

### Contact Form Not Working
- Ensure Contact page is prerendered (it is by default)
- Check Netlify Forms is enabled in site settings
- Test form after deployment (doesn't work in local dev)

### 404 on Project Pages
- Verify all `.mdx` files are in `content/projects/`
- Check frontmatter has required fields: `slug`, `title`, `date`, `summary`
- Rebuild and redeploy

### Environment Variables Not Working
- Remember to redeploy after adding/changing env vars
- Env vars are read at build time, not runtime (mostly)
- Clear cache: Deploys → "Clear cache and deploy site"

---

## 📧 Need Help?
If you encounter issues:
1. Check Netlify build logs
2. Test locally: `npm run build` and `npm run start`
3. Review error messages carefully
4. Contact instructor during office hours

---

## ✅ Final Checklist
- [ ] Site deployed to Netlify
- [ ] Custom domain name set (optional)
- [ ] All environment variables configured
- [ ] Site tested thoroughly
- [ ] Zip file created
- [ ] Submission text prepared
- [ ] Ready to submit!

**Good luck!** 🎉
