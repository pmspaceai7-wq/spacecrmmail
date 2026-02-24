import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare Space HR - Alternative HR Software Solutions",
  description:
    "Compare Space HR with leading HR platforms. Discover why companies choose Space HR for AI-powered HR management over Rippling, Gusto, and Workday.",
  keywords: [
    "HR software comparison",
    "Space HR alternatives",
    "Rippling vs Space HR",
    "Gusto vs Space HR",
    "Workday vs Space HR",
    "AI HR solutions",
  ],
  openGraph: {
    title: "Compare Space HR - Alternative HR Software Solutions",
    description: "Find the perfect HR software alternative with AI-powered features.",
    url: "https://spacehr.com/compare",
    images: [
      {
        url: "/og-image-compare.png",
        width: 1200,
        height: 630,
        alt: "Space HR Comparison Landing Page",
      },
    ],
  },
};

const comparisons = [
  {
    label: "01",
    title: "Rippling Alternative",
    subtitle: "For Global Teams",
    description:
      "AI-powered HR management that surpasses Rippling with advanced automation and global compliance.",
    href: "/compare/rippling-alternative",
    features: [
      "AI predictive analytics",
      "Global compliance automation",
      "Cost-effective scaling",
    ],
  },
  {
    label: "02",
    title: "Gusto vs Space HR",
    subtitle: "AI Predictive Forecasting",
    description:
      "Experience the future of HR with Space HR's advanced AI forecasting compared to Gusto's traditional approach.",
    href: "/compare/gusto-vs-space-hr",
    features: [
      "95% accurate forecasting",
      "AI-driven turnover assessment",
      "Automated budget planning",
    ],
  },
  {
    label: "03",
    title: "Workday Alternative",
    subtitle: "For Mid-Market Enterprises",
    description:
      "Enterprise-grade AI capabilities at a fraction of Workday's cost and complexity.",
    href: "/compare/workday-alternative",
    features: [
      "50% lower TCO",
      "Rapid implementation",
      "AI-powered insights",
    ],
  },
];

const reasons = [
  { stat: "AI-First", body: "Advanced predictive analytics and automation built in from day one." },
  { stat: "2 weeks", body: "Average implementation time. Go live fast without months of setup." },
  { stat: "50% less", body: "Total cost of ownership compared to legacy enterprise HR platforms." },
  { stat: "No lock-in", body: "Scales with your business. Leave anytime — no punishing exit costs." },
];

const testimonials = [
  {
    quote:
      "Switching from Rippling to Space HR transformed our global HR operations. The AI insights are incredible.",
    name: "Sarah Johnson",
    role: "Global HR Director",
  },
  {
    quote:
      "Space HR's predictive forecasting helped us reduce hiring costs by 30% compared to our old Gusto setup.",
    name: "Mike Chen",
    role: "Operations Manager",
  },
  {
    quote:
      "Finally, an alternative to Workday that's powerful yet simple. Our team productivity doubled.",
    name: "Lisa Rodriguez",
    role: "HR Manager",
  },
];

export default function ComparePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">

      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Space HR / Compare
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-8">
                Find your
                <br />
                <em className="not-italic text-gray-300">perfect fit.</em>
              </h1>
              <p className="text-base text-gray-500 max-w-md leading-relaxed">
                See how Space HR stacks up against Rippling, Gusto, and Workday. No fluff — just the comparisons that matter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/demo"
                className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 text-center"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border border-gray-300 text-gray-700 text-sm font-semibold tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors duration-150 text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Cards ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Comparisons
            </h2>
            <span className="text-xs font-mono text-gray-300">03 available</span>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
            {comparisons.map((c) => (
              <div key={c.href} className="p-8 flex flex-col group hover:bg-gray-50 transition-colors duration-200">
                {/* Number */}
                <span className="font-mono text-xs text-gray-300 mb-6">{c.label}</span>

                {/* Title block */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-1">{c.title}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400">{c.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">{c.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {c.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-900 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-0.5 w-fit group-hover:gap-3 transition-all duration-200"
                >
                  Compare now
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Space HR ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Why Space HR
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200">
            {reasons.map((r, i) => (
              <div key={i} className="p-8">
                <p className="text-3xl font-black text-gray-900 mb-3 leading-none">{r.stat}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Customer Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 flex flex-col justify-between gap-8">
                <p className="text-base text-gray-700 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs font-mono text-gray-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                Ready to see the difference?
              </h2>
              <p className="text-base text-gray-500 max-w-md">
                Modern HR teams deserve modern software. Talk to us and find out why Space HR is the preferred choice.
              </p>
            </div>
            <Link
              href="/demo"
              className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 shrink-0 text-center"
            >
              Schedule a Demo →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}