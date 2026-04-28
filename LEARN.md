# LEARN.md — The Engineer's Companion to `jameshendershott.org`

A teaching document for someone learning to think like a senior software
engineer, using this codebase as the running case study. Every chapter
references real decisions made while building the project — the wins,
the bugs, the things we almost did but talked ourselves out of.

> **Why this document exists.** Junior engineers often only see the
> finished code. The reasoning, the rejected alternatives, the bugs
> that shaped the design — those usually live only in the heads of
> the people who were there. This document tries to capture them.

> **Companion:** [`BUILD_LOG.md`](BUILD_LOG.md) is the chronological
> "what we did and when" — read both. They overlap a little; that's
> intentional.

---

## Table of contents

**Part 1 — The work that happens before any code**
1. Understanding what's actually being asked
2. Researching prior art
3. Architecture decisions and ADRs
4. Designing the data model
5. Building a backlog

**Part 2 — Writing the code**
6. Iteration: walking skeleton over perfect first try
7. Reading errors
8. Debugging
9. Refactoring without breaking things

**Part 3 — Shipping it**
10. Testing strategy
11. CI, type checking, linting
12. Containers, nginx, deployment
13. Observability

**Part 4 — The work that's actually about other humans**
14. Asking better questions of stakeholders
15. Reviewing code
16. Documenting for the right audience
17. Agile in practice

**Part 5 — Codebase tour**
18. Project content model — MDX as a schema
19. Resume as data, not pages
20. The honesty layer

**Appendices**
- A. Glossary
- B. ADR template
- C. Recommended reading

---

# Part 1 — The work that happens before any code

## 1. Understanding what's actually being asked

The hardest skill on this whole list, and the one most undervalued.
Two real examples from this codebase:

**Example 1 — "Add four new projects."** Five words. The work to
deliver them well took an hour of writing and an hour of careful
reading first. The reading caught a slug collision that would have
quietly broken the projects page. If we'd skipped straight to writing,
we would have shipped a duplicate.

The lesson: an instruction like "add X" is rarely just about X. It's
about how X fits with everything that's already there. Before you
write a single line, run `ls` (or its equivalent in your toolchain)
and *see* the existing state. If something looks like it could
collide, ask.

**Example 2 — "Update wherever education appears."** This is a
classic broad-stroke instruction. The job here was to enumerate every
place — `resume.ts` (data), `/resume` page (template), `/about` page
(prose), `/now` page (bullet), `public/resume.md` (static markdown),
`/api/resume` (PDF endpoint, which reads from the data file) — and
*verify* the list by grep before claiming "done."

```bash
# What we ran. The grep tool, not raw grep — same idea.
# pattern: "Georgia Tech|OMSCS|Applied to|applied to|applying to"
```

The grep step caught nothing missed, but the discipline matters more
than the result. "I think I got everything" is not a deliverable.
"`grep` returned five matches; here are five edits" is.

**The takeaway.** When the ask is a phrase, the actual work is making
the phrase concrete. Concrete = file paths, line numbers, a list you
can check off. Until you have that list, you don't have a plan; you
have a vibe.

## 2. Researching prior art

This portfolio's `property-comparison` project is a clean example of
both kinds of prior art:

- **External prior art:** Zillow exists. Spreadsheet templates exist.
  Why build another comparison tool? Because the existing tools handle
  *urban* listings, *one-mortgage* defaults, and *one-user* sessions —
  and the actual problem was rural listings, FHA-realistic monthly cost,
  and family voting. The case study lays this out so a reader can
  follow the reasoning without you having to defend it in chat.
- **Internal prior art:** the existing `property-comparison.mdx`. The
  case study had been written months earlier with different stats. The
  refresh wasn't a green-field write; it was a rewrite of an existing
  file, preserving the slug and thumbnail path so external links stayed
  intact. *Knowing* that prior art existed before writing the new file
  is the difference between an in-place rewrite and a duplicate.

Same pattern with `labelgen-pro`: the README explicitly cites
`SoCuul/Bambu-LabelGen` as the open-source predecessor, and the case
study explains the architectural reframing (flat coordinates,
diff-based URL, native SVG→PNG) that justifies a rewrite over a fork.

**Takeaway:** the question to answer in any "should I build this" is
*"what existing thing am I disagreeing with, and on what specific
point?"* If you can't answer that in one sentence, you haven't done the
research.

## 3. Architecture decisions and ADRs

We don't have a formal `docs/adr/` directory yet (Appendix B has the
template if we want to start one). The architectural decisions on this
project are currently captured in two places:

1. **The case-study MDX itself.** Every project's "What I Did vs.
   What AI Did" section names the architectural decisions the author
   would defend. That's an ADR in casual form: context (the project),
   decision (the architectural call), alternatives considered (the
   thing rewritten or replaced).
2. **`BUILD_LOG.md`.** The chronological narrative of *why* we made
   a decision when we made it. The April-2026 chapter, for example,
   explains why the property-comparison rewrite was an in-place edit
   rather than an additive new file.

If the project grows more decisions (e.g. switching off MDX, adopting
a CMS, replacing PDFKit), formal ADRs in `docs/adr/NNN-*.md` would
start to pay off. For now, BUILD_LOG + case-study honesty sections are
enough.

**The principle:** an architecture decision is anything that's
expensive to reverse. The tactical choice "use Tailwind classes vs.
inline styles" doesn't need an ADR. The structural choice "MDX vs. a
headless CMS" does.

## 4. Designing the data model

The data model on this site is small but instructive. Two key types:

**`ResumeData`** in `src/lib/resume.ts:1-40`. Notice what's there and
what isn't. Education is an array of `{ school, degree, start?, end?,
bullets? }`. There is no `gpa` field, no `specialization` field, no
`status` field. The renderer encodes those into the `degree` string
or the `bullets` array.

That's a *deliberate* design decision. The alternative would be to
add structured fields and have the renderer format them. We didn't,
because:

- The set of "things to say about an education entry" is open-ended
  (admission status, specialization, online vs. in-person, GPA scale,
  honors). Encoding all of them in the type makes the type bloated
  and the edits brittle.
- Using free-form `degree` and `bullets` strings means a content edit
  is a string edit. A reader of the file can predict what'll happen
  on screen. That readability is worth more than schema purity for a
  resume that gets edited by humans.

**`ProjectMeta`** in `src/lib/projects.ts:9-19`. Same shape: required
keys (`slug`, `title`, `date`, `summary`) plus optional keys
(`tags`, `repo`, `live`, `access`, `thumbnail`). The key insight: the
*file system* is the index. There's no `projects.json` listing all
projects. `getAllProjectsMeta()` reads the directory and builds the
list at build time.

```ts
// src/lib/projects.ts
const CONTENT_DIR = path.join(process.cwd(), "content", "projects");
// ...
return fs.readdirSync(CONTENT_DIR)
  .filter((f) => f.endsWith(".mdx"))
  .filter((f) => /* respect draft: true */)
  .map((f) => f.replace(/\.mdx$/, ""));
```

Adding a project = dropping a `.mdx` file. Removing one = `git rm` it.
There's no list to keep in sync.

**The takeaway:** small data models age better than big ones, and
"the file system *is* the data" is a perfectly fine database for
content sites with under a few hundred entries.

## 5. Building a backlog

For a personal site, the backlog *is* the list at the bottom of the
audit in any given session — the "what would I ship next" list. It
lives in your head and in chat history; it doesn't need a Jira board.

The discipline that matters: **distinguish "next sprint" from
"someday."** "Replace the GPA stat tile with OMSCS" is next sprint —
small, valuable, obvious. "Generate `public/resume.md` from
`resume.ts` at build time" is someday — valuable but not blocking.
Mixing them in your head means the someday item never ships.

---

# Part 2 — Writing the code

## 6. Iteration: walking skeleton over perfect first try

The site itself is a working example. The first commit shipped a
*walking skeleton* — Next.js + Tailwind + MDX + a placeholder hero —
and every subsequent commit improved one specific thing. Read
`git log --reverse --oneline` to see the progression: feature flags
got added, the resume PDF was a separate commit, the Request Access
button for private projects was its own change.

The temptation when starting a new feature is to design the whole
thing first. The discipline is to ship a thin slice that's end-to-end
working, *then* improve. For a project page that's:

1. MDX file with frontmatter.
2. Generic page template that reads frontmatter and renders.
3. Listing page that picks up the new file via `readdirSync`.

You can ship at step 3 even if the MDX content is one paragraph.
Improvements (honesty section, screenshots, tags) are additive after.

## 7. Reading errors

The most useful debugging skill, period. A real example from this
project: `next build` will fail with a TypeScript error if frontmatter
in an MDX file has a typed mismatch with `ProjectMeta`. The error
message points at the *file* and the *line*, but the *cause* is in the
frontmatter parser config in `src/lib/projects.ts`.

When you see an error:

1. Read it twice. Read the line numbers in the stack trace, not just
   the top message.
2. Don't assume the error is *where* the message points; the message
   points where the type-checker noticed the mismatch, which can be
   distant from where the wrong value was set.
3. Look for the most recent change. `git diff HEAD~1` is faster than
   binary-searching the codebase.

For Next.js specifically: the build error log includes phase markers
(`Compiled successfully`, `Collecting page data`, `Generating static
pages`). The phase tells you whether the failure is a TypeScript
issue, an MDX parse error, or a runtime error during static generation.

## 8. Debugging

The site runs locally with `npm run dev`. When something looks wrong:

1. **Check the network tab.** A missing thumbnail is silent in the
   console but obvious in the network tab as a 404 on the PNG.
2. **Check the build log.** `next build` is more strict than `next
   dev` — it'll catch issues that dev mode silently tolerates
   (notably, TypeScript errors marked `useUnknownInCatchVariables`).
3. **`/api/resume` debugging.** The PDF endpoint is the most fragile
   surface in the codebase because PDFKit has its own quirks. If the
   PDF renders blank or 500s, it's almost always a font registration
   issue. Helvetica is bundled with PDFKit and always works.

## 9. Refactoring without breaking things

The four-project refresh in April 2026 is a good example. We made one
risky decision (in-place rewrite of `property-comparison.mdx`) and
five safe ones (new files for the other three projects, new entry in
the education array, prose edits on three pages). The risky one got
flagged to the user *before* we touched it. The safe ones got batched.

**Pattern:** before you start, classify each edit:

- **Additive** — new file, new array entry, new prose paragraph. No
  prior content at risk. Cheap to review, cheap to revert.
- **In-place rewrite** — replaces existing content. Higher risk;
  flag and confirm before doing.
- **Restructure** — moves content between files, renames, splits.
  Highest risk; requires the most careful diff review.

The four-project refresh had three additives and one in-place
rewrite. We treated them differently in scope (the rewrite got an
explicit go-ahead from the user) and in review (the rewrite got a
side-by-side check against the prior version to make sure no
honesty-section content was lost).

---

# Part 3 — Shipping it

## 10. Testing strategy

This site doesn't have unit tests. That's a deliberate scope decision —
the site is content + a single dynamic endpoint (`/api/resume`), and
the build is the test. If the MDX is malformed, `next build` fails.
If the resume data has a type mismatch, `tsc` fails. If a thumbnail
path is wrong, the deployed page renders the gradient fallback.

**When this stops being enough:** if `/api/resume` grew real logic
(branching by query string, conditional sections, custom layouts),
unit tests for the PDF generation would start paying off. Until then,
"the build passes" is sufficient signal.

The principle: tests are not free. They have a maintenance cost. For a
content site with few moving parts, the build + a manual spot-check
on dev is correct.

## 11. CI, type checking, linting

The pre-shipping checklist for any change to this site:

```bash
npx tsc --noEmit       # TypeScript correctness
npm run lint           # ESLint (rules from eslint-config-next)
npm run build          # Full production build, including static gen
```

The `--webpack` flag on `next build` (from `package.json`) is here
because Netlify's plugin requires it; without it, Turbopack is the
default and Netlify's older builder hits a path that doesn't work.

**Common failure mode:** `tsc --noEmit` passes but `next build` fails
on a different error. That's not a contradiction — `next build`
applies stricter rules and runs MDX parsing too. Always run both.

## 12. Containers, nginx, deployment

Not applicable to this site directly (Netlify hosts it), but multiple
projects on the site (property-comparison, labelgen-pro, stash) deploy
to the user's Unraid homelab. The pattern they share:

- Multi-stage Dockerfile: build stage with full tooling, runtime
  stage with just the artifacts.
- Bind-mounted volumes for any persistent state.
- Nginx Proxy Manager for SSL + subdomain routing
  (e.g. `homes.shottsserver.com`).

The site itself uses Netlify because the `/api/resume` endpoint is the
only dynamic surface and Netlify's serverless functions handle it for
free. If the dynamic surface area grew, Vercel or self-hosted Next
would be the natural next steps.

## 13. Observability

Cloudflare Web Analytics (optional, env-gated) is wired up in
`src/app/layout.tsx`. Set `CLOUDFLARE_ANALYTICS_TOKEN` and the beacon
loads. There's no error tracking (Sentry, Bugsnag, etc.) because the
surface is small enough to monitor manually.

For a one-person portfolio, that's fine. For anything user-facing
with real traffic, you'd want at least:

- Analytics (page views, referrers).
- Error tracking (uncaught exceptions, failed API calls).
- Uptime monitoring (does the site respond at all).

The site has the first; the second and third are out of scope until
the site does anything stateful.

---

# Part 4 — The work that's actually about other humans

## 14. Asking better questions of stakeholders

The April-2026 refresh is the canonical example. The user's
instruction said:

> *"I have four new projects to add as case studies."*

Then listed Project C as `property-comparison` — the same name as an
existing case study. The instruction also said:

> *"Do NOT remove or rename any existing project — only add the four
> new ones."*

These instructions contradict. There were three ways to handle the
contradiction:

1. **Guess** and pick one interpretation. Risk: ship the wrong one.
2. **Refuse** and demand clarification before any work. Risk: stalls
   progress on the rest of the work, which was unambiguous.
3. **Flag, propose, ask.** Do the unambiguous parts (admission update,
   the three other projects) immediately; surface the conflict on the
   ambiguous part with a specific question and a recommended answer.

Option 3 is what we did. The question was specific:

> *"Want me to proceed [in-place rewrite]? Or skip Project C? Or use
> a different slug like `property-comparison-2026`?"*

User answered in one message: *"do a re-write where it is."* Total
delay: one round-trip. Total clarification cost: small. Total cost
of guessing: would have been a duplicate page or a slug collision
in production.

**The principle:** ambiguous instructions deserve a *specific*
question with a *recommended* answer. The recommended answer signals
that you've thought about it; the specificity makes it cheap to
respond.

## 15. Reviewing code

If someone else opens a PR to this site, the review checklist is:

- Does any frontmatter field deviate from the existing convention?
  (e.g. lowercase tags when the rest are Title Case)
- Does any new MDX skip the honesty section?
- Does the change introduce a new colour token or font?
  (CLAUDE.md says no.)
- Does the change introduce a new dependency?
  (CLAUDE.md says no without justification.)
- Does `next build` pass?

Those five questions catch most of what's worth catching on a content
site. For larger codebases the list grows, but the principle is the
same: **review against precedent, not against your taste.**

## 16. Documenting for the right audience

Three documents at the repo root, three audiences:

- `README.md` — a developer who wants to clone and run the site.
- `BUILD_LOG.md` — a learner reading top-to-bottom to understand how
  the site was built.
- `LEARN.md` — an engineer wanting to skim a topic ("how do I think
  about MDX content models?") without reading the whole history.

If they all read the same, you have one document, not three. The
structural difference: README is *imperative* ("clone, install, run").
BUILD_LOG is *narrative* ("the day we added X, here's what we did").
LEARN is *topical* ("here's how to think about X in general, with
examples from this codebase").

## 17. Agile in practice

The site doesn't run sprints. The user makes decisions, asks for
work, accepts diffs. That's "agile" in the loose sense — small
iterations, frequent feedback, no upfront design.

What makes that work *here* is the convention discipline. Without
"every project page has an honesty section," the four-project refresh
would have been four bespoke design decisions instead of four
applications of an existing pattern. Convention is the substitute for
process at small scales.

---

# Part 5 — Codebase tour

## 18. Project content model — MDX as a schema

Project case studies live in `content/projects/*.mdx`. The frontmatter
is the type contract:

```yaml
---
slug: my-project           # required; controls the URL
title: My Project          # required; displayed
date: 2026-04-25           # required; YYYY-MM-DD; sorts the list
summary: One-line pitch.   # required; shown on cards
tags: ["Vue", "Docker"]    # optional; Title Case convention
repo: https://github...    # optional; mutually exclusive with access
access: mailto:...         # optional; private repo "Request Access" CTA
live: https://...          # optional; "Live Demo" button
thumbnail: "/images/projects/<slug>.png"  # optional
draft: true                # optional; hides from listing
---
```

The renderer (`src/app/projects/[slug]/page.tsx`) and the listing
page (`src/app/projects/page.tsx`) both consume `getAllProjectsMeta()`
from `src/lib/projects.ts`. The function:

- Reads `content/projects/*.mdx`
- Filters out `draft: true`
- Parses each file's frontmatter via `gray-matter`
- Sorts by `date` descending
- Returns the metadata array

Drop a new MDX in, run the build, the page appears.

**Edge cases worth knowing:**

- A `slug` that conflicts with an existing file silently overwrites
  the route at build time. The order of `readdirSync` decides which
  wins. *Don't have two files with the same slug.*
- `draft: true` removes the file from listings but the URL still
  works if you guess the slug. Use it for staging new content, not
  for hiding sensitive content.
- The `access` mailto pattern needs URL-encoded subjects. The render
  trusts the value; if you put a literal space in there, the email
  client may misbehave.

## 19. Resume as data, not pages

`src/lib/resume.ts` is a single TypeScript constant of type
`ResumeData`. Three things consume it:

1. **`/resume` page** (`src/app/resume/page.tsx`) — renders headings
   and prose from the data.
2. **`/api/resume` PDF** (`src/app/api/resume/route.ts`) — uses
   PDFKit to render the same data into a downloadable PDF.
3. **`public/resume.md`** — currently a *static* mirror of the same
   data. This is the seam where source-of-truth drift could happen.

The PDF route's structure is worth studying. It's a pure function of
the data:

```ts
r.education.forEach((ed) => {
  doc.font("Helvetica-Bold").fontSize(10).text(ed.school);
  doc.font("Helvetica").fontSize(10).fillColor("#666").text(ed.degree);
  if (ed.bullets) bulletList(doc, ed.bullets);
});
```

Adding a new education entry to `resume.ts` requires *zero* changes
to this code. Adding a new education *field* (e.g. `gpaScale`) would
require a code change, which is correct — that's a schema change.

## 20. The honesty layer

The "What I Did vs. What AI Did" section on every case study is a
*design feature*, not a piece of code. It's how the site differentiates
itself from generic portfolios in 2026, when AI-assisted code is
universal.

The convention has three rules:

1. **My work** — name the architectural decisions, integration
   choices, and operations responsibilities.
2. **AI-assisted** — name the boilerplate, library idioms, and
   scaffolding without minimising it.
3. **Don't claim what isn't true.** If a project was 80% AI-scaffolded,
   say so. The credibility of *every* claim on the site depends on
   no claim being a lie.

The April-2026 chapter has a real example: the `stash` project leans
heavily on AI for mobile components and Three.js packing. The case
study says so explicitly. The defensible claim isn't "I hand-coded
this;" it's "I architected this and run it in production."

That distinction is the whole site's thesis.

---

# Appendix A: Glossary

| Term | Meaning |
|---|---|
| ADR | Architecture Decision Record. Markdown file documenting one decision, its context, alternatives, and consequences. |
| Frontmatter | The YAML block at the top of a markdown / MDX file, between two `---` lines. Parsed by `gray-matter` here. |
| MDX | Markdown with JSX. Lets us mix component-style elements (e.g. `{/* comments */}`) into otherwise plain markdown content. |
| Slug | The URL-safe identifier for a page (e.g. `labelgen-pro`). Derived from the MDX filename. |
| OMSCS | Online Master of Science in Computer Science (Georgia Tech). 100% asynchronous, accredited identically to the on-campus MSCS. |
| Walking skeleton | A thin end-to-end implementation that proves the architecture works. Improvements are additive after. |
| In-place rewrite | Replacing the contents of an existing file at the same path / same slug. Preserves URL; risks losing prior content if not careful. |

---

# Appendix B: ADR template

Copy into `docs/adr/NNN-title.md`:

```markdown
# ADR-NNN: [Decision title]

**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXX

## Context
What's the situation that requires a decision?

## Decision
What did we decide to do?

## Consequences
What gets better? What gets worse? What new questions arise?

## Alternatives considered
Bulleted list with one-line reasoning for each.
```

---

# Appendix C: Recommended reading

- *A Philosophy of Software Design* — John Ousterhout
- *The Pragmatic Programmer* — Hunt & Thomas
- *Refactoring* — Martin Fowler
- *Effective TypeScript* — Dan Vanderkam
- *Staff Engineer* — Will Larson
- *No Silver Bullet* — Fred Brooks (free essay online)
