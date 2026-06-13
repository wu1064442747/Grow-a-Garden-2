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
  ["Seeds", "Track shop rotation, priority buys, and beginner-safe options."],
  ["Gear", "Record defensive and utility item availability."],
  ["Pets", "Separate pet stock from pet tier list decisions."],
  ["Weather", "Log event windows that affect mutation planning."],
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
          <p className="guide-meta">Community signals · Built for frequent updates</p>
          <h1>Grow a Garden 2 Stock Tracker</h1>
          <p>
            Track stock pressure from current player reports: Firefly alerts,
            Admin Abuse uncertainty, crafting-event restock demand, and future
            live shop data.
          </p>
        </div>
        <aside className="quick-card">
          <h2>Tracker roadmap</h2>
          <ul>
            <li>Seed shop status</li>
            <li>Gear and defense stock</li>
            <li>Pet availability</li>
            <li>Weather event log</li>
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
              <span className="guide-meta">{signal.status}</span>
              <h3>{signal.item}</h3>
              <p>{signal.note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
