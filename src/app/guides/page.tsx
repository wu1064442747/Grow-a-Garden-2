import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/app/structured-data";
import { guideCategories, guides, siteName, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Guides",
  description:
    "All Grow a Garden 2 guides for codes, beginner routes, seeds, pets, badges, stock, weather, stealing, guilds, and trading values.",
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
            Start with the fastest player needs: working codes, beginner route,
            seed and pet decisions, stock signals, badges, and trading safety.
          </p>
        </div>
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
      </section>

      <section className="table-section" aria-labelledby="all-guides">
        <h2 id="all-guides">All guides</h2>
        <div className="guide-grid">
          {guides.map((guide) => (
            <Link className="guide-card" href={`/guides/${guide.slug}`} key={guide.slug}>
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
