import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const resolvedSiteUrl = siteUrl?.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(resolvedSiteUrl
      ? {
          host: resolvedSiteUrl,
          sitemap: `${resolvedSiteUrl}/sitemap.xml`,
        }
      : {}),
  };
}
