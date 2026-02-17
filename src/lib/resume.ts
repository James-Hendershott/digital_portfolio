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
  title: "Software Engineer",
  location: "Eagle Mountain, UT",
  email: "james_hendershott@outlook.com",
  phone: "385-526-1111",
  website: "https://jameshendershott.org",
  github: "https://github.com/James-Hendershott",
  linkedin: "https://www.linkedin.com/in/james-hendershott-0a2481224/",
  summary: [
    "Recent Computer Science graduate with hands-on experience across the full software development lifecycle.",
    "Proficient in building production web applications using TypeScript, React, Node/Express, and MongoDB with containerized environments (Docker).",
    "Brings 20+ years of progressive leadership experience including U.S. Navy Air Traffic Control, with proven abilities in team leadership, training, process improvement, and making timely decisions under pressure.",
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "SQL", "Bash"],
    frontend: ["React", "Vite", "Next.js", "Tailwind CSS", "Shadcn/ui", "Chart.js", "Zustand"],
    backend: ["Node.js", "Express", "MongoDB/Mongoose", "Redis", "PostgreSQL", "BullMQ", "Socket.io", "Flask", "JWT"],
    devops: ["Docker & Docker Compose", "Git/GitHub", "CI/CD pipelines", "Nginx", "Linux/Bash", "Unraid"],
    concepts: ["SDLC", "API design", "RBAC", "async job processing", "caching strategies", "real-time systems", "Agile"],
  },
  experience: [
    {
      company: "Amerit Fleet Solutions",
      location: "UT (Remote/Hybrid)",
      title: "Vendor Service Manager",
      start: "April 2022",
      end: "Present",
      bullets: [
        "Oversee fleet management across 6 locations; lead status meetings and analyze trends for proactive issue resolution.",
        "Built and deployed Vendor Manager applications (dashboard + MERN stack) to replace manual Smartsheet workflows; preparing for team-wide distribution.",
      ],
    },
    {
      company: "Aaron's Auto Pro",
      location: "UT",
      title: "Service Manager",
      start: "September 2020",
      end: "April 2022",
      bullets: [
        "Managed automotive repair operations; implemented digital job tracking reducing turnaround ~15%.",
      ],
    },
    {
      company: "MJK Custom Fabrication and Coatings",
      location: "UT",
      title: "Project Manager",
      start: "January 2015",
      end: "November 2019",
      bullets: [
        "Directed custom fabrication projects within budget/deadlines; managed production teams and negotiated vendor terms.",
      ],
    },
    {
      company: "MattressFirm",
      location: "UT",
      title: "Multi-Channel Sales Manager",
      start: "January 2012",
      end: "December 2014",
      bullets: [
        "Led sales teams at national events; set performance goals and refined sales processes.",
      ],
    },
    {
      company: "Sizzling Platter",
      location: "UT",
      title: "Training Manager → General Manager",
      start: "January 2008",
      end: "January 2012",
      bullets: [
        "Led new store openings, updated training materials, mentored employees; managed operations and team development.",
      ],
    },
    {
      company: "United States Navy, NAS Kingsville",
      title: "Air Traffic Controller",
      start: "January 2003",
      end: "January 2007",
      bullets: [
        "Managed aircraft routing and flight planning; ensured air traffic safety; excelled in high-pressure decision-making.",
      ],
    },
  ],
  projects: [
    {
      name: "Vendor Manager",
      link: "https://github.com/James-Hendershott/vendor-manager-web",
      tech: ["React", "Vite", "TypeScript", "Shadcn/ui", "Express", "MongoDB", "Redis", "BullMQ", "Socket.io", "Docker"],
      bullets: [
        "Built production fleet management system: React/Vite/TypeScript frontend with Shadcn/ui, Express/MongoDB backend, Redis caching.",
        "Implemented dual-write architecture with BullMQ async job processing for Smartsheet API sync; Socket.io for real-time updates.",
        "Designed 10 Mongoose schemas, JWT authentication with RBAC, and comprehensive REST API; deployed via Docker Compose.",
      ],
    },
    {
      name: "Vendor Manager Dashboard",
      tech: ["JavaScript", "Smartsheet API", "Chart.js", "Claude AI"],
      bullets: [
        "Developed 12,000-line vanilla JS application with real-time Smartsheet API integration, Chart.js dashboards, and in-memory caching.",
        "Integrated Claude AI for document analysis (estimates from PDF/images); built automated weekly reporting and email generation.",
      ],
    },
    {
      name: "TrackMate",
      link: "https://github.com/bradleypeterson/TrackMate",
      tech: ["MongoDB", "Express", "React", "Node.js", "Docker"],
      bullets: [
        "Led 4-person team through full SDLC; designed RESTful APIs and React architecture with RBAC and audit trails.",
        "Docker Compose deployment with seed scripts for offline development.",
      ],
    },
    {
      name: "Digital Portfolio",
      link: "https://github.com/James-Hendershott/digital_portfolio",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
      bullets: [
        "Built content-driven portfolio using Next.js, React, TypeScript, Tailwind, and MDX.",
        "Features: MDX case studies, GitHub showcase, Netlify contact form, App Router and static generation.",
      ],
    },
    {
      name: "Where's My App?",
      link: "https://github.com/James-Hendershott/wheresMyApp",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Auth.js"],
      bullets: [
        "Full-stack inventory system with QR scanning/printing, SVG rack maps, item photos, PWA offline support.",
        "Auth.js + Prisma + PostgreSQL backend.",
      ],
    },
    {
      name: "Label Generator",
      link: "https://github.com/James-Hendershott/Label_Generator",
      tech: ["Python", "Flask", "JavaScript", "Canvas API"],
      bullets: [
        "Flask web app for generating screw/fastener labels with color-coded sizing system.",
        "Canvas API for browser-side rendering; print-optimized output at 300 DPI.",
      ],
    },
  ],
  education: [
    {
      school: "Weber State University",
      degree: "B.S. in Computer Science — December 2025 (GPA 3.56)",
      bullets: [
        "Minor: User Experience Design | National Society of Leadership and Success",
      ],
    },
    {
      school: "Weber State University",
      degree: "A.A.S. in Computer Science — December 2023 (GPA 3.75)",
    },
  ],
};
