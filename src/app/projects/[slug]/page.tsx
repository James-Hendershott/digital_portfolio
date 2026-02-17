import { notFound } from "next/navigation";
import { Container } from "../../../components/Container";
import { getProjectSlugs, getProjectContent } from "../../../lib/projects";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const slugs = getProjectSlugs();
  if (!slugs.includes(slug)) return {};
  const { meta } = await getProjectContent(slug);
  return {
    title: meta.title,
    description: meta.summary,
    alternates: { canonical: `/projects/${meta.slug}` },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const slugs = getProjectSlugs();
  if (!slugs.includes(slug)) return notFound();
  const { meta, mdx } = await getProjectContent(slug);
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <p className="mb-2 text-sm text-foreground/60">Case study</p>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">{meta.title}</h1>
      <p className="mb-6 text-foreground/70">{meta.summary}</p>
      <div className="mb-6 flex flex-wrap gap-2 text-xs text-foreground/60">
        {meta.tags?.map((t) => (
          <span key={t} className="rounded bg-black/5 px-2 py-0.5 dark:bg-white/10">
            {t}
          </span>
        ))}
      </div>
      <article className="mt-4 space-y-4 [&_*]:leading-relaxed">
        {mdx}
      </article>
      <div className="mt-8 flex gap-3">
        {meta.repo ? (
          <a
            href={meta.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="h-4 w-4"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            View Code
          </a>
        ) : null}
        {meta.access ? (
          <a
            href={meta.access}
            className="rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            Request Access
          </a>
        ) : null}
        {meta.live ? (
          <a
            href={meta.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </Container>
  );
}
