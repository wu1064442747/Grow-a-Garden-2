export const siteUrl = "https://growagarden-2.online";

export const siteName = "Grow a Garden 2 Guide";

export const discordInviteUrl = "https://discord.gg/HmPjaSEd";

export const gameLaunch = {
  title: "Open Grow a Garden 2 on Roblox",
  description:
    "Open the Grow a Garden 2 Roblox page, then use this hub for codes, seed choices, stock signals, weather events, and guide routes.",
  playUrl: "https://www.roblox.com/games/97598239454123/Grow-a-Garden-2",
  playLabel: "Open Roblox page",
  lastReviewed: "July 7, 2026",
  disclaimer:
    "Fan-made guide hub. Not affiliated with Roblox or the game developers. Roblox availability can change by region, server, or experience status.",
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

export const pageKeywordFocus = [
  {
    page: "Homepage",
    keyword: "GAG2 / Grow a Garden 2",
    href: "/",
    note: "These spelling variants share the same homepage intent.",
  },
  {
    page: "Codes",
    keyword: "Grow a Garden 2 codes / GAG2 codes",
    href: "/codes",
    note: "Players want current rewards first, then expired and watched code history.",
  },
  {
    page: "Stock Tracker",
    keyword: "Grow a Garden 2 stock / GAG2 stock notifier",
    href: "/stock-tracker",
    note: "Notifier searches need labels, not unsupported live-stock claims.",
  },
  {
    page: "Weather",
    keyword: "Grow a Garden 2 weather notifier",
    href: "/guides/weather-events",
    note: "Weather intent belongs with events, mutation timing, and freshness checks.",
  },
  {
    page: "Discord",
    keyword: "Grow a Garden 2 Discord",
    href: discordInviteUrl,
    note: "Community searches should land on alerts while reports stay labeled.",
  },
];

export type CodeStatus = "Working" | "Expired" | "Watching";

export type GameCode = {
  code: string;
  reward: string;
  status: CodeStatus;
  checkedAt: string;
  evidence: string;
  note: string;
};

export const currentCodes: GameCode[] = [
  {
    code: "TEAMGREENBEAN",
    reward: "3 Green Bean Seeds",
    status: "Working",
    checkedAt: "June 15, 2026",
    evidence:
      "Discord codes channel listed TEAMGREENBEAN as the full active list on June 13, 2026; kept as the only active code after review.",
    note: "Copy the code exactly. If it fails, rejoin a fresh server and try once before treating it as expired.",
  },
];

export const watchedCodes: GameCode[] = [
  {
    code: "GARDEN2LAUNCH",
    reward: "Unverified launch reward",
    status: "Watching",
    checkedAt: "June 14, 2026",
    evidence: "Appears in speculative code chatter, but not in reliable current active-code lists.",
    note: "Do not present this as working until it is verified in-game or by multiple current code trackers.",
  },
  {
    code: "GREENFINGERS",
    reward: "Unverified currency or seed reward",
    status: "Watching",
    checkedAt: "June 14, 2026",
    evidence: "Useful as a watchlist term only.",
    note: "Keep it out of the active table unless redemption is confirmed.",
  },
];

export const expiredCodes: GameCode[] = [
  {
    code: "bloodharvest",
    reward: "25 Emeralds",
    status: "Expired",
    checkedAt: "June 15, 2026",
    evidence: "Discord codes history shows it before the June 13 active-code reset.",
    note: "Keep it in the historical list only; do not promote it as active.",
  },
  {
    code: "100Million",
    reward: "25 Emeralds",
    status: "Expired",
    checkedAt: "June 15, 2026",
    evidence: "Discord codes history shows it before the June 13 active-code reset.",
    note: "Keep it in the historical list only; do not promote it as active.",
  },
  {
    code: "weaponupgrade",
    reward: "25 Emeralds",
    status: "Expired",
    checkedAt: "June 15, 2026",
    evidence: "Discord codes history shows it before the June 13 active-code reset.",
    note: "Keep it in the historical list only; do not promote it as active.",
  },
  {
    code: "newclasses",
    reward: "Unlisted reward",
    status: "Expired",
    checkedAt: "June 15, 2026",
    evidence: "Discord codes history shows it before the June 13 active-code reset.",
    note: "Useful for players checking old videos or posts.",
  },
  {
    code: "forest",
    reward: "Unlisted reward",
    status: "Expired",
    checkedAt: "June 15, 2026",
    evidence: "Discord codes history shows it before the June 13 active-code reset.",
    note: "Useful for players checking old videos or posts.",
  },
  {
    code: "forestpt2",
    reward: "Unlisted reward",
    status: "Expired",
    checkedAt: "June 15, 2026",
    evidence: "Discord codes history shows it before the June 13 active-code reset.",
    note: "Useful for players checking old videos or posts.",
  },
];

export const launchFacts = [
  "Grow a Garden 2 launch was announced for June 13, 2026 at 10:00 AM PST, with the Roblox event link shared in the community announcement channel.",
  "The community announcement channel marked the game as out on June 13, 2026, then noted that private servers were the only playable option at that launch moment.",
  "Recent social and video content clusters around five needs: working codes, beginner-to-endgame progression, secret methods, stock/event timing, and badges.",
  "The sequel loop adds day/night pressure, stealing, defense habits, guild rewards, and a fresh economy that players are still testing.",
  "Any stock, trading, or event note should be labeled as verified, reported, or unconfirmed because these topics expire quickly.",
];

export const searchDemand = [
  {
    title: "Working codes and redeem errors",
    href: "/codes",
    intent: "Players want the active code first, then proof that stale launch codes are not working.",
    pageType: "Daily-updated utility page",
  },
  {
    title: "Beginner to endgame route",
    href: "/guides/beginner-guide",
    intent: "High-view videos promise complete easy, mid, and endgame paths, so the site needs scannable steps.",
    pageType: "Evergreen guide with update notes",
  },
  {
    title: "Stock, events, and trading values",
    href: "/stock-tracker",
    intent: "Discord and social posts package live stock, values, notifier, and event timing together.",
    pageType: "Signal tracker with freshness labels",
  },
  {
    title: "Badges and achievements",
    href: "/guides/badges-achievements",
    intent: "Search results already show badge guides, and achievement completion is a clear follow-up after launch.",
    pageType: "Checklist guide",
  },
  {
    title: "Seeds, pets, and money methods",
    href: "/guides/seeds-tier-list",
    intent: "TikTok and YouTube hooks focus on secrets, billionaire methods, best plants, and best pets.",
    pageType: "Tables and tier explanations",
  },
];

export type KeywordIntent = {
  keyword: string;
  intent: string;
  target: string;
  href: string;
  action: string;
};

export const keywordIntentMap: KeywordIntent[] = [
  {
    keyword: "gag 2 / gag2 / grow a garden 2",
    intent: "The user is navigating to the sequel hub and wants a fast answer for what to do next.",
    target: "Homepage and guide index",
    href: "/guides",
    action: "Use the homepage for these spelling variants, then send players to codes, stock, weather, Discord, and beginner guides.",
  },
  {
    keyword: "grow a garden 2 codes / gag 2 codes",
    intent: "The user wants a working redeem code, stale-code filtering, and a quick fix if redemption fails.",
    target: "Codes page",
    href: "/codes",
    action: "Show the current active code first, then watchlist and expired history with checked dates.",
  },
  {
    keyword: "gag 2 stock / grow a garden 2 stock",
    intent: "The user wants seed, gear, pet, and event availability before spending or trading.",
    target: "Stock tracker",
    href: "/stock-tracker",
    action: "Use status labels so reported stock and predictions are not presented as guaranteed live data.",
  },
  {
    keyword: "gag 2 stock notifier / grow a garden 2 notifier",
    intent: "The user wants alerts, not a static article, and expects Discord-style community signals.",
    target: "Discord and stock tracker",
    href: "/stock-tracker",
    action: "Make the Discord CTA visible and explain that community alerts still need in-game confirmation.",
  },
  {
    keyword: "grow a garden 2 weather notifier",
    intent: "The user wants weather/event reminders because mutation windows change crop value quickly.",
    target: "Weather guide and stock tracker",
    href: "/guides/weather-events",
    action: "Point them to weather rules plus the stock/event signal page for freshness checks.",
  },
  {
    keyword: "grow a garden 2 discord",
    intent: "The user wants the community server for codes, stock alerts, reports, and update chatter.",
    target: "Community entry",
    href: discordInviteUrl,
    action: "Use a clear join button, then explain which pages summarize verified or labeled community signals.",
  },
  {
    keyword: "steam achievement manager",
    intent: "This is unrelated software intent, not a Grow a Garden 2 player query.",
    target: "No page target",
    href: "/guides",
    action: "Do not create off-topic content; keep site topical authority around Grow a Garden 2.",
  },
];

export const pageVisualThemes = {
  home: {
    className: "visual-home",
    eyebrow: "Search Hub",
    title: "Guide hub",
    caption: "Route sequel searches into codes, stock, weather, and Discord pages.",
  },
  codes: {
    className: "visual-codes",
    eyebrow: "GAG2 Codes",
    title: "Grow a Garden 2 codes",
    caption: "Working Grow a Garden 2 codes first, stale GAG2 codes below them.",
  },
  stock: {
    className: "visual-stock",
    eyebrow: "GAG2 Stock Notifier",
    title: "Grow a Garden 2 stock",
    caption: "GAG2 stock notifier signals for seeds, gear, pets, weather, and reports.",
  },
  guides: {
    className: "visual-guides",
    eyebrow: "GAG2 Guide Map",
    title: "Grow a Garden 2 guides",
    caption: "GAG2 guides for beginner, midgame, weather, stock, and completion tasks.",
  },
  community: {
    className: "visual-community",
    eyebrow: "Grow a Garden 2 Discord",
    title: "GAG2 community demand",
    caption: "Grow a Garden 2 Discord alerts turned into labeled codes, stock, and weather pages.",
  },
  search: {
    className: "visual-search",
    eyebrow: "GAG2 Intent Search",
    title: "Find the right page",
    caption: "Match GAG2, Grow a Garden 2, stock notifier, codes, Discord, or weather queries.",
  },
} as const;

export function getGuideVisualTheme(guide: Guide) {
  if (guide.slug === "weather-events" || guide.slug === "admin-abuse-stock-events") {
    return pageVisualThemes.stock;
  }

  if (guide.slug === "badges-achievements" || guide.slug === "known-issues") {
    return pageVisualThemes.community;
  }

  if (guide.slug === "beginner-guide" || guide.slug === "stealing-guide" || guide.slug === "guild-guide") {
    return pageVisualThemes.guides;
  }

  return pageVisualThemes.home;
}

export const playerQuestionClusters = [
  {
    title: "Codes and redeem checks",
    href: "/codes",
    signal:
      "Current June 2026 search results consistently surface TEAMGREENBEAN as the active code, while players still search for launch-code lists.",
    examples: ["What is the working code?", "Why did a launch code fail?", "Where do I redeem codes?"],
  },
  {
    title: "Beginner, midgame, endgame routing",
    href: "/guides/beginner-guide",
    signal:
      "High-engagement videos package the game as a complete route problem: first money, seed shop rhythm, expansion, stealing, and endgame methods.",
    examples: ["What should I do first?", "How do I get rich?", "What changes at night?"],
  },
  {
    title: "Stock, trading, and events",
    href: "/stock-tracker",
    signal:
      "Community hubs advertise stock notifiers, values, codes, and event alerts together, which means a static guide alone is not enough.",
    examples: ["Is Firefly in stock?", "What is a fair trade?", "When is the next event?"],
  },
  {
    title: "Badges, pets, and secrets",
    href: "/guides/badges-achievements",
    signal:
      "Players look for concrete completion lists and secret methods, not just general descriptions of game systems.",
    examples: ["How do I get every badge?", "Which pet is worth it?", "What secrets matter?"],
  },
];

export type StockSignalStatus = "Verified" | "Reported" | "Unconfirmed" | "Roadmap";

export type StockSignal = {
  item: string;
  category: "Seeds" | "Gear" | "Pets" | "Events" | "Trading" | "Weather";
  status: StockSignalStatus;
  lastSeen: string;
  sourceType: string;
  action: string;
  note: string;
};

export const stockSignals: StockSignal[] = [
  {
    item: "Seed shop rotation",
    category: "Seeds",
    status: "Reported",
    lastSeen: "June 2026 launch window",
    sourceType: "Video guide and player discussion",
    action: "Check every 5 minutes before spending on slow crops.",
    note: "Multiple beginner guides emphasize shop rhythm as the first progression bottleneck.",
  },
  {
    item: "Night stealing window",
    category: "Events",
    status: "Verified",
    lastSeen: "June 2026 launch guides",
    sourceType: "Gameplay guide videos",
    action: "Protect high-value plants before night or keep them away from obvious paths.",
    note: "Stealing is a core user question because it changes garden layout from cosmetic to economic.",
  },
  {
    item: "Firefly and rare stock alerts",
    category: "Pets",
    status: "Reported",
    lastSeen: "June 2026 community stock channels",
    sourceType: "Community stock signals",
    action: "Treat as an alert only; verify in-game before trading or spending.",
    note: "Short-lived stock reports expire too fast for a static page to call them live.",
  },
  {
    item: "Dragon Breath prediction",
    category: "Seeds",
    status: "Reported",
    lastSeen: "June 15, 2026 Discord prediction post",
    sourceType: "Community stock prediction",
    action: "Use this only as a historical June prediction example; do not treat it as current stock.",
    note: "Expired reported windows included June 15 13:20, June 16 18:55, and June 18 01:25; the channel warned predictions were not always accurate.",
  },
  {
    item: "Cherry prediction",
    category: "Seeds",
    status: "Reported",
    lastSeen: "June 15, 2026 Discord prediction post",
    sourceType: "Community stock prediction",
    action: "Use this only as a historical June prediction example; do not treat it as current stock.",
    note: "Expired reported windows included June 16 21:15 and June 16 00:35; one June 14 window was marked missed.",
  },
  {
    item: "Super Sprinkler prediction",
    category: "Gear",
    status: "Reported",
    lastSeen: "June 15, 2026 Discord prediction post",
    sourceType: "Community stock prediction",
    action: "Use this only as a historical June prediction example; do not treat it as current gear stock.",
    note: "Expired reported windows included June 14 05:35, June 14 08:20, and June 16 11:20.",
  },
  {
    item: "Trading values",
    category: "Trading",
    status: "Unconfirmed",
    lastSeen: "June 2026 Discord-style demand",
    sourceType: "Community value hubs",
    action: "Use value pages as a second opinion, not final pricing.",
    note: "Demand changes fast around new pets, Venom services, and event supply.",
  },
  {
    item: "Weather mutation windows",
    category: "Weather",
    status: "Reported",
    lastSeen: "June 2026 launch guide demand",
    sourceType: "Weather guide and community alerts",
    action: "Use weather as a reminder to check crops and mutation timing, not as guaranteed live state.",
    note: "Weather and stock searches overlap because mutation windows can change whether a seed is worth planting now.",
  },
];

export type StockPredictionStatus = "Historical";

export type StockPrediction = {
  item: string;
  category: "Seeds" | "Gear";
  status: StockPredictionStatus;
  windows: string[];
  note: string;
};

export const stockPredictions: StockPrediction[] = [
  {
    item: "Dragon Breath",
    category: "Seeds",
    status: "Historical",
    windows: ["Historical: June 15, 13:20", "Historical: June 16, 18:55", "Historical: June 18, 01:25"],
    note: "Expired June community prediction example. Do not treat as current stock.",
  },
  {
    item: "Cherry",
    category: "Seeds",
    status: "Historical",
    windows: ["Historical: June 16, 21:15", "Historical: June 16, 00:35"],
    note: "Expired June community prediction example. Do not treat as current stock.",
  },
  {
    item: "Super Sprinkler",
    category: "Gear",
    status: "Historical",
    windows: ["Historical: June 14, 05:35", "Historical: June 14, 08:20", "Historical: June 16, 11:20"],
    note: "Expired June community prediction example. Do not treat as current stock.",
  },
];

export type GuidePriority = "Start Here" | "High Demand" | "Tool";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  readingTime: string;
  category: string;
  priority: GuidePriority;
  keywords: string[];
  highlights: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const guides: Guide[] = [
  {
    slug: "beginner-guide",
    title: "Grow a Garden 2 Beginner Guide",
    description:
      "A practical Grow a Garden 2 beginner guide and GAG2 route for seeds, Sheckles, expansion, night stealing, defense, and guild rewards.",
    updatedAt: "June 14, 2026",
    readingTime: "8 min",
    category: "Starter Route",
    priority: "Start Here",
    keywords: ["beginner", "easy game", "mid game", "endgame", "money", "sheckles", "route"],
    highlights: [
      "First goal: create a repeatable harvest loop, not a perfect rare garden.",
      "Check the seed shop before every major spend because rotation timing shapes progression.",
      "Expand once your income can recover from a bad buy or night loss.",
      "Treat night defense as part of your economy, not a cosmetic choice.",
    ],
    sections: [
      {
        heading: "Easy game route",
        body: [
          "Start with cheap, fast crops and reinvest every harvest. New players lose time when they save too early for one expensive plant instead of building a garden that pays back every few minutes.",
          "Use this Grow a Garden 2 beginner guide as the GAG2 starting route: learn the loop, then branch into stock, weather, pets, and guild tasks.",
          "Use the first sessions to learn the seed shop rhythm, basic crop value, and where players can approach your garden at night. A stable loop matters more than one lucky purchase.",
        ],
      },
      {
        heading: "Midgame route",
        body: [
          "After income feels stable, split plots into three jobs: fast cash, event/mutation attempts, and safer high-value plants. That structure keeps you progressing even when stock or weather is not ideal.",
          "Expansion becomes worthwhile when you can refill the space quickly. If a new area sits empty, the Sheckles were probably better spent on repeat production first.",
        ],
      },
      {
        heading: "Endgame route",
        body: [
          "Endgame decisions should revolve around stock timing, pet utility, weather upside, and trading risk. The best route is not just the highest sell price; it is the route that survives stealing and takes advantage of rare events.",
          "Join an active guild when weekly rewards matter. A smaller group that actually completes goals beats a large silent guild.",
        ],
      },
    ],
  },
  {
    slug: "seeds-tier-list",
    title: "Best Seeds and Plants Tier List",
    description:
      "A Grow a Garden 2 seeds tier list for early cash, midgame repeat income, late-game value, and mutation/event upside.",
    updatedAt: "June 14, 2026",
    readingTime: "7 min",
    category: "Seeds",
    priority: "High Demand",
    keywords: ["seeds", "plants", "tier list", "best plants", "mushroom", "money method"],
    highlights: [
      "Early game values speed, low cost, and recovery.",
      "Midgame values repeat income plus shop availability.",
      "Late game values event upside, defense risk, and trade demand.",
      "A seed can be good for cash but bad for exposed night layouts.",
    ],
    sections: [
      {
        heading: "How to read the tier list",
        body: [
          "Rank seeds by your current problem. If you are poor, the best seed is the one that cycles quickly. If you are stable, the best seed is the one that creates event or trading upside.",
          "Do not rank by sale price alone. Growth time, stock frequency, stealing risk, and mutation potential change the real value.",
        ],
      },
      {
        heading: "Early picks",
        body: [
          "Use cheap crops until you can recover from a mistake. Early guides and videos keep repeating the same lesson: players who reinvest quickly reach the fun systems faster.",
          "If stock is limited, buy enough low-cost seeds to keep plots active before saving for a rare plant.",
        ],
      },
      {
        heading: "Money methods",
        body: [
          "Recent TikTok demand around mushroom methods and billionaire tips means this page should track concrete methods separately from the tier list. Methods need date labels because they may be patched or balanced.",
          "When a method depends on a bug, stock window, or event, treat it as temporary and verify before reshaping your whole garden around it.",
        ],
      },
    ],
  },
  {
    slug: "weather-events",
    title: "Weather Events and Mutations Guide",
    description:
      "A Grow a Garden 2 weather events and weather notifier guide for Rain, Lightning, Rainbow, Snowfall, Starfall, and mutation windows.",
    updatedAt: "June 14, 2026",
    readingTime: "6 min",
    category: "Mutations",
    priority: "High Demand",
    keywords: ["weather", "mutation", "rain", "lightning", "starfall", "event"],
    highlights: [
      "Weather windows are when ordinary crops can become high-value runs.",
      "Keep open plots and spare seeds ready before rare events appear.",
      "Do not sell everything right before mutation-friendly weather.",
      "Separate confirmed event rules from community guesses.",
    ],
    sections: [
      {
        heading: "Why weather matters",
        body: [
          "Weather events change the value of your current garden. If you play on autopilot, you can sell too early and miss the best mutation window.",
          "Grow a Garden 2 weather notifier searches usually mean the player wants a reminder before rare GAG2 weather events affect crop value.",
          "Use regular harvests for income, but keep enough growing space ready for event-driven upside.",
        ],
      },
      {
        heading: "Event checklist",
        body: [
          "When weather starts, first plant or protect the crops that benefit most, then harvest low-value crops only if you need space. Avoid rebuilding the whole garden mid-event.",
          "If an event rule is only reported by players, label it as reported until the same effect appears in-game for you.",
        ],
      },
    ],
  },
  {
    slug: "stealing-guide",
    title: "Night Stealing and Defense Guide",
    description:
      "A Grow a Garden 2 stealing guide for night defense, garden layout, what to protect first, and how to reduce avoidable losses.",
    updatedAt: "June 14, 2026",
    readingTime: "6 min",
    category: "Defense",
    priority: "High Demand",
    keywords: ["night", "stealing", "defense", "protect plants", "raids"],
    highlights: [
      "Night changes the risk profile of every valuable crop.",
      "Do not leave your best plants exposed in obvious rows.",
      "Defense habits matter before cosmetic layout.",
      "Stealing strategy is about timing and pathing, not only movement.",
    ],
    sections: [
      {
        heading: "Stealing basics",
        body: [
          "Grow a Garden 2 makes night stealing one of the biggest differences from the first game. That means your layout is part of your economy.",
          "Players should treat exposed high-value crops as risk, especially on busy servers or before leaving valuable plants unattended.",
        ],
      },
      {
        heading: "Defense priorities",
        body: [
          "Start with simple blocking and bait habits before chasing expensive layouts. A basic defensive plan that you actually use every night beats a perfect layout you cannot afford.",
          "Place valuable crops where they are harder to reach quickly, and reserve obvious paths for lower-value crops or bait.",
        ],
      },
    ],
  },
  {
    slug: "guild-guide",
    title: "Guild Guide and Weekly Rewards",
    description:
      "A Grow a Garden 2 guild guide for weekly rewards, leaderboards, group play, and daily GAG2 route decisions.",
    updatedAt: "June 14, 2026",
    readingTime: "5 min",
    category: "Guilds",
    priority: "High Demand",
    keywords: ["guild", "weekly rewards", "leaderboard", "group"],
    highlights: [
      "Guilds are part of the core return loop.",
      "Weekly rewards make consistency more important than one long session.",
      "Solo players still benefit from joining an active guild.",
      "Guild goals should influence your daily route.",
    ],
    sections: [
      {
        heading: "Why join a guild",
        body: [
          "Guild progression matters because it gives players a reason to return after the first launch rush. If you only play solo, you may miss weekly reward momentum.",
          "Join a guild with activity during your play window. A quiet large guild is often worse than a smaller group that completes goals.",
        ],
      },
      {
        heading: "Guild routine",
        body: [
          "Check guild goals before spending your whole budget. If a weekly objective rewards a specific crop or activity, adjust the route early instead of trying to catch up at the end.",
        ],
      },
    ],
  },
  {
    slug: "pets-guide",
    title: "Pets Guide and Pet Tier List",
    description:
      "A Grow a Garden 2 pets guide and GAG2 pet tier list framework for utility, beginner value, and trade demand.",
    updatedAt: "June 14, 2026",
    readingTime: "6 min",
    category: "Pets",
    priority: "High Demand",
    keywords: ["pets", "pet tier list", "best pets", "venom", "trading"],
    highlights: [
      "Pets are a major search demand immediately after launch.",
      "Beginner value depends on consistency, not rarity alone.",
      "Track acquisition method separately from tier ranking.",
      "Update pet pages whenever balance, stock, or trade demand changes.",
    ],
    sections: [
      {
        heading: "How pets should be ranked",
        body: [
          "Rank pets by job: income support, mutation support, defense help, utility, or event upside. A rare pet is not automatically the best pet for a new account.",
          "The strongest beginner pet is the one that improves your daily loop immediately.",
        ],
      },
      {
        heading: "What to track",
        body: [
          "For each pet, track acquisition method, stock behavior, practical value, and whether it helps early or late game. That structure is more useful than a simple rarity list.",
        ],
      },
    ],
  },
  {
    slug: "badges-achievements",
    title: "Badges and Achievements Guide",
    description:
      "A Grow a Garden 2 badges and achievements checklist for completion, verified requirements, and unclear GAG2 achievements.",
    updatedAt: "June 14, 2026",
    readingTime: "5 min",
    category: "Badges",
    priority: "High Demand",
    keywords: ["badges", "achievements", "completion", "checklist"],
    highlights: [
      "Badge searches are already visible in current guide results.",
      "Completion pages should separate confirmed badges from rumored ones.",
      "Every badge needs requirement, reward, difficulty, and verification date.",
      "Achievement hunters need checklists more than long prose.",
    ],
    sections: [
      {
        heading: "What this page should track",
        body: [
          "A badge guide should list the badge name, requirement, reward if any, difficulty, and last verification date. That gives completion-focused players a faster answer than a paragraph-heavy article.",
          "If a badge requirement changes or depends on an event, mark it as reported instead of confirmed.",
        ],
      },
      {
        heading: "Completion route",
        body: [
          "Start with badges that overlap normal progression: codes, first expansion, basic selling, guild participation, and early event participation. Save rare stock or event badges until you have a stable economy.",
          "Take screenshots or notes when a badge triggers. Early launch information changes fast, and exact trigger conditions are often discovered by players before formal guides catch up.",
        ],
      },
    ],
  },
  {
    slug: "admin-abuse-stock-events",
    title: "Admin Abuse, Stock, and Event Timing Guide",
    description:
      "A Grow a Garden 2 stock and event timing guide for Admin Abuse questions, stock alerts, Firefly reports, and GAG2 event rumors.",
    updatedAt: "June 14, 2026",
    readingTime: "5 min",
    category: "Events",
    priority: "High Demand",
    keywords: ["admin abuse", "stock", "firefly", "event timing", "restock"],
    highlights: [
      "Treat Admin Abuse timing as unconfirmed until an in-game timer or official post appears.",
      "Firefly stock is a live-alert topic, not a static guide topic.",
      "Crafting events can drain stored items and create sudden restock demand.",
      "Stock pages should separate confirmed stock from player reports.",
    ],
    sections: [
      {
        heading: "What players need",
        body: [
          "Players want to know what is available right now, whether they should wait, and whether an event is real. A good page should answer those questions with status labels, not vague hype.",
          "Grow a Garden 2 stock notifier and GAG2 stock searches belong here when players need event timing, Firefly reports, or rare shop alerts.",
          "For static pages, use reported signals as alerts. For live pages, show last seen time and source type.",
        ],
      },
      {
        heading: "How to use reports",
        body: [
          "Use player reports as alerts, not final truth. A post saying an item is in stock with a few minutes left is useful, but it expires quickly.",
          "Check stock manually in-game before making trades or spending saved currency based on a report.",
        ],
      },
    ],
  },
  {
    slug: "venom-pets-trading",
    title: "Venom, Pets, and Trading Demand Guide",
    description:
      "A Grow a Garden 2 trading guide for pet demand, Venom questions, gifting errors, and GAG2 trade-risk checks.",
    updatedAt: "June 14, 2026",
    readingTime: "6 min",
    category: "Trading",
    priority: "High Demand",
    keywords: ["venom", "trading", "values", "pets", "gift error", "tickets"],
    highlights: [
      "Players are asking whether older pets are still in demand.",
      "Venom appears in multiple pet and trading questions.",
      "Do not price trades from a single report.",
      "Gift and ticket errors should be treated as known issues before blaming the other player.",
    ],
    sections: [
      {
        heading: "Why Venom needs its own guide",
        body: [
          "Recent community chatter around Venom value, Venom services, and pet demand makes this a separate trading topic, not just a pet-tier-list footnote.",
          "Until exact mechanics are verified in-game, document the expected effect, player pricing behavior, and any changed reports separately.",
        ],
      },
      {
        heading: "Trading safety",
        body: [
          "If gifting or tickets fail, do not assume a trade partner is scamming. Treat repeated gift errors as a possible server or account-state issue first.",
          "For valuable trades, test with a low-value item before moving rare pets or event items.",
        ],
      },
    ],
  },
  {
    slug: "known-issues",
    title: "Known Issues and Player Questions",
    description:
      "Current Grow a Garden 2 known issues and GAG2 player questions: gift errors, stock confusion, update uncertainty, and launch bugs.",
    updatedAt: "June 14, 2026",
    readingTime: "5 min",
    category: "Issues",
    priority: "High Demand",
    keywords: ["bugs", "known issues", "gift error", "ticket error", "not working"],
    highlights: [
      "Gift and ticket errors are appearing in community reports.",
      "Stock and event reports can expire before a player reaches the shop.",
      "Some players are unsure how Grow a Garden 2 affects the original game.",
      "Bug pages should separate workaround, status, and evidence.",
    ],
    sections: [
      {
        heading: "How to read bug reports",
        body: [
          "A useful issues page should show the symptom, likely scope, workaround, and whether the problem is confirmed or only reported. That prevents players from wasting rare items while debugging.",
          "If a problem disappears after switching servers, say that clearly. Server-specific bugs need different advice from account-wide bugs.",
        ],
      },
      {
        heading: "High-risk issues",
        body: [
          "Gift, ticket, trading, and stock issues are higher risk than visual bugs because they can cost currency or rare items. Put those near the top of the page.",
          "For visual or animation issues, suggest session switching and delay spending until the state looks normal again.",
        ],
      },
    ],
  },
];

export type ToolCard = {
  title: string;
  href: string;
  description: string;
  status: string;
  keywords: string[];
  homepagePriority?: number;
  homepageTitle?: string;
};

export const toolCards: ToolCard[] = [
  {
    title: "Codes Tracker",
    href: "/codes",
    description: "Grow a Garden 2 codes and GAG2 codes: working code first, watchlist codes separated, and redeem troubleshooting.",
    status: "Verified",
    keywords: ["codes", "gag2 codes", "gag 2 codes", "grow a garden 2 codes", "redeem"],
    homepagePriority: 4,
    homepageTitle: "Codes",
  },
  {
    title: "Seed Tier List",
    href: "/guides/seeds-tier-list",
    description: "Grow a Garden 2 seed tier list with rarity, source, use case, and confidence labels.",
    status: "Native tool",
    keywords: ["seeds", "seed tier list", "gag2 seeds", "grow a garden 2 seeds", "best seeds", "plants"],
    homepagePriority: 1,
  },
  {
    title: "Stock Tracker",
    href: "/stock-tracker",
    description: "Grow a Garden 2 stock, GAG2 stock notifier signals, pets, events, trading, weather, and freshness labels.",
    status: "Signals",
    keywords: ["stock", "notifier", "stock notifier", "gag2 stock", "gag 2 stock", "weather", "gag2 stock notifier", "grow a garden 2 stock notifier"],
    homepagePriority: 2,
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

const weatherToolEntry = {
  title: "Weather Events",
  href: "/guides/weather-events",
  description: "Plan around weather and mutation windows without treating reports as guaranteed live state.",
  status: "Event guide",
  homepagePriority: 3,
};

export const homepageToolEntries = [...toolCards, weatherToolEntry]
  .filter((tool) => typeof tool.homepagePriority === "number")
  .sort((a, b) => (a.homepagePriority ?? 0) - (b.homepagePriority ?? 0))
  .map((tool) => ({
    title: "homepageTitle" in tool && tool.homepageTitle ? tool.homepageTitle : tool.title,
    href: tool.href,
    description: tool.description,
    statusLabel: tool.status,
  }));

export function searchTools(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return toolCards;
  }

  return toolCards.filter((tool) => {
    const searchableText = [
      tool.title,
      tool.description,
      tool.status,
      ...tool.keywords,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export const guideCategories = [
  {
    label: "Start Here",
    href: "/guides/beginner-guide",
    count: guides.filter((guide) => guide.priority === "Start Here").length,
  },
  {
    label: "Seeds & Plants",
    href: "/guides/seeds-tier-list",
    count: guides.filter((guide) => guide.category === "Seeds").length,
  },
  {
    label: "Pets & Trading",
    href: "/guides/pets-guide",
    count: guides.filter((guide) => ["Pets", "Trading"].includes(guide.category)).length,
  },
  {
    label: "Events & Stock",
    href: "/stock-tracker",
    count: guides.filter((guide) => ["Events", "Mutations"].includes(guide.category)).length,
  },
  {
    label: "Completion",
    href: "/guides/badges-achievements",
    count: guides.filter((guide) => guide.category === "Badges").length,
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function searchGuides(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return guides;
  }

  return guides.filter((guide) => {
    const searchableText = [
      guide.title,
      guide.description,
      guide.category,
      ...guide.keywords,
      ...guide.highlights,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
