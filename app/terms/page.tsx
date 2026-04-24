import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Space CRM",
  description:
    "Read our Terms of Service to understand the rules and guidelines for using Space CRM. Learn about your rights and responsibilities.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "legal terms",
  ],
  openGraph: {
    title: "Terms of Service - Space CRM",
    description: "Read our terms and conditions for using Space CRM.",
    url: "https://spacecrm.net/terms",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM Terms of Service",
    description: "Read our terms and conditions for using Space CRM.",
  },
  alternates: { canonical: "https://spacecrm.net/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: February 23, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 mb-8">
            These Terms of Service ("Terms") govern your use of Space CRM and our related services.
            By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By creating an account or using Space CRM, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            If you do not agree to these Terms, you must not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Description of Service</h2>
          <p className="text-gray-700 mb-6">
            Space CRM provides marketing automation tools for email campaigns, LinkedIn outreach, WhatsApp messaging, and contact management.
            Our services include AI-powered content generation, unified inbox management, and analytics.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. User Accounts</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.1 Account Creation</h3>
          <p className="text-gray-700 mb-4">
            To use our services, you must create an account with accurate and complete information.
            You are responsible for maintaining the confidentiality of your account credentials.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3.2 Account Responsibilities</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>You must be at least 13 years old to use our services</li>
            <li>You are responsible for all activities under your account</li>
            <li>You must notify us immediately of any unauthorized use</li>
            <li>You must provide accurate and current information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Acceptable Use</h2>
          <p className="text-gray-700 mb-4">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Send spam or unsolicited messages</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the service to send harmful or malicious content</li>
            <li>Impersonate others or misrepresent your identity</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Content and Data</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5.1 Your Content</h3>
          <p className="text-gray-700 mb-4">
            You retain ownership of the content you create or upload to our platform.
            By using our services, you grant us a limited license to process and store your content for service provision.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5.2 Data Security</h3>
          <p className="text-gray-700 mb-6">
            We implement reasonable security measures to protect your data. However, you acknowledge that no system is completely secure,
            and we cannot guarantee absolute security of your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Payment and Billing</h2>
          <p className="text-gray-700 mb-4">
            For paid services:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Fees are billed in advance on a recurring basis</li>
            <li>You are responsible for all applicable taxes</li>
            <li>Failed payments may result in service suspension</li>
            <li>Refunds are provided according to our refund policy</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Termination</h2>
          <p className="text-gray-700 mb-4">
            Either party may terminate this agreement at any time. Upon termination:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>We may delete your account and data</li>
            <li>Outstanding payments remain due</li>
            <li>Certain provisions survive termination</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Disclaimers</h2>
          <p className="text-gray-700 mb-6">
            Our services are provided "as is" without warranties of any kind. We disclaim all warranties,
            express or implied, including merchantability and fitness for a particular purpose.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            To the maximum extent permitted by law, Space CRM shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Indemnification</h2>
          <p className="text-gray-700 mb-6">
            You agree to indemnify and hold Space CRM harmless from any claims, damages, or expenses arising from
            your violation of these Terms or applicable laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved in the courts of [Your Jurisdiction].
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">12. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We may update these Terms from time to time. We will notify you of material changes via email or through our platform.
            Continued use of our services constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">13. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about these Terms, please contact us:
          </p>
          <ul className="list-none text-gray-700 mb-6">
            <li>Email: legal@spacecrm.net</li>
            <li>Address: [Your Business Address]</li>
          </ul>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              These Terms of Service are effective as of February 23, 2026. By using Space CRM, you agree to these terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
