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
  title: "Software Engineer (Graduating 2025)",
  location: "Eagle Mountain, UT",
  email: "",
  website: "https://YOUR_PORTFOLIO_URL",
  github: "https://github.com/James-Hendershott",
  linkedin: "https://www.linkedin.com/in/james-hendershott-0a2481224/",
  summary: [
    "Hands-on software engineering student transitioning from vendor management to full-time engineering.",
    "Builds pragmatic web apps with TypeScript/React/Next.js and ships in Docker-backed environments.",
    "Homelab and systems mindset: Unraid, Nginx Proxy Manager, containers, and automation.",
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "C#", "C++"],
    frameworks: ["React", "Next.js (App Router)", "Tailwind CSS", "MDX"],
    backend: ["Node.js", "Express", "MongoDB", ".NET basics"],
    devops: ["Docker", "Nginx (NPM)", "Netlify", "Cloudflare Analytics", "GitHub Actions (basics)"],
    tools: ["Git", "ESLint/Prettier", "Postman/Insomnia", "Figma (basics)", "Linux"]
  },
  experience: [
    {
      company: "Amerit Fleet Solutions",
      location: "UT (Remote/Hybrid)",
      title: "Vendor Manager",
      start: "2019",
      end: "Present",
      bullets: [
        "Streamlined vendor communication with a custom HTML/JS tool that generates Outlook deeplinks and templates, reducing drafting time by ~50%.",
        "Standardized processes and improved data hygiene by introducing structured templates and simple automation.",
        "Partnered with operations and IT to triage issues and improve turnaround time on vendor-related tasks.",
      ],
    },
  ],
  projects: [
    {
      name: "TrackMate (Capstone MERN)",
      link: "https://github.com/your-github/trackmate",
      tech: ["MongoDB", "Express", "React", "Node", "Docker"],
      bullets: [
        "Team lead: designed API endpoints, React component structure, and Docker-based local dev.",
        "Solved VPN-gated data by using seed scripts and JSON fixtures for repeatable, offline development.",
      ],
    },
    {
      name: "Hendershott Vendor Manager",
      link: "https://github.com/your-github/vendor-manager",
      tech: ["HTML", "JavaScript", "LocalStorage"],
      bullets: [
        "Single-page utility that builds pre-filled mailto deeplinks and message templates for routine vendor emails.",
        "Improved accuracy and speed of repetitive communications across teams.",
      ],
    },
    {
      name: "BoomPortal (Pi 5 + Sunshine/Moonlight)",
      link: "https://github.com/your-github/boomportal",
      tech: ["Raspberry Pi", "Docker", "Nginx Proxy Manager"],
      bullets: [
        "Configured Sunshine on a Raspberry Pi 5 with reverse proxy and controller mapping for low-latency streaming.",
        "Observed ~12–18ms wired latency and ~25–35ms over Wi‑Fi 6 in home network.",
      ],
    },
    {
      name: "This Portfolio (Next.js + MDX)",
      link: "",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MDX"],
      bullets: [
        "Content-driven project case studies, GitHub showcase, sitemap/robots, and basic analytics integration.",
        "Deployed via Netlify or Nginx behind TLS; uses App Router and MDX content files.",
      ],
    },
  ],
  education: [
    {
      school: "Software Engineering, B.S. (in progress)",
      degree: "Expected Graduation: 2025",
      bullets: [
        "Focus: MERN stack, systems fundamentals, and project-based learning.",
      ],
    },
  ],
};
