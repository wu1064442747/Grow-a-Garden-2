import type { Metadata } from "next";
import Link from "next/link";
import { PageVisual } from "@/app/page-visual";
import { StructuredData } from "@/app/structured-data";
import {
  discordInviteUrl,
  launchFacts,
  pageVisualThemes,
  playerQuestionClusters,
  searchDemand,
  siteName,
  siteUrl,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Discord and Community Questions",
  description:
    "Latest Grow a Garden 2 Discord and GAG2 community questions from community research: Admin Abuse, stock alerts, pets, Venom, known issues, and launch reactions.",
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
            Recent Grow a Garden 2 Discord and GAG2 community demand shows the
            site should prioritize fast answers: working codes, beginner routes,
            stock signals, weather alerts, badges, pets, seeds, and trading
            safety.
          </p>
        </div>
        <div className="hero-side">
          <PageVisual
            theme={pageVisualThemes.community}
            ctaHref={discordInviteUrl}
            ctaLabel="Join Discord"
          />
          <aside className="quick-card">
            <h2>Launch facts to track</h2>
            <ul>
              {launchFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="table-section" aria-labelledby="question-clusters">
        <h2 id="question-clusters">Grow a Garden 2 Discord question clusters</h2>
        <p className="section-intro">
          This page treats Grow a Garden 2 Discord searches as community intent:
          players want GAG2 community reports, code alerts, stock alerts,
          weather chatter, and known issue context. Every Grow a Garden 2
          Discord note is summarized with labels instead of being treated as
          official confirmation.
        </p>
        <p className="section-intro">
          A Grow a Garden 2 Discord query usually means the user wants a GAG2
          community shortcut, not a long article. This page connects Grow a
          Garden 2 Discord demand to the site pages that verify codes, stock,
          weather, and update questions.
        </p>
        <p className="section-intro">
          Grow a Garden 2 Discord and GAG2 community searches also help decide
          what to update next. When Grow a Garden 2 Discord demand points to a
          rumor, the site keeps the GAG2 community note separate from verified
          code, stock, and weather content.
        </p>
        <p className="section-intro">
          Grow a Garden 2 Discord signals and GAG2 community signals are useful
          only when they point players to a checked Grow a Garden 2 community
          page.
        </p>
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
        <h2 id="search-demand">GAG2 demand-led page plan</h2>
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
