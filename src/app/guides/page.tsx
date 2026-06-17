import type { Metadata } from "next";
import Link from "next/link";
import { PageVisual } from "@/app/page-visual";
import { StructuredData } from "@/app/structured-data";
import {
  guideCategories,
  getGuideVisualTheme,
  guides,
  pageVisualThemes,
  siteName,
  siteUrl,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Guides and GAG2 Guides",
  description:
    "All Grow a Garden 2 guides and GAG2 guides for codes, beginner routes, seeds, pets, badges, stock, weather, stealing, guilds, and trading values.",
  alternates: {
    canonical: `${siteUrl}/guides`,
  },
};

export default function GuidesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grow a Garden 2 Guides",
    url: `${siteUrl}/guides`,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `${siteUrl}/guides/${guide.slug}`,
      })),
    },
  };

  return (
    <main className="page-shell">
      <StructuredData data={itemListJsonLd} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Guides</span>
      </nav>

      <section className="guide-hero">
        <div>
          <p className="guide-meta">Updated June 14, 2026 · Research-led guide index</p>
          <h1>Grow a Garden 2 Guides</h1>
          <p>
            Start with Grow a Garden 2 guides and GAG2 guides for the fastest
            player needs: working codes, beginner route, seed and pet decisions,
            stock signals, weather events, badges, and trading safety.
          </p>
        </div>
        <div className="hero-side">
          <PageVisual theme={pageVisualThemes.guides} />
          <aside className="quick-card">
            <h2>Guide groups</h2>
            <ul>
              {guideCategories.map((category) => (
                <li key={category.label}>
                  <Link href={category.href}>
                    {category.label} ({category.count})
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="table-section" aria-labelledby="all-guides">
        <h2 id="all-guides">All Grow a Garden 2 guides</h2>
        <p className="section-intro">
          Use this index as the Grow a Garden 2 guides hub for every major GAG2
          guides intent: codes, stock, weather, seeds, pets, stealing, guilds,
          badges, and trading. Each Grow a Garden 2 guides card links to one
          focused page instead of mixing unrelated topics.
        </p>
        <p className="section-intro">
          If a player searches Grow a Garden 2 guides or GAG2 guides, this page
          should answer where to start, which guide to read next, and which
          Grow a Garden 2 guides are tied to fast-changing stock or weather
          information.
        </p>
        <p className="section-intro">
          Keep Grow a Garden 2 guides focused: GAG2 guides for codes should not
          replace GAG2 guides for stock, and Grow a Garden 2 guides for weather
          should stay separate from trading or pet questions.
        </p>
        <div className="guide-grid">
          {guides.map((guide) => (
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
      </section>
    </main>
  );
}
