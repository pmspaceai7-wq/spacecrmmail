import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons } from "@/lib/data/comparisons";

// ── Types ──────────────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};
  return {
    title: comparison.title,
    description: comparison.description,
    keywords: comparison.keywords,
  };
}

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

// ── Shared primitives ──────────────────────────────────────────────────────

function Section({ children, last = false }: { children: React.ReactNode; last?: boolean }) {
  return (
    <section className={last ? "" : "border-b border-gray-200"}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">{children}</div>
    </section>
  );
}

function SectionLabel({ label, meta }: { label: string; meta?: string }) {
  return (
    <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
      <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">{label}</h2>
      {meta && <span className="text-xs font-mono text-gray-300">{meta}</span>}
    </div>
  );
}

function Dot({ muted = false }: { muted?: boolean }) {
  return (
    <span
      className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
        muted ? "bg-gray-300" : "bg-gray-900"
      }`}
    />
  );
}

// ── Section renderers ──────────────────────────────────────────────────────

function CellValue({ value, muted = false }: { value: string | boolean; muted?: boolean }) {
  if (value === true)
    return (
      <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${muted ? "text-gray-400" : "text-gray-900"}`}>
        <Dot muted={muted} />
        Yes
      </span>
    );
  if (value === false)
    return <span className="text-gray-300 text-sm font-mono">—</span>;
  return <span className={`text-sm ${muted ? "text-gray-400" : "text-gray-700"}`}>{value}</span>;
}

function TableSection({ section }: { section: any }) {
  return (
    <Section>
      <SectionLabel label={section.title} meta={`${section.features.length} features`} />

      <div className="border border-gray-200 overflow-x-auto">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1fr_1fr] divide-x divide-gray-200 border-b border-gray-200 bg-gray-50">
          <div className="px-6 py-4">
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400">Feature</span>
          </div>
          <div className="px-6 py-4">
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400">
              {section.competitorName ?? "Competitor"}
            </span>
          </div>
          <div className="px-6 py-4">
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-gray-900 font-semibold">Space HR</span>
          </div>
        </div>

        {/* Rows */}
        {section.features.map((feature: any, i: number) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_1fr_1fr] divide-x divide-gray-200 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="px-6 py-5">
              <span className="text-sm font-medium text-gray-700">{feature.name}</span>
            </div>
            <div className="px-6 py-5">
              <CellValue value={feature.competitor} muted />
            </div>
            <div className="px-6 py-5">
              <CellValue value={feature.spaceHR} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// focus + grid share the same split layout — dots only, no ✗/✓ glyphs
function SplitSection({ section }: { section: any }) {
  return (
    <Section>
      <SectionLabel label={section.title} />

      <div className="grid md:grid-cols-2 border border-gray-200">
        {/* Competitor */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">
            {section.competitorTitle}
          </p>
          <ul className="space-y-4">
            {section.competitorPoints.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                <Dot muted />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Space HR */}
        <div className="p-8 bg-gray-50">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-900 mb-6">
            {section.spaceHRTitle}
          </p>
          <ul className="space-y-4">
            {section.spaceHRPoints.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                <Dot />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function TestimonialSection({ section }: { section: any }) {
  return (
    <Section>
      <SectionLabel label="Customer Story" />

      <div className="border border-gray-200 p-8 md:p-12">
        <blockquote className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-10 max-w-3xl">
          &ldquo;{section.quote}&rdquo;
        </blockquote>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm font-semibold text-gray-900">{section.author}</p>
          {section.role && (
            <p className="text-xs font-mono text-gray-400 mt-0.5">{section.role}</p>
          )}
        </div>
      </div>
    </Section>
  );
}

function FeaturesSection({ section }: { section: any }) {
  const count: number = section.features.length;
  const colClass =
    count % 3 === 0 ? "lg:grid-cols-3" :
    count % 2 === 0 ? "lg:grid-cols-2" :
                      "lg:grid-cols-3";

  return (
    <Section>
      <SectionLabel label={section.title} meta={`${String(count).padStart(2, "0")} features`} />

      <div className={`grid sm:grid-cols-2 ${colClass} border border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200`}>
        {section.features.map((feature: any, i: number) => (
          <div key={i} className="p-8 hover:bg-gray-50 transition-colors duration-200">
            <span className="font-mono text-xs text-gray-300 block mb-6">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) notFound();

  const { hero, sections } = comparison;
  const others = comparisons.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <main className="bg-white text-gray-900 min-h-screen">

      {/* ── Breadcrumb ── */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-3">
          <Link
            href="/compare"
            className="text-xs font-mono text-gray-400 hover:text-gray-900 transition-colors duration-150"
          >
            Compare
          </Link>
          <span className="text-xs font-mono text-gray-200">/</span>
          <span className="text-xs font-mono text-gray-900">
            {hero.title.split(' vs ')[0]}
          </span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Space HR / Compare
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-8">
                {hero.title}
                {hero.subtitle && (
                  <>
                    <br />
                    <em className="not-italic text-gray-300">{hero.subtitle}</em>
                  </>
                )}
              </h1>
              <p className="text-base text-gray-500 max-w-md leading-relaxed">
                {hero.description}
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

      {/* ── Dynamic Sections ── */}
      {sections.map((section: any, index: number) => {
        if (section.type === "table")       return <TableSection       key={index} section={section} />;
        if (section.type === "focus")       return <SplitSection       key={index} section={section} />;
        if (section.type === "grid")        return <SplitSection       key={index} section={section} />;
        if (section.type === "testimonial") return <TestimonialSection  key={index} section={section} />;
        if (section.type === "features")    return <FeaturesSection    key={index} section={section} />;
        if (section.type === "icons")       return <FeaturesSection    key={index} section={section} />;
        return null;
      })}

      {/* ── More Comparisons ── */}
      {others.length > 0 && (
        <Section>
          <SectionLabel label="More Comparisons" />

          <div
            className={`grid border border-gray-200 divide-y ${
              others.length > 1 ? "md:grid-cols-2 md:divide-y-0 md:divide-x" : ""
            } divide-gray-200`}
          >
            {others.map((c, i) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="p-8 flex items-center justify-between group hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-gray-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-base font-bold text-gray-900">{c.title}</p>
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-gray-900 transition-colors duration-200 text-lg leading-none">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* ── CTA ── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                Ready to make the switch?
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