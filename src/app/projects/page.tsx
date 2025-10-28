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
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-lg border border-black/10 p-4 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <h2 className="text-lg font-medium">{p.title}</h2>
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
          </Link>
        ))}
      </div>
    </Container>
  );
}
