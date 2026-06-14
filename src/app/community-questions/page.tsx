import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/app/structured-data";
import {
  launchFacts,
  playerQuestionClusters,
  searchDemand,
  siteName,
  siteUrl,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Community Questions",
  description:
    "Latest Grow a Garden 2 player questions from community research: Admin Abuse, stock alerts, pets, Venom, known issues, and launch reactions.",
  alternates: {
    canonical: `${siteUrl}/community-questions`,
  },
};

export default function CommunityQuestionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grow a Garden 2 Community Questions",
    description:
      "Filtered player questions and guide opportunities from recent Grow a Garden 2 community research.",
    url: `${siteUrl}/community-questions`,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };

  return (
    <main className="page-shell">
      <StructuredData data={jsonLd} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Community Questions</span>
      </nav>

      <section className="guide-hero">
        <div>
          <p className="guide-meta">Updated June 14, 2026 · Last 30 days scan</p>
          <h1>Grow a Garden 2 Community Questions</h1>
          <p>
            Recent player demand shows the site should prioritize fast answers:
            working codes, beginner routes, stock signals, badges, pets, seeds,
            and trading safety.
          </p>
        </div>
        <aside className="quick-card">
          <h2>Launch facts to track</h2>
          <ul>
            {launchFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="table-section" aria-labelledby="question-clusters">
        <h2 id="question-clusters">Question clusters</h2>
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

      <section className="table-section" aria-labelledby="search-demand">
        <h2 id="search-demand">Demand-led page plan</h2>
        <div className="tracker-list">
          {searchDemand.map((demand) => (
            <Link className="tracker-row" href={demand.href} key={demand.title}>
              <span className="guide-meta">{demand.pageType}</span>
              <h3>{demand.title}</h3>
              <p>{demand.intent}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
