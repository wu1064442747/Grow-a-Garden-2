import Link from "next/link";
import { PageVisual } from "@/app/page-visual";
import { StructuredData } from "@/app/structured-data";
import {
  currentCodes,
  discordInviteUrl,
  guideCategories,
  guides,
  keywordIntentMap,
  pageKeywordFocus,
  pageVisualThemes,
  searchDemand,
  siteName,
  siteUrl,
  toolCards,
} from "@/lib/site-data";

const heroLinks = [
  ["All Guides", "Browse everything", "/guides"],
  ["Current Codes", "Active codes list", "/codes"],
  ["Stock Signals", "Freshness labels", "/stock-tracker"],
  ["Join Discord", "Alerts and reports", discordInviteUrl],
];

export default function Home() {
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
              All common sequel searches point here: working codes, stock
              notifier signals, weather events, beginner routes, Discord alerts,
              badges, seeds, pets, stealing defense, guilds and trading safety.
            </p>
            <form className="hero-search" action="/search">
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
            {heroLinks.map(([title, description, href], index) => (
              <Link className="hero-quick-card" href={href} key={title}>
                <span className={`quick-icon quick-icon-${index}`} aria-hidden="true" />
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
            <span aria-hidden="true" /> Last checked: {currentCodes[0]?.checkedAt}
          </p>
          <div className="code-list">
            {currentCodes.map((code) => (
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
          <h2 id="trending-guides">📈 Player Needs This Week</h2>
          <Link href="/guides">View All Guides →</Link>
        </div>
        <div className="trending-scroll">
          {searchDemand.slice(0, 5).map((demand, index) => (
            <Link
              className="trending-card"
              href={demand.href}
              key={demand.title}
            >
              <span className={`thumb thumb-${index}`} aria-hidden="true" />
              <strong>{demand.title}</strong>
              <small>{demand.pageType}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell intent-section" aria-labelledby="keyword-intent">
        <div className="intent-heading">
          <div>
            <p className="guide-meta">Keyword intent from the attached search list</p>
            <h2 id="keyword-intent">What these searches really want</h2>
          </div>
          <PageVisual
            theme={pageVisualThemes.home}
            ctaHref={discordInviteUrl}
            ctaLabel="Join Discord"
          />
        </div>
        <div className="intent-grid">
          {keywordIntentMap.map((intent) => (
            <Link
              className={intent.target === "No page target" ? "intent-card muted-intent" : "intent-card"}
              href={intent.href}
              key={intent.keyword}
            >
              <span>{intent.keyword}</span>
              <h3>{intent.intent}</h3>
              <p>{intent.action}</p>
              <small>{intent.target}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell keyword-focus-panel" aria-labelledby="homepage-keywords">
        <div className="mini-section-title">
          <h2 id="homepage-keywords">Keyword focus</h2>
          <Link href="/search?q=gag2">Search hub →</Link>
        </div>
        <div className="keyword-focus-grid">
          {pageKeywordFocus.map((focus) => (
            <Link className="keyword-focus-card" href={focus.href} key={focus.keyword}>
              <span>{focus.page}</span>
              <strong>{focus.keyword}</strong>
              <p>{focus.note}</p>
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
            {guideCategories.map((category, index) => (
              <Link href={category.href} key={category.label}>
                <span aria-hidden="true">{["🌿", "🫘", "🐝", "☁️", "🏅"][index]}</span>
                <strong>{category.label}</strong>
                <em>{category.count}</em>
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
            <h2>Freshness Rule</h2>
            <div className="weather-body">
              <span aria-hidden="true">⏱️</span>
              <div>
                <strong>Verify live data</strong>
                <p>Codes and stock can expire quickly.</p>
                <em>Use status labels</em>
              </div>
            </div>
            <Link href="/stock-tracker">Open Stock Signals →</Link>
          </div>

          <div className="panel quick-links-card">
            <h2>Quick Links</h2>
            <Link href="/codes">All Active Codes ›</Link>
            <Link href="/stock-tracker">Restock Tracker ›</Link>
            <Link href="/guides/badges-achievements">Badge Checklist ›</Link>
            <Link href="/guides/seeds-tier-list">Best Seeds ›</Link>
            <Link href="/guides/beginner-guide">Beginner Route ›</Link>
          </div>

          <div className="panel community-card">
            <h2>Research Notes</h2>
            <p>Built from current player demand across guides, video hooks, and community signals.</p>
            <div>
              <Link href="/community-questions">See demand clusters</Link>
              <Link href="/guides">Browse guide index</Link>
            </div>
          </div>
        </aside>
      </section>

      <div className="grass-border" aria-hidden="true" />
    </main>
  );
}
