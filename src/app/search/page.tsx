import type { Metadata } from "next";
import Link from "next/link";
import { PageVisual } from "@/app/page-visual";
import {
  getGuideVisualTheme,
  guides,
  pageVisualThemes,
  searchGuides,
  searchTools,
  siteUrl,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Search Grow a Garden 2 and GAG2 Guides",
  description:
    "Search Grow a Garden 2 guides and GAG2 guides by codes, stock notifier, seeds, pets, badges, weather, Discord, stealing, guilds, trading, and known issues.",
  alternates: {
    canonical: `${siteUrl}/search`,
  },
};

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const trimmedQuery = q.trim();
  const results = searchGuides(trimmedQuery);
  const toolResults = searchTools(trimmedQuery);
  const totalResults = results.length + toolResults.length;

  return (
    <main className="page-shell">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Search</span>
      </nav>

      <section className="guide-hero">
        <div>
          <p className="guide-meta">
            {trimmedQuery
              ? `${totalResults} result${totalResults === 1 ? "" : "s"}`
              : `${guides.length} guides indexed`}
          </p>
          <h1>Search Grow a Garden 2 Guides</h1>
          <p>
            Search for Grow a Garden 2 guides, GAG2 guides, codes, stock
            notifier pages, seeds, pets, badges, weather, Discord, stealing,
            guilds, trading values, and known issues.
          </p>
        </div>
        <div className="hero-side">
          <PageVisual theme={pageVisualThemes.search} />
          <form className="quick-card search-card" action="/search">
            <label htmlFor="search-page-input">Search query</label>
            <input
              id="search-page-input"
              name="q"
              placeholder="Try codes, badges, pets, stock..."
              type="search"
              defaultValue={trimmedQuery}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="table-section" aria-labelledby="search-results">
        <h2 id="search-results">
          {trimmedQuery ? `Results for "${trimmedQuery}"` : "Popular guides"}
        </h2>
        {totalResults > 0 ? (
          <div className="guide-grid">
            {toolResults.map((tool) => (
              <Link className="guide-card" href={tool.href} key={tool.title}>
                <span
                  className={`guide-card-visual ${tool.href === "/stock-tracker" ? "visual-stock" : "visual-guides"}`}
                  aria-hidden="true"
                />
                <span>{tool.status}</span>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <small>Tool page</small>
              </Link>
            ))}
            {results.map((guide) => (
              <Link className="guide-card" href={`/guides/${guide.slug}`} key={guide.slug}>
                <span
                  className={`guide-card-visual ${getGuideVisualTheme(guide).className}`}
                  aria-hidden="true"
                />
                <span>{guide.category}</span>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <small>{guide.updatedAt} · {guide.readingTime}</small>
              </Link>
            ))}
          </div>
        ) : (
          <div className="quick-card empty-state">
            <h3>No exact match yet</h3>
            <p>
              Try a broader query like codes, stock, pets, seeds, badges, or
              trading. New guide topics are added when player demand is clear.
            </p>
            <Link className="button secondary" href="/guides">
              Browse all guides
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
