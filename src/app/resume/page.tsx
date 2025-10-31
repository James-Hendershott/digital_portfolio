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
        Download a PDF copy below, and see a concise summary of experience and education on this page.
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="/resume.pdf"
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

      <section className="prose prose-zinc mt-10 dark:prose-invert">
        <h2>Professional Summary</h2>
        <p>
          Operations and technology leader with 20+ years of experience managing teams,
          vendors, budgets, and cross‑functional initiatives. Pragmatic problem solver who builds
          simple tools to remove friction and improves outcomes through process design and automation.
        </p>

        <h2>Leadership & Management</h2>
        <ul>
          <li>Led cross‑functional teams delivering on-time, on-budget initiatives.</li>
          <li>Owned vendor relationships and SLAs; improved response and resolution times.</li>
          <li>Implemented lightweight tooling for repetitive workflows (communications, tracking).</li>
          <li>Drove process standardization, documentation, and measurable KPIs.</li>
        </ul>

        <h2>Selected Projects</h2>
        <ul>
          <li>
            Digital Portfolio — Next.js + TypeScript + Tailwind (this site). Source: {" "}
            <a href="https://github.com/James-Hendershott/digital_portfolio" target="_blank" rel="noreferrer">github.com/James-Hendershott/digital_portfolio</a>
          </li>
          <li>
            1980 Style Adventure Game — public JavaScript project. Source: {" "}
            <a href="https://github.com/James-Hendershott/1980_Style_Adventure-Game" target="_blank" rel="noreferrer">github.com/James-Hendershott/1980_Style_Adventure-Game</a>
          </li>
          <li>
            VSM Tracker — private application with sensitive data. {" "}
            <a href="mailto:james.hendershott@outlook.com?subject=VSM%20Tracker%20Code%20Access%20Request">Request access</a>
          </li>
          <li>
            TrackMate (Capstone) — private repo. {" "}
            <a href="mailto:james.hendershott@outlook.com?subject=TrackMate%20Code%20Access%20Request">Request access</a>
          </li>
          <li>
            BoomPortal — physical Raspberry Pi streaming setup (no public repo).
          </li>
        </ul>

        <h2>Education</h2>
        <ul>
          <li>Associate Degree — Field/Institution (update with details)</li>
          <li>Associate Degree — Field/Institution (update with details)</li>
        </ul>
      </section>
    </Container>
  );
}
