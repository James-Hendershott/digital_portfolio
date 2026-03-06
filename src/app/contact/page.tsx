"use client";

import { useState } from "react";
import { Container } from "../../components/Container";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

      {status === "sent" ? (
        <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-6 text-center">
          <p className="text-lg font-medium">Message sent!</p>
          <p className="mt-2 text-sm text-foreground/70">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form
          name="contact"
          onSubmit={handleSubmit}
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
            disabled={status === "sending"}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-yellow-500 px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please try emailing me directly.
            </p>
          )}
        </form>
      )}

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
