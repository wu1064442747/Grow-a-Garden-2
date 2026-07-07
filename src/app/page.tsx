import Link from "next/link";
import { CopyCodeButton } from "@/app/copy-code-button";
import { PageVisual } from "@/app/page-visual";
import { StructuredData } from "@/app/structured-data";
import {
  currentCodes,
  discordInviteUrl,
  gameLaunch,
  guideCategories,
  guides,
  homepageToolEntries,
  keywordIntentMap,
  pageKeywordFocus,
  pageVisualThemes,
  searchDemand,
  seedRecommendations,
  siteName,
  siteUrl,
  stockSignals,
  weatherQuickChecks,
} from "@/lib/site-data";

export default function Home() {
  const latestGuides = guides.slice(2, 7);
  const currentCode = currentCodes[0];
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

      <section className="launch-hero" id="play">
        <div className="page-shell launch-hero-grid">
          <article className="game-launch-card" aria-labelledby="game-launch-title">
            <div className="game-launch-visual" aria-hidden="true">
              <span className="game-sky" />
              <span className="game-plot game-plot-a" />
              <span className="game-plot game-plot-b" />
              <span className="game-plot game-plot-c" />
            </div>
            <div className="game-launch-copy">
              <p className="guide-meta">Reviewed {gameLaunch.lastReviewed}</p>
              <h1 id="game-launch-title">{gameLaunch.title}</h1>
              <p>{gameLaunch.description}</p>
              <div className="launch-actions">
                <a className="button primary" href={gameLaunch.playUrl} rel="noopener noreferrer" target="_blank">
                  {gameLaunch.playLabel}
                </a>
                <a className="button secondary" href={discordInviteUrl} rel="noopener noreferrer" target="_blank">
                  Join Discord
                </a>
              </div>
              <small>{gameLaunch.disclaimer}</small>
            </div>
          </article>

          <aside className="native-tool-stack" aria-label="Grow a Garden 2 quick tools">
            <section className="native-tool-card seed-finder-card" aria-labelledby="seed-finder-title">
              <span className="tool-badge">Seed Finder</span>
              <h2 id="seed-finder-title">Find the right seed to plant next</h2>
              <div className="seed-chip-grid">
                {seedRecommendations.slice(0, 4).map((seed) => (
                  <Link href="/guides/seeds-tier-list" key={seed.name}>
                    <strong>{seed.name}</strong>
                    <small>
                      {seed.tier} tier · {seed.rarity}
                    </small>
                  </Link>
                ))}
              </div>
              <Link className="tool-card-link" href="/guides/seeds-tier-list">
                Open seed tier list
              </Link>
            </section>

            <section className="native-tool-card quick-check-card" aria-labelledby="quick-check-title">
              <span className="tool-badge">Stock / Weather</span>
              <h2 id="quick-check-title">Check signals before spending</h2>
              <div className="quick-signal-list">
                {stockSignals.slice(0, 2).map((signal) => (
                  <Link href="/stock-tracker" key={signal.item}>
                    <strong>{signal.item}</strong>
                    <small>
                      {signal.category} · {signal.status}
                    </small>
                  </Link>
                ))}
                {weatherQuickChecks.slice(0, 1).map((check) => (
                  <Link href="/guides/weather-events" key={check.event}>
                    <strong>{check.event}</strong>
                    <small>Weather · {check.status}</small>
                  </Link>
                ))}
              </div>
              <Link className="tool-card-link" href="/stock-tracker">
                Open stock and weather checks
              </Link>
            </section>
          </aside>
        </div>
      </section>

      {currentCode ? (
        <section className="page-shell current-code-strip" aria-labelledby="current-code-title">
          <div>
            <span className="tool-badge">Current code</span>
            <h2 id="current-code-title">{currentCode.code}</h2>
            <p>
              {currentCode.reward} · Checked {currentCode.checkedAt}
            </p>
          </div>
          <div className="current-code-actions">
            <CopyCodeButton code={currentCode.code} />
            <Link className="button secondary" href="/codes">View all codes</Link>
          </div>
        </section>
      ) : null}

      <section className="page-shell tool-entry-grid" aria-labelledby="homepage-tools">
        <div className="mini-section-title">
          <h2 id="homepage-tools">Grow a Garden 2 tools</h2>
          <Link href="/guides">Browse all guides</Link>
        </div>
        <div className="tool-entry-cards">
          {homepageToolEntries.map((tool) => (
            <Link className="tool-entry-card" href={tool.href} key={tool.title}>
              <span className="tool-badge">{tool.statusLabel}</span>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </Link>
          ))}
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
