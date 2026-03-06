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
    frontend: ["Django", "Flask", "React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Bootstrap"],
    backend: ["PostgreSQL", "MongoDB", "MariaDB", "SQLite", "Prisma ORM", "database design and SQL querying"],
    devops: ["Docker (44-container homelab)", "Nginx reverse proxy", "Linux server administration", "Git/GitHub", "CI/CD concepts", "DNS/VPN/SSL configuration"],
    concepts: ["OOP", "Data structures and algorithms", "REST API design", "MVC/MVT patterns", "Agile/Scrum", "Unit testing", "Code reviews", "AI-assisted development"],
  },
  experience: [
    {
      company: "Amerit Fleet Solutions",
      title: "Vendor Service Manager",
      start: "Apr 2022",
      end: "Present",
      bullets: [
        "Track 40\u2013100 fleet units simultaneously across multiple food distribution centers; manage full repair lifecycle from damage report through vendor negotiation, estimate approval, and return to service.",
        "Reduced active out-of-service units from 150+ to manageable levels through improved communication systems and tracking tools built during CS coursework.",
        "Coordinate across 6 distributed locations; influence fleet managers without direct authority; deliver weekly client reports.",
      ],
    },
    {
      company: "Aaron\u2019s Auto Pro",
      title: "Service Manager",
      start: "Sept 2020",
      end: "Apr 2022",
      bullets: [
        "Managed shop operations, technicians, scheduling, customer relations, and warranty resolution; improved scheduling to reduce overbooking.",
      ],
    },
    {
      company: "MJK Custom Fabrication",
      title: "Project Manager",
      start: "2015",
      end: "2019",
      bullets: [
        "Managed production of 60+ employees across 3 shifts; brokered multi-million dollar steel procurement with Nucor; oversaw projects for Exxon Mobil. Earned NACE Level 2 and Six Sigma Green Belt.",
      ],
    },
    {
      company: "MattressFirm",
      title: "Multi-Channel Sales Manager",
      start: "2012",
      end: "2014",
      bullets: [
        "Managed sales teams of 6\u201325 at state fairs and events; largest events: 9 booths, 200 people.",
      ],
    },
    {
      company: "Sizzling Platter",
      title: "GM & Training Manager",
      start: "2008",
      end: "2012",
      bullets: [
        "Promoted from busboy to GM within one year. Managed 45 employees, full P&L responsibility. Moved to corporate training team leading Little Caesar\u2019s store openings.",
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
      name: "Home Server Infrastructure",
      tech: ["Docker", "Nginx", "Linux", "Unraid", "Bash", "MariaDB", "PostgreSQL", "MongoDB"],
      bullets: [
        "Built and maintain a 24/7 Linux server (Unraid) running 44 Docker containers across 4 isolated networks with 128 TB storage, GPU-accelerated processing, and enterprise-grade hardware (Dell PowerEdge R730, 128 GB ECC RAM).",
        "Configured Nginx reverse proxy managing 23 HTTPS subdomains with automated Let\u2019s Encrypt SSL, local DNS server (dnsmasq), and WireGuard/Tailscale VPN for secure remote access.",
        "Administer 5 database instances across MariaDB, PostgreSQL, and MongoDB; perform SQL queries, data cleanup, and cross-database audits.",
        "Write and maintain 20+ Bash/Python automation scripts on cron schedules for health monitoring, data pipelines, library management, and backup automation.",
        "Diagnose and resolve complex infrastructure issues: hairpin NAT, SSL certificate chain compatibility, ISP bridge mode, Docker networking, and GPU driver configuration.",
      ],
    },
    {
      name: "TrackMate",
      link: "https://github.com/bradleypeterson/TrackMate",
      tech: ["MERN Stack"],
      bullets: [
        "39 commits on the develop branch for a 4-person capstone team; built professor cards with QR codes, refactored office hours components, fixed room tracker bugs, and wrote handoff documentation.",
        "Managed code reviews and sprint coordination via GitHub PRs. One of two core contributors alongside one teammate.",
      ],
    },
    {
      name: "Banking System",
      tech: ["Node.js", "Express", "MySQL", "EJS"],
      bullets: [
        "119 commits of my own code (no AI). Full-stack banking app with MySQL stored procedures, role-based auth (admin/employee/customer), and financial transactions with overdraft protection. CS 3650.",
      ],
    },
    {
      name: "Adventure Game",
      link: "https://github.com/James-Hendershott/1980_Style_Adventure-Game",
      tech: ["Python"],
      bullets: [
        "Wrote a text adventure game engine from scratch: OOP scene graph, inventory system, Tkinter GUI, file-based outcomes logging, and riddle mechanics with progressive hints.",
      ],
    },
    {
      name: "Community Hub",
      tech: ["Django", "PostgreSQL"],
      bullets: [
        "Built and deployed a Django web app for community event management with models, forms, views, admin panel, and Render deployment.",
      ],
    },
    {
      name: "Vendor Manager Dashboard",
      tech: ["HTML", "JavaScript"],
      bullets: [
        "Identified workflow inefficiencies at current job and designed a tool to centralize unit tracking, automate vendor communications, and generate reports; started with hand-coded HTML forms and progressively added features using AI-assisted development.",
      ],
    },
  ],
  education: [
    {
      school: "Weber State University",
      degree: "B.S. in Computer Science \u2014 December 2025",
      bullets: [
        "GPA: 3.56 overall (3.87 in CS coursework) | Applied to Georgia Tech OMSCS",
        "Key courses: Data Structures & Algorithms (A), Operating Systems, Server-Side Web Architecture (Django/Python, A), Software Engineering I & II (A, A), Database Design & SQL (A), Advanced Database Programming (A), Computer Architecture, Formal Languages & Algorithms",
      ],
    },
    {
      school: "Weber State University",
      degree: "A.A.S. in Computer Science \u2014 December 2023",
    },
  ],
};
