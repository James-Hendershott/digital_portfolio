## Digital Portfolio (Next.js + TypeScript + Tailwind + MDX)

This is a personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS v4, and MDX content for project case studies.

### Features

- MDX case studies under `content/projects/*.mdx`
- Pages: Home, Projects, Project detail, About, Contact (Netlify Forms), Resume, Now
- GitHub repo showcase on the Home page (set `GITHUB_USERNAME`)
- SEO: metadata, `sitemap.xml`, `robots.txt`
- Optional Cloudflare Web Analytics (set `CLOUDFLARE_ANALYTICS_TOKEN`)

### Local development

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

### Content

- Edit or add MDX files in `content/projects`. Frontmatter fields:
	- `title`, `date`, `summary`, `tags` (string[]), optional `repo`, `live`.

### Environment variables

Create a `.env.local` with any of the following:

```
GITHUB_USERNAME=your-github
# Optional for higher rate limits
GITHUB_TOKEN=ghp_...
SITE_URL=https://portfolio.yourdomain.com
# Optional Cloudflare Analytics
CLOUDFLARE_ANALYTICS_TOKEN=...
```

### Netlify deployment (fastest)

1. Push this repo to GitHub.
2. In Netlify, "New site from Git" -> select repo.
3. Build command: `npm run build`; set `NODE_VERSION` to 20+.
4. Add environment variables above in Netlify settings.
5. For the contact form, ensure the page is prerendered; the markup in `/contact` is Netlify‑Forms compatible.
6. Map your custom domain (e.g., via Nginx reverse proxy to Netlify) as needed.

### Unraid + Nginx (ops path)

- Run `npm run build` and export the `.next` output behind an Nginx container serving static files, or build a small Nginx image that copies the `out/` folder if you choose static export. Configure your NPM (Nginx Proxy Manager) to point TLS to this service.

### Assignment checklist

- Links to multiple active GitHub repos: Home page auto‑lists recent repos once `GITHUB_USERNAME` is set.
- LinkedIn link: in the footer, update to your profile URL.
- Published: deploy to Netlify (or GitHub Pages via static export if desired).

