# Game Launch Card and Native Tools Homepage Design

## Context

The site is currently a Grow a Garden 2 guide hub with strong content surfaces for codes, stock signals, guide categories, search intent, and community updates. The new homepage direction should improve tool-style SEO and user utility without embedding the game in an iframe.

The selected direction is **Balanced launch + tools**:

- The homepage keeps a visible game launch card.
- The first screen also exposes native Seed Finder and Stock / Weather Quick Check tools.
- The page remains indexable and useful even if the external game link changes.

## Goals

- Make the homepage useful within the first viewport: play the game, check seeds, check stock/weather, or copy the current code.
- Add tool-style SEO coverage for seed tier, stock tracker, weather events, and codes intent.
- Keep factual trust labels for any fast-changing or community-derived information.
- Avoid iframe risk, including blocked embeds, blank first screens, mobile control problems, and weak indexable content.

## Non-Goals

- Do not embed the game in an iframe.
- Do not build a full plant value calculator in the first release.
- Do not claim live or official stock data unless the source and freshness support it.
- Do not copy the reference site's full tool matrix in one pass.

## Homepage Structure

### Header

Keep the existing sticky header pattern, but tune navigation toward tools:

- `Play`
- `Codes`
- `Stock`
- `Seeds`
- `Weather`
- `Guides`

The exact labels should stay compact on mobile. If space is tight, prioritize `Play`, `Codes`, `Stock`, and `Seeds`.

### Hero Layout

Use a two-column desktop hero and a stacked mobile hero.

Left column: **Game launch card**

- Title: `Play Grow a Garden 2`
- Short copy: one sentence explaining that players can open the game and use this page for codes, seeds, stock, and weather checks.
- Primary CTA: `Play on Roblox`
- Secondary CTA: `Join Discord`
- Supporting metadata: unofficial fan-made note and last-reviewed date.
- Visual: a real game image if available; otherwise use the current garden visual style as a temporary native illustration.

Right column: **Native tool cards**

- `Seed Finder`
  - Search or filter by seed name.
  - Show compact seed recommendations by tier, rarity, source, and use case.
  - Link to `/guides/seeds-tier-list` for the full tool page.
- `Stock / Weather Quick Check`
  - Show a short list of current signals with confidence labels.
  - Include weather/event links and freshness copy.
  - Link to `/stock-tracker` and `/guides/weather-events`.

### Current Code Strip

Place a full-width strip immediately below the hero:

- Highlight the current working code, currently `TEAMGREENBEAN`.
- Include reward and checked date.
- Include a copy button if implemented client-side; otherwise include a clear code block and `View all codes` link.
- Link to `/codes`.

### Tool Entry Grid

Add four native entry modules below the code strip:

- `Seed Tier List`
- `Stock Tracker`
- `Weather Events`
- `Codes`

Each module should include:

- One practical player-focused sentence.
- A status or freshness label where relevant.
- A direct link to the destination page.

### Supporting SEO Content

Below the tool grid, keep or reorganize existing indexable guide content:

- Player needs this week.
- Keyword intent and guide categories.
- Latest guides and updates.
- FAQ entries for play, seeds, stock/weather freshness, and codes.

The homepage should still read as a guide hub after the first viewport, but the first viewport should feel like a usable tool surface.

## Page Scope

### Homepage

Update the homepage to use the selected balanced layout. The homepage should reuse existing data where possible:

- `currentCodes`
- `stockSignals`
- `stockPredictions`
- guide and category arrays
- page visual theme data if it still fits

If new data is needed for seed recommendations, add it to the central site data module rather than hardcoding it into the component.

### Seed Tier Page

Strengthen `/guides/seeds-tier-list` into a more tool-like page:

- Include tier groupings.
- Include seed attributes such as rarity, source, use case, and confidence.
- Add clear beginner, midgame, and late-game recommendations.
- Avoid exact value claims unless the data source is reliable.

This page can remain server-rendered for the first release. Filtering can be simple static grouping first; full client-side search can wait unless it is low-cost.

### Stock Tracker Page

Strengthen `/stock-tracker` with a `Stock / Weather Quick Check` section:

- Group signals by Seeds, Gear, Pets, Events, Trading, and Weather.
- Keep `Verified`, `Reported`, and `Unconfirmed` labels.
- Add a short rule explaining that reported or predicted stock must be confirmed in-game.

## Data Model

Prefer adding small typed arrays in `src/lib/site-data.ts`:

- `gameLaunch`
  - `title`
  - `description`
  - `playUrl`
  - `discordUrl`
  - `lastReviewed`
  - `disclaimer`
- `seedRecommendations`
  - `name`
  - `tier`
  - `rarity`
  - `source`
  - `useCase`
  - `confidence`
  - `note`
- `toolEntryCards`
  - `title`
  - `href`
  - `description`
  - `statusLabel`

Keep community-derived or uncertain values labeled. Do not present predictions as confirmed live state.

## Interaction Design

- `Play on Roblox` opens the game URL directly in a new tab or normal navigation depending on the URL pattern and site policy.
- `Join Discord` uses the existing Discord invite.
- `Seed Finder` first release can be static links and grouped recommendations. If a search input is added, it should be a small client component, isolated from the server-rendered page.
- Copy-code behavior should be progressive enhancement. If JavaScript is unavailable, the code remains visible and selectable.

## Accessibility

- The game launch card needs a real link, not only a visual button.
- Buttons and links must have clear accessible names.
- The code strip should not rely only on color to show code status.
- Tool cards should use headings and links so keyboard users can scan them.
- Mobile layout should avoid horizontal overflow and keep tap targets at least 44px high where practical.

## SEO

Use native HTML for all key content. The first release should support these intents:

- `Grow a Garden 2`
- `Grow a Garden 2 codes`
- `Grow a Garden 2 stock tracker`
- `Grow a Garden 2 weather events`
- `Grow a Garden 2 seed tier list`
- `GAG2 seeds`
- `GAG2 stock`

Structured data can stay conservative:

- Keep website and item list schema where accurate.
- Add FAQ schema only for factual FAQ content.
- Do not add software/game schema that makes unsupported official or live-data claims.

## Testing and Verification

Before implementation is considered complete:

- Run TypeScript and lint checks used by the repo.
- Run a production build.
- Verify homepage, `/codes`, `/stock-tracker`, and `/guides/seeds-tier-list` render correctly.
- Check desktop and mobile viewport layout for no horizontal overflow.
- Confirm the code strip, game launch link, Seed Finder link, and Stock / Weather links work.
- Confirm uncertain stock or prediction content remains clearly labeled.

## Open Decisions

- The exact Roblox game URL must be provided or verified before implementing the `Play on Roblox` CTA.
- A real game image should be used if available; otherwise the first implementation can use the site's existing native garden visual style.
