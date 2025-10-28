import { Container } from "../../components/Container";

export const metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <h1>Now</h1>
      <p>
        What I’m currently learning/working on. Update this page periodically
        to show currency.
      </p>
      <ul>
        <li>Improving my Next.js + MDX content pipeline</li>
        <li>Hardening Unraid reverse proxy and TLS automation</li>
        <li>Small Python automation for Readarr</li>
      </ul>
    </Container>
  );
}
