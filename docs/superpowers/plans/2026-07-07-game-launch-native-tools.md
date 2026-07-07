# Game Launch Native Tools Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the homepage into a balanced game launch and native tools surface, while strengthening seed and stock/weather tool pages without adding an iframe.

**Architecture:** Keep the App Router pages server-rendered by default. Centralize new content data in `src/lib/site-data.ts`, render the homepage from that typed data, and reuse existing guide and tracker surfaces instead of adding new routes. Add one tiny client component only for progressive copy-to-clipboard behavior.

**Tech Stack:** Next.js 16 App Router, React 19 Server Components, TypeScript, global CSS in `src/app/globals.css`, existing centralized data in `src/lib/site-data.ts`.

---

## Scope Check

This plan covers one cohesive release: homepage launch card + native tool previews + stronger Seed and Stock/Weather pages. It does not include a full value calculator, iframe embed, live stock integration, or external data sync.

## File Structure

- Modify: `src/lib/site-data.ts`
  - Add typed data for game launch, seed recommendations, tool entry cards, and weather quick checks.
  - Extend `StockSignal.category` to include `Weather`.
  - Keep all uncertain community-derived facts labeled.
- Create: `src/app/copy-code-button.tsx`
  - Small client component for copying the current code.
  - The code remains visible and selectable if JavaScript fails.
- Modify: `src/app/layout.tsx`
  - Tune primary nav toward `Play`, `Codes`, `Stock`, `Seeds`, `Weather`, `Guides`.
- Modify: `src/app/page.tsx`
  - Replace the current image-heavy search hero with balanced game launch + tool cards.
  - Add current code strip and tool entry grid.
  - Keep lower SEO sections from the existing homepage.
- Modify: `src/app/stock-tracker/page.tsx`
  - Add stock/weather quick check section using typed data.
  - Keep prediction and signal disclaimer language.
- Modify: `src/app/guides/[slug]/page.tsx`
  - Render an enhanced seed tier section only for `seeds-tier-list`.
- Modify: `src/app/globals.css`
  - Add responsive styles for launch hero, code strip, native tool cards, seed tier lanes, and quick check modules.

Before touching implementation code, re-read the relevant local Next docs already identified for this repo:

```bash
sed -n '1,220p' node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md
sed -n '1,220p' node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md
sed -n '1,220p' node_modules/next/dist/docs/01-app/01-getting-started/12-images.md
sed -n '1,220p' node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md
```

Expected: these confirm App Router pages/layouts, `Link`, `Image`, and metadata conventions for Next 16.

### Task 1: Centralize Launch, Seed, Tool, and Weather Data

**Files:**
- Modify: `src/lib/site-data.ts`

- [ ] **Step 1: Capture the baseline type state**

Run:

```bash
pnpm exec tsc --noEmit
```

Expected: PASS. If the command is unavailable, use:

```bash
npm exec tsc -- --noEmit
```

- [ ] **Step 2: Add typed launch and tool data**

In `src/lib/site-data.ts`, add this block after `discordInviteUrl`:

```ts
export const gameLaunch = {
  title: "Play Grow a Garden 2",
  description:
    "Open Grow a Garden 2, then use this hub for codes, seed choices, stock signals, weather events, and guide routes.",
  playUrl: "https://www.roblox.com/",
  playLabel: "Play on Roblox",
  lastReviewed: "July 7, 2026",
  disclaimer: "Fan-made guide hub. Not affiliated with Roblox or the game developers.",
} as const;

export type SeedRecommendationTier = "S" | "A" | "B" | "Starter";

export type SeedRecommendation = {
  name: string;
  tier: SeedRecommendationTier;
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythic" | "Super" | "Pack seed";
  source: string;
  useCase: "Beginner cash" | "Midgame income" | "Late-game upside" | "Event or mutation play";
  confidence: "Verified" | "Reported" | "Unconfirmed";
  note: string;
};

export const seedRecommendations: SeedRecommendation[] = [
  {
    name: "Mushroom",
    tier: "S",
    rarity: "Epic",
    source: "Seed shop reports",
    useCase: "Late-game upside",
    confidence: "Reported",
    note: "High-value target when stock appears, but do not plan around exact value without current in-game checks.",
  },
  {
    name: "Dragon's Breath",
    tier: "S",
    rarity: "Super",
    source: "Community stock predictions",
    useCase: "Event or mutation play",
    confidence: "Reported",
    note: "Useful for reminder windows; confirm in-game before spending or trading.",
  },
  {
    name: "Cherry",
    tier: "A",
    rarity: "Legendary",
    source: "Community stock predictions",
    useCase: "Midgame income",
    confidence: "Reported",
    note: "Good watchlist seed because predictions exist, but confidence remains lower than verified stock.",
  },
  {
    name: "Green Bean",
    tier: "A",
    rarity: "Epic",
    source: "TEAMGREENBEAN code reward",
    useCase: "Beginner cash",
    confidence: "Verified",
    note: "Current code reward path makes this an easy first seed to highlight.",
  },
  {
    name: "Carrot",
    tier: "Starter",
    rarity: "Common",
    source: "Starter seed shop",
    useCase: "Beginner cash",
    confidence: "Reported",
    note: "Use cheap starter crops to keep plots active before waiting for rare stock.",
  },
  {
    name: "Strawberry",
    tier: "Starter",
    rarity: "Common",
    source: "Starter seed shop",
    useCase: "Beginner cash",
    confidence: "Reported",
    note: "Better as cash flow filler than as a late-game target.",
  },
];

export const homepageToolEntries = [
  {
    title: "Seed Tier List",
    href: "/guides/seeds-tier-list",
    description: "Compare seed tiers by rarity, source, use case, and confidence before spending.",
    statusLabel: "Native tool",
  },
  {
    title: "Stock Tracker",
    href: "/stock-tracker",
    description: "Check reported seed, gear, pet, event, trading, and weather signals with freshness labels.",
    statusLabel: "Freshness labels",
  },
  {
    title: "Weather Events",
    href: "/guides/weather-events",
    description: "Plan around weather and mutation windows without treating reports as guaranteed live state.",
    statusLabel: "Event guide",
  },
  {
    title: "Codes",
    href: "/codes",
    description: "See working, watched, and expired Grow a Garden 2 codes with checked dates.",
    statusLabel: "Checked code",
  },
] as const;

export const weatherQuickChecks = [
  {
    event: "Night cycle",
    status: "Verified",
    action: "Protect high-value crops before night stealing windows.",
  },
  {
    event: "Weather mutations",
    status: "Reported",
    action: "Keep spare plots ready and verify the event effect in-game.",
  },
  {
    event: "Admin Abuse events",
    status: "Unconfirmed",
    action: "Treat timing chatter as a watch signal until an in-game timer appears.",
  },
] as const;
```

- [ ] **Step 3: Extend `StockSignal.category`**

Find `export type StockSignal = {` and update the category union:

```ts
category: "Seeds" | "Gear" | "Pets" | "Events" | "Trading" | "Weather";
```

- [ ] **Step 4: Add one weather stock signal**

Append this object to `stockSignals` after the `Trading values` object:

```ts
{
  item: "Weather mutation windows",
  category: "Weather",
  status: "Reported",
  lastSeen: "June 2026 launch guide demand",
  sourceType: "Weather guide and community alerts",
  action: "Use weather as a reminder to check crops and mutation timing, not as guaranteed live state.",
  note: "Weather and stock searches overlap because mutation windows can change whether a seed is worth planting now.",
},
```

- [ ] **Step 5: Update `toolCards` for search coverage**

Replace the existing `toolCards` array with:

```ts
export const toolCards = [
  {
    title: "Codes Tracker",
    href: "/codes",
    description: "Grow a Garden 2 codes and GAG2 codes: working code first, watchlist codes separated, and redeem troubleshooting.",
    status: "Verified",
    keywords: ["codes", "gag2 codes", "gag 2 codes", "grow a garden 2 codes", "redeem"],
  },
  {
    title: "Seed Tier List",
    href: "/guides/seeds-tier-list",
    description: "Grow a Garden 2 seed tier list with rarity, source, use case, and confidence labels.",
    status: "Native tool",
    keywords: ["seeds", "seed tier list", "gag2 seeds", "grow a garden 2 seeds", "best seeds", "plants"],
  },
  {
    title: "Stock Tracker",
    href: "/stock-tracker",
    description: "Grow a Garden 2 stock, GAG2 stock notifier signals, pets, events, trading, weather, and freshness labels.",
    status: "Signals",
    keywords: ["stock", "notifier", "stock notifier", "gag2 stock", "gag 2 stock", "weather", "gag2 stock notifier", "grow a garden 2 stock notifier"],
  },
  {
    title: "Guide Directory",
    href: "/guides",
    description: "Grow a Garden 2 guides and GAG2 guides grouped by real search intent.",
    status: "Index",
    keywords: ["gag 2", "gag2", "grow a garden 2", "gag2 guides", "grow a garden 2 guides", "guides"],
  },
  {
    title: "Community Questions",
    href: "/community-questions",
    description: "Grow a Garden 2 Discord and GAG2 community questions from recent player demand.",
    status: "Research",
    keywords: ["discord", "grow a garden 2 discord", "gag2 discord", "community", "questions", "updates"],
  },
];
```

- [ ] **Step 6: Run type check**

Run:

```bash
pnpm exec tsc --noEmit
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add src/lib/site-data.ts
git commit -m "Add homepage tool data"
```

### Task 2: Add Copy Button and Navigation Labels

**Files:**
- Create: `src/app/copy-code-button.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create progressive copy client component**

Create `src/app/copy-code-button.tsx`:

```tsx
"use client";

import { useState } from "react";

type CopyCodeButtonProps = {
  code: string;
};

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="copy-code-button" type="button" onClick={copyCode}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
```

- [ ] **Step 2: Run type check for the client component**

Run:

```bash
pnpm exec tsc --noEmit
```

Expected: PASS.

- [ ] **Step 3: Update header navigation**

In `src/app/layout.tsx`, replace the `<nav aria-label="Primary navigation">` links with:

```tsx
<nav aria-label="Primary navigation">
  <Link href="/">Play</Link>
  <Link href="/codes">Codes</Link>
  <Link href="/stock-tracker">Stock</Link>
  <Link href="/guides/seeds-tier-list">Seeds</Link>
  <Link href="/guides/weather-events">Weather</Link>
  <Link href="/guides">Guides</Link>
</nav>
```

- [ ] **Step 4: Run lint and type check**

Run:

```bash
pnpm run lint
pnpm exec tsc --noEmit
```

Expected: both PASS.

- [ ] **Step 5: Commit**

```bash
git add src/app/copy-code-button.tsx src/app/layout.tsx
git commit -m "Add copy button and tool nav"
```

### Task 3: Rebuild Homepage as Balanced Launch and Tools

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update homepage imports**

In `src/app/page.tsx`, add the copy component and new data imports:

```tsx
import { CopyCodeButton } from "@/app/copy-code-button";
```

Include these in the `@/lib/site-data` import:

```ts
gameLaunch,
homepageToolEntries,
seedRecommendations,
stockSignals,
weatherQuickChecks,
```

- [ ] **Step 2: Replace the hero section**

Replace the current `<section className="hero-section home-hero">...</section>` with:

```tsx
<section className="launch-hero" id="play">
  <div className="page-shell launch-hero-grid">
    <article className="game-launch-card" aria-labelledby="game-launch-title">
      <div className="game-launch-visual" aria-hidden="true">
        <span className="game-sky" />
        <span className="game-plot game-plot-a" />
        <span className="game-plot game-plot-b" />
        <span className="game-plot game-plot-c" />
      </div>
      <div className="game-launch-copy">
        <p className="guide-meta">Reviewed {gameLaunch.lastReviewed}</p>
        <h1 id="game-launch-title">{gameLaunch.title}</h1>
        <p>{gameLaunch.description}</p>
        <div className="launch-actions">
          <a className="button primary" href={gameLaunch.playUrl} rel="noopener noreferrer" target="_blank">
            {gameLaunch.playLabel}
          </a>
          <a className="button secondary" href={discordInviteUrl} rel="noopener noreferrer" target="_blank">
            Join Discord
          </a>
        </div>
        <small>{gameLaunch.disclaimer}</small>
      </div>
    </article>

    <aside className="native-tool-stack" aria-label="Grow a Garden 2 quick tools">
      <section className="native-tool-card seed-finder-card" aria-labelledby="seed-finder-title">
        <span className="tool-badge">Seed Finder</span>
        <h2 id="seed-finder-title">Find the right seed to plant next</h2>
        <div className="seed-chip-grid">
          {seedRecommendations.slice(0, 4).map((seed) => (
            <Link href="/guides/seeds-tier-list" key={seed.name}>
              <strong>{seed.name}</strong>
              <small>{seed.tier} tier · {seed.rarity}</small>
            </Link>
          ))}
        </div>
        <Link className="tool-card-link" href="/guides/seeds-tier-list">
          Open seed tier list
        </Link>
      </section>

      <section className="native-tool-card quick-check-card" aria-labelledby="quick-check-title">
        <span className="tool-badge">Stock / Weather</span>
        <h2 id="quick-check-title">Check signals before spending</h2>
        <div className="quick-signal-list">
          {stockSignals.slice(0, 2).map((signal) => (
            <Link href="/stock-tracker" key={signal.item}>
              <strong>{signal.item}</strong>
              <small>{signal.category} · {signal.status}</small>
            </Link>
          ))}
          {weatherQuickChecks.slice(0, 1).map((check) => (
            <Link href="/guides/weather-events" key={check.event}>
              <strong>{check.event}</strong>
              <small>Weather · {check.status}</small>
            </Link>
          ))}
        </div>
        <Link className="tool-card-link" href="/stock-tracker">
          Open stock and weather checks
        </Link>
      </section>
    </aside>
  </div>
</section>
```

- [ ] **Step 3: Add current code strip after the hero**

Add this immediately after the launch hero:

```tsx
<section className="page-shell current-code-strip" aria-labelledby="current-code-title">
  <div>
    <span className="tool-badge">Current code</span>
    <h2 id="current-code-title">{currentCodes[0]?.code}</h2>
    <p>
      {currentCodes[0]?.reward} · Checked {currentCodes[0]?.checkedAt}
    </p>
  </div>
  <div className="current-code-actions">
    {currentCodes[0] ? <CopyCodeButton code={currentCodes[0].code} /> : null}
    <Link className="button secondary" href="/codes">
      View all codes
    </Link>
  </div>
</section>
```

- [ ] **Step 4: Replace the dashboard row with tool entry grid**

Replace the existing `<section className="page-shell dashboard-row" aria-label="Codes and tools">...</section>` with:

```tsx
<section className="page-shell tool-entry-grid" aria-labelledby="homepage-tools">
  <div className="mini-section-title">
    <h2 id="homepage-tools">Grow a Garden 2 tools</h2>
    <Link href="/guides">Browse all guides</Link>
  </div>
  <div className="tool-entry-cards">
    {homepageToolEntries.map((tool) => (
      <Link className="tool-entry-card" href={tool.href} key={tool.title}>
        <span className="tool-badge">{tool.statusLabel}</span>
        <h3>{tool.title}</h3>
        <p>{tool.description}</p>
      </Link>
    ))}
  </div>
</section>
```

Leave the existing `trending-panel`, `intent-section`, `keyword-focus-panel`, and lower dashboard sections in place after this new grid.

- [ ] **Step 5: Add homepage CSS**

Append this block before the existing `@media (max-width: 880px)` section in `src/app/globals.css`:

```css
.launch-hero {
  border-bottom: 1px solid rgba(20, 87, 28, 0.16);
  background: linear-gradient(180deg, #f3fbef 0, #ffffff 100%);
  padding: 42px 0 24px;
}

.launch-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.72fr);
  gap: 18px;
  align-items: stretch;
}

.game-launch-card,
.native-tool-card,
.current-code-strip,
.tool-entry-card {
  border: 1px solid #cfdcd4;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 12px 28px rgba(28, 70, 40, 0.08);
}

.game-launch-card {
  display: grid;
  grid-template-columns: minmax(280px, 0.88fr) minmax(0, 1fr);
  overflow: hidden;
}

.game-launch-visual {
  position: relative;
  min-height: 420px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.2), transparent 48%),
    linear-gradient(180deg, #bfefff 0 46%, #78c567 46% 100%);
}

.game-launch-visual::before {
  position: absolute;
  right: 28px;
  bottom: 36px;
  left: 28px;
  height: 132px;
  border-radius: 8px;
  background: repeating-linear-gradient(90deg, #6d4325 0 52px, #7d5230 52px 104px);
  content: "";
}

.game-sky,
.game-plot {
  position: absolute;
  z-index: 1;
  display: block;
}

.game-sky {
  top: 34px;
  right: 38px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #ffd75a;
  box-shadow: 0 0 0 14px rgba(255, 215, 90, 0.22);
}

.game-plot {
  bottom: 92px;
  border-radius: 8px;
}

.game-plot-a {
  left: 74px;
  width: 42px;
  height: 88px;
  background: var(--orange);
}

.game-plot-b {
  left: 160px;
  width: 84px;
  height: 62px;
  background: #248f3c;
  clip-path: polygon(50% 0, 100% 58%, 66% 58%, 66% 100%, 34% 100%, 34% 58%, 0 58%);
}

.game-plot-c {
  right: 84px;
  width: 56px;
  height: 94px;
  border-radius: 50% 50% 42% 42%;
  background: #52b75b;
}

.game-launch-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 34px;
}

.game-launch-copy h1 {
  color: #0d1d12;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 0.96;
}

.game-launch-copy p {
  margin-top: 18px;
  font-size: 17px;
}

.game-launch-copy small {
  display: block;
  margin-top: 18px;
  color: #5c7062;
  font-size: 12px;
  font-weight: 750;
  line-height: 1.45;
}

.launch-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.native-tool-stack {
  display: grid;
  gap: 18px;
}

.native-tool-card {
  padding: 22px;
}

.tool-badge {
  color: var(--green);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.native-tool-card h2,
.current-code-strip h2,
.tool-entry-card h3 {
  margin-top: 8px;
  color: #142218;
  line-height: 1.1;
}

.native-tool-card h2 {
  font-size: 24px;
}

.seed-chip-grid,
.quick-signal-list {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

.seed-chip-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.seed-chip-grid a,
.quick-signal-list a {
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #f8fcf6;
  padding: 11px;
}

.seed-chip-grid strong,
.quick-signal-list strong {
  display: block;
  color: #17281d;
  font-size: 14px;
}

.seed-chip-grid small,
.quick-signal-list small {
  display: block;
  margin-top: 4px;
  color: #5d715f;
  font-size: 12px;
  font-weight: 800;
}

.tool-card-link {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  margin-top: 16px;
  color: var(--green-strong);
  font-size: 14px;
  font-weight: 900;
}

.current-code-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 18px;
  padding: 18px 22px;
}

.current-code-strip h2 {
  font-size: 30px;
}

.current-code-strip p {
  margin-top: 4px;
}

.current-code-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.copy-code-button {
  min-height: 46px;
  border: 0;
  border-radius: 8px;
  background: var(--green);
  padding: 0 18px;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 900;
}

.tool-entry-grid {
  margin-top: 18px;
}

.tool-entry-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.tool-entry-card {
  display: block;
  min-height: 178px;
  padding: 18px;
}

.tool-entry-card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
}
```

- [ ] **Step 6: Add mobile CSS**

Inside the existing `@media (max-width: 880px)` block, add:

```css
.launch-hero-grid,
.game-launch-card,
.tool-entry-cards {
  grid-template-columns: 1fr;
}

.game-launch-visual {
  min-height: 240px;
}

.game-launch-copy {
  padding: 24px;
}

.current-code-strip {
  align-items: flex-start;
  flex-direction: column;
}

.current-code-actions,
.current-code-actions .button,
.copy-code-button {
  width: 100%;
}

.seed-chip-grid {
  grid-template-columns: 1fr;
}
```

- [ ] **Step 7: Run checks**

Run:

```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

Expected: all PASS.

- [ ] **Step 8: Commit**

```bash
git add src/app/page.tsx src/app/globals.css
git commit -m "Rework homepage around launch and tools"
```

### Task 4: Strengthen Seed Tier and Stock/Weather Pages

**Files:**
- Modify: `src/app/guides/[slug]/page.tsx`
- Modify: `src/app/stock-tracker/page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Import seed data into guide page**

In `src/app/guides/[slug]/page.tsx`, include `seedRecommendations` in the site-data import:

```ts
seedRecommendations,
```

- [ ] **Step 2: Add seed tier section to seed guide only**

After the guide body section in `src/app/guides/[slug]/page.tsx`, before `</article>`, add:

```tsx
{guide.slug === "seeds-tier-list" ? (
  <section className="seed-tool-section" aria-labelledby="seed-tool-title">
    <div className="mini-section-title">
      <h2 id="seed-tool-title">Seed tier quick tool</h2>
      <Link href="/stock-tracker">Check stock signals</Link>
    </div>
    <div className="seed-tier-lanes">
      {(["S", "A", "B", "Starter"] as const).map((tier) => {
        const tierSeeds = seedRecommendations.filter((seed) => seed.tier === tier);

        return (
          <section className="seed-tier-lane" key={tier}>
            <div className="seed-tier-label">
              <strong>{tier}</strong>
              <span>{tier === "Starter" ? "Starter picks" : `${tier} tier`}</span>
            </div>
            <div className="seed-tier-items">
              {tierSeeds.map((seed) => (
                <article className="seed-tier-item" key={seed.name}>
                  <span className="tool-badge">{seed.confidence}</span>
                  <h3>{seed.name}</h3>
                  <p>{seed.note}</p>
                  <small>{seed.rarity} · {seed.source} · {seed.useCase}</small>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  </section>
) : null}
```

- [ ] **Step 3: Import weather data into stock page**

In `src/app/stock-tracker/page.tsx`, include `weatherQuickChecks` in the site-data import:

```ts
weatherQuickChecks,
```

- [ ] **Step 4: Add quick check section to stock page**

Add this section after the hero in `src/app/stock-tracker/page.tsx`:

```tsx
<section className="table-section" aria-labelledby="stock-weather-quick-check">
  <h2 id="stock-weather-quick-check">Stock / Weather Quick Check</h2>
  <p>
    Use these Grow a Garden 2 stock and weather checks as reminders before
    planting, trading, or spending. Reported and unconfirmed signals still need
    in-game confirmation.
  </p>
  <div className="quick-check-grid">
    {stockSignals.slice(0, 4).map((signal) => (
      <article className="tracker-row quick-check-item" key={signal.item}>
        <span className="guide-meta">
          {signal.category} · {signal.status} · {signal.lastSeen}
        </span>
        <h3>{signal.item}</h3>
        <p>{signal.action}</p>
        <small>{signal.sourceType}: {signal.note}</small>
      </article>
    ))}
    {weatherQuickChecks.map((check) => (
      <article className="tracker-row quick-check-item" key={check.event}>
        <span className="guide-meta">Weather · {check.status}</span>
        <h3>{check.event}</h3>
        <p>{check.action}</p>
      </article>
    ))}
  </div>
</section>
```

- [ ] **Step 5: Add page CSS**

Append this before the existing media query in `src/app/globals.css`:

```css
.seed-tool-section {
  margin-top: 42px;
}

.seed-tier-lanes {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.seed-tier-lane {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #fff;
  padding: 14px;
}

.seed-tier-label {
  display: grid;
  align-content: start;
  gap: 6px;
}

.seed-tier-label strong {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 8px;
  background: #eaf6e5;
  color: var(--green-strong);
  font-size: 24px;
}

.seed-tier-label span {
  color: #1c3022;
  font-weight: 900;
}

.seed-tier-items,
.quick-check-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.seed-tier-item {
  border: 1px solid var(--border);
  border-radius: 8px;
  background: #f8fcf6;
  padding: 16px;
}

.seed-tier-item h3 {
  margin-top: 8px;
  color: #18301f;
  font-size: 20px;
}

.seed-tier-item p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
}

.seed-tier-item small {
  display: block;
  margin-top: 12px;
  color: #5d715f;
  font-size: 12px;
  font-weight: 800;
}

.quick-check-grid {
  margin-top: 18px;
}

.quick-check-item {
  min-height: 180px;
}
```

Inside the existing `@media (max-width: 880px)` block, add:

```css
.seed-tier-lane,
.seed-tier-items,
.quick-check-grid {
  grid-template-columns: 1fr;
}
```

- [ ] **Step 6: Run checks**

Run:

```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

Expected: all PASS.

- [ ] **Step 7: Commit**

```bash
git add 'src/app/guides/[slug]/page.tsx' src/app/stock-tracker/page.tsx src/app/globals.css
git commit -m "Strengthen seed and stock tool pages"
```

### Task 5: Production QA and Final Fixes

**Files:**
- Modify only files needed to fix verification failures.

- [ ] **Step 1: Run full verification**

Run:

```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

Expected: all PASS.

- [ ] **Step 2: Start production server**

Run:

```bash
pnpm exec next start -p 3002
```

Expected: server starts at `http://localhost:3002`.

- [ ] **Step 3: Verify key routes respond**

In a second terminal, run:

```bash
curl -I http://localhost:3002/
curl -I http://localhost:3002/codes
curl -I http://localhost:3002/stock-tracker
curl -I http://localhost:3002/guides/seeds-tier-list
```

Expected: each response includes `HTTP/1.1 200 OK` or `HTTP/2 200`.

- [ ] **Step 4: Verify homepage content is present in HTML**

Run:

```bash
curl -s http://localhost:3002/ | rg "Play Grow a Garden 2|TEAMGREENBEAN|Seed Tier List|Stock Tracker|Weather Events"
```

Expected: all listed phrases appear.

- [ ] **Step 5: Verify stock/weather labels remain conservative**

Run:

```bash
curl -s http://localhost:3002/stock-tracker | rg "Reported|Unconfirmed|in-game confirmation|not guaranteed"
```

Expected: confidence labels and confirmation warning appear.

- [ ] **Step 6: Verify seed page tool content**

Run:

```bash
curl -s http://localhost:3002/guides/seeds-tier-list | rg "Seed tier quick tool|Mushroom|Green Bean|Starter picks"
```

Expected: all listed phrases appear.

- [ ] **Step 7: Browser QA desktop and mobile**

Use the existing browser QA approach for:

- Desktop: `http://localhost:3002/`
- Mobile viewport: `390x844` for `/`, `/stock-tracker`, and `/guides/seeds-tier-list`

Expected:

- No horizontal overflow.
- Game launch card and tool cards stack correctly on mobile.
- `Play on Roblox`, `Join Discord`, `View all codes`, `Open seed tier list`, and `Open stock and weather checks` links are visible.
- Copy button does not hide the code if JavaScript fails.

- [ ] **Step 8: Stop production server**

Stop the `next start` process with `Ctrl-C`.

- [ ] **Step 9: Commit final fixes if any**

If verification required edits:

```bash
git add src/app src/lib
git commit -m "Fix homepage tools verification issues"
```

If no edits were needed, do not create an empty commit.

## Self-Review

- Spec coverage:
  - Homepage launch card: Task 3.
  - Native Seed Finder and Stock / Weather quick tools: Tasks 1, 3, and 4.
  - Current code strip and copy behavior: Tasks 2 and 3.
  - Seed tier page strengthening: Task 4.
  - Stock/weather trust labels: Tasks 1 and 4.
  - No iframe and no full calculator: enforced by scope and code tasks.
  - Verification: Task 5.
- Placeholder scan:
  - The plan does not use unfinished implementation placeholders.
  - The only open business value is `gameLaunch.playUrl`, intentionally set to `https://www.roblox.com/` until the exact game URL is provided.
- Type consistency:
  - `gameLaunch`, `seedRecommendations`, `homepageToolEntries`, and `weatherQuickChecks` are defined before use.
  - `StockSignal.category` includes `Weather` before weather data is rendered.
  - The copy button class name matches the CSS selector.
