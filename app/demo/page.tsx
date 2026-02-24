import type { Metadata } from "next";
import DemoRequestForm from "@/components/DemoRequestForm";
import { Shield, Zap, Puzzle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Demo | Space CRM",
  description:
    "Schedule a personalized demo of Space CRM and see how our platform streamlines marketing automation, CRM, and sales workflows.",
};

const benefits = [
  {
    title: "Enterprise Security",
    description: "Bank-level encryption and full data protection",
    icon: Shield,
  },
  {
    title: "Powerful Analytics",
    description: "Real-time insights into performance",
    icon: Zap,
  },
  {
    title: "Seamless Integrations",
    description: "Connect with your existing stack",
    icon: Puzzle,
  },
  {
    title: "24/7 Support",
    description: "Dedicated success team",
    icon: Users,
  },
];

export default function DemoPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">

      {/* ───── HERO ───── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] gap-16">

            {/* LEFT */}
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Space CRM / Demo
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
                Request a
                <br />
                <em className="not-italic text-gray-300">demo.</em>
              </h1>

              <p className="text-base text-gray-500 max-w-md leading-relaxed mb-12">
                Schedule a personalized walkthrough and discover how Space CRM
                automates marketing, sales, and customer workflows.
              </p>

              {/* BENEFITS */}
              <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <b.icon className="w-5 h-5 mt-1 text-gray-900" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        {b.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full max-w-md border border-gray-200 p-8">
              <DemoRequestForm />
            </div>

          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">

          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              FAQ
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "How long is the demo?",
                a: "Our standard demo lasts 30 minutes and covers the key features of Space CRM.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes. After the demo, you can start a 14-day free trial with full access.",
              },
              {
                q: "What security measures do you have?",
                a: "We use enterprise-grade encryption and comply with global data protection standards.",
              },
              {
                q: "Can I migrate from another CRM?",
                a: "Yes. Our team provides migration support from tools like HubSpot and Salesforce.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 p-8 hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">

            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Ready to see it in action?
              </h2>
              <p className="text-base text-gray-500 max-w-md">
                Book your demo today and transform your workflows.
              </p>
            </div>

            <a
              href="/pricing"
              className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition"
            >
              View Pricing →
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}