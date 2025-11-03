import { Container } from "../../components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="prose prose-zinc max-w-3xl py-12 dark:prose-invert">
      <h1>About Me</h1>
      <p>
        I'm James Hendershott, a 40-year-old software engineering student based in
        Eagle Mountain, Utah. I'm currently a vendor manager for a fleet maintenance
        company (Amerit), and I'm working toward a career shift into full-time software development.
      </p>
      <p>
        I live with my wife Savanah (33) and our two kids—Theo (5) and Sophie (3).
        When I'm not coding or working, you'll find me pursuing my passions outdoors
        and tinkering with technology.
      </p>

      <h2>Tech Stack & Skills</h2>
      <div className="grid gap-2 not-prose text-sm">
        <div><strong>Languages:</strong> TypeScript, JavaScript, Python, C#, C++, Java, SQL</div>
        <div><strong>Frameworks:</strong> Next.js 16 (App Router), React 19, Django, .NET</div>
        <div><strong>Stacks:</strong> MERN (MongoDB, Express, React, Node), Python/Django/PostgreSQL</div>
        <div><strong>DevOps:</strong> Docker & Docker Compose, Nginx Proxy Manager, GitHub Actions, CI/CD</div>
        <div><strong>Homelab:</strong> Unraid server running Plex, *Arr suite (via Trash Guides), reverse proxy, VPN, backup automation</div>
        <div><strong>Tools:</strong> Git/GitHub/GitLab, VS Code, Neovim, Linux/Arch, Postman, Prisma, Auth.js</div>
      </div>

      <h2>What I'm Building (November 2025)</h2>
      <ul>
        <li><strong>Where's My App:</strong> Full-stack home inventory tracker with QR codes, rack maps, and PWA support</li>
        <li><strong>Retro Adventure Game:</strong> Django-powered text adventure with database-backed state</li>
        <li><strong>TrackMate:</strong> Capstone MERN asset tracking system with Docker dev environment</li>
        <li><strong>VSM Tracker:</strong> Internal fleet management tool replacing Smartsheet workflows</li>
        <li><strong>Off-Grid Home Assistant:</strong> Building a self-contained smart home system for my new camper</li>
      </ul>

      <h2>Hardware & Maker Projects</h2>
      <ul>
        <li><strong>3D Printing:</strong> Elegoo Saturn 4 Ultra (resin), Creality K1 Max, Bambu A1, Bambu H2D (FDM) — printing functional parts, miniatures, and prototypes</li>
        <li><strong>Electronics:</strong> Raspberry Pi projects, Cyberdeck builds, breadboard circuits, Arduino experiments</li>
        <li><strong>Homelab:</strong> Unraid NAS with 12+ Docker containers, network automation, and remote access</li>
        <li><strong>Miniature Painting:</strong> Warhammer 40K, D&D minis — combining art with gaming</li>
      </ul>

      <h2>Outdoor Adventures & Hobbies</h2>
      <ul>
        <li><strong>Motocross & ATVs:</strong> Trail riding and off-road exploration</li>
        <li><strong>Bushcraft & Survival:</strong> Primitive skills, fire-starting, shelter building, wilderness preparedness</li>
        <li><strong>Backpacking & Hiking:</strong> Exploring Utah's backcountry with the family</li>
        <li><strong>Camping & Fishing:</strong> Weekend trips and teaching the kids outdoor skills</li>
        <li><strong>Woodworking:</strong> Building furniture, shop projects, and functional pieces</li>
        <li><strong>Family Time:</strong> Anything with Theo and Sophie — building, exploring, creating</li>
      </ul>

      <h2>Background</h2>
      <p>
        I served as an Air Traffic Controller in the U.S. Navy (2003–2007), where I developed
        discipline, attention to detail, and the ability to perform under pressure. After my
        service, I worked in management roles across automotive, fabrication, and fleet industries
        before discovering my passion for software development.
      </p>
      <p>
        I love building things from the ground up—whether it's a home server, a web app,
        an electronics project, or a woodworking piece. I'm translating that hands-on,
        maker mindset into a software engineering career, combining technical skills with
        real-world problem-solving.
      </p>
    </Container>
  );
}
