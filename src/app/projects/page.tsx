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
              {p.access ? (
                <span
                  className="rounded border border-foreground/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-foreground/70"
                  title="This project repository is private; request access to view."
                >
                  Access required
                </span>
              ) : null}
            </div>
            <div className="mt-3 flex gap-2">
              {p.repo ? (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs inline-flex items-center gap-1 rounded-md border border-foreground/20 px-3 py-1 hover:bg-black/5 dark:hover:bg-white/10"
                  aria-label={`View ${p.title} on GitHub`}
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
