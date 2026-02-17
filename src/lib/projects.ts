import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  repo?: string;
  live?: string;
  access?: string; // e.g., mailto: link for private repo access requests
};

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .filter((f) => {
      try {
        const raw = fs.readFileSync(path.join(CONTENT_DIR, f), "utf8");
        const { data } = matter(raw);
        return data.draft !== true;
      } catch {
        return true;
      }
    })
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllProjectsMeta(): ProjectMeta[] {
  const slugs = getProjectSlugs();
  const metas = slugs
    .map((slug) => {
      const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);
      const meta: ProjectMeta = {
        slug,
        title: data.title ?? slug,
        date: data.date ?? new Date().toISOString(),
        summary: data.summary ?? "",
        tags: data.tags ?? [],
        repo: data.repo ?? undefined,
        live: data.live ?? undefined,
        access: data.access ?? undefined,
      };
      return meta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return metas;
}

export async function getProjectContent(slug: string) {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);
  const { content: mdx } = await compileMDX<Record<string, unknown>>({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });
  const meta: ProjectMeta = {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    repo: data.repo ?? undefined,
    live: data.live ?? undefined,
    access: data.access ?? undefined,
  };
  return { meta, mdx };
}
