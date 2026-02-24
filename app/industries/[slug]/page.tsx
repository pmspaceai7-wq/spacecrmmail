import { notFound } from "next/navigation";
import { INDUSTRIES } from "@/lib/data/industries";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.name} Automation Solutions | Space CRM`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);

  if (!industry) return notFound();

  const benefits = [
    "Save 20+ hours per week on repetitive tasks",
    "Increase conversion rates by up to 40%",
    "Improve customer satisfaction scores",
    "Scale operations without adding headcount",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      content:
        "Space CRM transformed how we handle customer relationships. The automation features are game-changing.",
    },
    {
      name: "Mike Chen",
      role: "CEO",
      content:
        "We've seen a 40% increase in close rates since implementing Space CRM workflows.",
    },
    {
      name: "Emily Rodriguez",
      role: "Sales Director",
      content:
        "Personalized automation helped us build stronger relationships with clients.",
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">
      
      {/* ───── HERO (Blog Style) ───── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
            Space CRM / Industries
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
            {industry.name}
            <br />
            <em className="not-italic text-gray-300">automation.</em>
          </h1>

          <p className="text-base text-gray-500 max-w-md leading-relaxed">
            {industry.description}
          </p>
        </div>
      </section>

      {/* ───── FEATURES ───── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Key Features
            </h2>
            <span className="text-xs font-mono text-gray-300">
              {String(industry.features.length).padStart(2, "0")} tools
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y sm:divide-y-0">
            {industry.features.map((feature, i) => (
              <div
                key={i}
                className={`p-6 hover:bg-gray-50 transition ${
                  i !== 0 && i % 3 !== 0 ? "sm:border-l border-gray-200" : ""
                } ${i >= 3 ? "border-t border-gray-200" : ""}`}
              >
                <h3 className="font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BENEFITS ───── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Benefits
            </h2>
          </div>

          <ul className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <li key={i} className="text-base text-gray-600">
                — {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border border-gray-200 p-8 hover:bg-gray-50 transition"
              >
                <p className="text-sm text-gray-600 mb-6">"{t.content}"</p>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA (Same as Blog Page) ───── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Ready to automate growth?
              </h2>
              <p className="text-base text-gray-500 max-w-md">
                See how Space CRM transforms {industry.name.toLowerCase()} teams.
              </p>
            </div>

            <Link
              href="/demo"
              className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition"
            >
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}