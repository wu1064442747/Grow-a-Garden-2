import Link from "next/link";
import { StructuredData } from "@/app/structured-data";
import {
  currentCodes,
  guides,
  siteName,
  siteUrl,
  toolCards,
} from "@/lib/site-data";

const heroLinks = [
  ["📚", "All Guides", "Browse everything", "/guides/beginner-guide"],
  ["🎁", "Current Codes", "Active codes list", "/codes"],
  ["🔧", "Live Tools", "Calculators & more", "/stock-tracker"],
  ["🌱", "New to Game?", "Beginner guide", "/guides/beginner-guide"],
];

const homepageCodes = [
  ...currentCodes,
  {
    code: "GARDEN2LAUNCH",
    reward: "2x Seed Pack, 5k Coins",
    status: "Watch",
  },
  {
    code: "GREENFINGERS",
    reward: "10k Coins",
    status: "Watch",
  },
  {
    code: "BEEHAPPY",
    reward: "Honey Sprinkler",
    status: "Watch",
  },
  {
    code: "RAINYDAY2",
    reward: "2x Watering Can",
    status: "Watch",
  },
];

const categoryRows = [
  ["🌿", "Getting Started", "12"],
  ["🫘", "Seeds", "28"],
  ["☁️", "Weather", "16"],
  ["🛡️", "Stealing & Defense", "18"],
  ["🐝", "Pets", "22"],
  ["🏰", "Guilds", "14"],
  ["🔧", "Tools & Calculators", "9"],
];

export default function Home() {
  const startHereGuide = guides.find((guide) => guide.priority === "Start Here");
  const priorityGuides = guides.filter((guide) => guide.priority !== "Start Here");
  const trendingGuides = [startHereGuide, ...priorityGuides.slice(0, 5)].filter(
    Boolean,
  );
  const latestGuides = guides.slice(2, 7);
  const guideItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Grow a Garden 2 guides",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      "Independent Grow a Garden 2 guide site for codes, beginner routes, seeds, weather events, stealing defense, guilds, pets, and stock tools.",
  };

  return (
    <main>
      <StructuredData data={webSite} />
      <StructuredData data={guideItemList} />

      <section className="hero-section home-hero">
        <div className="home-hero-content">
          <div className="hero-copy">
            <h1>Grow a Garden 2 Guide</h1>
            <p>
              Codes, Seeds, Weather, Stealing & Defense, Pets, Guilds and Live
              Tools.
            </p>
            <form className="hero-search" action="/community-questions">
              <label className="sr-only" htmlFor="hero-search">
                Search any guide or tool
              </label>
              <input
                id="hero-search"
                name="q"
                placeholder="Search any guide or tool..."
                type="search"
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="hero-quick-links">
            {heroLinks.map(([icon, title, description, href]) => (
              <Link className="hero-quick-card" href={href} key={title}>
                <span aria-hidden="true">{icon}</span>
                <strong>{title}</strong>
                <small>{description}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell dashboard-row" aria-label="Codes and tools">
        <div className="panel codes-panel">
          <div className="panel-title green-title">
            <h2>🎁 Current Codes</h2>
            <Link href="/codes">View All Codes →</Link>
          </div>
          <p className="checked-line">
            <span aria-hidden="true" /> Last checked: June 13, 2026
          </p>
          <div className="code-list">
            {homepageCodes.map((code) => (
              <div className="home-code-row" key={code.code}>
                <div>
                  <strong>{code.code}</strong>
                  <em>{code.status}</em>
                  <p>Rewards: {code.reward}</p>
                </div>
                <button type="button">Copy</button>
              </div>
            ))}
          </div>
          <Link className="full-width-button" href="/codes">
            See All Active Codes →
          </Link>
        </div>

        <div className="panel tools-panel">
          <div className="panel-title blue-title">
            <h2>🔧 Live Tools Preview</h2>
            <Link href="/stock-tracker">All Tools →</Link>
          </div>
          <div className="tool-preview-grid">
            {toolCards.map((tool, index) => (
              <Link className="tool-preview-card" href={tool.href} key={tool.title}>
                <span className="tool-emoji" aria-hidden="true">
                  {["🧺", "🥕", "🌦️", "🌱"][index] ?? "🔧"}
                </span>
                <div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <strong>Open Tool</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="page-shell trending-panel"
        aria-labelledby="trending-guides"
      >
        <div className="mini-section-title">
          <h2 id="trending-guides">📈 Trending Guides</h2>
          <Link href="/guides/beginner-guide">View All Guides →</Link>
        </div>
        <div className="trending-scroll">
          {trendingGuides.map((guide, index) => (
            <Link
              className="trending-card"
              href={`/guides/${guide!.slug}`}
              key={guide!.slug}
            >
              <span className={`thumb thumb-${index}`} aria-hidden="true" />
              <strong>{guide!.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="page-shell lower-dashboard"
        aria-label="Guide categories and updates"
      >
        <aside className="panel categories-panel">
          <h2>Guide Categories</h2>
          <div className="category-list">
            {categoryRows.map(([icon, label, count]) => (
              <Link href="/community-questions" key={label}>
                <span aria-hidden="true">{icon}</span>
                <strong>{label}</strong>
                <em>{count}</em>
              </Link>
            ))}
          </div>
        </aside>

        <section className="panel latest-panel" aria-labelledby="latest-guides">
          <h2 id="latest-guides">Latest Guides & Updates</h2>
          <div className="latest-list">
            {latestGuides.map((guide, index) => (
              <Link
                className="latest-row"
                href={`/guides/${guide.slug}`}
                key={guide.slug}
              >
                <span
                  className={`latest-thumb thumb-${index + 2}`}
                  aria-hidden="true"
                />
                <div>
                  <strong>{guide.title}</strong>
                  <p>{guide.description}</p>
                  <small>{guide.updatedAt} · {guide.category}</small>
                </div>
                <b aria-hidden="true">♡</b>
              </Link>
            ))}
          </div>
          <Link className="panel-bottom-link" href="/community-questions">
            View More Guides →
          </Link>
        </section>

        <aside className="side-stack">
          <div className="panel weather-card">
            <h2>Today&apos;s Weather</h2>
            <div className="weather-body">
              <span aria-hidden="true">🌤️</span>
              <div>
                <strong>Partly Cloudy</strong>
                <p>Next Event: Rain</p>
                <em>00:18:45</em>
              </div>
            </div>
            <Link href="/guides/weather-events">Full Weather Tracker →</Link>
          </div>

          <div className="panel quick-links-card">
            <h2>Quick Links</h2>
            <Link href="/codes">All Active Codes ›</Link>
            <Link href="/stock-tracker">Restock Tracker ›</Link>
            <Link href="/guides/seeds-tier-list">Crop Value Calculator ›</Link>
            <Link href="/guides/weather-events">Growth Timer ›</Link>
            <Link href="/guides/beginner-guide">Beginners Guide ›</Link>
          </div>

          <div className="panel community-card">
            <h2>Join the Community</h2>
            <p>Get updates, codes and event alerts first.</p>
            <div>
              <Link href="/community-questions">Join our Discord</Link>
              <Link href="/community-questions">Follow on X</Link>
            </div>
          </div>
        </aside>
      </section>

      <div className="grass-border" aria-hidden="true" />
    </main>
  );
}
