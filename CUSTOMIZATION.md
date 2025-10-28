# Digital Portfolio - Customization Checklist

Before deploying, personalize these files:

## Critical Updates

### 1. Replace "Your Name" globally
- `src/app/layout.tsx` - metadata titles
- `src/components/Header.tsx` - site logo/name
- `src/components/Footer.tsx` - copyright
- `src/app/page.tsx` - hero heading
- `public/og.svg` - social preview card

### 2. Update URLs and Links
- `src/components/Footer.tsx`:
  - GitHub URL: `https://github.com/your-github`
  - LinkedIn URL: `https://www.linkedin.com/in/your-linkedin`
- `src/app/contact/page.tsx`:
  - Email address: `you@example.com`

### 3. Environment Variables
Create `.env.local` in the project root:
```
GITHUB_USERNAME=your-actual-github-username
GITHUB_TOKEN=ghp_xxxxx  # optional, for higher API rate limits
SITE_URL=https://portfolio.yourdomain.com
CLOUDFLARE_ANALYTICS_TOKEN=xxxxx  # optional
```

### 4. Resume
- Replace `public/resume.pdf` with your actual PDF resume

### 5. Content
- Edit `src/app/about/page.tsx` with your real bio
- Update project MDX files in `content/projects/`:
  - `vendor-manager.mdx`
  - `trackmate.mdx`
  - `boomportal.mdx`
- Update repo URLs and live demo links in frontmatter

### 6. Optional
- `src/app/now/page.tsx` - update what you're currently working on
- `public/og.svg` - create a custom 1200×630 social preview image

## Quick Find & Replace
Run these in VS Code to update placeholders:
1. Find: `Your Name` → Replace with your actual name
2. Find: `your-github` → Replace with your GitHub username
3. Find: `your-linkedin` → Replace with your LinkedIn username
4. Find: `you@example.com` → Replace with your email
5. Find: `portfolio.example.com` → Replace with your domain

## Deployment
1. Push to GitHub
2. Connect repository to Netlify
3. Set environment variables in Netlify dashboard
4. Deploy and test contact form
5. Map custom domain through Netlify or reverse proxy
