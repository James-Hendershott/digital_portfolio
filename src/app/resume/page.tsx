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
        <h2>Professional Summary</h2>
        <p>
          Hands-on software engineering student transitioning from vendor management into full-time engineering. Builds pragmatic web applications with TypeScript, React/Next.js (App Router), and Node/Express, and ships to containerized environments. Comfortable on the command line with Linux (including Arch Linux) and enjoys running a homelab. Experienced leading teams, designing APIs, and maintaining automation. Looking to leverage technical and leadership skills to contribute to innovative software engineering roles.
        </p>

        <h2>Technical Skills</h2>
        <div className="grid gap-3 not-prose text-sm">
          <div><strong>Languages:</strong> TypeScript, JavaScript, Python, Java, C#, C++, SQL</div>
          <div><strong>Frontend:</strong> React, Next.js (App Router), Tailwind CSS, MDX, Bootstrap, responsive design</div>
          <div><strong>Backend:</strong> Node.js, Express, MongoDB (Mongoose), PostgreSQL/MySQL, .NET basics, Django/Flask</div>
          <div><strong>DevOps:</strong> Docker & Docker Compose, Nginx Proxy Manager, Netlify, Cloudflare Analytics, GitHub Actions, Jenkins, Kubernetes (basics)</div>
          <div><strong>Tools:</strong> Git & GitHub, GitLab, ESLint/Prettier, Postman/Insomnia, Figma (basics), Linux/Arch Linux, Bash scripting, NEOVIM, VS Code</div>
          <div><strong>Concepts:</strong> RESTful API design, JWT authentication, role-based access, CI/CD pipelines, unit & integration testing, Agile methodology</div>
        </div>

        <h2>Education</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold mb-1">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-foreground/80">Weber State University, Ogden, UT • Expected Aug 2026</p>
            <p className="text-sm">Minor: User Experience Design • GPA: 3.44</p>
            <p className="text-sm italic">Relevant Coursework: Advanced Database Programming, Software Engineering, Data Structures, Scripting Languages, Object-Oriented Windows Applications</p>
            <p className="text-sm italic">Honors: Active member of the National Society of Leadership and Success</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Associate of Applied Science in Computer Science</h3>
            <p className="text-sm text-foreground/80">Weber State University • Dec 2023 • GPA: 3.75</p>
            <p className="text-sm italic">Course Highlights: Programming I & II, Network Fundamentals, Database Design & SQL, Data Structures</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Certificate of Proficiency in Programming Essentials</h3>
            <p className="text-sm text-foreground/80">Weber State University • Aug 2023 • GPA: 3.75</p>
            <p className="text-sm italic">Focus on programming languages, database design, software engineering principles and network fundamentals</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Associate of Science in General Studies</h3>
            <p className="text-sm text-foreground/80">Weber State University • Aug 2019 • GPA: 3.05</p>
          </div>
        </div>

        <h2>Projects & Software Development Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">TrackMate (Capstone MERN) — Team Lead</h3>
            <p className="text-sm text-foreground/70 mb-2">2025</p>
            <ul className="text-sm space-y-1">
              <li>Led a team to build TrackMate, a MERN-based asset-tracking dashboard with role-based views and audit trails.</li>
              <li>Designed API endpoints and React component architecture; built a local development environment using Docker Compose to run MongoDB, Node, and React containers.</li>
              <li>Developed seed scripts and JSON fixtures to simulate VPN-gated data for offline development; managed .env configuration for dev vs production.</li>
              <li>Outcome: unblocked development without VPN and created a repeatable, self-contained environment; emphasized that early architecture and tooling decisions pay dividends for teams.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">VSM Tracker (Fleet Management MERN) — Full Stack</h3>
            <p className="text-sm text-foreground/70 mb-2">Personal project • 2024</p>
            <ul className="text-sm space-y-1">
              <li>Replaced a cumbersome Smartsheet workflow with a full-stack MERN application that tracks out-of-service vehicles for a nationwide fleet.</li>
              <li>Implemented a card-based dashboard (Kanban) with visual status indicators, overdue badges, and quick-action buttons to update unit statuses.</li>
              <li>Built a Node.js/Express API with MongoDB and JWT-based authentication supporting admin and user roles; added routes for units, vendors, locations, notes, file uploads, and quick actions.</li>
              <li>Integrated email notifications; added file attachment capability and CSV/Excel import scripts to backfill data from Smartsheet exports.</li>
              <li>Deployed local and cloud environments with Docker Compose and documented Unraid MongoDB setup.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Hendershott Vendor Manager — Single-Page Utility</h3>
            <p className="text-sm text-foreground/70 mb-2">2023</p>
            <ul className="text-sm space-y-1">
              <li>Created a lightweight HTML/JavaScript tool that generates pre-filled mailto deep links and message templates for routine vendor emails.</li>
              <li>Reduced drafting time by ~50% and improved accuracy and speed of repetitive communications across teams.</li>
              <li>Persisted user preferences via local storage and implemented a clean, responsive UI.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">BoomPortal (Pi 5 + Sunshine/Moonlight) — Homelab Project</h3>
            <p className="text-sm text-foreground/70 mb-2">2023</p>
            <ul className="text-sm space-y-1">
              <li>Configured a Raspberry Pi 5 as a low-latency game-streaming server using Sunshine and Moonlight with controller mapping and Nginx Proxy Manager.</li>
              <li>Deployed services in Docker containers, set up reverse proxy with TLS certificates, and measured network performance (~12–18ms wired latency, ~25–35ms over Wi‑Fi 6).</li>
              <li>Documented configuration steps and automated updates for personal homelab operations.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Portfolio & Community Hub — Next.js + MDX</h3>
            <p className="text-sm text-foreground/70 mb-2">2023–Present</p>
            <ul className="text-sm space-y-1">
              <li>Developed a content‑driven portfolio and community hub using Next.js, MDX, React 19, TypeScript, Tailwind CSS v4, and App Router.</li>
              <li>Implemented case studies, blog posts, GitHub showcases, sitemap/robots, and basic analytics integration.</li>
              <li>Deployed via Netlify and Nginx with TLS; integrated automation via GitHub Actions.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">E‑Commerce Microservices (Java) — Personal Project</h3>
            <p className="text-sm text-foreground/70 mb-2">2023</p>
            <ul className="text-sm space-y-1">
              <li>Built a Spring Boot microservice to manage product inventory and order processing for a mock e‑commerce platform.</li>
              <li>Exposed REST APIs and used MySQL for persistent storage; configured NGINX as a reverse proxy.</li>
              <li>Built a Jenkins pipeline to automate testing and deployment to Kubernetes; collaborated via GitLab.</li>
            </ul>
          </div>
        </div>

        <h2>Professional Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Vendor Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Amerit Fleet Solutions • Apr 2022 – Present</p>
            <ul className="text-sm space-y-1">
              <li>Oversee fleet management operations across multiple locations, leading status meetings and analysing trend data for proactive issue resolution and cost‑reduction strategies.</li>
              <li>Build strong relationships with site leadership and vendors, ensuring high availability of services and rapid response to operational issues.</li>
              <li>Leverage programming skills to develop internal tools (including VSM Tracker) for maintenance tracking and data dashboards, improving decision‑making efficiency.</li>
              <li>Use Git and collaborative tools to manage codebases and train colleagues on version‑control best practices.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Aaron&apos;s Auto Pro • Sept 2020 – Apr 2022</p>
            <ul className="text-sm space-y-1">
              <li>Managed daily operations for an automotive repair facility, ensuring customer satisfaction and overseeing scheduling and training.</li>
              <li>Analysed repair data to identify patterns and implemented process improvements that reduced service turnaround time by 15%.</li>
              <li>Introduced digital tools for job tracking and reporting, improving workflow transparency.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Project Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">MJK Custom Fabrication and Coatings • Jan 2015 – Nov 2019</p>
            <ul className="text-sm space-y-1">
              <li>Directed custom fabrication projects from planning through delivery, coordinating cross-functional teams and negotiating vendor terms</li>
              <li>Implemented project management software to track milestones and budgets, improving on-time delivery rates</li>
              <li>Communicated complex technical requirements between clients, engineers and production staff</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Additional Experience</h3>
            <p className="text-sm">Multi-Channel Sales Manager, MattressFirm (2012–2014) • Training Manager & General Manager, Sizzling Platter (2008–2012) • Air Traffic Controller, United States Navy (2003–2007). Developed strong leadership, communication and teamwork skills.</p>
          </div>
        </div>

        <h2>Leadership & Activities</h2>
        <ul className="text-sm space-y-1">
          <li>Member, National Society of Leadership and Success</li>
          <li>Served in U.S. Navy (2003-2007) – cultivated discipline, attention to detail and the ability to perform under pressure</li>
          <li>Maintain an active digital portfolio of projects and technical notes to document learning and showcase work</li>
        </ul>
      </section>

      {null}
    </Container>
  );
}
