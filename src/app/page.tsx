import Link from "next/link";
import Image from "next/image";
import { Container } from "../components/Container";
import { GitHubShowcase } from "../components/GitHubShowcase";

export default function Home() {
  return (
    <>
      {/* Hero Section with Lofi Japanese Aesthetic */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20">
        {/* Animated Background Elements - Floating geometric shapes inspired by Japanese design */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-400 dark:border-purple-500 rotate-45 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-yellow-500 dark:border-yellow-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-purple-400 dark:border-purple-500 animate-float"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-yellow-500 dark:border-yellow-400 rotate-12 animate-float-slow"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-purple-600 dark:text-purple-400 font-medium">
                <span className="w-8 h-0.5 bg-yellow-500"></span>
                Software Engineer
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">James</span>
                <span className="block bg-gradient-to-r from-purple-600 to-yellow-500 dark:from-purple-400 dark:to-yellow-400 bg-clip-text text-transparent">
                  Hendershott
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-foreground/70 font-light leading-relaxed">
                Building practical software & reliable homelab infrastructure
              </p>

              <p className="max-w-xl text-foreground/60 leading-relaxed">
                Full-stack developer specializing in MERN, .NET, and Python. 
                I create robust applications, maintain production homelabs, and 
                bring ideas to life through code and maker projects.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 text-sm">
                <a
                  href="https://github.com/James-Hendershott"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-4 py-2 hover:border-purple-500 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/james-hendershott-0a2481224/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-4 py-2 hover:border-yellow-500 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-lg bg-foreground px-6 py-3 text-background font-medium hover:opacity-90 transition-opacity duration-200"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border-2 border-foreground/20 px-6 py-3 hover:border-purple-500 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Right: Profile Image with enhanced vignette */}
            <div className="relative hidden lg:flex items-center justify-center">
              {/* Profile image - behind decorative frames */}
              <div className="absolute z-0 w-[450px] h-[450px] profile-vignette">
                <Image 
                  src="/images/profile1.png" 
                  alt="James Hendershott with family" 
                  width={450}
                  height={450}
                  className="object-cover object-top profile-grayscale w-full h-full"
                  priority
                />
              </div>
              
              {/* Decorative frame elements - overlaid on top */}
              <div className="relative z-10 flex items-center justify-center pointer-events-none">
                <div className="w-80 h-80 border-2 border-purple-400 dark:border-purple-500 rotate-6 opacity-50"></div>
                <div className="absolute w-80 h-80 border-2 border-yellow-500 dark:border-yellow-400 -rotate-6 opacity-50"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* GitHub Showcase Section */}
      <section className="py-16 bg-black/5 dark:bg-white/5">
        <Container>
          <GitHubShowcase />
        </Container>
      </section>
    </>
  );
}
