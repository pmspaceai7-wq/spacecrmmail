import type { Metadata } from "next";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Features - SpaceCRM | Email, LinkedIn, WhatsApp & Transactional Email Platform",
  description:
    "SpaceCRM combines email marketing, LinkedIn automation, WhatsApp campaigns, lead generation, AI content, and transactional email infrastructure — all in one platform.",
  keywords: [
    "email marketing platform",
    "LinkedIn automation",
    "WhatsApp business marketing",
    "transactional email API",
    "SMTP relay service",
    "lead generation software",
    "AI content generation",
    "multichannel outreach",
    "bulk email campaigns",
    "CRM and marketing automation"
  ],
  openGraph: {
    title: "Features - SpaceCRM | Email, LinkedIn, WhatsApp & Transactional Email Platform",
    description:
      "SpaceCRM combines email marketing, LinkedIn automation, WhatsApp campaigns, lead generation, AI content, and transactional email infrastructure — all in one platform.",
    url: "https://spacecrm.net/features",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM Features Overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - SpaceCRM | Email, LinkedIn, WhatsApp & Transactional Email Platform",
    description:
      "SpaceCRM combines email marketing, LinkedIn automation, WhatsApp campaigns, lead generation, AI content, and transactional email infrastructure — all in one platform.",
  },
  alternates: { canonical: "https://spacecrm.net/features" },
};

// ── Data ──────────────────────────────────────────────────────────────────

const showcaseFeatures = [
  {
    eyebrow: "COMMAND CENTER",
    title: "Every Campaign. Every Channel. One View.",
    description: "See exactly how your Email, LinkedIn, and WhatsApp campaigns are performing right now. Track sends, opens, replies, and revenue — all from a single real-time dashboard built for marketing teams who move fast.",
    image: "/images/screenshots/overview.jpeg",
    bullets: [
      "Live multichannel campaign stats",
      "Revenue and conversion tracking",
      "Team activity and task overview",
      "Quick-launch campaign shortcuts"
    ],
  },
  {
    eyebrow: "CAMPAIGNS",
    title: "Launch Multichannel Campaigns in Minutes",
    description: "Build automated email sequences, LinkedIn outreach flows, and WhatsApp broadcasts from one place. Set triggers, define delays, and let SpaceCRM handle follow-ups automatically — so your team focuses on closing, not chasing.",
    image: "/images/screenshots/campaign.jpeg",
    bullets: [
      "Email, LinkedIn & WhatsApp in one builder",
      "Visual sequence and automation builder",
      "Behavioral triggers and smart delays",
      "A/B testing and send-time optimization"
    ],
  },
  {
    eyebrow: "EMAIL TEMPLATES",
    title: "Professional Emails That Actually Get Opened",
    description: "Start from a library of high-converting templates or build your own with our drag-and-drop editor. Every template is mobile-optimized, fully brandable, and designed to maximize open and click-through rates.",
    image: "/images/screenshots/template.jpeg",
    bullets: [
      "100+ conversion-focused templates",
      "Drag-and-drop email editor",
      "Mobile-first responsive design",
      "Brand kit and custom styling support"
    ],
  },
  {
    eyebrow: "DEVELOPER API",
    title: "Transactional Email Built for Developers",
    description: "Integrate SpaceCRM's sending infrastructure directly into your product with a clean, well-documented REST API. Send OTPs, receipts, and onboarding emails reliably at scale — with full event tracking built in.",
    image: "/images/screenshots/send.jpeg",
    bullets: [
      "Simple REST API with clear documentation",
      "Webhook events: delivered, opened, bounced",
      "Node.js, Python & PHP SDKs",
      "99.9% delivery uptime SLA"
    ],
  },
  {
    eyebrow: "CONTACT MANAGEMENT",
    title: "The Right Message to the Right People",
    description: "Import your leads, segment them by behavior or custom fields, and target exactly who needs to hear from you. SpaceCRM keeps your contact database clean, organized, and always ready to convert.",
    image: "/images/screenshots/contacts.jpeg",
    bullets: [
      "Smart audience segmentation",
      "Bulk CSV import with field mapping",
      "Custom tags and contact fields",
      "Auto-deduplication and list hygiene"
    ],
  },
];

const coreFeatures = [
  {
    label: "01",
    icon: "📧",
    category: "Email Marketing",
    title: "Bulk Email Campaigns",
    description: "Send personalized campaigns to thousands of contacts. Smart segmentation, automated sequences, and real-time analytics — everything you need to run email marketing at scale.",
    benefits: [
      "Drag-and-drop campaign builder",
      "Advanced audience segmentation",
      "A/B subject line and content testing",
      "Real-time open, click and reply tracking"
    ],
  },
  {
    label: "02",
    icon: "💼",
    category: "LinkedIn Outreach",
    title: "LinkedIn Automation",
    description: "Scale LinkedIn prospecting without the manual effort. Automate connection requests, follow-up sequences, and profile engagement — while keeping every message personal.",
    benefits: [
      "Automated connection request sequences",
      "Personalized follow-up message flows",
      "Profile visit and engagement automation",
      "Smart reply detection and auto-stop"
    ],
  },
  {
    label: "03",
    icon: "💬",
    category: "WhatsApp Marketing",
    title: "WhatsApp Business Campaigns",
    description: "Reach your audience on the world's most used messaging app. Send broadcast campaigns, automate customer replies, and run WhatsApp marketing through the official Business API.",
    benefits: [
      "Official WhatsApp Business API integration",
      "Broadcast campaigns to thousands of contacts",
      "Automated reply and follow-up workflows",
      "Rich media and approved template messages"
    ],
  },
  {
    label: "04",
    icon: "🎯",
    category: "Lead Generation",
    title: "Lead Generation & Pipeline",
    description: "Find, enrich, and qualify leads automatically. Score prospects by intent, manage your sales pipeline visually, and track every interaction from first touch to closed deal — without juggling separate tools.",
    benefits: [
      "Automated lead discovery and enrichment",
      "Intent-based lead scoring",
      "Visual sales pipeline management",
      "Full customer interaction history"
    ],
  },
  {
    label: "05",
    icon: "🤖",
    category: "AI Assistant",
    title: "AI Marketing Assistant",
    description: "Stop writing from scratch. Describe your campaign goal and let AI generate high-converting copy for email, LinkedIn, and WhatsApp — in seconds, in any language.",
    benefits: [
      "AI email subject lines and body copy",
      "LinkedIn message personalization at scale",
      "WhatsApp campaign content generation",
      "Multi-language and brand voice support"
    ],
  },
  {
    label: "06",
    icon: "📨",
    category: "Communication",
    title: "Unified Inbox",
    description: "Every reply from every channel — email, LinkedIn, and WhatsApp — lands in one inbox. No tab-switching. Your team responds faster, follows up consistently, and misses nothing.",
    benefits: [
      "All channels in one centralized view",
      "Smart conversation routing to team members",
      "Full conversation history per contact",
      "Real-time notifications and team notes"
    ],
  },
];

const emailInfrastructure = [
  {
    label: "01",
    icon: "⚡",
    title: "Send API",
    description: "A clean REST API for sending transactional emails directly from your app. OTPs, welcome emails, password resets, order confirmations — delivered reliably with full event tracking.",
    benefits: [
      "Simple REST API with clear documentation",
      "Webhook events: delivered, opened, bounced",
      "Node.js, Python & PHP SDKs",
      "99.9% uptime SLA"
    ],
  },
  {
    label: "02",
    icon: "🔌",
    title: "SMTP Relay",
    description: "Drop in SpaceCRM's SMTP credentials and start sending in minutes. Built for high-volume delivery with TLS encryption, bounce handling, and dedicated IP options.",
    benefits: [
      "Plug-and-play SMTP configuration",
      "TLS/SSL encrypted sending",
      "Automatic bounce and complaint handling",
      "Dedicated IP for high-volume senders"
    ],
  },
  {
    label: "03",
    icon: "🌐",
    title: "Domain & Mailbox Setup",
    description: "Verify your sending domains with guided SPF, DKIM, and DMARC setup. Connect and warm up multiple mailboxes automatically to protect sender reputation at scale.",
    benefits: [
      "Step-by-step SPF / DKIM / DMARC setup",
      "Domain reputation and health monitoring",
      "Multi-mailbox connection and management",
      "Automated inbox warmup sequences"
    ],
  },
  {
    label: "04",
    icon: "📋",
    title: "Activity Logs",
    description: "Every send, delivery, open, click, bounce, and unsubscribe is logged in real time. Filter, search, and export logs instantly to debug issues and prove deliverability.",
    benefits: [
      "Real-time delivery event stream",
      "Filter by campaign, status, or contact",
      "One-click error diagnostics",
      "Full log export to CSV"
    ],
  },
];

const advancedFeatures = [
  {
    label: "07",
    icon: "📊",
    title: "Advanced Analytics & Reporting",
    description: "Track campaign performance across email, LinkedIn, and WhatsApp in one unified report. Measure opens, clicks, replies, and revenue attribution with exportable dashboards."
  },
  {
    label: "08",
    icon: "⚙️",
    title: "Workflow Automation",
    description: "Build multi-step automation flows triggered by contact behavior. Nurture leads, onboard customers, and follow up automatically — without manual intervention."
  },
  {
    label: "09",
    icon: "🔗",
    title: "CRM Integrations",
    description: "Bidirectional sync with HubSpot, Salesforce, and Pipedrive. Every interaction logged in SpaceCRM reflects instantly in your CRM, and vice versa."
  },
  {
    label: "10",
    icon: "👥",
    title: "Team Collaboration",
    description: "Assign leads, share inboxes, and track team activity from one dashboard. Built for sales and marketing teams who need alignment without endless meetings."
  },
  {
    label: "11",
    icon: "🛡️",
    title: "Compliance & Security",
    description: "GDPR and CCPA compliant with end-to-end encryption, role-based access controls, and full audit logging. Built for teams that handle sensitive customer data."
  },
  {
    label: "12",
    icon: "🔑",
    title: "Zapier & Webhook Automation",
    description: "Connect SpaceCRM to 5,000+ external apps via Zapier or build custom automations using our webhook system. Trigger actions in other tools the moment something happens in SpaceCRM."
  }
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
              <AnimatedSection direction="up" delay={0}>
                <div>
                  <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                    Space CRM / Features
                  </p>
                  <h1 className="text-5xl font-thin md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-8">
                    One platform.
                    <br />
                    <em className="not-italic text-gray-300">Every channel.</em>
                  </h1>
                  <p className="text-base text-gray-500 max-w-md leading-relaxed">
                    Email campaigns, LinkedIn outreach, WhatsApp marketing, lead generation, AI content, and transactional email infrastructure — unified for teams that are serious about growth.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={150}>
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
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200">
              {stats.map((s, index) => (
                <AnimatedSection key={s.label} direction="up" delay={index * 100}>
                  <div className="p-8">
                    <p className="text-4xl font-black text-gray-900 mb-2 leading-none">{s.stat}</p>
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-400">{s.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── See It In Action ── */}
        <section id="showcase" className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-baseline justify-between mb-16 border-b border-gray-200 pb-4 pt-20">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                See It In Action
              </h2>
              <span className="text-xs font-mono text-gray-300">
                05 features
              </span>
            </div>

            <div>
              {showcaseFeatures.map((feature, index) => {
                const isEven = index % 2 === 1;
                return (
                  <AnimatedSection key={feature.title} direction="up" delay={0}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-24 border-b border-gray-100 last:border-b-0">
                      {/* Text Column */}
                      <div
                        className={`w-full flex flex-col justify-center ${
                          isEven ? "order-1 lg:order-2" : ""
                        }`}
                      >
                        <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-3">
                          {feature.eyebrow}
                        </span>
                        <h3 className="text-3xl font-black text-gray-900 leading-tight mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-md">
                          {feature.description}
                        </p>

                        <ul className="space-y-3 mb-8">
                          {feature.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 mt-1.5 bg-gray-900 rounded-full flex-shrink-0" />
                              <span className="text-sm text-gray-600">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href="/demo"
                          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 w-fit"
                        >
                          See It Live →
                        </Link>
                      </div>

                      {/* Image Column */}
                      <div
                        className={`w-full ${
                          isEven ? "order-2 lg:order-1" : ""
                        }`}
                      >
                        <div className="rounded-sm overflow-hidden border border-gray-200 shadow-xl bg-white">
                          {/* Browser Window Header */}
                          <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-1.5 select-none">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            <div className="flex-1 mx-4 bg-white rounded-full px-3 py-1 text-xs text-gray-400 font-mono text-center truncate">
                              mail.spacecrm.net
                            </div>
                          </div>
                          {/* Screenshot */}
                          <div className="relative w-full aspect-[8/5] bg-gray-50">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={1200}
                              height={750}
                              className="w-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Core Features ── */}
        <section id="core-features" className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <AnimatedSection direction="up" delay={0}>
              <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
                <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                  Core Features
                </h2>
                <span className="text-xs font-mono text-gray-300">{String(coreFeatures.length).padStart(2, "0")} tools</span>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y sm:divide-y-0">
              {coreFeatures.map((feature, index) => (
                <AnimatedSection
                  key={feature.label}
                  direction="up"
                  delay={(index % 3) * 100}
                  className={`group flex flex-col hover:bg-gray-50 transition-colors duration-200 ${
                    index % 3 !== 0 ? "sm:border-l border-gray-200" : ""
                  } ${index >= 3 ? "border-t border-gray-200" : ""}`}
                >
                  <div className="p-8 flex flex-col h-full flex-1">
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
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Email Infrastructure ── */}
        <section id="email-infrastructure" className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <AnimatedSection direction="up" delay={0}>
              <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
                <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                  Email Infrastructure
                </h2>
                <span className="text-xs font-mono text-gray-300">04 services</span>
              </div>
            </AnimatedSection>

            {/* Intro Callout Box */}
            <AnimatedSection direction="up" delay={0}>
              <div className="w-full bg-gray-50 border border-gray-200 p-8 mb-10">
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  More than a CRM — a complete email sending platform.
                </h3>
                <p className="text-sm text-gray-500 max-w-2xl">
                  SpaceCRM includes the same transactional email infrastructure used by platforms like Resend, SendGrid, and Mailgun. Developers can use SpaceCRM to send OTPs, welcome emails, password resets, order confirmations, and notifications directly from their applications — with full deliverability control.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 border border-gray-200 divide-y sm:divide-y-0">
              {emailInfrastructure.map((feature, index) => (
                <AnimatedSection
                  key={feature.label}
                  direction="up"
                  delay={index * 100}
                  className={`group flex flex-col hover:bg-gray-50 transition-colors duration-200 ${
                    index % 2 !== 0 ? "sm:border-l border-gray-200" : ""
                  } ${index >= 2 ? "border-t border-gray-200" : ""}`}
                >
                  <div className="p-8 flex flex-col h-full flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="font-mono text-xs text-gray-300">{feature.label}</span>
                    </div>

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
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Advanced Capabilities ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <AnimatedSection direction="up" delay={0}>
              <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
                <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                  Advanced Capabilities
                </h2>
                <span className="text-xs font-mono text-gray-300">{String(advancedFeatures.length).padStart(2, "0")} tools</span>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y md:divide-y-0">
              {advancedFeatures.map((feature, index) => (
                <AnimatedSection
                  key={feature.label}
                  direction="up"
                  delay={(index % 3) * 100}
                  className={`group hover:bg-gray-50 transition-colors duration-200 ${
                    index % 3 !== 0 ? "md:border-l border-gray-200" : ""
                  } ${index >= 3 ? "border-t border-gray-200" : ""}`}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="font-mono text-xs text-gray-300">{feature.label}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security & Compliance ── */}
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <AnimatedSection direction="up" delay={0}>
              <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
                <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                  Security & Compliance
                </h2>
                <span className="text-xs font-mono text-gray-300">{String(certifications.length).padStart(2, "0")} certifications</span>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 mb-0">
              {/* Left — intro copy */}
              <AnimatedSection direction="left" delay={0} className="p-8 lg:p-12 flex flex-col justify-between">
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
              </AnimatedSection>

              {/* Right — certs grid */}
              <AnimatedSection direction="right" delay={150} className="grid grid-cols-2 divide-x divide-y divide-gray-200">
                {certifications.map((cert) => (
                  <div key={cert.name} className="p-6 flex flex-col items-start gap-3 hover:bg-gray-50 transition-colors duration-150">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{cert.name}</p>
                      <p className="text-xs font-mono text-gray-400 mt-0.5">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Integrations ── */}
        <div className="border-t border-b border-gray-200 py-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <AnimatedSection direction="left" delay={0}>
              <div>
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-2">Integrations</p>
                <p className="text-base font-semibold text-gray-900">
                  Connect SpaceCRM to your entire stack.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Google, Gmail, LinkedIn, WhatsApp, HubSpot, Salesforce, Pipedrive, Slack, Zapier, Microsoft 365 and 100+ more.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={100} className="shrink-0">
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-900 text-gray-900 text-sm font-semibold tracking-wide hover:bg-gray-900 hover:text-white transition-colors duration-150 shrink-0"
              >
                View all integrations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* ── CTA ── */}
        <section>
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
            <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
              <AnimatedSection direction="left" delay={0}>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                  One platform to run your entire outreach and email operation.
                </h2>
                <p className="text-base text-gray-500 max-w-md">
                  Join thousands of teams using SpaceCRM to automate Email, LinkedIn, and WhatsApp — and send transactional emails that actually land in the inbox.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={150} className="shrink-0 flex items-center justify-center">
                <Link
                  href="/demo"
                  className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 shrink-0 text-center"
                >
                  Start Free Trial →
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
