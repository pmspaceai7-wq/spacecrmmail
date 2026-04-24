import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/data/blogs";
import { INDUSTRIES } from "@/lib/data/industries";
import { integrations } from "@/lib/integrations-data";
import { comparisons } from "@/lib/data/comparisons";

const BASE_URL = "https://spacecrm.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static / top-level pages ──────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/features`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/demo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/integrations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ── Blog posts ─────────────────────────────────────────────────────────────
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Industry pages ─────────────────────────────────────────────────────────
  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Integration detail pages ───────────────────────────────────────────────
  const integrationRoutes: MetadataRoute.Sitemap = integrations.map((intg) => ({
    url: `${BASE_URL}/integrations/${intg.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // ── Comparison / alternative pages ────────────────────────────────────────
  const compareRoutes: MetadataRoute.Sitemap = comparisons.map((comp) => ({
    url: `${BASE_URL}/compare/${comp.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...industryRoutes,
    ...integrationRoutes,
    ...compareRoutes,
  ];
}

