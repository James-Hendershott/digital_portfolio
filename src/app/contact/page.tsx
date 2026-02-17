import { Container } from "../../components/Container";

export const dynamic = "force-static";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="max-w-2xl py-12">
      <h1 className="mb-4 text-3xl font-semibold">Contact</h1>
      <p className="mb-6 text-foreground/70">
        Interested in collaborating or have a question? Use the form below or
        email me at
        {" "}
        <a
          href="mailto:james_hendershott@outlook.com"
          className="underline underline-offset-2 hover:opacity-80"
        >
          james_hendershott@outlook.com
        </a>
        .
      </p>
      {/* Temporarily disable Netlify Forms to resolve deployment plugin error. */}
      <div className="rounded-md border border-foreground/15 bg-foreground/5 p-4 text-sm leading-6">
        Prefer email? Reach me directly at
        {" "}
        <a
          href="mailto:james_hendershott@outlook.com"
          className="font-medium underline underline-offset-2"
        >
          james_hendershott@outlook.com
        </a>
        .
        <br />
        I’m also happy to connect on LinkedIn on request.
      </div>
    </Container>
  );
}
