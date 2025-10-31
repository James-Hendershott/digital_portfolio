import Link from "next/link";
import { Container } from "../../components/Container";
import { getAllProjectsMeta } from "../../lib/projects";

export const metadata = {
  title: "Projects",
  description: "Case studies and projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjectsMeta();
  return (
    <Container className="py-12">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-lg border border-black/10 p-4 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <h2 className="text-lg font-medium">
              <Link href={`/projects/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-foreground/70">{p.summary}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-foreground/60">
              {p.tags?.map((t) => (
                <span
                  key={t}
                  className="rounded bg-black/5 px-2 py-0.5 dark:bg-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              {p.repo ? (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs rounded-md border border-foreground/20 px-3 py-1 hover:bg-black/5 dark:hover:bg-white/10"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  View on GitHub
                </a>
              ) : null}
              {p.access ? (
                <a
                  href={p.access}
                  className="text-xs rounded-md border border-foreground/20 px-3 py-1 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Request Access
                </a>
              ) : null}
              {p.live ? (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs rounded-md bg-foreground px-3 py-1 text-background hover:opacity-90"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
