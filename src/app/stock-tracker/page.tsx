import type { Metadata } from "next";
import Link from "next/link";
import { stockSignals, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Stock Tracker",
  description:
    "Grow a Garden 2 stock tracker hub for seeds, gear, pets, weather, Admin Abuse events, Firefly alerts, and community restock signals.",
  alternates: {
    canonical: `${siteUrl}/stock-tracker`,
  },
};

const trackerRows = [
  ["Seeds", "Shop rotation, priority buys, and beginner-safe options."],
  ["Gear", "Defense and utility items that change night-risk decisions."],
  ["Pets", "Availability and demand separated from pet tier ranking."],
  ["Events", "Admin Abuse, weather windows, restocks, and short-lived reports."],
  ["Trading", "Value chatter with confidence labels instead of fixed prices."],
];

export default function StockTrackerPage() {
  return (
    <main className="page-shell">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>Stock Tracker</span>
      </nav>

      <section className="guide-hero">
        <div>
          <p className="guide-meta">Community signals · Freshness labels required</p>
          <h1>Grow a Garden 2 Stock Tracker</h1>
          <p>
            Track stock pressure from current player behavior: seed rotation,
            rare item alerts, Admin Abuse uncertainty, trading values, and event
            windows. Signals are labeled so reported data does not pretend to be
            official live truth.
          </p>
        </div>
        <aside className="quick-card">
          <h2>Tracker roadmap</h2>
          <ul>
            <li>Seed shop status</li>
            <li>Gear and defense stock</li>
            <li>Pet availability</li>
            <li>Event and trading value signals</li>
          </ul>
        </aside>
      </section>

      <section className="table-section" aria-labelledby="tracker-categories">
        <h2 id="tracker-categories">Tracking categories</h2>
        <div className="tracker-list">
          {trackerRows.map(([title, description]) => (
            <div className="tracker-row" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section" aria-labelledby="current-signals">
        <h2 id="current-signals">Current stock signals</h2>
        <div className="tracker-list">
          {stockSignals.map((signal) => (
            <div className="tracker-row" key={signal.item}>
              <span className="guide-meta">
                {signal.category} · {signal.status} · {signal.lastSeen}
              </span>
              <h3>{signal.item}</h3>
              <p>{signal.action}</p>
              <small>{signal.sourceType}: {signal.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section" aria-labelledby="signal-rules">
        <h2 id="signal-rules">Signal rules</h2>
        <div className="tracker-list">
          {[
            ["Verified", "Confirmed by current gameplay or multiple reliable current guides."],
            ["Reported", "Seen in player or creator reports, useful as an alert but still needs in-game checking."],
            ["Unconfirmed", "Search demand exists, but the exact value, timing, or method is not reliable enough yet."],
            ["Roadmap", "A feature players want, but this page does not have live data for it yet."],
          ].map(([label, description]) => (
            <div className="tracker-row" key={label}>
              <h3>{label}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
