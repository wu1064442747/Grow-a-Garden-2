import type { Metadata } from "next";
import Link from "next/link";
import { PageVisual } from "@/app/page-visual";
import {
  discordInviteUrl,
  pageVisualThemes,
  siteUrl,
  stockPredictions,
  stockSignals,
  weatherQuickChecks,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Stock Tracker and GAG2 Stock Notifier",
  description:
    "Grow a Garden 2 stock tracker and GAG2 stock notifier hub for seeds, gear, pets, weather, Admin Abuse events, Firefly alerts, and community restock signals.",
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
            Track Grow a Garden 2 stock pressure and GAG2 stock notifier demand
            from current player behavior: seed rotation, rare item alerts, Admin
            Abuse uncertainty, trading values, and event windows. Every Grow a
            Garden 2 stock signal is labeled so reported data does not pretend
            to be official live truth.
          </p>
        </div>
        <div className="hero-side">
          <PageVisual
            theme={pageVisualThemes.stock}
            ctaHref={discordInviteUrl}
            ctaLabel="Join notifier Discord"
          />
          <aside className="quick-card">
            <h2>Tracker roadmap</h2>
            <ul>
              <li>Seed shop status</li>
              <li>Gear and defense stock</li>
              <li>Pet availability</li>
              <li>Event and trading value signals</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="table-section" aria-labelledby="stock-weather-quick-check">
        <h2 id="stock-weather-quick-check">Stock / Weather Quick Check</h2>
        <p>
          Use these signals as reminders that still need in-game confirmation
          before spending, trading, or changing crop plans.
        </p>
        <div className="quick-check-grid">
          {stockSignals.slice(0, 4).map((signal) => (
            <div className="tracker-row quick-check-item" key={signal.item}>
              <span className="guide-meta">
                {signal.category} · {signal.status} · {signal.lastSeen}
              </span>
              <h3>{signal.item}</h3>
              <p>{signal.action}</p>
              <small>{signal.sourceType}: {signal.note}</small>
            </div>
          ))}
          {weatherQuickChecks.map((check) => (
            <div className="tracker-row quick-check-item" key={check.event}>
              <span className="guide-meta">Weather · {check.status}</span>
              <h3>{check.event}</h3>
              <p>{check.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section" aria-labelledby="tracker-categories">
        <h2 id="tracker-categories">Grow a Garden 2 stock categories</h2>
        <div className="tracker-list">
          {trackerRows.map(([title, description]) => (
            <div className="tracker-row" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section" aria-labelledby="prediction-board">
        <h2 id="prediction-board">GAG2 stock notifier prediction board</h2>
        <p>
          These Grow a Garden 2 stock windows came from the Discord stock
          prediction channel. The channel itself warns that predictions are not
          always accurate, so use this GAG2 stock notifier board as check
          reminders rather than guaranteed live stock.
        </p>
        <div className="prediction-grid">
          {stockPredictions.map((prediction) => (
            <div className="tracker-row prediction-card" key={prediction.item}>
              <span className="guide-meta">{prediction.category} · {prediction.status}</span>
              <h3>{prediction.item}</h3>
              <ul>
                {prediction.windows.map((window) => (
                  <li key={window}>{window}</li>
                ))}
              </ul>
              <small>{prediction.note}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section" aria-labelledby="current-signals">
        <h2 id="current-signals">Current Grow a Garden 2 stock signals</h2>
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
        <h2 id="signal-rules">GAG2 stock signal rules</h2>
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
