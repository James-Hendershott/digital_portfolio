// Server component to display recent GitHub repos.
// Set GITHUB_USERNAME in env; optionally GITHUB_TOKEN for higher rate limits.
import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  pushed_at: string;
};

async function fetchRepos(): Promise<Repo[]> {
  const username = process.env.GITHUB_USERNAME || "";
  if (!username) return [];
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;
  const res = await fetch(url, { headers, next: { revalidate: 60 * 60 } });
  if (!res.ok) return [];
  const data = (await res.json()) as Repo[];
  return data.filter((r) => !r.name.startsWith(".")).slice(0, 6);
}

export async function GitHubShowcase() {
  const repos = await fetchRepos();
  if (!repos.length) return null;
  return (
    <div className="mt-10">
      <h2 className="mb-4 text-xl font-semibold">Recent GitHub Work</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {repos.map((repo) => (
          <Link
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-black/10 p-4 hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{repo.name}</h3>
              <span className="text-xs text-foreground/60">★ {repo.stargazers_count}</span>
            </div>
            {repo.description ? (
              <p className="mt-1 text-sm text-foreground/70 line-clamp-3">
                {repo.description}
              </p>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-foreground/60">
              {repo.language ? (
                <span className="rounded bg-black/5 px-2 py-0.5 dark:bg-white/10">
                  {repo.language}
                </span>
              ) : null}
              <span className="rounded bg-black/5 px-2 py-0.5 dark:bg-white/10">
                Updated {new Date(repo.pushed_at).toLocaleDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
