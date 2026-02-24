import { INDUSTRIES } from "./industries";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readTime: string;
  category: string;
  categorySlug: string;
  author: string;
  keyPoints: string[];
  keywords: string[];
  sections: BlogSection[];
  image: string;
}

function toIsoDate(dateLabel: string): string {
  const timestamp = Date.parse(`${dateLabel} UTC`);

  if (Number.isNaN(timestamp)) {
    return "2025-01-01";
  }

  return new Date(timestamp).toISOString().split("T")[0];
}

function createSections(title: string, excerpt: string, category: string): BlogSection[] {
  const lowerCategory = category.toLowerCase();

  return [
    {
      heading: `Why ${title.toLowerCase()} matters now`,
      paragraphs: [
        excerpt,
        `Top-performing ${lowerCategory} teams are replacing scattered manual follow-ups with coordinated, channel-aware automation. That shift creates faster first responses, more consistent messaging, and better conversion quality.`,
      ],
    },
    {
      heading: "Execution framework",
      paragraphs: [
        `Start with a single high-intent workflow, then connect email, LinkedIn, and WhatsApp steps using clear trigger logic. Keep each touchpoint concise, personalized, and tied to a specific next action.`,
        `Use segmentation to tailor timing and value proposition by buyer stage. This gives your team a repeatable playbook that scales without sacrificing relevance.`,
      ],
    },
    {
      heading: "Metrics that prove impact",
      paragraphs: [
        `Track leading indicators weekly: reply rate, meeting-booked rate, and qualified conversation volume. Then measure lagging indicators like pipeline contribution and close velocity.`,
        `When a sequence underperforms, iterate quickly on subject lines, CTA clarity, and send timing. Small optimizations compound across the full funnel.`,
      ],
    },
  ];
}

export const BLOG_POSTS: BlogPost[] = INDUSTRIES.flatMap((industry) =>
  industry.blogs.map((blog) => ({
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    date: blog.date,
    publishedAt: toIsoDate(blog.date),
    readTime: blog.readTime,
    category: industry.name,
    categorySlug: industry.slug,
    author: `${industry.name} Strategy Team`,
    keyPoints: [
      `Build a repeatable ${industry.name.toLowerCase()} workflow with clear automation triggers.`,
      "Use personalization tokens and behavioral context in every follow-up.",
      "Review performance weekly and optimize one step at a time.",
    ],
    keywords: [
      `${industry.name.toLowerCase()} automation`,
      `${industry.name.toLowerCase()} marketing`,
      "crm automation",
      "growth playbook",
    ],
    sections: createSections(blog.title, blog.excerpt, industry.name),
    image: `/images/blog_images/${blog.slug}.webp`,
  })),
).sort(
  (a, b) =>
    new Date(`${b.publishedAt}T00:00:00Z`).getTime() -
    new Date(`${a.publishedAt}T00:00:00Z`).getTime(),
);

export function getAllBlogs(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
