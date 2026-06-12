import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/data/blogs";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const BASE_BLOG_URL = "https://spacecrm.net/blog";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The requested blog article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.title} | Space CRM Blog`,
    description: post.excerpt,
    keywords: [...post.keywords, post.title, `${post.category} insights`],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      siteName: "Space CRM",
      publishedTime: `${post.publishedAt}T00:00:00.000Z`,
      section: post.category,
      authors: [post.author],
      images: [{ url: `https://spacecrm.net${post.image}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://spacecrm.net${post.image}`],
    },
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) return notFound();

  const relatedPosts = BLOG_POSTS.filter(
    (candidate) =>
      candidate.slug !== post.slug && candidate.categorySlug === post.categorySlug,
  ).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: `${BASE_BLOG_URL}/${post.slug}`,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Space CRM",
      logo: { "@type": "ImageObject", url: "https://spacecrm.net/icononly_transparent_nobuffer.png" },
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    image: `https://spacecrm.net${post.image}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://spacecrm.net" },
      { "@type": "ListItem", position: 2, name: "Blog", item: BASE_BLOG_URL },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_BLOG_URL}/${post.slug}` },
    ],
  };

  return (
    <main className="pt-20 lg:pt-24 bg-white text-gray-900 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article>
        {/* ── Hero / Header ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24">

            {/* Breadcrumb nav */}
            <div className="flex items-center gap-3 mb-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Blog
              </Link>
              <span className="text-gray-200 font-mono">/</span>
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400">
                {post.category}
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_auto] items-start gap-12">
              <div className="max-w-3xl">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
                  Space CRM / Blog
                </p>
                <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-gray-900 mb-6">
                  {post.title}
                </h1>
                <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </div>

              {/* Meta block */}
              <div className="flex flex-col gap-3 shrink-0 pt-1 lg:text-right">
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                  {post.category}
                </span>
                <div className="flex lg:flex-col gap-4 lg:gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={post.publishedAt}>{post.date}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    By {post.author}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="mt-14 border border-gray-200 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_300px] border border-gray-200 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

              {/* Article content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-10">
                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="text-xl font-black text-gray-900 mb-4 tracking-tight">
                        {section.heading}
                      </h2>
                      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={`${section.heading}-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:sticky lg:top-28 h-fit divide-y divide-gray-200">

                {/* Key Takeaways */}
                <div className="p-6 lg:p-8">
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
                    Key Takeaways
                  </p>
                  <ul className="space-y-4">
                    {post.keyPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                        <span className="mt-2 h-1 w-1 bg-gray-900 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar CTA */}
                <div className="p-6 lg:p-8 bg-gray-900">
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-4">
                    Get Started
                  </p>
                  <h3 className="text-base font-black text-white leading-tight mb-3">
                    Ready to apply this playbook?
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    See how Space CRM helps your team automate outreach across email, LinkedIn, and WhatsApp.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="https://mail.spacecrm.net/spacecrm"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b-2 border-white/30 hover:border-white pb-0.5 transition-all duration-200 w-fit"
                    >
                      Try It Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b-2 border-white/30 hover:border-white pb-0.5 transition-all duration-200 w-fit"
                    >
                      Request a Demo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>

      {/* ── Related Articles ── */}
      {relatedPosts.length > 0 && (
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Related Articles
              </h2>
              <span className="text-xs font-mono text-gray-300">
                {String(relatedPosts.length).padStart(2, "0")} posts
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y sm:divide-y-0">
              {relatedPosts.map((related, index) => (
                <article
                  key={related.slug}
                  className={`group flex flex-col hover:bg-gray-50 transition-colors duration-200 ${index !== 0 ? "sm:border-l border-gray-200" : ""
                    }`}
                >
                  <Link href={`/blog/${related.slug}`} className="flex flex-col h-full">
                    {/* Image */}
                    <div className="h-44 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                          {related.category}
                        </span>
                        <span className="text-xs font-mono text-gray-300">{related.readTime}</span>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 flex-1 group-hover:text-gray-600 transition-colors duration-200 line-clamp-3">
                        {related.title}
                      </h3>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <time dateTime={related.publishedAt} className="text-xs font-mono text-gray-400">
                          {related.date}
                        </time>
                        <span className="text-xs font-semibold text-gray-900 border-b border-gray-900 pb-0.5">
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
      )}

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
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="https://mail.spacecrm.net/spacecrm"
                className="px-10 py-4 border border-gray-900 text-gray-900 text-sm font-semibold tracking-wide hover:bg-gray-50 transition-colors duration-150 text-center"
              >
                Try It Now →
              </Link>
              <Link
                href="/demo"
                className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 text-center"
              >
                Book a Demo →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}