import type { Metadata } from "next";
import Link from "next/link";
import { guides, searchGuides, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Search Grow a Garden 2 Guides",
  description:
    "Search Grow a Garden 2 guides by codes, stock, seeds, pets, badges, weather, stealing, guilds, trading, and known issues.",
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
              ? `${results.length} result${results.length === 1 ? "" : "s"}`
              : `${guides.length} guides indexed`}
          </p>
          <h1>Search Grow a Garden 2 Guides</h1>
          <p>
            Search for codes, stock, seeds, pets, badges, weather, stealing,
            guilds, trading values, and known issues.
          </p>
        </div>
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
      </section>

      <section className="table-section" aria-labelledby="search-results">
        <h2 id="search-results">
          {trimmedQuery ? `Results for "${trimmedQuery}"` : "Popular guides"}
        </h2>
        {results.length > 0 ? (
          <div className="guide-grid">
            {results.map((guide) => (
              <Link className="guide-card" href={`/guides/${guide.slug}`} key={guide.slug}>
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
