import Link from "next/link";
import { Container } from "../../components/Container";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <Container className="py-12">
      <h1 className="mb-4 text-3xl font-semibold">Resume</h1>
      <p className="text-foreground/70">
        Download a current PDF copy of my resume, generated on demand.
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="/api/resume"
          className="rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90"
          download
        >
          Download PDF
        </a>
        <Link
          href="/about"
          className="rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
        >
          View About page
        </Link>
      </div>
    </Container>
  );
}
