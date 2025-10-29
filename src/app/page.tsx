import Link from "next/link";
import { Container } from "../components/Container";
import { GitHubShowcase } from "../components/GitHubShowcase";

export default function Home() {
  return (
    <Container className="py-12 sm:py-16">
      <section className="flex flex-col gap-6">
        <p className="text-sm uppercase tracking-wider text-foreground/60">
          Hi, I’m James Hendershott
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          I build practical software and reliable homelab ops.
        </h1>
        <p className="max-w-2xl text-foreground/70">
          Software engineering student and vendor manager based in Eagle Mountain, Utah.
          I work across the MERN stack and .NET, and I run a growing Unraid homelab
          (Docker, Nginx, Plex, *Arr). I also love 3D printing, modeling, and woodworking.
        </p>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            Get in touch
          </Link>
        </div>
      </section>
  {/* GitHub showcase section */}
      <GitHubShowcase />
    </Container>
  );
}
