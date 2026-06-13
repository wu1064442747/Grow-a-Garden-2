import type { MetadataRoute } from "next";
import { guides, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/codes`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/stock-tracker`,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/community-questions`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.86,
    },
    ...guides.map((guide) => ({
      url: `${siteUrl}/guides/${guide.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: guide.priority === "Start Here" ? 0.9 : 0.82,
    })),
  ];
}
