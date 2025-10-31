import Link from "next/link";
import { Container } from "../../components/Container";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <Container className="py-12">
      <h1 className="mb-4 text-3xl font-semibold">Resume</h1>
      <p className="text-foreground/70">
        Download a PDF copy below, and see a concise summary of experience and education on this page.
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="/resume.pdf"
          className="rounded-md bg-foreground px-4 py-2 text-background hover:opacity-90"
          download
        >
          Download PDF
        </a>
        <Link
          href="/about"
          className="rounded-md border border-foreground/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
        >
          View About page
        </Link>
      </div>

      <section className="prose prose-zinc mt-10 dark:prose-invert max-w-none">
        <h2>Professional Summary</h2>
        <p>
          Detail-oriented Software Engineer currently completing a B.S. in Computer Science at Weber State University (expected Aug 2026) with a minor in User Experience Design. Experienced in full-stack web development, building RESTful APIs and creating intuitive user interfaces. Proficient in multiple programming languages (Python, Java, JavaScript, C++, C#) and familiar with Linux systems, including Arch Linux. Passionate about developing scalable applications and leveraging technology to solve real-world problems. Adept at collaborating in teams, managing projects and applying analytical thinking to software design. Former U.S. Navy air traffic controller bringing discipline and leadership to every project.
        </p>

        <h2>Technical Skills</h2>
        <div className="grid gap-3 not-prose text-sm">
          <div><strong>Languages & Frameworks:</strong> Python, Java, JavaScript/TypeScript, C++, C#, SQL; Flask, Django, React, Node.js/Express, Spring Boot</div>
          <div><strong>Web & UI:</strong> HTML5, CSS3, Bootstrap, responsive design, user-centered design principles</div>
          <div><strong>DevOps & Tools:</strong> Git/GitHub, GitLab, Docker, Jenkins, GitHub Actions, Kubernetes; NEOVIM, VS Code</div>
          <div><strong>Databases:</strong> MySQL, PostgreSQL, SQLite, basic MongoDB; schema design and query optimization</div>
          <div><strong>Operating Systems:</strong> Linux (Ubuntu, Arch Linux), Windows, macOS; shell scripting with Bash</div>
          <div><strong>Other Skills:</strong> Data structures & algorithms, Agile methodology, object-oriented design, scripting for automation, Jupyter notebooks</div>
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

        <h2>Software Development Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Capstone Project – TrackMateApp</h3>
            <p className="text-sm text-foreground/70 mb-2">2024</p>
            <ul className="text-sm space-y-1">
              <li>Created TrackMateApp, a comprehensive task and time-tracking application built for the CS 4760 capstone course</li>
              <li>Developed the backend using Django and REST Framework to manage user accounts, tasks, categories and time logs; implemented API endpoints for CRUD operations</li>
              <li>Designed a responsive frontend interface using React and Bootstrap, allowing users to visualize progress and generate reports</li>
              <li>Configured the development environment on Arch Linux, wrote shell scripts for setup and deployment, and used NEOVIM alongside VS Code for development</li>
              <li>Maintained version control with Git, managed issues through GitHub and documented design decisions in Obsidian notes</li>
              <li>Deployed the app locally and to cloud platforms for testing and feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Fleet Management REST API / VSM Tracker</h3>
            <p className="text-sm text-foreground/70 mb-2">Amerit Fleet Solutions • 2024</p>
            <ul className="text-sm space-y-1">
              <li>Designed and implemented a RESTful API in Python (Flask) for the VSM Tracker, an enhanced version of a fleet management system that centralizes maintenance records for vehicles</li>
              <li>Developed additional features such as work-order tracking, vendor performance analytics and automated notification scripts</li>
              <li>Used MySQL for persistent storage and containerized the application with Docker; migrated parts of the system to Django for improved scalability</li>
              <li>Integrated monitoring and logging; built a CI/CD pipeline with GitHub Actions for automated testing and deployment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">E-Commerce Microservices – Personal Project</h3>
            <p className="text-sm text-foreground/70 mb-2">2023</p>
            <ul className="text-sm space-y-1">
              <li>Developed a Java Spring Boot microservice to handle product inventory and order processing for a mock e-commerce platform</li>
              <li>Exposed REST APIs, integrated with a headless CMS and used MySQL for persistent storage</li>
              <li>Configured NGINX as a reverse proxy and built a Jenkins pipeline to automate testing and deployment to Kubernetes; collaborated via GitLab</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Personal Portfolio Website</h3>
            <p className="text-sm text-foreground/70 mb-2">Ongoing</p>
            <ul className="text-sm space-y-1">
              <li>Built a responsive portfolio website using Next.js and Tailwind CSS to showcase projects, resume and blog posts</li>
              <li>Configured continuous deployment with Vercel, wrote custom hooks in React and integrated a CMS for easy content updates</li>
              <li>Optimized SEO and performance, achieving high Lighthouse scores</li>
            </ul>
          </div>
        </div>

        <h2>Professional Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Vendor Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Amerit Fleet Solutions • Apr 2022 – Present</p>
            <ul className="text-sm space-y-1">
              <li>Oversee fleet management operations across multiple locations, leading status meetings and analyzing trend data for proactive issue resolution and cost-reduction strategies</li>
              <li>Build strong relationships with site leadership and vendors, ensuring high availability of services and rapid response to operational issues</li>
              <li>Leverage programming skills to develop internal tools for maintenance tracking and data dashboards, improving decision-making efficiency</li>
              <li>Use Git and collaborative tools to manage codebases and train colleagues on version-control best practices</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Service Manager</h3>
            <p className="text-sm text-foreground/70 mb-2">Aaron&apos;s Auto Pro • Sept 2020 – Apr 2022</p>
            <ul className="text-sm space-y-1">
              <li>Managed daily operations for an automotive repair facility, ensuring customer satisfaction and overseeing scheduling and training</li>
              <li>Analyzed repair data to identify patterns and implemented process improvements that reduced service turnaround time by 15%</li>
              <li>Introduced digital tools for job tracking and reporting, improving workflow transparency</li>
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
          <li>U.S. Navy veteran – cultivated discipline, attention to detail and the ability to perform under pressure</li>
          <li>Maintain an active digital portfolio of projects and technical notes to document learning and showcase work</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="mb-3 text-xl font-semibold">Resume (PDF preview)</h2>
        <div className="rounded-md border border-foreground/20">
          <object data="/resume.pdf" type="application/pdf" width="100%" height="800">
            <p className="p-4 text-sm text-foreground/70">
              Your browser cannot display the PDF inline.
              <a className="ml-1 underline" href="/resume.pdf" download>Download the resume</a>.
            </p>
          </object>
        </div>
      </section>
    </Container>
  );
}
