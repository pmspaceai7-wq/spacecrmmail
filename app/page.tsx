import type { Metadata } from "next";
import {
  Hero,
  Integrations,
  Features,
  Automation,
  AIAssistant,
  Pricing,
  Testimonials,
  FAQ,
  CTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Space CRM - Automate Your Growth Across Every Channel",
  description:
    "Space CRM is a powerful marketing automation platform for bulk email campaigns, LinkedIn messaging, and WhatsApp outreach. Automate your growth with AI-powered content creation and a unified inbox for all your conversations.",
  keywords: [
    "marketing automation",
    "email marketing",
    "LinkedIn automation",
    "WhatsApp business",
    "bulk email",
    "CRM software",
    "sales automation",
    "lead generation",
  ],
  openGraph: {
    title: "Space CRM - Automate Your Growth Across Every Channel",
    description:
      "Powerful marketing automation for Email, LinkedIn, and WhatsApp. AI-powered content creation and unified inbox.",
    url: "https://spacecrm.net",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Space CRM Marketing Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM - Marketing Automation Platform",
    description:
      "Automate your growth across Email, LinkedIn, and WhatsApp with AI-powered tools.",
  },
  alternates: {
    canonical: "https://spacecrm.net",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Space CRM",
            "description": "Space CRM is a powerful marketing automation platform for bulk email campaigns, LinkedIn messaging, and WhatsApp outreach. Automate your growth with AI-powered content creation and a unified inbox for all your conversations.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser, Cloud",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free tier available, premium plans start from $29/month"
            },
            "provider": {
              "@type": "Organization",
              "name": "Space CRM",
              "url": "https://spacecrm.net"
            },
            "featureList": [
              "Bulk Email Campaigns",
              "LinkedIn Automation",
              "WhatsApp Business Integration",
              "AI-Powered Content Creation",
              "Unified Inbox",
              "Lead Generation",
              "Marketing Automation",
              "CRM Integration"
            ],
            "screenshot": "https://spacecrm.net/og-image.png",
            "softwareVersion": "2.0",
            "fileSize": "Web Application",
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Marketing Professionals, Sales Teams, Business Owners"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Organization",
              "name": "Space CRM Team"
            },
            "datePublished": "2024-01-01",
            "isAccessibleForFree": true,
            "applicationSubCategory": "Marketing Automation, CRM, HRMS",
            "permissions": "Requires internet connection",
            "softwareRequirements": "Modern web browser",
            "downloadUrl": "https://spacecrm.net/signup",
            "installUrl": "https://spacecrm.net/signup",
            "countriesSupported": ["US", "CA", "UK", "AU", "DE", "FR", "IN", "BR"],
            "inLanguage": ["en", "es", "fr", "de"],
            "keywords": "marketing automation, email marketing, LinkedIn automation, WhatsApp business, CRM software, sales automation, lead generation, AI content creation"
          })
        }}
      />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Integrations Marquee */}
        <Integrations />

        {/* Core Features Grid */}
        <Features />

        {/* Automation Section */}
        <Automation />

        {/* AI Content Assistant */}
        <AIAssistant />

        {/* Pricing Plans */}
        <Pricing />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Final CTA */}
        <CTA />
      </main>
    </>
  );
}

