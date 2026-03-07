export type ResumeData = {
  name: string;
  title: string;
  location: string;
  email?: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  summary: string[];
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    devops: string[];
    concepts: string[];
  };
  experience: Array<{
    company: string;
    location?: string;
    title: string;
    start: string;
    end: string;
    bullets: string[];
  }>;
  careerNote?: string;
  projects: Array<{
    name: string;
    link?: string;
    tech: string[];
    bullets: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    start?: string;
    end?: string;
    bullets?: string[];
  }>;
};

export const resumeData: ResumeData = {
  name: "James Hendershott",
  title: "Software Engineer | Recent CS Graduate",
  location: "Eagle Mountain, UT",
  email: "james_hendershott@outlook.com",
  phone: "385-526-1111",
  website: "https://jameshendershott.org",
  github: "https://github.com/James-Hendershott",
  linkedin: "https://www.linkedin.com/in/james-hendershott-0a2481224/",
  summary: [
    "Python \u00b7 JavaScript \u00b7 Django \u00b7 React \u00b7 Docker \u00b7 Linux",
  ],
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Bash", "Java", "C#", "C++"],
    frontend: ["Django", "Flask", "React", "Next.js", "Node.js", "Express", "ASP.NET Core", "Tailwind CSS", "Bootstrap"],
    backend: ["MySQL (stored procedures)", "PostgreSQL", "MongoDB", "MariaDB", "SQLite", "Prisma ORM", "schema design"],
    devops: ["Docker (44-container homelab)", "Nginx reverse proxy", "Linux server administration", "Git/GitHub", "CI/CD concepts", "DNS/VPN/SSL"],
    concepts: ["OOP", "Data structures and algorithms", "REST API design", "MVC/MVT patterns", "Agile/Scrum", "Unit testing", "Code reviews", "AI-assisted development"],
  },
  experience: [
    {
      company: "Amerit Fleet Solutions",
      title: "Vendor Service Manager",
      start: "Apr 2022",
      end: "Present",
      bullets: [
        "Track 40\u2013100 fleet units simultaneously across multiple food distribution centers. Handle full repair lifecycle: vendor negotiation, estimates, transportation, reporting.",
        "Reduced active out-of-service units from 150+ by building my own tracking tools \u2014 started with hand-coded HTML forms, grew into a daily-use dashboard with Smartsheet API integration and automated reporting.",
        "Work remotely across 6 distributed locations. Coordinate with fleet managers, deliver weekly client reports, solve problems independently.",
      ],
    },
    {
      company: "Aaron\u2019s Auto Pro",
      title: "Service Manager",
      start: "Sept 2020",
      end: "Apr 2022",
      bullets: [
        "Ran shop operations, managed technicians, handled customer relations and scheduling. Left to finish CS degree remotely.",
      ],
    },
    {
      company: "MJK Custom Fabrication",
      title: "Project Manager",
      start: "2015",
      end: "2019",
      bullets: [
        "Managed 60+ employees across 3 shifts. Multi-million dollar steel procurement with Nucor. Projects for Exxon Mobil.",
      ],
    },
    {
      company: "MattressFirm",
      title: "Sales Manager",
      start: "2012",
      end: "2014",
      bullets: [],
    },
    {
      company: "Sizzling Platter",
      title: "GM & Training Manager",
      start: "2008",
      end: "2012",
      bullets: [
        "Busboy to GM in under a year.",
      ],
    },
    {
      company: "U.S. Navy",
      title: "Air Traffic Controller",
      start: "2003",
      end: "2007",
      bullets: [],
    },
  ],
  projects: [
    {
      name: "Banking System",
      tech: ["Node.js", "Express", "MySQL"],
      bullets: [
        "Built a full-stack banking application with MySQL stored procedures for all data operations, JWT + session authentication, and role-based access control (admin, employee, customer).",
        "Implemented deposits, withdrawals, and transfers with overdraft protection, transaction history, and employee dashboard. Refactored password hashing from client-side to server-side mid-project.",
      ],
    },
    {
      name: "VSM-Tracker",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      bullets: [
        "Built a vendor management app to solve real workflow problems at my job. JWT auth with role-based access, Kanban dashboard, CSV import from Smartsheet, email integration, analytics with charts. Deployed with Docker on my home server.",
        "Wrote most of the code myself with AI assistance on syntax and debugging. Used it as the foundation for a larger tool I now use daily at work.",
      ],
    },
    {
      name: "TrackMate",
      link: "https://github.com/bradleypeterson/TrackMate",
      tech: ["MERN Stack"],
      bullets: [
        "Led 4-person Agile team; personally wrote API endpoints, React components, QR code generation, and professor card features. Set up Docker Compose dev environment with seed data. Managed code reviews via GitHub.",
      ],
    },
    {
      name: "Adventure Game",
      link: "https://github.com/James-Hendershott/1980_Style_Adventure-Game",
      tech: ["Python"],
      bullets: [
        "Wrote a text adventure game engine from scratch: OOP scene graph, inventory system, Tkinter GUI, file-based logging, riddle mechanics with progressive hints. My code \u2014 used AI for research, not code generation.",
      ],
    },
    {
      name: "Home Server Infrastructure",
      tech: ["Docker", "Nginx", "Linux", "Unraid", "Bash", "MariaDB", "PostgreSQL", "MongoDB"],
      bullets: [
        "Run a 24/7 Linux server with 44 Docker containers across 4 networks, 128 TB storage, 5 database instances (PostgreSQL, MariaDB, MongoDB), Nginx reverse proxy with SSL for 23 subdomains, and 20+ Bash/Python automation scripts on cron schedules.",
        "Troubleshoot real infrastructure problems: hairpin NAT, SSL certificate chain compatibility, Docker networking, GPU drivers, DNS configuration. All self-taught through Google, YouTube, and documentation.",
      ],
    },
  ],
  education: [
    {
      school: "Weber State University",
      degree: "B.S. in Computer Science \u2014 December 2025",
      bullets: [
        "GPA: 3.56 overall (3.87 in CS coursework) | Applied to Georgia Tech OMSCS",
        "Key courses: Data Structures & Algorithms (A), Server-Side Web Architecture \u2014 Django/Python (A), Software Engineering I & II (A, A), Database Design & SQL (A), Advanced Database Programming (A), Computer Architecture (A), Formal Languages & Algorithms, Operating Systems",
      ],
    },
    {
      school: "Weber State University",
      degree: "A.A.S. in Computer Science \u2014 December 2023",
    },
  ],
};
