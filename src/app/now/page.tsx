import { Container } from "../../components/Container";

export const metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <h1>Now</h1>
      <p>
        What I&apos;m currently focused on &mdash; updated April 2026.
      </p>
      <ul>
        <li>Admitted to Georgia Tech&apos;s OMSCS program (Machine Learning specialization, Fall 2026 start)</li>
        <li>Looking for my first software engineering role</li>
        <li>Running Stash (self-hosted inventory + move app) and Property Comparison for our cross-country move</li>
        <li>Maintaining 44 Docker containers on my Dell R730 homelab</li>
        <li>Being honest about what I built vs. what AI built on every project page</li>
      </ul>
    </Container>
  );
}
