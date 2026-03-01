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
        Interested in collaborating or have a question? Fill out the form below
        or email me directly at{" "}
        <a
          href="mailto:james_hendershott@outlook.com"
          className="underline underline-offset-2 hover:opacity-80"
        >
          james_hendershott@outlook.com
        </a>
        .
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-foreground/15 bg-foreground/5 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-foreground/15 bg-foreground/5 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-foreground/15 bg-foreground/5 px-4 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/25"
            placeholder="What would you like to discuss?"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-gradient-to-r from-purple-600 to-yellow-500 px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 rounded-md border border-foreground/15 bg-foreground/5 p-4 text-sm leading-6">
        Prefer email? Reach me directly at{" "}
        <a
          href="mailto:james_hendershott@outlook.com"
          className="font-medium underline underline-offset-2"
        >
          james_hendershott@outlook.com
        </a>
        .
        <br />
        I&apos;m also happy to connect on LinkedIn on request.
      </div>
    </Container>
  );
}
