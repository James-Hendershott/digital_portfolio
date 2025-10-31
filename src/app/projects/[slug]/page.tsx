import { notFound } from "next/navigation";
import { Container } from "../../../components/Container";
import { getProjectSlugs, getProjectContent } from "../../../lib/projects";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const slugs = getProjectSlugs();
  if (!slugs.includes(params.slug)) return {};
  const { meta } = await getProjectContent(params.slug);
  return {
    title: meta.title,
    description: meta.summary,
    alternates: { canonical: `/projects/${meta.slug}` },
  };
}

export default async function ProjectPage({ params }: Params) {
  const slugs = getProjectSlugs();
  if (!slugs.includes(params.slug)) return notFound();
  const { meta, mdx } = await getProjectContent(params.slug);
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
            className="rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
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
