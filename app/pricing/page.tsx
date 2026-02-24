import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - Space CRM Marketing Automation Platform",
  description:
    "Choose the perfect plan for your marketing automation needs. From free tier to enterprise solutions, Space CRM offers flexible pricing for Email, LinkedIn, and WhatsApp campaigns.",
  keywords: [
    "pricing",
    "Space CRM pricing",
    "marketing automation pricing",
    "CRM pricing",
    "email marketing pricing",
  ],
  openGraph: {
    title: "Pricing - Space CRM Marketing Automation Platform",
    description:
      "Flexible pricing plans for marketing automation across Email, LinkedIn, and WhatsApp.",
    url: "https://spacecrm.io/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Space CRM Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space CRM Pricing",
    description: "Choose the right plan for your marketing automation needs.",
  },
  alternates: { canonical: "https://spacecrm.io/pricing" },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with basic automation",
    features: [
      "Up to 500 contacts",
      "Email campaigns",
      "Basic analytics",
      "Community support",
      "1 user account",
    ],
    cta: "Get Started",
    ctaLink: "/demo",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Advanced features for growing businesses",
    features: [
      "Up to 10,000 contacts",
      "Email, LinkedIn & WhatsApp campaigns",
      "AI content assistant",
      "Advanced analytics & reporting",
      "Unified inbox",
      "5 user accounts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaLink: "/demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited contacts",
      "All channels + custom integrations",
      "Advanced AI features",
      "White-label options",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom workflows",
    ],
    cta: "Contact Sales",
    ctaLink: "/demo",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
              Pricing
            </p>
            <h1 className="text-4xl md:text-6xl font-thin font-black tracking-tight leading-[0.95] text-gray-900 mb-6">
              Choose your plan
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Start free and scale as you grow. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative border rounded-lg p-8 ${
                plan.popular
                  ? "border-gray-900 bg-gray-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-black text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period !== "pricing" && (
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-150 ${
                  plan.popular
                    ? "bg-gray-900 text-white hover:bg-gray-700"
                    : "border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ or Additional Info */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Have questions about our pricing? Here are some common ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I change plans anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600">
                No setup fees for any of our plans. You only pay the monthly subscription.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for all paid plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}