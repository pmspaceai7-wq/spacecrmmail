import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Settings, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Settings - Space CRM",
  description:
    "Manage your cookie preferences for Space CRM. Control how we use cookies and tracking technologies to enhance your experience.",
  keywords: [
    "cookie settings",
    "privacy settings",
    "cookie preferences",
    "tracking",
    "data privacy",
  ],
  openGraph: {
    title: "Cookie Settings - Space CRM",
    description: "Manage your cookie preferences and privacy settings.",
    url: "https://spacecrm.io/cookies",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM Cookie Settings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM Cookie Settings",
    description: "Manage your cookie preferences and privacy settings.",
  },
  alternates: { canonical: "https://spacecrm.io/cookies" },
};

const cookieCategories = [
  {
    id: "essential",
    name: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    required: true,
    cookies: [
      { name: "session_id", purpose: "Maintains your session", duration: "Session" },
      { name: "csrf_token", purpose: "Security protection", duration: "Session" },
    ],
  },
  {
    id: "analytics",
    name: "Analytics Cookies",
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    required: false,
    cookies: [
      { name: "_ga", purpose: "Google Analytics tracking", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics session", duration: "24 hours" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing Cookies",
    description: "These cookies are used to track visitors across websites to display ads that are relevant and engaging for individual users.",
    required: false,
    cookies: [
      { name: "fb_pixel", purpose: "Facebook pixel tracking", duration: "90 days" },
      { name: "linkedin_insight", purpose: "LinkedIn insight tracking", duration: "90 days" },
    ],
  },
  {
    id: "preferences",
    name: "Preference Cookies",
    description: "These cookies enable the website to remember information that changes the way the website behaves or looks.",
    required: false,
    cookies: [
      { name: "theme", purpose: "Remember your theme preference", duration: "1 year" },
      { name: "language", purpose: "Remember your language preference", duration: "1 year" },
    ],
  },
];

export default function CookiesPage() {
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
            Cookie Settings
          </h1>
          <p className="text-gray-600">
            Manage your cookie preferences and control how we use tracking technologies.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What are Cookies?</h2>
          <p className="text-gray-700 mb-6">
            Cookies are small text files that are stored on your device when you visit our website.
            They help us provide you with a better browsing experience by remembering your preferences
            and understanding how you use our site.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cookie Preferences</h2>
          <p className="text-gray-700 mb-6">
            You can control which types of cookies you allow. Essential cookies cannot be disabled
            as they are necessary for the website to function properly.
          </p>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-6">
          {cookieCategories.map((category) => (
            <div key={category.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                </div>
                <div className="ml-4">
                  {category.required ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-medium">Required</span>
                    </div>
                  ) : (
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      <Settings className="w-4 h-4 inline mr-2" />
                      Manage
                    </button>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Cookies in this category:</h4>
                <div className="space-y-2">
                  {category.cookies.map((cookie) => (
                    <div key={cookie.name} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded">
                      <div>
                        <code className="text-sm font-mono text-gray-900">{cookie.name}</code>
                        <span className="text-gray-600 ml-2">• {cookie.purpose}</span>
                      </div>
                      <span className="text-sm text-gray-500">{cookie.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Save Preferences */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Save Your Preferences</h3>
          <p className="text-gray-700 mb-6">
            Your cookie preferences will be saved and applied across all Space CRM services.
            You can change these settings at any time by returning to this page.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Save Preferences
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors">
              Accept All
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors">
              Reject All
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Cookie Settings</h2>
            <p className="text-gray-700 mb-4">
              You can also control cookies through your browser settings. Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our cookie practices or need assistance with your preferences, please contact us:
            </p>
            <ul className="list-none text-gray-700">
              <li>Email: privacy@spacecrm.io</li>
              <li>Address: [Your Business Address]</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this cookie policy from time to time. We will notify you of any material changes
              by posting the new policy on this page and updating the "Last updated" date at the top.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Last updated:</strong> February 23, 2026
          </p>
        </div>
      </div>
    </div>
  );
}