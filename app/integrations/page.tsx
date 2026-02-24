"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Users, Globe, Shield, RefreshCw, Code2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { integrations, categories, benefits, stats } from "../../lib/integrations-data";

// ── Animation helpers ─────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? integrations
      : integrations.filter((i) => i.category === activeCategory);

  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">

      {/* ── Hero ── */}
      <section className="border-b border-gray-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8"
              >
                Space CRM / Integrations
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl  md:text-7xl font-thin font-black leading-[0.95] tracking-tight text-gray-900 mb-8"
              >
                Connect every
                <br />
                <em className="not-italic text-gray-300">tool you love.</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                className="text-base text-gray-500 max-w-md leading-relaxed"
              >
                Space CRM plugs into your existing stack in minutes. Native connectors for CRM, communication, productivity, and automation — with zero code required.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0"
            >
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
            </motion.div>
          </div>

          {/* Scrolling logo strip */}
          <div className="mt-20 relative overflow-hidden border-y border-gray-100 py-6">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {[...integrations, ...integrations].map((intg, i) => (
                <div key={i} className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200">
                  <intg.icon />
                </div>
              ))}
            </motion.div>
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection>
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  variants={fadeUp}
                  className="p-8"
                >
                  <p className="text-4xl font-black text-gray-900 mb-2 leading-none">{s.stat}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── Integrations Grid ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <AnimatedSection>
            <div className="flex items-baseline justify-between mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                All Integrations
              </h2>
              <span className="text-xs font-mono text-gray-300">
                {String(filtered.length).padStart(2, "0")} connectors
              </span>
            </div>
          </AnimatedSection>

          {/* Category filter */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-mono tracking-[0.15em] uppercase border transition-colors duration-150 ${
                    activeCategory === cat
                      ? "bg-gray-900 text-white border-gray-900"
                      : "text-gray-400 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200">
            {filtered.map((intg, index) => (
              <motion.div
                key={intg.name}
                custom={index % 6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className={`group flex flex-col p-8 hover:bg-gray-50 transition-colors duration-200 cursor-pointer
                  ${index % 3 !== 0 ? "sm:border-l border-gray-200" : ""}
                  ${index >= 3 ? "border-t border-gray-200" : ""}
                `}
              >
                <Link href={`/integrations/${intg.slug}`} className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-150">
                      <intg.icon />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-mono text-xs text-gray-300">{intg.label}</span>
                      {intg.status === "Beta" && (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-gray-200 px-1.5 py-0.5">
                          Beta
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">
                    {intg.category}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors duration-200">
                    {intg.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {intg.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">Connect →</span>
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="mt-8 flex items-center justify-between">
            <p className="text-xs font-mono text-gray-400">
              Can't find your tool? Build with our open API.
            </p>
            <Link
              href="/docs/api"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
            >
              API docs <ArrowRight className="w-3 h-3" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why our integrations ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <AnimatedSection>
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Why Our Integrations
              </h2>
              <span className="text-xs font-mono text-gray-300">{String(benefits.length).padStart(2, "0")} reasons</span>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y sm:divide-y-0">
            {benefits.map((b, index) => (
              <motion.div
                key={b.label}
                custom={index % 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className={`group p-8 hover:bg-gray-50 transition-colors duration-200
                  ${index % 3 !== 0 ? "sm:border-l border-gray-200" : ""}
                  ${index >= 3 ? "border-t border-gray-200" : ""}
                `}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-9 h-9 border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors duration-150">
                    <b.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="font-mono text-xs text-gray-300">{b.label}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <AnimatedSection>
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                How It Works
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
            {[
              { step: "01", title: "Pick your tool", body: "Browse 100+ native connectors or search by category. Every major platform you use today is likely already here." },
              { step: "02", title: "Authorize in one click", body: "OAuth 2.0 means you authorize once — no API keys to copy, no credentials to store. Live in under 60 seconds." },
              { step: "03", title: "Data flows automatically", body: "Contacts sync, campaigns trigger, and your team stays aligned — without lifting a finger after setup." },
            ].map((s, index) => (
              <motion.div
                key={s.step}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="p-8 flex flex-col gap-6 group hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-mono text-xs text-gray-300">{s.step}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── API callout ── */}
      <AnimatedSection>
        <section className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
            <div className="grid lg:grid-cols-[1fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-gray-200 border border-gray-200">
              <div className="p-8 lg:p-12">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">Open API</p>
                <h3 className="text-2xl font-black text-gray-900 leading-tight mb-4">
                  Build anything with our REST API and webhooks.
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Every feature in Space CRM is accessible via our fully documented REST API. Subscribe to webhook events, push data in real time, and integrate with any internal system — even those we don't have a native connector for yet.
                </p>
                <Link
                  href="/docs/api"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-0.5 hover:gap-3 transition-all duration-150"
                >
                  Read API docs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 lg:p-12 bg-gray-900">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 mb-6">Example request</p>
                <pre className="text-xs font-mono text-gray-300 leading-relaxed overflow-x-auto">
{`POST /v1/contacts
Authorization: Bearer sk_live_...

{
  "email": "hello@acme.io",
  "first_name": "Alex",
  "tags": ["inbound", "q1-campaign"],
  "source": "linkedin"
}`}
                </pre>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-xs font-mono text-gray-600">→ 201 Contact created in 38ms</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <AnimatedSection>
            <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                  Ready to connect your stack?
                </h2>
                <p className="text-base text-gray-500 max-w-md">
                  Start integrating Space CRM with your favorite platforms today and supercharge your marketing automation.
                </p>
              </div>
              <Link
                href="/demo"
                className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 shrink-0 text-center"
              >
                Book a Demo →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}