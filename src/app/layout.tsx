import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Codes, Seeds, Weather, Stealing and Guilds`,
    template: `%s | ${siteName}`,
  },
  description:
    "Independent Grow a Garden 2 guide site for codes, beginner routes, seeds, weather events, stealing defense, guilds, pets, and stock tools.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteName,
    description:
      "Codes, beginner routes, seeds, weather events, stealing defense, guilds, pets, and stock tools for Grow a Garden 2.",
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
              <span aria-hidden="true">G2</span>
              <strong>Grow a Garden 2 Guide</strong>
            </Link>
            <nav aria-label="Primary navigation">
              <Link href="/codes">Codes</Link>
              <Link href="/guides/beginner-guide">Beginner</Link>
              <Link href="/guides/seeds-tier-list">Seeds</Link>
              <Link href="/stock-tracker">Stock</Link>
              <Link href="/community-questions">Questions</Link>
            </nav>
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
      </body>
    </html>
  );
}
