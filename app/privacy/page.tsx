import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Space CRM",
  description:
    "Learn how Space CRM collects, uses, and protects your personal information. Our privacy policy explains our data practices and your rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "privacy rights",
    "data security",
  ],
  openGraph: {
    title: "Privacy Policy - Space CRM",
    description: "Learn how we protect your data and privacy.",
    url: "https://spacecrm.io/privacy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM Privacy Policy",
    description: "Learn how we protect your data and privacy.",
  },
  alternates: { canonical: "https://spacecrm.io/privacy" },
};

export default function PrivacyPage() {
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
            Privacy Policy
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
            At Space CRM, we are committed to protecting your privacy and ensuring the security of your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1.1 Personal Information</h3>
          <p className="text-gray-700 mb-4">
            We may collect personal information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Name, email address, and contact information</li>
            <li>Account credentials and profile information</li>
            <li>Payment information for billing purposes</li>
            <li>Communications you send to us</li>
            <li>Information about your use of our services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1.2 Automatically Collected Information</h3>
          <p className="text-gray-700 mb-4">
            When you use our services, we automatically collect certain information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage data (pages visited, features used, time spent)</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Location information (with your permission)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Providing and maintaining our services</li>
            <li>Processing transactions and managing your account</li>
            <li>Communicating with you about our services</li>
            <li>Improving and optimizing our platform</li>
            <li>Ensuring security and preventing fraud</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Information Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
            <li>With trusted service providers who assist our operations</li>
            <li>In connection with a business transfer or acquisition</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Access: Request a copy of your personal information</li>
            <li>Rectification: Correct inaccurate or incomplete information</li>
            <li>Erasure: Request deletion of your personal information</li>
            <li>Portability: Receive your data in a structured format</li>
            <li>Restriction: Limit how we process your information</li>
            <li>Objection: Object to certain types of processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-6">
            We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
            You can manage your cookie preferences through your browser settings or our cookie settings page.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. International Data Transfers</h2>
          <p className="text-gray-700 mb-6">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards
            are in place to protect your data during such transfers.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Data Retention</h2>
          <p className="text-gray-700 mb-6">
            We retain your personal information only as long as necessary for the purposes outlined in this policy,
            unless a longer retention period is required by law.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Children's Privacy</h2>
          <p className="text-gray-700 mb-6">
            Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
            If we become aware that we have collected such information, we will take steps to delete it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Changes to This Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy
            on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">11. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul className="list-none text-gray-700 mb-6">
            <li>Email: privacy@spacecrm.io</li>
            <li>Address: [Your Business Address]</li>
          </ul>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              This privacy policy is effective as of February 23, 2026. By using Space CRM, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}