import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",          // Block all API endpoints
          "/_next/",        // Next.js internals
          "/admin/",        // Admin routes (if any in future)
        ],
      },
    ],
    sitemap: "https://spacecrm.net/sitemap.xml",
    host: "https://spacecrm.net",
  };
}

