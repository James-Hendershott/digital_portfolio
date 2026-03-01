import { Container } from "../../components/Container";

export const metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <h1>Now</h1>
      <p>
        What I&apos;m currently focused on — updated February 2026.
      </p>
      <ul>
        <li>Applied to Georgia Tech OMSCS for Fall 2026</li>
        <li>Completing MERN feature parity on the Vendor Manager Suite (7 workflow forms remaining)</li>
        <li>Building out Where&apos;s My App — home inventory tracker with QR codes and rack maps</li>
        <li>Maintaining 30+ Docker containers on my Dell R730 homelab</li>
        <li>Expanding portfolio project case studies and documentation</li>
      </ul>
    </Container>
  );
}
