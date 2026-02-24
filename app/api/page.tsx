import type { Metadata } from "next";
import Link from "next/link";
import { Code, ArrowRight, ExternalLink, Copy, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "API Documentation - Space CRM",
  description:
    "Integrate with Space CRM using our REST API. Send emails, manage contacts, automate campaigns, and more with comprehensive API documentation.",
  keywords: [
    "API documentation",
    "Space CRM API",
    "REST API",
    "integration",
    "developer docs",
  ],
  openGraph: {
    title: "API Documentation - Space CRM",
    description: "Comprehensive API documentation for integrating with Space CRM.",
    url: "https://spacecrm.io/api",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM API Documentation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM API Documentation",
    description: "Integrate with Space CRM using our REST API.",
  },
  alternates: { canonical: "https://spacecrm.io/api" },
};

const endpoints = [
  {
    method: "GET",
    path: "/api/contacts",
    description: "Retrieve a list of contacts",
    example: `curl -X GET "https://api.spacecrm.io/contacts" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  },
  {
    method: "POST",
    path: "/api/contacts",
    description: "Create a new contact",
    example: `curl -X POST "https://api.spacecrm.io/contacts" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }'`,
  },
  {
    method: "POST",
    path: "/api/campaigns/email",
    description: "Send an email campaign",
    example: `curl -X POST "https://api.spacecrm.io/campaigns/email" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "subject": "Welcome to Space CRM",
    "content": "<h1>Welcome!</h1><p>Thank you for joining us.</p>",
    "recipients": ["user@example.com"]
  }'`,
  },
  {
    method: "GET",
    path: "/api/analytics",
    description: "Get campaign analytics",
    example: `curl -X GET "https://api.spacecrm.io/analytics?campaign_id=123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  },
];

const languages = [
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PHP", icon: "🐘" },
  { name: "Ruby", icon: "💎" },
  { name: "Go", icon: "🔵" },
];

export default function ApiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
              Developer Resources
            </p>
            <h1 className="text-4xl md:text-6xl font-thin font-black tracking-tight leading-[0.95] text-gray-900 mb-6">
              API Documentation
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Integrate Space CRM into your applications with our comprehensive REST API.
              Automate campaigns, manage contacts, and access analytics programmatically.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">1. Get Your API Key</h3>
                <p className="text-gray-600 mb-4">
                  Sign up for a Space CRM account and generate an API key from your dashboard.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium"
                >
                  Get API Key
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">2. Make Your First Request</h3>
                <p className="text-gray-600 mb-4">
                  Use your API key to authenticate requests to our endpoints.
                </p>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                  <div className="text-gray-500 mb-2"># Example request</div>
                  curl -X GET "https://api.spacecrm.io/contacts" \<br />
                  &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">SDKs & Libraries</h2>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">{lang.icon}</div>
                  <div className="font-medium text-gray-900">{lang.name}</div>
                  <div className="text-sm text-gray-500">Coming Soon</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              Official SDKs are in development. For now, use our REST API directly.
            </p>
          </div>
        </div>
      </div>

      {/* API Endpoints */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">API Endpoints</h2>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded text-sm font-mono font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-gray-900 font-mono">{endpoint.path}</code>
                </div>

                <p className="text-gray-700 mb-4">{endpoint.description}</p>

                <div className="bg-gray-50 p-4 rounded font-mono text-sm overflow-x-auto">
                  <pre>{endpoint.example}</pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Authentication */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Authentication</h2>
            <p className="text-gray-600 mb-6">
              All API requests require authentication using your API key. Include the key in the Authorization header.
            </p>

            <div className="bg-gray-50 p-4 rounded font-mono text-sm">
              Authorization: Bearer YOUR_API_KEY
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Rate Limits</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 1000 requests per hour for free plans</li>
                <li>• 10,000 requests per hour for Pro plans</li>
                <li>• Custom limits for Enterprise plans</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Support</h2>
            <p className="text-gray-600 mb-6">
              Need help with the API? Our developer support team is here to assist.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:api@spacecrm.io"
                className="flex items-center gap-2 text-gray-900 hover:text-gray-700"
              >
                <ExternalLink className="w-4 h-4" />
                api@spacecrm.io
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}