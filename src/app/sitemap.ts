import type { MetadataRoute } from "next";
import { getAllProjectsMeta } from "../lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || "https://portfolio.example.com";
  const staticRoutes = ["", "/about", "/projects", "/contact", "/resume", "/now"].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const projects = getAllProjectsMeta().map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));
  return [...staticRoutes, ...projects];
}
