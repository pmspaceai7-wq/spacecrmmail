import type { Metadata } from "next";
import DemoRequestForm from "@/components/DemoRequestForm";
import { Shield, Zap, Puzzle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo | Space CRM",
  description:
    "Schedule a personalized demo of Space CRM. See how our platform can streamline your marketing automation, customer relationship management, and sales workflows.",
  alternates: {
    canonical: "/demo",
  },
};

const benefits = [
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and full data protection",
    icon: Shield,
  },
  {
    title: "Powerful Analytics",
    description: "Real-time insights into campaign performance",
    icon: Zap,
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing tech stack effortlessly",
    icon: Puzzle,
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer success team for your growth",
    icon: Users,
  },
];

export default function DemoPage() {
  return (
    <main className="pt-20 lg:pt-24 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-30">
          <div className="w-[600px] h-[600px] bg-primary-200/50 rounded-full blur-3xl filter" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-30">
          <div className="w-[500px] h-[500px] bg-violet-200/50 rounded-full blur-3xl filter" />
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="lg:pr-8 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-100">
                Get Started Today
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Request a <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-violet-600">
                  Demo
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-balance">
                Schedule a personalized demo with our team and discover how
                Space CRM can transform your marketing efforts and accelerate
                your business growth.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    No credit card required
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    30-minute demo
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckIcon className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Free trial available
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-28">
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about getting started with Space CRM.
            </p>
          </div>
          <div className="grid gap-6">
            {[
              {
                question: "How long is the demo?",
                answer:
                  "Our standard demo is 30 minutes. We'll show you the key features of Space CRM, including email automation, LinkedIn integration, and our unified inbox. We can also schedule extended sessions for deep dives.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes! After your demo, you can start a free 14-day trial with full access to all features. No credit card required to get started.",
              },
              {
                question: "What security measures do you have?",
                answer:
                  "Space CRM is built with enterprise-grade security. We use 256-bit AES encryption for data at rest and TLS 1.3 for data in transit. We are fully GDPR and CCPA compliant.",
              },
              {
                question: "Can I migrate from another CRM?",
                answer:
                  "Absolutely. We offer easy migration tools and our support team provides white-glove migration services to help you move from HubSpot, Salesforce, or Pipedrive with zero downtime.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
