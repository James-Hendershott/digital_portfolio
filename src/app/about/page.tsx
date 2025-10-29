import { Container } from "../../components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <h1>About</h1>
      <p>
        I'm James Hendershott, a 40-year-old software engineering student based in
        Eagle Mountain, Utah. I'm currently a vendor manager for a fleet maintenance
        company (Amerit), and I'm working toward a career shift into software development.
      </p>
      <p>
        I live with my wife Savanah (33) and our two kids—Theo (5) and Sophie (3).
        Outside of coding and work, I enjoy 3D printing & modeling, woodworking, and
        spending time outdoors doing bushcraft and survival activities.
      </p>
      <h2>Tech & Interests</h2>
      <ul>
        <li><strong>Languages:</strong> TypeScript, JavaScript, Python, C#, C++</li>
        <li><strong>Stacks:</strong> MERN (MongoDB, Express, React, Node), .NET</li>
        <li><strong>Homelab:</strong> Unraid server (Plex, *Arr suite via Trash Guides, Nginx reverse proxy, Docker)</li>
        <li><strong>3D Printing:</strong> Elegoo Saturn 4 Ultra (resin), Creality K1 Max, Bambu A1, Bambu H2D (FDM)</li>
        <li><strong>Other hobbies:</strong> Woodworking, miniature painting, bushcraft, survival skills, dirt biking, hiking, anything with my kids</li>
      </ul>
      <p>
        I love building things from the ground up—whether it's a home server, a web
        app, or a woodworking project—and I'm working to translate that hands-on,
        design-first mindset into a software engineering career.
      </p>
    </Container>
  );
}
