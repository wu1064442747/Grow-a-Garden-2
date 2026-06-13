# Grow a Garden 2 Guide

Independent guide site for `growagarden-2.online`.

## Pages

- `/` - homepage with codes, guide entry points, and tool previews
- `/codes` - current working codes and rewards
- `/stock-tracker` - stock, gear, pets, weather, and community stock signals
- `/community-questions` - filtered player questions from recent research
- `/guides/beginner-guide`
- `/guides/seeds-tier-list`
- `/guides/weather-events`
- `/guides/stealing-guide`
- `/guides/guild-guide`
- `/guides/pets-guide`
- `/guides/admin-abuse-stock-events`
- `/guides/venom-pets-trading`
- `/guides/known-issues`

## Development

```bash
npm run dev -- --port 3001
npm run lint
npm run build
```

## Content Source

Core guide content is stored in `src/lib/site-data.ts`.

## SEO

The site includes static metadata, canonical URLs, `sitemap.xml`, `robots.txt`,
and JSON-LD for the homepage, guide pages, and codes page.
