import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 py-10 text-sm dark:border-white/10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-foreground/60">© {new Date().getFullYear()} Your Name</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/your-github"
            className="text-foreground/70 hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/your-linkedin"
            className="text-foreground/70 hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </Container>
    </footer>
  );
}
