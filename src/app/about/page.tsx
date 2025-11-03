import Link from "next/link";
import Image from "next/image";
import { Container } from "../../components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-20 w-40 h-40 border-2 border-purple-400 dark:border-purple-500 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-yellow-500 dark:border-yellow-400 rotate-45 animate-float-slow"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              {/* Profile Photo with vignette and decorative corners */}
              <div className="relative flex-shrink-0">
                {/* Photo with vignette effect */}
                <div className="w-48 h-48 rounded-2xl overflow-hidden profile-vignette">
                  <Image 
                    src="/images/profile.png" 
                    alt="James Hendershott" 
                    width={192}
                    height={192}
                    className="object-cover profile-grayscale w-full h-full"
                  />
                </div>
                {/* Decorative corner elements - overlaid on top */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-purple-500 pointer-events-none"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-yellow-500 pointer-events-none"></div>
              </div>

              {/* Intro Text */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-yellow-500 dark:from-purple-400 dark:to-yellow-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h1>
                <p className="text-xl text-foreground/70 mb-4">
                  Aspiring Software Engineer & Maker based in Eagle Mountain, Utah
                </p>
                <p className="text-foreground/60 leading-relaxed">
                  I&apos;m James Hendershott, currently a vendor manager at Amerit while completing my software engineering degree. 
                  I live with my wife Savanah and our kids Theo and Sophie. 
                  When I&apos;m not coding or learning new software, you&apos;ll find me playing with my kids, building things, exploring the outdoors, or tinkering with technology.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="p-6 rounded-xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">22+</div>
                <div className="text-sm text-foreground/60">Years of Leadership Experience</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">7+</div>
                <div className="text-sm text-foreground/60">Projects Built</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
                <div className="text-sm text-foreground/60">Technologies</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">20+</div>
                <div className="text-sm text-foreground/60">Docker Containers</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-black/5 dark:bg-white/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 dark:from-purple-400 dark:to-yellow-400"></span>
              Tech Stack & Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-purple-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">Languages</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  TypeScript, JavaScript, Python, C#, C++, Java, SQL
                </p>
              </div>
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-yellow-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600 dark:text-yellow-400">Frameworks</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Next.js 16 (App Router), React 19, Django, .NET
                </p>
              </div>
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-purple-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">Stacks</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  MERN (MongoDB, Express, React, Node), Python/Django/PostgreSQL
                </p>
              </div>
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-yellow-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600 dark:text-yellow-400">DevOps & Tools</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Docker, GitHub Actions, Nginx, Git, VS Code, Neovim, Linux/Arch
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Current Projects Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-purple-600 dark:from-yellow-400 dark:to-purple-400"></span>
              What I&apos;m Building (November 2025)
            </h2>
            <div className="space-y-4">
              <Link href="/projects/wheres-my-app" className="block p-5 rounded-xl border-l-4 border-purple-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-purple-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Where&apos;s My App →</h3>
                <p className="text-foreground/70 text-sm">Full-stack home inventory tracker with QR codes, rack maps, and PWA support</p>
              </Link>
              <Link href="/projects/retro-adventure-game" className="block p-5 rounded-xl border-l-4 border-yellow-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-yellow-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Retro Adventure Game →</h3>
                <p className="text-foreground/70 text-sm">Django-powered text adventure with database-backed state</p>
              </Link>
              <Link href="/projects/trackmate" className="block p-5 rounded-xl border-l-4 border-purple-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-purple-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">TrackMate →</h3>
                <p className="text-foreground/70 text-sm">Capstone MERN asset tracking system with Docker dev environment</p>
              </Link>
              <Link href="/projects/vsm-tracker" className="block p-5 rounded-xl border-l-4 border-yellow-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-yellow-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">VSM Tracker →</h3>
                <p className="text-foreground/70 text-sm">Internal fleet management tool replacing Smartsheet workflows</p>
              </Link>
              <div className="p-5 rounded-xl border-l-4 border-purple-500 bg-black/5 dark:bg-white/5">
                <h3 className="font-semibold text-lg mb-2">Off-Grid Home Assistant</h3>
                <p className="text-foreground/70 text-sm">Building a self-contained smart home system for my new camper</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hobbies & Interests Section */}
      <section className="py-16 bg-black/5 dark:bg-white/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 dark:from-purple-400 dark:to-yellow-400"></span>
              Hobbies & Interests
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hardware & Maker */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Hardware & Maker Projects</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🎨 3D Design & Printing</div>
                    <p className="text-sm text-foreground/60">CAD modeling, functional prototypes, miniatures, and custom parts</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🪚 Woodworking</div>
                    <p className="text-sm text-foreground/60">Building furniture, shop projects, and functional pieces</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">⚡ Electronics</div>
                    <p className="text-sm text-foreground/60">Raspberry Pi, Cyberdeck builds, Arduino experiments</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🖥️ Homelab</div>
                    <p className="text-sm text-foreground/60">Unraid NAS with 20+ Docker containers</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🖌️ Miniature Painting</div>
                    <p className="text-sm text-foreground/60">Warhammer 40K, D&D minis</p>
                  </div>
                </div>
              </div>

              {/* Outdoor Adventures */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">Outdoor Adventures</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🏍️ Motocross & ATVs</div>
                    <p className="text-sm text-foreground/60">Trail riding and off-road exploration</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🔥 Bushcraft & Survival</div>
                    <p className="text-sm text-foreground/60">Primitive skills, fire-starting, shelter building</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🥾 Backpacking & Hiking</div>
                    <p className="text-sm text-foreground/60">Exploring Utah&apos;s backcountry</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">🏕️ Camping & Fishing</div>
                    <p className="text-sm text-foreground/60">Weekend trips, teaching the kids</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Background/Story Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-purple-600 dark:from-yellow-400 dark:to-purple-400"></span>
              My Journey
            </h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <div className="p-8 rounded-2xl border-2 border-foreground/10 bg-gradient-to-br from-purple-500/5 to-yellow-500/5">
                <p className="text-lg leading-relaxed mb-4">
                  I served as an <strong>Air Traffic Controller in the U.S. Navy (2003–2007)</strong>, where I developed
                  discipline, attention to detail, and the ability to perform under pressure. After my
                  service, I worked in management roles across automotive, fabrication, and fleet industries
                  before discovering my passion for software development.
                </p>
                <p className="text-lg leading-relaxed">
                  I love building things from the ground up—whether it&apos;s a home server, a web app,
                  an electronics project, or a woodworking piece. I&apos;m translating that hands-on,
                  maker mindset into a software engineering career, combining technical skills with
                  real-world problem-solving.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
