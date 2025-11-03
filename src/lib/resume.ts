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
    frameworks: string[];
    backend: string[];
    devops: string[];
    tools: string[];
  };
  experience: Array<{
    company: string;
    location?: string;
    title: string;
    start: string;
    end: string;
    bullets: string[];
  }>;
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
  title: "Software Engineer (Graduating 2026)",
  location: "Eagle Mountain, UT",
  email: "",
  website: "https://jameshendershott.org",
  github: "https://github.com/James-Hendershott",
  linkedin: "https://www.linkedin.com/in/james-hendershott-0a2481224/",
  summary: [
    "Hands-on software engineering student transitioning from vendor management to full-time engineering.",
    "Builds pragmatic web apps with TypeScript/React/Next.js (App Router) and Node/Express, ships in Docker-backed environments.",
    "Homelab + systems mindset: Unraid, Nginx Proxy Manager, containers, and automation.",
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "SQL"],
    frameworks: ["React", "Next.js 16 (App Router)", "Tailwind CSS v4", "MDX", "Bootstrap"],
    backend: ["Node.js", "Express", "MongoDB (Mongoose)", "PostgreSQL/MySQL", ".NET basics", "Django/Flask"],
    devops: ["Docker & Docker Compose", "Nginx Proxy Manager", "Netlify", "Cloudflare Analytics", "GitHub Actions", "Jenkins", "Kubernetes (basics)"],
    tools: ["Git & GitHub/GitLab", "ESLint/Prettier", "Postman/Insomnia", "Linux/Arch Linux", "Bash scripting", "Neovim", "VS Code", "Figma (basics)"]
  },
  experience: [
    {
      company: "Amerit Fleet Solutions",
      location: "UT (Remote/Hybrid)",
      title: "Vendor Manager",
      start: "2022",
      end: "Present",
      bullets: [
        "Built internal tooling (including VSM Tracker) to centralize maintenance tracking and dashboards, improving decision-making efficiency.",
        "Streamlined vendor communication with a custom HTML/JS utility (Outlook deeplinks and templates), reducing drafting time by ~50%.",
        "Partnered with operations and IT to improve turnaround time on vendor-related tasks and data quality.",
      ],
    },
    {
      company: "Aaron's Auto Pro",
      location: "UT",
      title: "Service Manager",
      start: "2020",
      end: "2022",
      bullets: [
        "Managed daily operations, scheduling, and training; improved workflow transparency with digital job tracking.",
        "Analyzed repair data to implement process improvements that reduced turnaround time by ~15%.",
      ],
    },
    {
      company: "MJK Custom Fabrication and Coatings",
      location: "UT",
      title: "Project Manager",
      start: "2015",
      end: "2019",
      bullets: [
        "Directed end-to-end custom fabrication projects; coordinated cross-functional teams and vendor negotiations.",
        "Introduced project management tools to track milestones and budgets, improving on-time delivery.",
      ],
    },
    {
      company: "MattressFirm",
      location: "UT",
      title: "Multi-Channel Sales Manager",
      start: "2012",
      end: "2014",
      bullets: [
        "Led sales initiatives across channels; developed leadership and communication skills.",
      ],
    },
    {
      company: "Sizzling Platter",
      location: "UT",
      title: "Training Manager & General Manager",
      start: "2008",
      end: "2012",
      bullets: [
        "Managed teams and operations; built training programs and drove performance metrics.",
      ],
    },
    {
      company: "United States Navy",
      location: "",
      title: "Air Traffic Controller",
      start: "2003",
      end: "2007",
      bullets: [
        "Cultivated discipline, precision, and the ability to perform under pressure.",
      ],
    },
  ],
  projects: [
    {
      name: "TrackMate (Capstone MERN)",
      link: "https://github.com/bradleypeterson/TrackMate",
      tech: ["MongoDB", "Express", "React", "Node.js", "Docker"],
      bullets: [
        "Team lead: designed API endpoints, React component structure, and Docker-based local dev.",
        "Solved VPN-gated data by using seed scripts and JSON fixtures for repeatable, offline development.",
      ],
    },
    {
      name: "VSM Tracker (Fleet Management MERN)",
      link: "https://github.com/James-Hendershott/VSM-Tracker",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      bullets: [
        "Replaced Smartsheet with a full-stack app to track out-of-service units; added Kanban dashboards and notifications.",
      ],
    },
    {
      name: "Hendershott Vendor Manager",
      link: "",
      tech: ["HTML", "JavaScript", "LocalStorage"],
      bullets: [
        "Single-page utility that builds pre-filled mailto deeplinks and message templates for routine vendor emails.",
        "Improved accuracy and speed of repetitive communications across teams.",
      ],
    },
    {
      name: "BoomPortal (Pi 5 + Sunshine/Moonlight)",
      link: "",
      tech: ["Raspberry Pi", "Docker", "Nginx Proxy Manager"],
      bullets: [
        "Configured Sunshine on a Raspberry Pi 5 with reverse proxy and controller mapping for low-latency streaming.",
        "Observed ~12–18ms wired latency and ~25–35ms over Wi‑Fi 6 in home network.",
      ],
    },
    {
      name: "Digital Portfolio (Next.js + MDX)",
      link: "https://github.com/James-Hendershott/digital_portfolio",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MDX"],
      bullets: [
        "Content-driven project case studies, GitHub showcase, sitemap/robots, and basic analytics integration.",
        "Deployed via Netlify or Nginx behind TLS; uses App Router and MDX content files.",
      ],
    },
    {
      name: "Retro Adventure Game",
      link: "https://github.com/James-Hendershott/retro_adventure_game",
      tech: ["JavaScript", "Browser APIs"],
      bullets: [
        "Enhanced text adventure with improved parsing, inventory, and modular state management.",
      ],
    },
    {
      name: "Where's My App?",
      link: "https://github.com/James-Hendershott/wheresMyApp",
      tech: ["JavaScript", "Web"],
      bullets: [
        "Utility to track app installations across devices, versions, and platforms.",
      ],
    },
  ],
  education: [
    {
      school: "Weber State University",
      degree: "B.S. in Computer Science — Expected Aug 2026; Minor: User Experience Design",
      bullets: [
        "Relevant coursework: Advanced Database Programming, Software Engineering, Data Structures, Scripting Languages, Object-Oriented Windows Applications.",
      ],
    },
    {
      school: "Weber State University",
      degree: "A.A.S. in Computer Science — Dec 2023 (GPA 3.75)",
      bullets: ["Programming I & II, Network Fundamentals, Database Design & SQL, Data Structures"],
    },
    {
      school: "Weber State University",
      degree: "Certificate of Proficiency in Programming Essentials — Aug 2023 (GPA 3.75)",
    },
    {
      school: "Weber State University",
      degree: "A.S. in General Studies — Aug 2019 (GPA 3.05)",
    },
  ],
};
