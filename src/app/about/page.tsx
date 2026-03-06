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
        {/* Large background profile image - 25% larger */}
        <div className="absolute left-0 top-0 bottom-0 w-full md:w-[62.5%] hidden md:flex items-start justify-start profile-vignette pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/images/profile.png"
              alt="James Hendershott with son"
              fill
              className="object-contain object-left-top profile-grayscale"
            />
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-20 w-40 h-40 border-2 border-purple-400 dark:border-purple-500 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-yellow-500 dark:border-yellow-400 rotate-45 animate-float-slow"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
              {/* Profile Photo with decorative corners - visible on mobile */}
              <div className="relative flex-shrink-0 w-48 h-48 md:hidden">
                <div className="w-48 h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="James Hendershott with son"
                    width={192}
                    height={192}
                    className="object-cover object-top profile-grayscale w-full h-full"
                  />
                </div>
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
                  CS graduate, career changer, and homelab nerd in Eagle Mountain, Utah
                </p>
                <p className="text-foreground/60 leading-relaxed">
                  I&apos;m James. I&apos;m 40, and I spent the last 20 years in leadership roles &mdash; Navy air traffic controller, restaurant GM, manufacturing project manager, vendor service manager. I went back to school for computer science while working full-time and raising kids, and graduated from Weber State in December 2025 with a 3.87 GPA in my CS coursework.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="p-6 rounded-xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">20+</div>
                <div className="text-sm text-foreground/60">Years of Leadership</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">3.87</div>
                <div className="text-sm text-foreground/60">CS GPA</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">44</div>
                <div className="text-sm text-foreground/60">Docker Containers</div>
              </div>
              <div className="p-6 rounded-xl border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors bg-black/5 dark:bg-white/5">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">128 TB</div>
                <div className="text-sm text-foreground/60">Homelab Storage</div>
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
              Skills I Can Defend in an Interview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-purple-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">Languages</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Python, JavaScript, TypeScript, SQL, HTML/CSS, Bash, Java, C#, C++
                </p>
              </div>
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-yellow-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600 dark:text-yellow-400">Frameworks</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Django, Flask, React, Next.js, Node.js, Express, Tailwind CSS, Bootstrap
                </p>
              </div>
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-purple-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">Databases</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  PostgreSQL, MongoDB, MariaDB, SQLite, Prisma ORM
                </p>
              </div>
              <div className="p-6 rounded-xl border border-foreground/10 bg-background hover:border-yellow-500/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-yellow-600 dark:text-yellow-400">Infrastructure</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Docker (44-container homelab), Nginx reverse proxy, Linux, Git/GitHub, DNS/VPN/SSL
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
              What I&apos;ve Built
            </h2>
            <div className="space-y-4">
              <Link href="/projects/home-server" className="block p-5 rounded-xl border-l-4 border-purple-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-purple-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Home Server &rarr;</h3>
                <p className="text-foreground/70 text-sm">44 Docker containers, 128 TB storage, 23 subdomains, 2+ years of self-taught maintenance</p>
              </Link>
              <Link href="/projects/trackmate" className="block p-5 rounded-xl border-l-4 border-yellow-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-yellow-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">TrackMate &rarr;</h3>
                <p className="text-foreground/70 text-sm">Capstone MERN asset tracking app &mdash; team lead, wrote API endpoints and React components</p>
              </Link>
              <Link href="/projects/retro-adventure-game" className="block p-5 rounded-xl border-l-4 border-purple-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-purple-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Adventure Game &rarr;</h3>
                <p className="text-foreground/70 text-sm">Text adventure I wrote for CS 3620, plus a Django web rebuild</p>
              </Link>
              <Link href="/projects/vendor-manager" className="block p-5 rounded-xl border-l-4 border-yellow-500 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:border-yellow-600 transition-all group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Vendor Manager Dashboard &rarr;</h3>
                <p className="text-foreground/70 text-sm">Work tool I designed and built with AI assistance &mdash; used daily for 2+ years</p>
              </Link>
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
                    <div className="font-medium mb-1">3D Design & Printing</div>
                    <p className="text-sm text-foreground/60">CAD modeling, functional prototypes, miniatures, and custom parts</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Woodworking</div>
                    <p className="text-sm text-foreground/60">Building furniture, shop projects, and functional pieces</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Electronics</div>
                    <p className="text-sm text-foreground/60">Raspberry Pi, Cyberdeck builds, Arduino experiments</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Homelab</div>
                    <p className="text-sm text-foreground/60">Dell R730 running Unraid with 44 Docker containers</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Miniature Painting</div>
                    <p className="text-sm text-foreground/60">Warhammer 40K, D&D minis</p>
                  </div>
                </div>
              </div>

              {/* Outdoor Adventures */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">Outdoor Adventures</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Motocross & ATVs</div>
                    <p className="text-sm text-foreground/60">Trail riding and off-road exploration</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Bushcraft & Survival</div>
                    <p className="text-sm text-foreground/60">Primitive skills, fire-starting, shelter building</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Backpacking & Hiking</div>
                    <p className="text-sm text-foreground/60">Exploring Utah&apos;s backcountry</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-foreground/10">
                    <div className="font-medium mb-1">Camping & Fishing</div>
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
                  I&apos;m not a senior developer. I&apos;m a new grad who understands how systems work, solves real problems, and isn&apos;t afraid to figure things out.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  I built a home server with 44 Docker containers because I wanted to learn how infrastructure actually works. I built tools at my job because nobody else was going to fix the workflow problems I was dealing with every day. I went back to school at 37 because I wanted to do this for real.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  I use AI tools &mdash; I&apos;m honest about that on every project page. But I also wrote a text adventure engine from scratch, led a capstone team, and maintain infrastructure that&apos;s been running 24/7 for over two years. I know what I built and what I&apos;m still learning.
                </p>
                <p className="text-lg leading-relaxed">
                  I&apos;m looking for my first software engineering role. I&apos;m also applying to Georgia Tech&apos;s OMSCS program because I want to keep growing. I live with my wife Savanah and our kids Theo and Sophie.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
