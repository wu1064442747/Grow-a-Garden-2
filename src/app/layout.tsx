import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - GAG2 Codes, Stock, Weather and Guides`,
    template: `%s | ${siteName}`,
  },
  description:
    "Independent Grow a Garden 2 and GAG2 guide site for codes, stock notifier signals, weather events, beginner routes, seeds, stealing defense, guilds, pets, and tools.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteName,
    description:
      "GAG2 and Grow a Garden 2 codes, stock notifier signals, weather events, beginner routes, seeds, stealing defense, guilds, pets, and tools.",
    url: siteUrl,
    siteName,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="page-shell nav-bar">
            <Link className="brand" href="/" aria-label="Grow a Garden 2 Guide">
              <Image
                src="/images/site-avatar.svg"
                alt=""
                aria-hidden="true"
                width="40"
                height="40"
              />
              <strong>Grow a Garden 2 Guide</strong>
            </Link>
            <nav aria-label="Primary navigation">
              <Link href="/">Play</Link>
              <Link href="/codes">Codes</Link>
              <Link href="/stock-tracker">Stock</Link>
              <Link href="/guides/seeds-tier-list">Seeds</Link>
              <Link href="/guides/weather-events">Weather</Link>
              <Link href="/guides">Guides</Link>
            </nav>
            <form className="nav-search" action="/search">
              <label className="sr-only" htmlFor="site-search">
                Search guides
              </label>
              <input
                id="site-search"
                name="q"
                placeholder="Search guides, tools, seeds..."
                type="search"
              />
              <button type="submit" aria-label="Search">
                🔍
              </button>
            </form>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="page-shell footer-grid">
            <div>
              <strong>{siteName}</strong>
              <p>
                Independent fan-made guide site for Grow a Garden 2. Not
                affiliated with Roblox or the game developers.
              </p>
            </div>
            <div>
              <Link href="/codes">Codes</Link>
              <Link href="/guides/weather-events">Weather</Link>
              <Link href="/guides/stealing-guide">Stealing</Link>
              <Link href="/stock-tracker">Stock Tracker</Link>
              <Link href="/community-questions">Questions</Link>
            </div>
          </div>
        </footer>
        <Script
          id="plausible-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }",
          }}
        />
        <Script
          id="plausible-analytics"
          defer
          data-domain="growagarden-2.online"
          src="https://plausible.ai-baby-dance.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
          strategy="beforeInteractive"
        />
        <Script src="https://pl29733603.effectivecpmnetwork.com/4d/d2/5e/4dd25eff42761fd3a48e4d71aebd860e.js" />
      </body>
    </html>
  );
}
