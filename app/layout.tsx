import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://spacecrm.net"),
  title: {
    default: "Space CRM - Marketing Automation for Email, LinkedIn & WhatsApp",
    template: "%s | Space CRM",
  },
  description:
    "Automate your growth across every channel. Space CRM is a powerful marketing automation platform for bulk email campaigns, LinkedIn messaging, and WhatsApp outreach with AI-powered content creation.",
  keywords: [
    "CRM",
    "marketing automation",
    "email marketing",
    "LinkedIn automation",
    "WhatsApp campaigns",
    "bulk email",
    "sales automation",
    "lead generation",
    "AI copywriting",
    "unified inbox",
  ],
  authors: [{ name: "Space CRM Team" }],
  creator: "Space CRM",
  publisher: "Space CRM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spacecrm.net",
    siteName: "Space CRM",
    title: "Space CRM - Marketing Automation for Email, LinkedIn & WhatsApp",
    description:
      "Automate your growth across every channel with AI-powered marketing automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Space CRM - Marketing Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM - Marketing Automation Platform",
    description:
      "Automate your growth across every channel with AI-powered marketing automation.",
    images: ["/og-image.png"],
    creator: "@spacecrm",
  },
  verification: {
    google: "SoHaY3sbduk79rVVOQg6TGkOBX6dsQfZNff6kyBzeWs",
  },
  alternates: {
    canonical: "https://spacecrm.net",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icononly_transparent_nobuffer.png", type: "image/png" },
    ],
    apple: [
      { url: "/icononly_transparent_nobuffer.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

