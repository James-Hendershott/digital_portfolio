import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.shottsserver.com"),
  title: {
    default: "James Hendershott — Portfolio",
    template: "%s | James Hendershott",
  },
  description:
    "Portfolio of James Hendershott — software engineering student, MERN/.NET projects, homelab & DevOps.",
  openGraph: {
  title: "James Hendershott — Portfolio",
    description:
  "Projects, case studies, and contact links.",
    url: "/",
  siteName: "James Hendershott",
  images: [{ url: "/og.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  title: "James Hendershott — Portfolio",
    description:
  "Projects, case studies, and contact links.",
  images: ["/og.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Cloudflare Web Analytics (optional). Set CLOUDFLARE_ANALYTICS_TOKEN env to enable */}
        {process.env.CLOUDFLARE_ANALYTICS_TOKEN ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: process.env.CLOUDFLARE_ANALYTICS_TOKEN })}
          />
        ) : null}
        <Header />
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
