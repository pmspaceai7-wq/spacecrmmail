import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogs } from "@/lib/data/blogs";

const BLOG_URL = "https://spacecrm.net/blog";

export const metadata: Metadata = {
  title: "Blog | CRM & Marketing Automation Insights",
  description:
    "Read practical growth playbooks for email, LinkedIn, and WhatsApp automation. Explore Space CRM blog articles by industry with actionable tactics.",
  keywords: [
    "crm blog",
    "marketing automation blog",
    "email automation strategies",
    "linkedin outreach playbook",
    "whatsapp business campaigns",
    "sales automation insights",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Space CRM Blog",
    description: "Actionable CRM and marketing automation insights for modern growth teams.",
    url: "/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM Blog",
    description: "Growth playbooks for email, LinkedIn, and WhatsApp automation.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllBlogs();
  const featuredPost = posts[0];
  const morePosts = posts.slice(1);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Space CRM Blog",
    description: "Actionable CRM and marketing automation insights for growth-focused teams.",
    url: BLOG_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BLOG_URL}/${post.slug}`,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          author: { "@type": "Organization", name: post.author },
        },
      })),
    },
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Space CRM / Blog
              </p>
              <h1 className="text-5xl md:text-7xl  font-thin font-black leading-[0.95] tracking-tight text-gray-900 mb-8">
                Growth insights
                <br />
                <em className="not-italic text-gray-300">worth reading.</em>
              </h1>
              <p className="text-base text-gray-500 max-w-md leading-relaxed">
                Practical guides on email deliverability, cold outreach, LinkedIn automation, WhatsApp marketing, and transactional email infrastructure — for teams building with SpaceCRM.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <p className="text-xs font-mono text-gray-400 text-right">
                {String(posts.length).padStart(2, "0")} articles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── ONBOARDING GUIDE ───── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">

          <div className="flex items-baseline justify-between border-b border-gray-200 pb-4 mb-10">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Resources
            </p>
            <p className="text-xs font-mono text-gray-300">
              01 guide
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-stretch">

            {/* LEFT — PDF Preview */}
            <div className="border border-gray-200 overflow-hidden">
              
              {/* Browser chrome bar */}
              <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-1.5 border-b border-gray-200">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="flex-1 ml-3 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-mono text-gray-400">
                  spacecrm.net/pdfs/onboarding-guide.pdf
                </div>
              </div>

              {/* PDF iframe */}
              <iframe
                src="/pdfs/spacecrm-onboarding-guide.pdf"
                className="w-full h-[480px]"
                title="SpaceCRM Onboarding Guide"
              />
            </div>

            {/* RIGHT — Info Panel */}
            <div className="border border-gray-200 p-8 lg:p-10 flex flex-col justify-between bg-white">

              {/* Top block */}
              <div>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-3">
                  Onboarding Guide
                </p>
                <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4">
                  Launch Checklist & Setup Steps
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Everything you need to get SpaceCRM running for your team. Follow the setup steps, complete the launch checklist, and go live with confidence.
                </p>

                {/* What's inside */}
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-4">
                  What&apos;s inside
                </p>
                <ul className="space-y-3">
                  {[
                    "Domain and mailbox setup checklist",
                    "First campaign launch steps",
                    "Team onboarding and permissions guide",
                    "Recommended settings for deliverability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 mt-1.5 bg-gray-900 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom block */}
              <div className="mt-8 pt-8 border-t border-gray-200">

                {/* Meta */}
                <div className="flex items-center gap-6 mb-6">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    PDF Document
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    5 min read
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href="/pdfs/spacecrm-onboarding-guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 w-full"
                  >
                    Open in New Tab
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="/pdfs/spacecrm-onboarding-guide.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 text-sm font-semibold tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors duration-150 w-full"
                  >
                    Download PDF
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featuredPost && (
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Featured
              </h2>
              <span className="text-xs font-mono text-gray-300">{featuredPost.category}</span>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="group block border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-60 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between lg:border-l border-gray-200">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight mb-4 group-hover:text-gray-600 transition-colors duration-200">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <time
                        dateTime={featuredPost.publishedAt}
                        className="text-xs font-mono text-gray-400"
                      >
                        {featuredPost.date}
                      </time>
                      <span className="text-xs font-mono text-gray-400">{featuredPost.readTime}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 group-hover:gap-3 transition-all duration-200">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Article Grid ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Latest Articles
            </h2>
            <span className="text-xs font-mono text-gray-300">
              {String(morePosts.length).padStart(2, "0")} posts
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y sm:divide-y-0">
            {morePosts.map((post, index) => (
              <article
                key={post.slug}
                className={`group flex flex-col hover:bg-gray-50 transition-colors duration-200 ${
                  index !== 0 && index % 3 !== 0 ? "sm:border-l border-gray-200" : ""
                } ${index >= 3 ? "border-t border-gray-200" : ""}`}
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  {/* Image */}
                  <div className="h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                        {post.category}
                      </span>
                      <span className="text-xs font-mono text-gray-300">{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 flex-1 group-hover:text-gray-600 transition-colors duration-200 line-clamp-3">
                      {post.title}
                    </h3>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <time dateTime={post.publishedAt} className="text-xs font-mono text-gray-400">
                        {post.date}
                      </time>
                      <span className="text-xs font-semibold text-gray-900 border-b border-gray-900 pb-0.5 group-hover:gap-1 transition-all duration-150">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                Ready to automate growth?
              </h2>
              <p className="text-base text-gray-500 max-w-md">
                See how Space CRM puts these playbooks into practice for your revenue team.
              </p>
            </div>
            <Link
              href="/demo"
              className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 shrink-0 text-center"
            >
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
