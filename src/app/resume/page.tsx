import Link from "next/link";
import { Container } from "../../components/Container";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <Container className="py-12">
      <h1 className="mb-4 text-3xl font-semibold">Resume</h1>
      <p className="text-foreground/70 mb-6">
        Download my resume in your preferred format or view a summary below.
      </p>

      <div className="mb-8 rounded-lg border border-foreground/10 bg-black/5 p-6 dark:bg-white/5">
        <h2 className="mb-4 text-lg font-semibold">Download Resume</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="/api/resume"
            download="James_Hendershott_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </a>
          <a
            href="/resume.md"
            download="James_Hendershott_Resume.md"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Markdown
          </a>
          <a
            href="/resume.md"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            View Markdown
          </a>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            About Me
          </Link>
        </div>
        <p className="mt-4 text-xs text-foreground/60">
          Note: DOCX format can be generated from the Markdown file using tools like Pandoc or online converters.
        </p>
      </div>

      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <h2>Education</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold mb-1">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-foreground/80">Weber State University &bull; December 2025</p>
            <p className="text-sm">GPA: 3.56 overall (3.87 in CS coursework) | Applied to Georgia Tech OMSCS</p>
            <p className="text-sm italic">Key courses: Data Structures &amp; Algorithms (A), Operating Systems, Server-Side Web Architecture (Django/Python, A), Software Engineering I &amp; II (A, A), Database Design &amp; SQL (A), Advanced Database Programming (A), Computer Architecture, Formal Languages &amp; Algorithms</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Associate of Applied Science in Computer Science</h3>
            <p className="text-sm text-foreground/80">Weber State University &bull; December 2023</p>
          </div>
        </div>

        <h2>Technical Skills</h2>
        <div className="grid gap-3 not-prose text-sm">
          <div><strong>Languages:</strong> Python, JavaScript, TypeScript, SQL, HTML/CSS, Bash, Java, C#, C++</div>
          <div><strong>Frameworks &amp; Tools:</strong> Django, Flask, React, Next.js, Node.js, Express, Tailwind CSS, Bootstrap</div>
          <div><strong>Databases:</strong> PostgreSQL, MongoDB, MariaDB, SQLite, Prisma ORM, database design and SQL querying</div>
          <div><strong>Infrastructure:</strong> Docker (44-container homelab), Nginx reverse proxy, Linux server administration, Git/GitHub, CI/CD concepts, DNS/VPN/SSL configuration</div>
          <div><strong>Concepts:</strong> OOP, data structures and algorithms, REST API design, MVC/MVT patterns, Agile/Scrum, unit testing, code reviews, AI-assisted development</div>
        </div>

        <h2>Home Server Infrastructure &mdash; Self-Built &amp; Self-Maintained (2+ Years)</h2>
        <ul className="text-sm space-y-1">
          <li>Built and maintain a 24/7 Linux server (Unraid) running 44 Docker containers across 4 isolated networks with 128 TB storage, GPU-accelerated processing, and enterprise-grade hardware (Dell PowerEdge R730, 128 GB ECC RAM).</li>
          <li>Configured Nginx reverse proxy managing 23 HTTPS subdomains with automated Let&apos;s Encrypt SSL, local DNS server (dnsmasq), and WireGuard/Tailscale VPN for secure remote access.</li>
          <li>Administer 5 database instances across MariaDB, PostgreSQL, and MongoDB; perform SQL queries, data cleanup, and cross-database audits.</li>
          <li>Write and maintain 20+ Bash/Python automation scripts on cron schedules for health monitoring, data pipelines, library management, and backup automation.</li>
          <li>Diagnose and resolve complex infrastructure issues: hairpin NAT, SSL certificate chain compatibility, ISP bridge mode, Docker networking, and GPU driver configuration.</li>
        </ul>

        <h2>Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">TrackMate &mdash; MERN Stack | Capstone Team Lead | CS 4760 (A)</h3>
            <ul className="text-sm space-y-1">
              <li>Led 4-person Agile team building an asset tracking application; personally wrote API endpoints and React components alongside one other core contributor.</li>
              <li>Designed Docker Compose environment with seed data to solve VPN-gated data access; managed code reviews and sprint coordination via GitHub.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Adventure Game &mdash; Python | CS 3620 Server-Side Web Architecture (A)</h3>
            <ul className="text-sm space-y-1">
              <li>Wrote a text adventure game engine from scratch: OOP scene graph, inventory system, Tkinter GUI, file-based outcomes logging, and riddle mechanics with progressive hints.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Community Hub &mdash; Django/PostgreSQL | CS 3620 (A)</h3>
            <ul className="text-sm space-y-1">
              <li>Built and deployed a Django web app for community event management with models, forms, views, admin panel, and Render deployment.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Vendor Manager Dashboard &mdash; HTML/JavaScript | 2024&ndash;Present</h3>
            <ul className="text-sm space-y-1">
              <li>Identified workflow inefficiencies at current job and designed a tool to centralize unit tracking, automate vendor communications, and generate reports; started with hand-coded HTML forms and progressively added features using AI-assisted development.</li>
            </ul>
          </div>
        </div>

        <h2>Professional Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Vendor Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Amerit Fleet Solutions &bull; Apr 2022 &ndash; Present</p>
            <ul className="text-sm space-y-1">
              <li>Track 40&ndash;100 fleet units simultaneously across multiple food distribution centers; manage full repair lifecycle from damage report through vendor negotiation, estimate approval, and return to service.</li>
              <li>Reduced active out-of-service units from 150+ to manageable levels through improved communication systems and tracking tools built during CS coursework.</li>
              <li>Coordinate across 6 distributed locations; influence fleet managers without direct authority; deliver weekly client reports.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Aaron&apos;s Auto Pro &bull; Sept 2020 &ndash; Apr 2022</p>
            <ul className="text-sm space-y-1">
              <li>Managed shop operations, technicians, scheduling, customer relations, and warranty resolution; improved scheduling to reduce overbooking.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Earlier Career | 2003&ndash;2019</h3>
            <ul className="text-sm space-y-1">
              <li><strong>Project Manager</strong> &mdash; MJK Custom Fabrication (2015&ndash;2019): Managed production of 60+ employees across 3 shifts; brokered multi-million dollar steel procurement with Nucor; oversaw projects for Exxon Mobil. Earned NACE Level 2 and Six Sigma Green Belt.</li>
              <li><strong>Multi-Channel Sales Manager</strong> &mdash; MattressFirm (2012&ndash;2014): Managed sales teams of 6&ndash;25 at state fairs and events; largest events: 9 booths, 200 people.</li>
              <li><strong>GM &amp; Training Manager</strong> &mdash; Sizzling Platter (2008&ndash;2012): Promoted from busboy to GM within one year. Managed 45 employees, full P&amp;L responsibility. Moved to corporate training team leading Little Caesar&apos;s store openings.</li>
              <li><strong>Air Traffic Controller</strong> &mdash; U.S. Navy (2003&ndash;2007)</li>
            </ul>
          </div>
        </div>
      </section>

      {null}
    </Container>
  );
}
