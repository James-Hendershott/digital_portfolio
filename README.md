## Digital Portfolio (Next.js 16 + TypeScript + Tailwind v4 + MDX)

This is a personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and MDX for project case studies. It includes a server‑generated resume PDF and a safe way to showcase proprietary projects without exposing private repos.

### Features

- MDX case studies under `content/projects/*.mdx`
- Pages: Home, Projects, Project detail, About, Contact (Netlify Forms), Resume, Now
- GitHub showcase on Home (set `GITHUB_USERNAME`)
- Resume PDF generated on demand via `/api/resume` (PDFKit)
- Private project access: use `access` frontmatter to render a "Request Access" button
- SEO: metadata, `sitemap.xml`, `robots.txt`
- Optional Cloudflare Web Analytics (set `CLOUDFLARE_ANALYTICS_TOKEN`)

### Getting started (local dev)

Requirements: Node.js 20+

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

### Content model (MDX frontmatter)

Place files in `content/projects/*.mdx` with frontmatter like:

- `title: string`
- `date: string` (YYYY-MM-DD)
- `summary: string`
- `tags: string[]`
- `repo?: string` (public GitHub URL)
- `live?: string` (live demo URL)
- `access?: string` (mailto: or request URL for proprietary work)

If `repo` is omitted and `access` is present, the detail page shows a "Request Access" button.

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

### Resume PDF (server route)

The Resume page links to `/api/resume`, which renders a PDF using PDFKit. The resume content is defined in `src/lib/resume.ts`. You can customize sections (summary, skills, experience, projects, education) there.

### Deployment (Netlify recommended)

1. Push this repo to GitHub.
2. In Netlify, New site from Git -> select repo.
3. Build: `npm run build`; set `NODE_VERSION=20` in environment.
4. Add environment variables from above.
5. Contact form works with Netlify Forms because the page is prerendered (`/contact`).

### Contribution workflow

- Use one branch per change (feature/chore/docs), descriptive commit messages.
- Open a PR to `main`; run build locally before pushing.
- After merging, delete the branch if desired.

### Notes for proprietary projects

For projects that cannot expose code publicly, add `access: "mailto:you@domain.com?subject=Project%20Access%20Request"` in the MDX frontmatter. The site will render a safe "Request Access" control instead of a repo link.

