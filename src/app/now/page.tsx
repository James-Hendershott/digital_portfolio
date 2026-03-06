import { Container } from "../../components/Container";

export const metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <h1>Now</h1>
      <p>
        What I&apos;m currently focused on &mdash; updated March 2026.
      </p>
      <ul>
        <li>Looking for my first software engineering role</li>
        <li>Applied to Georgia Tech OMSCS</li>
        <li>Maintaining 44 Docker containers on my Dell R730 homelab</li>
        <li>Planning a Python/Flask rebuild of my Vendor Manager Dashboard without AI assistance</li>
        <li>Being honest about what I built vs. what AI built on every project page</li>
      </ul>
    </Container>
  );
}
