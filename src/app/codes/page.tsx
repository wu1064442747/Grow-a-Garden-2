import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/app/structured-data";
import { currentCodes, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Codes",
  description:
    "Working Grow a Garden 2 codes, rewards, and latest checked status for seed rewards and launch bonuses.",
  alternates: {
    canonical: `${siteUrl}/codes`,
  },
};

export default function CodesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the current working Grow a Garden 2 code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${currentCodes[0].code} is currently listed as working and rewards ${currentCodes[0].reward}.`,
        },
      },
      {
        "@type": "Question",
        name: "Is this an official Grow a Garden 2 codes page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This is an independent fan-made guide page and is not affiliated with Roblox or the game developers.",
        },
      },
    ],
  };

  return (
    <main className="page-shell">
      <StructuredData data={faqJsonLd} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Codes</span>
      </nav>

      <section className="guide-hero">
        <div>
          <p className="guide-meta">Updated June 13, 2026 · Daily check target</p>
          <h1>Grow a Garden 2 Codes</h1>
          <p>
            Track working codes, expired codes, rewards, and when each code was
            last checked. This is an independent fan guide and not an official
            game page.
          </p>
        </div>
        <aside className="quick-card">
          <h2>How to use this page</h2>
          <ul>
            <li>Copy the code exactly as shown.</li>
            <li>Redeem it in the in-game codes area.</li>
            <li>Check back after updates and events.</li>
          </ul>
        </aside>
      </section>

      <section className="table-section" aria-labelledby="working-codes">
        <h2 id="working-codes">Working codes</h2>
        <div className="code-table" role="table" aria-label="Working codes">
          <div className="code-row code-head" role="row">
            <span role="columnheader">Code</span>
            <span role="columnheader">Reward</span>
            <span role="columnheader">Status</span>
            <span role="columnheader">Checked</span>
          </div>
          {currentCodes.map((code) => (
            <div className="code-row" role="row" key={code.code}>
              <code role="cell">{code.code}</code>
              <span role="cell">{code.reward}</span>
              <strong role="cell">{code.status}</strong>
              <span role="cell">{code.checkedAt}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
