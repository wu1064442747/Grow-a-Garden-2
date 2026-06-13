import Link from "next/link";
import { StructuredData } from "@/app/structured-data";
import {
  currentCodes,
  guides,
  playerQuestionClusters,
  siteName,
  siteUrl,
  toolCards,
} from "@/lib/site-data";

const stats = [
  ["Launch Focus", "Codes, seeds, weather, stealing"],
  ["Update Cadence", "Daily while the game is new"],
  ["Best Use", "Fast routes and repeat tools"],
];

export default function Home() {
  const startHereGuide = guides.find((guide) => guide.priority === "Start Here");
  const priorityGuides = guides.filter((guide) => guide.priority !== "Start Here");
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
      <section className="hero-section">
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <h1>Grow a Garden 2 Guide</h1>
            <p>
              Codes, beginner routes, seed rankings, weather events, stealing
              defense, guild rewards, pets, and stock tools for Grow a Garden 2.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/codes">
                View Codes
              </Link>
              {startHereGuide ? (
                <Link
                  className="button secondary"
                  href={`/guides/${startHereGuide.slug}`}
                >
                  Start Beginner Guide
                </Link>
              ) : null}
            </div>
            <div className="stat-strip" aria-label="Site focus">
              {stats.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel" aria-label="Current guide snapshot">
            <div className="garden-visual" aria-hidden="true">
              <span className="crop carrot" />
              <span className="crop sprout" />
              <span className="crop bean" />
              <span className="crop cactus" />
            </div>
            <div className="code-snapshot">
              <span>Current Working Code</span>
              <code>{currentCodes[0].code}</code>
              <p>{currentCodes[0].reward}</p>
            </div>
            <div className="snapshot-list">
              <Link href="/guides/weather-events">Weather events guide</Link>
              <Link href="/guides/stealing-guide">Night stealing defense</Link>
              <Link href="/stock-tracker">Stock tracker hub</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-block" aria-labelledby="tools">
        <div className="section-heading">
          <h2 id="tools">Live tools and fast checks</h2>
          <p>
            The site starts with reliable guide pages, then grows into stock,
            weather, and mutation tools as the game data stabilizes.
          </p>
        </div>
        <div className="tool-grid">
          {toolCards.map((tool) => (
            <Link className="tool-card" href={tool.href} key={tool.title}>
              <span>{tool.status}</span>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell section-block" aria-labelledby="latest-signals">
        <div className="section-heading">
          <h2 id="latest-signals">Latest player questions</h2>
          <p>
            Pulled from the newest community scan, then filtered down to topics
            that should become guide pages or tracker features.
          </p>
        </div>
        <div className="signal-grid">
          {playerQuestionClusters.map((cluster) => (
            <Link className="signal-card" href={cluster.href} key={cluster.title}>
              <h3>{cluster.title}</h3>
              <p>{cluster.signal}</p>
              <ul>
                {cluster.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-shell section-block" aria-labelledby="guides">
        <div className="section-heading">
          <h2 id="guides">Core Grow a Garden 2 guides</h2>
          <p>
            Built around the launch questions players are already asking:
            codes, money routes, seeds, weather, stealing, guilds, and pets.
          </p>
        </div>
        <div className="guide-grid">
          {priorityGuides.map((guide) => (
            <Link
              className="guide-card"
              href={`/guides/${guide.slug}`}
              key={guide.slug}
            >
              <span>{guide.category}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <small>
                Updated {guide.updatedAt} · {guide.readingTime}
              </small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
