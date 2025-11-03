import Link from "next/link";
import { Container } from "../../components/Container";
import { getAllProjectsMeta } from "../../lib/projects";

export const metadata = {
  title: "Projects",
  description: "Case studies and projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjectsMeta();
  
  // Featured projects (based on your current focus)
  const featuredSlugs = ["trackmate", "wheres-my-app", "retro-adventure-game"];
  const featured = projects.filter((p) => featuredSlugs.includes(p.slug));
  const allProjects = projects;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-20 w-40 h-40 border-2 border-purple-400 dark:border-purple-500 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-yellow-500 dark:border-yellow-400 rotate-45 animate-float-slow"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-yellow-500 dark:from-purple-400 dark:to-yellow-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A collection of full-stack applications, tools, and experiments. From MERN stacks to Django backends, 
              these projects showcase problem-solving and hands-on development.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="py-12 bg-black/5 dark:bg-white/5">
          <Container>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 dark:from-purple-400 dark:to-yellow-400"></span>
              Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group relative rounded-xl border-2 border-purple-500/20 hover:border-purple-500/40 p-6 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  {/* Project thumbnail placeholder */}
                  <div className="aspect-video mb-4 rounded-lg bg-gradient-to-br from-purple-600/20 to-yellow-500/20 dark:from-purple-400/20 dark:to-yellow-400/20 flex items-center justify-center border border-foreground/10">
                    <span className="text-foreground/40 text-xs font-medium">Project Screenshot</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{p.summary}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags?.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Status badges */}
                  <div className="flex gap-2 text-xs">
                    {p.access && (
                      <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border border-yellow-500/20">
                        Private
                      </span>
                    )}
                    {p.live && (
                      <span className="px-2 py-1 rounded bg-green-500/10 text-green-700 dark:text-green-300 border border-green-500/20">
                        Live
                      </span>
                    )}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-purple-600 dark:from-yellow-400 dark:to-purple-400"></span>
            All Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((p) => (
              <div
                key={p.slug}
                className="group relative rounded-xl border-2 border-foreground/10 hover:border-yellow-500/40 p-6 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Project thumbnail placeholder */}
                <div className="aspect-video mb-4 rounded-lg bg-gradient-to-br from-yellow-600/20 to-purple-500/20 dark:from-yellow-400/20 dark:to-purple-400/20 flex items-center justify-center border border-foreground/10">
                  <span className="text-foreground/40 text-xs font-medium">Screenshot</span>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  <Link 
                    href={`/projects/${p.slug}`} 
                    className="group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors"
                  >
                    {p.title}
                  </Link>
                </h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{p.summary}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border border-yellow-500/20 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags && p.tags.length > 3 && (
                    <span className="text-xs px-2.5 py-1 text-foreground/60">
                      +{p.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-md border border-foreground/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {p.access && (
                    <a
                      href={p.access}
                      className="text-xs px-3 py-1.5 rounded-md border border-foreground/20 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      Request Access
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs px-3 py-1.5 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
