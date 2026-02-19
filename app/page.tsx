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
    url: "https://spacecrm.io",
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
    canonical: "https://spacecrm.io",
  },
};

export default function HomePage() {
  return (
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
  );
}
