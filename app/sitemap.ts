import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const resolvedSiteUrl = siteUrl?.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  if (!resolvedSiteUrl) {
    return [];
  }

  const lastModified = new Date();

  return [
    {
      url: `${resolvedSiteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${resolvedSiteUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
