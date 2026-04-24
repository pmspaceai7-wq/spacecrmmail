import type { Metadata } from "next";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features - Space CRM Marketing Automation Platform",
  description:
    "Discover all the powerful features of Space CRM. From bulk email campaigns to LinkedIn automation, WhatsApp integration, and AI-powered content creation.",
  keywords: [
    "CRM features",
    "marketing automation features",
    "email marketing features",
    "LinkedIn automation features",
    "WhatsApp business features",
    "AI content creation",
    "unified inbox",
    "lead generation tools",
  ],
  openGraph: {
    title: "Features - Space CRM Marketing Automation Platform",
    description:
      "Discover all the powerful features of Space CRM for automated marketing and sales growth.",
    url: "https://spacecrm.net/features",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM Features Overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - Space CRM Marketing Automation",
    description: "Discover all the powerful features of Space CRM for automated marketing and sales growth.",
  },
  alternates: { canonical: "https://spacecrm.net/features" },
};

// ── Data ──────────────────────────────────────────────────────────────────

const coreFeatures = [
  {
    label: "01",
    icon: "📧",
    title: "Bulk Email Campaigns",
    description:
      "Send personalized email campaigns to thousands of contacts with advanced segmentation and automation.",
    benefits: ["Advanced segmentation", "A/B testing", "Automated sequences", "Real-time analytics"],
    category: "Email Marketing",
  },
  {
    label: "02",
    icon: "💼",
    title: "LinkedIn Automation",
    description:
      "Automate your LinkedIn outreach with personalized connection requests, messages, and follow-ups.",
    benefits: ["Smart prospecting", "Automated messaging", "Profile enrichment", "Connection management"],
    category: "Social Selling",
  },
  {
    label: "03",
    icon: "💬",
    title: "WhatsApp Business",
    description:
      "Integrate WhatsApp Business for direct, instant communication with your prospects and customers.",
    benefits: ["Business API integration", "Automated responses", "Rich media support", "Message templates"],
    category: "Messaging",
  },
  {
    label: "04",
    icon: "🤖",
    title: "AI Content Assistant",
    description:
      "Generate high-converting email copy, LinkedIn messages, and WhatsApp content with AI.",
    benefits: ["Content generation", "Personalization", "Multi-language support", "Brand voice consistency"],
    category: "AI & Automation",
  },
  {
    label: "05",
    icon: "📨",
    title: "Unified Inbox",
    description:
      "Manage all your conversations from email, LinkedIn, and WhatsApp in one centralized dashboard.",
    benefits: ["Centralized management", "Real-time notifications", "Conversation history", "Team collaboration"],
    category: "Communication",
  },
  {
    label: "06",
    icon: "🎯",
    title: "Lead Generation",
    description:
      "Find and qualify leads automatically with advanced prospecting and enrichment tools.",
    benefits: ["Lead discovery", "Contact enrichment", "Lead scoring", "CRM integration"],
    category: "Sales",
  },
];

const advancedFeatures = [
  { label: "07", title: "Advanced Analytics & Reporting", description: "Track campaign performance with detailed analytics and custom reports.", icon: "📊" },
  { label: "08", title: "Workflow Automation", description: "Create complex automated workflows for lead nurturing and customer onboarding.", icon: "⚡" },
  { label: "09", title: "CRM Integration", description: "Seamlessly integrate with popular CRM platforms like Salesforce, HubSpot, and Pipedrive.", icon: "🔗" },
  { label: "10", title: "Team Collaboration", description: "Work together with shared inboxes, task assignments, and progress tracking.", icon: "👥" },
  { label: "11", title: "Compliance & Security", description: "Enterprise-grade security with SOC 2 compliance and GDPR adherence.", icon: "🛡️" },
  { label: "12", title: "API & Webhooks", description: "Connect with your existing tools using our comprehensive API and webhook system.", icon: "🔌" },
];

const certifications = [
  { name: "SOC 2 Type II", description: "Security and compliance certification" },
  { name: "GDPR Compliant", description: "European data protection regulation" },
  { name: "CCPA Ready", description: "California Consumer Privacy Act" },
  { name: "ISO 27001", description: "Information security management" },
];

const stats = [
  { stat: "50K+", label: "Active users" },
  { stat: "10M+", label: "Messages sent" },
  { stat: "98%",  label: "Uptime" },
  { stat: "4.8★", label: "User rating" },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Space CRM",
            description:
              "Comprehensive marketing automation platform featuring bulk email campaigns, LinkedIn automation, WhatsApp integration, and AI-powered content creation.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web Browser, Cloud",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier available, premium plans start from $29/month" },
            provider: { "@type": "Organization", name: "Space CRM", url: "https://spacecrm.net" },
            featureList: ["Bulk Email Campaigns", "LinkedIn Automation", "WhatsApp Business Integration", "AI-Powered Content Creation", "Unified Inbox Management", "Advanced Lead Generation", "Workflow Automation", "CRM Integration", "Team Collaboration Tools", "Advanced Analytics & Reporting", "SOC 2 Compliance", "GDPR Compliance"],
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1250", bestRating: "5", worstRating: "1" },
          }),
        }}
      />

      <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">

        {/* ── Hero ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
            <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
              <div>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                  Space CRM / Features
                </p>
                <h1 className="text-5xl  font-thin md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-8">
                  Everything you need
                  <br />
                  <em className="not-italic text-gray-300">to automate growth.</em>
                </h1>
                <p className="text-base text-gray-500 max-w-md leading-relaxed">
                  Powerful multichannel tools for Email, LinkedIn, and WhatsApp — unified in one platform, powered by AI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link
                  href="/demo"
                  className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 text-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-3 border border-gray-300 text-gray-700 text-sm font-semibold tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors duration-150 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200">
              {stats.map((s) => (
                <div key={s.label} className="p-8">
                  <p className="text-4xl font-black text-gray-900 mb-2 leading-none">{s.stat}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Features ── */}
        <section id="core-features" className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Core Features
              </h2>
              <span className="text-xs font-mono text-gray-300">{String(coreFeatures.length).padStart(2, "0")} tools</span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y sm:divide-y-0">
              {coreFeatures.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`group flex flex-col p-8 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 3 !== 0 ? "sm:border-l border-gray-200" : ""
                  } ${index >= 3 ? "border-t border-gray-200" : ""}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-mono text-xs text-gray-300">{feature.label}</span>
                  </div>

                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">
                    {feature.category}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 pt-6 border-t border-gray-100">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5 text-xs text-gray-500">
                        <span className="w-1 h-1 bg-gray-900 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Advanced Capabilities ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Advanced Capabilities
              </h2>
              <span className="text-xs font-mono text-gray-300">{String(advancedFeatures.length).padStart(2, "0")} tools</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y md:divide-y-0">
              {advancedFeatures.map((feature, index) => (
                <div
                  key={feature.label}
                  className={`group p-8 hover:bg-gray-50 transition-colors duration-200 ${
                    index % 3 !== 0 ? "md:border-l border-gray-200" : ""
                  } ${index >= 3 ? "border-t border-gray-200" : ""}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-mono text-xs text-gray-300">{feature.label}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security & Compliance ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Security & Compliance
              </h2>
              <span className="text-xs font-mono text-gray-300">{String(certifications.length).padStart(2, "0")} certifications</span>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 mb-0">
              {/* Left — intro copy */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <p className="text-2xl font-black text-gray-900 leading-tight mb-6">
                    Enterprise-grade security, built in from day one.
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Space CRM is designed for teams that can't afford a breach. Every layer of the platform — from data storage to API access — is audited against the strictest international standards.
                  </p>
                </div>
                <Link
                  href="/security"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-0.5 w-fit hover:gap-3 transition-all duration-150"
                >
                  Read our Security docs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right — certs grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-gray-200">
                {certifications.map((cert) => (
                  <div key={cert.name} className="p-6 flex flex-col items-start gap-3 hover:bg-gray-50 transition-colors duration-150">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{cert.name}</p>
                      <p className="text-xs font-mono text-gray-400 mt-0.5">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Integrations callout ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Integrations
              </h2>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
              {[
                { label: "CRM", tools: "Salesforce, HubSpot, Pipedrive, Zoho" },
                { label: "Productivity", tools: "Slack, Notion, Google Workspace, Microsoft 365" },
                { label: "Data & Analytics", tools: "Segment, Mixpanel, Amplitude, Looker" },
              ].map((group) => (
                <div key={group.label} className="p-8 hover:bg-gray-50 transition-colors duration-200">
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">{group.label}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{group.tools}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs font-mono text-gray-400">100+ integrations available via our open API</p>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section>
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
            <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                  Ready to experience the power of automation?
                </h2>
                <p className="text-base text-gray-500 max-w-md">
                  Start your free trial today and see how Space CRM transforms your marketing and sales process.
                </p>
              </div>
              <Link
                href="/demo"
                className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 shrink-0 text-center"
              >
                Start Free Trial →
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
