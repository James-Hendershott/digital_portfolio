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
};

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
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
  const { content: mdx } = await compileMDX<{ [key: string]: any }>({
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
  };
  return { meta, mdx };
}
