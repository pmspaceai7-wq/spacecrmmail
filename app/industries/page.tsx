import { INDUSTRIES } from "@/lib/data/industries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Space CRM",
  description:
    "Tailored automation solutions for every industry. Discover how Space CRM transforms businesses across real estate, SaaS, e-commerce, healthcare, finance, and education.",
};

export default function IndustriesPage() {
  const featuredIndustry = INDUSTRIES[0];
  const moreIndustries = INDUSTRIES.slice(1);

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">
      
      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Space CRM / Industries
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-8">
                Solutions built
                <br />
                <em className="not-italic text-gray-300">for your industry.</em>
              </h1>

              <p className="text-base text-gray-500 max-w-md leading-relaxed">
                Discover how Space CRM automates workflows across real estate,
                SaaS, healthcare, finance, education, and more.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <p className="text-xs font-mono text-gray-400 text-right">
                {String(INDUSTRIES.length).padStart(2, "0")} industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Industry ── */}
      {featuredIndustry && (
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">

            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Featured Industry
              </h2>
              <span className="text-xs font-mono text-gray-300">
                {featuredIndustry.name}
              </span>
            </div>

            <Link
              href={`/industries/${featuredIndustry.slug}`}
              className="group block border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="relative overflow-hidden h-60 lg:h-auto">
                  <img
                    src={featuredIndustry.heroImage}
                    alt={featuredIndustry.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between lg:border-l border-gray-200">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight mb-4 group-hover:text-gray-600 transition-colors duration-200">
                      {featuredIndustry.name}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed mb-8">
                      {featuredIndustry.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b-2 border-gray-900 pb-0.5 group-hover:gap-3 transition-all duration-200">
                    Explore Industry
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Industries Grid ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">

          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              All Industries
            </h2>
            <span className="text-xs font-mono text-gray-300">
              {String(moreIndustries.length).padStart(2, "0")} sectors
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y sm:divide-y-0">
            {moreIndustries.map((industry, index) => (
              <article
                key={industry.slug}
                className={`group flex flex-col hover:bg-gray-50 transition-colors duration-200 ${
                  index !== 0 && index % 3 !== 0
                    ? "sm:border-l border-gray-200"
                    : ""
                } ${index >= 3 ? "border-t border-gray-200" : ""}`}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="h-44 overflow-hidden">
                    <img
                      src={industry.heroImage}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 border-t border-gray-200">
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                      {industry.name}
                    </span>

                    <p className="text-sm text-gray-500 flex-1 leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <span className="text-xs font-semibold text-gray-900 border-b border-gray-900 pb-0.5">
                      Explore →
                    </span>
                  </div>
                </Link>
              </article>
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
                Ready to automate your industry?
              </h2>
              <p className="text-base text-gray-500 max-w-md">
                See how Space CRM transforms workflows for your sector.
              </p>
            </div>

            <Link
              href="/demo"
              className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 shrink-0 text-center"
            >
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}