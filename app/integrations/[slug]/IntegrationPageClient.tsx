"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Zap, Users, Globe, Shield, RefreshCw, Code2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { integrations, benefits } from "../../../lib/integrations-data";

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

// ── Client Component ──────────────────────────────────────────────────────

export default function IntegrationPageClient({ slug }: { slug: string }) {
  const integration = integrations.find((i) => i.slug === slug);

  if (!integration) {
    return (
      <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Integration Not Found</h1>
          <p className="text-gray-500 mb-8">The integration you're looking for doesn't exist.</p>
          <Link
            href="/integrations"
            className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150"
          >
            Back to Integrations
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">

      {/* ── Breadcrumb ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8">
          <Link
            href="/integrations"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            All Integrations
          </Link>
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[auto_1fr] items-center gap-12">
            <div className="w-24 h-24 border border-gray-200 flex items-center justify-center shrink-0">
              <integration.icon />
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-4"
              >
                {integration.category} / {integration.status}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-8"
              >
                {integration.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                className="text-base text-gray-500 max-w-2xl leading-relaxed mb-8"
              >
                {integration.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3"
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
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <AnimatedSection>
            <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                Why {integration.name}
              </h2>
              <span className="text-xs font-mono text-gray-300">{String(benefits.length).padStart(2, "0")} benefits</span>
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
              { step: "01", title: "Connect your account", body: `Authorize ${integration.name} in your Space CRM dashboard. OAuth 2.0 ensures secure, one-click setup.` },
              { step: "02", title: "Configure sync settings", body: "Choose what data to sync, set permissions, and customize workflows to match your team's needs." },
              { step: "03", title: "Automate and scale", body: `Let ${integration.name} and Space CRM work together automatically. Focus on growth, not manual tasks.` },
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

      {/* ── CTA ── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <AnimatedSection>
            <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                  Ready to integrate {integration.name}?
                </h2>
                <p className="text-base text-gray-500 max-w-md">
                  Connect {integration.name} to Space CRM today and streamline your workflow.
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