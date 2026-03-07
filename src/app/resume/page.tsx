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
            <p className="text-sm italic">Key courses: Data Structures &amp; Algorithms (A), Server-Side Web Architecture &mdash; Django/Python (A), Software Engineering I &amp; II (A, A), Database Design &amp; SQL (A), Advanced Database Programming (A), Computer Architecture (A), Formal Languages &amp; Algorithms, Operating Systems</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Associate of Applied Science in Computer Science</h3>
            <p className="text-sm text-foreground/80">Weber State University &bull; December 2023</p>
          </div>
        </div>

        <h2>Technical Skills</h2>
        <div className="grid gap-3 not-prose text-sm">
          <div><strong>Languages:</strong> Python, JavaScript, TypeScript, SQL, HTML/CSS, Bash, Java, C#, C++</div>
          <div><strong>Frameworks &amp; Tools:</strong> Django, Flask, React, Next.js, Node.js, Express, ASP.NET Core, Tailwind CSS, Bootstrap</div>
          <div><strong>Databases:</strong> MySQL (stored procedures), PostgreSQL, MongoDB, MariaDB, SQLite, Prisma ORM, schema design</div>
          <div><strong>Infrastructure:</strong> Docker (44-container homelab), Nginx reverse proxy, Linux server administration, Git/GitHub, CI/CD concepts, DNS/VPN/SSL</div>
          <div><strong>Concepts:</strong> OOP, data structures and algorithms, REST API design, MVC/MVT patterns, Agile/Scrum, unit testing, code reviews, AI-assisted development</div>
        </div>

        <h2>Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Banking System &mdash; Node.js/Express/MySQL | 119 commits | Advanced Database Programming (A)</h3>
            <ul className="text-sm space-y-1">
              <li>Built a full-stack banking application with MySQL stored procedures for all data operations, JWT + session authentication, and role-based access control (admin, employee, customer).</li>
              <li>Implemented deposits, withdrawals, and transfers with overdraft protection, transaction history, and employee dashboard. Refactored password hashing from client-side to server-side mid-project.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">VSM-Tracker &mdash; MongoDB/Express/React/Node.js | 87 commits | 2025</h3>
            <ul className="text-sm space-y-1">
              <li>Built a vendor management app to solve real workflow problems at my job. JWT auth with role-based access, Kanban dashboard, CSV import from Smartsheet, email integration, analytics with charts. Deployed with Docker on my home server.</li>
              <li>Wrote most of the code myself with AI assistance on syntax and debugging. Used it as the foundation for a larger tool I now use daily at work.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">TrackMate &mdash; MERN Stack | Capstone Team Lead | CS 4760 (A)</h3>
            <ul className="text-sm space-y-1">
              <li>Led 4-person Agile team; personally wrote API endpoints, React components, QR code generation, and professor card features. Set up Docker Compose dev environment with seed data. Managed code reviews via GitHub.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Adventure Game &mdash; Python | CS 3620 Server-Side Web Architecture (A)</h3>
            <ul className="text-sm space-y-1">
              <li>Wrote a text adventure game engine from scratch: OOP scene graph, inventory system, Tkinter GUI, file-based logging, riddle mechanics with progressive hints. My code &mdash; used AI for research, not code generation.</li>
            </ul>
          </div>
        </div>

        <h2>Home Server &mdash; Self-Built &amp; Self-Maintained (2+ Years)</h2>
        <ul className="text-sm space-y-1">
          <li>Run a 24/7 Linux server with 44 Docker containers across 4 networks, 128 TB storage, 5 database instances (PostgreSQL, MariaDB, MongoDB), Nginx reverse proxy with SSL for 23 subdomains, and 20+ Bash/Python automation scripts on cron schedules.</li>
          <li>Troubleshoot real infrastructure problems: hairpin NAT, SSL certificate chain compatibility, Docker networking, GPU drivers, DNS configuration. All self-taught through Google, YouTube, and documentation.</li>
        </ul>

        <h2>Professional Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Vendor Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Amerit Fleet Solutions &bull; Apr 2022 &ndash; Present</p>
            <ul className="text-sm space-y-1">
              <li>Track 40&ndash;100 fleet units simultaneously across multiple food distribution centers. Handle full repair lifecycle: vendor negotiation, estimates, transportation, reporting.</li>
              <li>Reduced active out-of-service units from 150+ by building my own tracking tools &mdash; started with hand-coded HTML forms, grew into a daily-use dashboard with Smartsheet API integration and automated reporting.</li>
              <li>Work remotely across 6 distributed locations. Coordinate with fleet managers, deliver weekly client reports, solve problems independently.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Aaron&apos;s Auto Pro &bull; Sept 2020 &ndash; Apr 2022</p>
            <ul className="text-sm space-y-1">
              <li>Ran shop operations, managed technicians, handled customer relations and scheduling. Left to finish CS degree remotely.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Earlier Career | 2003&ndash;2019</h3>
            <ul className="text-sm space-y-1">
              <li><strong>Project Manager</strong> &mdash; MJK Custom Fabrication (2015&ndash;2019): Managed 60+ employees across 3 shifts. Multi-million dollar steel procurement with Nucor. Projects for Exxon Mobil.</li>
              <li><strong>Sales Manager</strong> &mdash; MattressFirm (2012&ndash;2014). <strong>GM &amp; Training Manager</strong> &mdash; Sizzling Platter (2008&ndash;2012): Busboy to GM in under a year.</li>
              <li><strong>Air Traffic Controller</strong> &mdash; U.S. Navy (2003&ndash;2007)</li>
            </ul>
          </div>
        </div>
      </section>

      {null}
    </Container>
  );
}
