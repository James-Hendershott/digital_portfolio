import { Container } from "../../components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <h1>About</h1>
      <p>
        I’m a CS student and former Amerit Vendor Service Manager transitioning
        into software engineering. I focus on TypeScript/React for the frontend
        and Node/Express for the backend, and I run a home lab on Unraid where I
        tinker with Docker, Nginx reverse proxies, and self‑hosted services.
      </p>
      <h2>Tools & Interests</h2>
      <ul>
        <li>Languages: TypeScript, JavaScript, Python</li>
        <li>Frameworks: Next.js, React, Express</li>
        <li>Infra: Docker, Nginx, Unraid</li>
      </ul>
    </Container>
  );
}
