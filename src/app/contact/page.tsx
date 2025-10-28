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
          href="mailto:you@example.com"
          className="underline underline-offset-2 hover:opacity-80"
        >
          you@example.com
        </a>
        .
      </p>

      {/* Netlify Forms: Ensure this page is prerendered so Netlify can detect the form. */}
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <div>
          <label className="mb-1 block text-sm">Name</label>
          <input
            className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 outline-none focus:border-foreground/40"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Email</label>
          <input
            className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 outline-none focus:border-foreground/40"
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Message</label>
          <textarea
            className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 outline-none focus:border-foreground/40"
            name="message"
            rows={6}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90"
        >
          Send
        </button>
      </form>
    </Container>
  );
}
