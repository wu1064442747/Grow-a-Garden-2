export const siteUrl = "https://growagarden-2.online";

export const siteName = "Grow a Garden 2 Guide";

export const currentCodes = [
  {
    code: "TEAMGREENBEAN",
    reward: "3 Green Bean Seeds",
    status: "Working",
    checkedAt: "June 13, 2026",
  },
];

export const launchFacts = [
  "Grow a Garden 2 launched as a standalone fresh-start Roblox game on June 12, 2026.",
  "The sequel loop adds night raids, stealing and defense pressure, guild systems, offline growth, and a circular map flow.",
  "Launch-day coverage reported more than 400,000 concurrent players shortly after release.",
  "Guild creation is reported at 99 Robux, with invites handled through the Guilds counter and mailbox.",
];

export const playerQuestionClusters = [
  {
    title: "Admin Abuse and stock timing",
    href: "/guides/admin-abuse-stock-events",
    signal:
      "Players are asking whether Admin Abuse events are gone, delayed, or still tied to update timers after GAG2 launched.",
    examples: ["Admin Abuse gone?", "Need stocks after crafting event", "Firefly stock alerts"],
  },
  {
    title: "Pets, Venom, and trading value",
    href: "/guides/venom-pets-trading",
    signal:
      "Recent Reddit posts focus on pet demand, Venom changes, Venom services paid in Tokens, and rare pet pulls.",
    examples: ["Are old pets still in demand?", "Venom changed?", "Need Venom on pets"],
  },
  {
    title: "Known issues and confusion",
    href: "/guides/known-issues",
    signal:
      "Players report wasp spawning problems, King Bee animation issues, gift/ticket errors, and uncertainty about whether the original GAG keeps updating.",
    examples: ["Wasps stopped spawning", "Can't gift or use ticket", "Will updates continue?"],
  },
  {
    title: "Mixed launch reactions",
    href: "/community-questions",
    signal:
      "Community reaction is not purely hype: players mention load problems, pricing complaints, nostalgia for the original, and doubts about whether GAG2 feels like a full sequel.",
    examples: ["Server/load jokes", "Pricing complaints", "Is GAG2 different enough?"],
  },
];

export const stockSignals = [
  {
    item: "Firefly",
    status: "Recently reported in stock",
    note: "Reddit posts on June 13 mention Firefly and Firefly Spiral stock with only a few minutes left.",
  },
  {
    item: "Admin Abuse",
    status: "Unclear schedule",
    note: "Multiple players asked whether Admin Abuse events are gone or simply not visible beyond the update timer.",
  },
  {
    item: "Crafting event stock",
    status: "High demand",
    note: "Players say they used stored items during crafting and need restocks, which makes stock alerts a priority feature.",
  },
];

export type Guide = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  readingTime: string;
  category: string;
  priority: "Start Here" | "High Demand" | "Tool";
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
      "A practical first-day route for seeds, Sheckles, night stealing, defense, and guild rewards.",
    updatedAt: "June 13, 2026",
    readingTime: "7 min",
    category: "Starter Route",
    priority: "Start Here",
    highlights: [
      "Buy cheap seeds first and reinvest every harvest.",
      "Sell early crops quickly until your garden has repeat income.",
      "Prepare for night before leaving high-value plants exposed.",
      "Join an active guild as soon as weekly rewards matter.",
    ],
    sections: [
      {
        heading: "First 10 minutes",
        body: [
          "Start by turning every early harvest into more seed purchases. The opening goal is not to hold rare plants. It is to build a garden that produces enough Sheckles to recover quickly after a mistake.",
          "Use short-growth crops while learning the shop rhythm, then start reserving space for plants that can support defense or higher-value mutation chances.",
        ],
      },
      {
        heading: "First hour",
        body: [
          "Once your income is stable, stop treating every tile as pure profit space. Grow a Garden 2 adds stealing and defense pressure, so leaving valuable crops completely exposed can cost more than a slower layout.",
          "Add defensive props and plants before night cycles become a regular problem. If you are playing solo, defense comes before cosmetic layout.",
        ],
      },
      {
        heading: "Daily routine",
        body: [
          "Check codes, check shop stock, harvest safe crops, handle weather events, then review guild progress. That loop gives you a reliable baseline even when you only have a short session.",
          "If a high-value weather event is active, prioritize mutation opportunities over routine selling.",
        ],
      },
    ],
  },
  {
    slug: "seeds-tier-list",
    title: "Best Seeds and Plants Tier List",
    description:
      "A search-friendly tier list structure for early, mid, and late game seed decisions.",
    updatedAt: "June 13, 2026",
    readingTime: "6 min",
    category: "Seeds",
    priority: "High Demand",
    highlights: [
      "Early game values speed and recovery.",
      "Mid game values repeat income and mutation opportunities.",
      "Late game values rare plants, defense utility, and weather upside.",
      "Do not rank seeds by sell price alone.",
    ],
    sections: [
      {
        heading: "How to read the tier list",
        body: [
          "A good Grow a Garden 2 seed is not only expensive at sale time. It also has to fit your current budget, growth cycle, stealing risk, and mutation plan.",
          "For new players, reliable low-cost seeds can outperform rare seeds because they let you recover from bad timing, failed defense, or a shop miss.",
        ],
      },
      {
        heading: "Early game picks",
        body: [
          "Prioritize seeds that let you harvest often and reinvest quickly. The faster your garden starts cycling, the sooner you can afford defensive pieces and higher-value plants.",
        ],
      },
      {
        heading: "Late game picks",
        body: [
          "At higher budgets, choose plants around weather and defense strategy. A slower plant can be worth it if it has better mutation upside or supports your base during night stealing windows.",
        ],
      },
    ],
  },
  {
    slug: "weather-events",
    title: "Weather Events and Mutations Guide",
    description:
      "What to do during Rain, Lightning, Rainbow, Snowfall, Starfall, and seed events.",
    updatedAt: "June 13, 2026",
    readingTime: "5 min",
    category: "Mutations",
    priority: "High Demand",
    highlights: [
      "Weather windows are when ordinary crops can become high-value runs.",
      "Lightning and Starfall are high-priority event checks.",
      "Keep spare plots ready before rare events happen.",
      "Do not sell everything right before mutation-friendly weather.",
    ],
    sections: [
      {
        heading: "Why weather matters",
        body: [
          "Weather events change the value of your current garden. If you only play on autopilot, you can miss the best mutation windows and sell too early.",
          "Use regular harvests for income, but keep enough growing space ready for event-driven upside.",
        ],
      },
      {
        heading: "High-priority events",
        body: [
          "Lightning, Starfall, Rainbow, and special seed events deserve immediate attention because players are already searching for which events are worth stopping their normal route.",
          "During rare events, avoid rearranging the entire garden. Focus on planting, protecting, and harvesting the crops most likely to benefit.",
        ],
      },
    ],
  },
  {
    slug: "stealing-guide",
    title: "Night Stealing and Defense Guide",
    description:
      "How stealing works, how to reduce losses, and which defensive habits matter first.",
    updatedAt: "June 13, 2026",
    readingTime: "6 min",
    category: "Defense",
    priority: "High Demand",
    highlights: [
      "Night changes the risk profile of every valuable crop.",
      "Do not leave your best plants exposed in obvious rows.",
      "Defense props matter before cosmetics.",
      "Stealing strategy is also about timing, not only movement.",
    ],
    sections: [
      {
        heading: "Stealing basics",
        body: [
          "Grow a Garden 2 makes night stealing one of the biggest differences from the first game. That means your garden layout is now part of your economy.",
          "Players should treat exposed high-value crops as a risk, especially when playing on busy servers or before leaving the game unattended.",
        ],
      },
      {
        heading: "Defense priorities",
        body: [
          "Start with simple blocking and trap habits before chasing expensive layouts. A basic defensive plan that you use every night is better than a perfect layout you cannot afford.",
          "Place valuable crops where they are harder to reach quickly, and reserve obvious open paths for lower-value bait or safer crops.",
        ],
      },
    ],
  },
  {
    slug: "guild-guide",
    title: "Guild Guide and Weekly Rewards",
    description:
      "How guilds fit into progression, rewards, leaderboards, and group play.",
    updatedAt: "June 13, 2026",
    readingTime: "4 min",
    category: "Guilds",
    priority: "High Demand",
    highlights: [
      "Guilds are part of the official core loop.",
      "Weekly rewards make activity consistency important.",
      "Solo players still benefit from joining a focused guild.",
      "Guild goals should influence your daily route.",
    ],
    sections: [
      {
        heading: "Why join a guild",
        body: [
          "The official game description calls out guilds and weekly rewards directly, so guild progression is not a side feature. It is likely to become one of the main reasons players return every week.",
          "Join an active guild early if you want reward consistency, leaderboard progress, and help understanding fast-changing strategies.",
        ],
      },
      {
        heading: "What to look for",
        body: [
          "Look for guilds with active players during your usual play window. A quiet guild with a high member count may be worse than a smaller group that actually completes weekly goals.",
        ],
      },
    ],
  },
  {
    slug: "pets-guide",
    title: "Pets Guide and Pet Tier List",
    description:
      "A starting framework for pet value, acquisition pressure, and beginner decisions.",
    updatedAt: "June 13, 2026",
    readingTime: "5 min",
    category: "Pets",
    priority: "High Demand",
    highlights: [
      "Pets are a major search demand immediately after launch.",
      "Beginner value depends on consistency, not rarity alone.",
      "Track acquisition methods separately from tier ranking.",
      "Update this page whenever pet balance or stock changes.",
    ],
    sections: [
      {
        heading: "How pets should be ranked",
        body: [
          "Rank pets by the job they perform: income support, mutation support, defense help, utility, or rare-event upside. A rare pet is not automatically the best pet for a new account.",
          "The strongest beginner pet is the one that improves your daily loop immediately.",
        ],
      },
      {
        heading: "What to track",
        body: [
          "For each pet, track acquisition method, stock behavior, practical value, and whether it helps early or late game. That structure makes the guide more useful than a simple rarity list.",
        ],
      },
    ],
  },
  {
    slug: "admin-abuse-stock-events",
    title: "Admin Abuse, Stock, and Event Timing Guide",
    description:
      "Track what players are asking about Admin Abuse events, Firefly stock, and post-crafting restock pressure.",
    updatedAt: "June 13, 2026",
    readingTime: "5 min",
    category: "Events",
    priority: "High Demand",
    highlights: [
      "Treat Admin Abuse timing as unconfirmed until an in-game timer or official post appears.",
      "Firefly stock is a live-alert topic, not a static guide topic.",
      "Crafting events can drain stored items and create sudden restock demand.",
      "Stock tracker pages should separate confirmed stock from player reports.",
    ],
    sections: [
      {
        heading: "What changed in player demand",
        body: [
          "The newest community scan shows players asking whether Admin Abuse events are gone, delayed, or hidden behind the update timer after the Grow a Garden 2 launch.",
          "That makes event timing and stock alerts more valuable than another generic guide. Players want to know what is available right now and whether they should wait for an event.",
        ],
      },
      {
        heading: "How to use stock reports",
        body: [
          "Use player reports as alerts, not final truth. A post saying Firefly is in stock with two or three minutes left is useful, but it expires quickly and should be treated differently from a verified live tracker.",
          "For now, check stock manually in-game before making trades or spending saved currency based on a report.",
        ],
      },
      {
        heading: "Site tracking plan",
        body: [
          "The stock tracker should log item name, reported status, time seen, source type, and whether the status was verified. That keeps quick community alerts useful without pretending they are official data.",
        ],
      },
    ],
  },
  {
    slug: "venom-pets-trading",
    title: "Venom, Pets, and Trading Demand Guide",
    description:
      "A practical guide for pet demand, Venom questions, gifting errors, and trade-risk checks.",
    updatedAt: "June 13, 2026",
    readingTime: "6 min",
    category: "Pets",
    priority: "High Demand",
    highlights: [
      "Players are asking whether older pets are still in demand.",
      "Venom appears in multiple recent pet-related questions.",
      "Do not price trades from a single Reddit report.",
      "Gift and ticket errors should be treated as known issues before blaming the other player.",
    ],
    sections: [
      {
        heading: "Why Venom needs its own guide",
        body: [
          "Recent community posts mention Venom value, Venom services paid in Tokens, and confusion over whether Venom behavior changed. That is enough demand to split Venom out from a generic pets tier list.",
          "Until exact mechanics are verified in-game, the safest advice is to document what the effect is supposed to do, how players are pricing it, and what changed reports are appearing.",
        ],
      },
      {
        heading: "Pet demand checks",
        body: [
          "When checking whether a pet is still in demand, separate rarity, current utility, visual appeal, and event availability. A pet can be popular because it is useful, because it is cute, or because supply is temporarily low.",
          "Recent posts mention rare pet excitement and demand uncertainty, which means a simple S-tier list is not enough. Add a demand status and last-seen notes when possible.",
        ],
      },
      {
        heading: "Trading safety",
        body: [
          "If gifting or tickets fail, do not assume a trade partner is scamming. Recent player reports mention gift and ticket errors lasting for hours.",
          "For valuable trades, wait until both players can confirm the gifting flow works in a low-risk exchange first.",
        ],
      },
    ],
  },
  {
    slug: "known-issues",
    title: "Known Issues and Player Questions",
    description:
      "Current community-reported issues: wasps, King Bee animation, gift errors, update confusion, and GAG2 launch concerns.",
    updatedAt: "June 13, 2026",
    readingTime: "5 min",
    category: "Issues",
    priority: "High Demand",
    highlights: [
      "Wasps may stop spawning for some players after switching gardens.",
      "King Bee animation issues have been reported by players.",
      "Gift and ticket errors are appearing in community reports.",
      "Players are unsure how GAG2 affects updates for the original game.",
    ],
    sections: [
      {
        heading: "Wasp and King Bee reports",
        body: [
          "One recent player report says wasps stopped spawning on the main island after switching to a honey garden, and that King Bee appeared without proper animations.",
          "This should be treated as a community-reported issue, not a confirmed universal bug. If it happens, switch sessions, check whether the issue is garden-specific, and avoid spending resources until spawning behavior returns.",
        ],
      },
      {
        heading: "Gift and ticket errors",
        body: [
          "Players have reported being unable to gift pets or fruits, or use tickets, even when friends see the same error. That suggests a server-side or account-state issue may be involved.",
          "Before attempting high-value gifts, test with a low-value item and avoid repeated retry loops if the same error persists.",
        ],
      },
      {
        heading: "Original GAG update confusion",
        body: [
          "The launch of Grow a Garden 2 has created confusion about whether the original Grow a Garden will continue receiving updates and Admin Abuse events.",
          "Until there is a clear official schedule, the site should track the two games separately and label uncertain event information clearly.",
        ],
      },
    ],
  },
];

export const toolCards = [
  {
    title: "Codes Tracker",
    href: "/codes",
    description: "Working codes, rewards, and last checked status.",
    status: "Live",
  },
  {
    title: "Stock Tracker",
    href: "/stock-tracker",
    description: "Seed, gear, pet, event, and community stock alert hub.",
    status: "Signals",
  },
  {
    title: "Mutation Planner",
    href: "/guides/weather-events",
    description: "Weather-first route planning for mutation windows.",
    status: "Guide",
  },
  {
    title: "Community Questions",
    href: "/community-questions",
    description: "Latest player questions from Reddit and launch coverage.",
    status: "New",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
