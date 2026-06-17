import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageVisual } from "@/app/page-visual";
import { StructuredData } from "@/app/structured-data";
import {
  discordInviteUrl,
  getGuideBySlug,
  getGuideVisualTheme,
  guides,
  siteName,
  siteUrl,
} from "@/lib/site-data";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  const url = `${siteUrl}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      siteName,
      type: "article",
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = guides
    .filter((relatedGuide) => relatedGuide.slug !== guide.slug)
    .slice(0, 3);
  const visualTheme = getGuideVisualTheme(guide);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updatedAt,
    mainEntityOfPage: `${siteUrl}/guides/${guide.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };

  return (
    <main className="page-shell">
      <StructuredData data={articleJsonLd} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>{guide.category}</span>
      </nav>

      <article className="guide-layout">
        <header className="guide-hero">
          <div>
            <p className="guide-meta">
              {guide.category} · Updated {guide.updatedAt} · {guide.readingTime}
            </p>
            <h1>{guide.title}</h1>
            <p>{guide.description}</p>
            <div className="guide-keyword-strip" aria-label="Guide keyword focus">
              <span>{guide.title}</span>
              <span>GAG2 {guide.category}</span>
              <span>Grow a Garden 2 {guide.category}</span>
            </div>
          </div>
          <div className="hero-side">
            <PageVisual
              theme={visualTheme}
              ctaHref={guide.slug.includes("stock") || guide.slug.includes("events") ? discordInviteUrl : undefined}
              ctaLabel={guide.slug.includes("stock") || guide.slug.includes("events") ? "Join alerts" : undefined}
            />
            <aside className="quick-card" aria-label="Key takeaways">
              <h2>Quick Takeaways</h2>
              <ul>
                {guide.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </aside>
          </div>
        </header>

        <div className="guide-body">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="related-section" aria-labelledby="related-guides">
        <h2 id="related-guides">Read next</h2>
        <div className="guide-grid compact">
          {relatedGuides.map((relatedGuide) => (
            <Link
              className="guide-card"
              href={`/guides/${relatedGuide.slug}`}
              key={relatedGuide.slug}
            >
              <span
                className={`guide-card-visual ${getGuideVisualTheme(relatedGuide).className}`}
                aria-hidden="true"
              />
              <span>{relatedGuide.category}</span>
              <h3>{relatedGuide.title}</h3>
              <p>{relatedGuide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
