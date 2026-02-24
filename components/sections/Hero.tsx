"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin, MessageCircle } from "lucide-react";

const channels = [
  { label: "Email",     icon: Mail,          category: "01" },
  { label: "LinkedIn",  icon: Linkedin,       category: "02" },
  { label: "WhatsApp",  icon: MessageCircle,  category: "03" },
];

// Stagger container
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax on the marquee strip
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white border-b border-gray-200 overflow-hidden min-h-screen flex flex-col"
    >
      {/* ── Decorative grid overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Main content ── */}
      <div className="flex-1 flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full py-24 lg:py-32">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[1fr_auto] items-end gap-16"
          >
            {/* Left — copy */}
            <div>
              {/* Eyebrow label + live badge */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                  Space CRM / Platform
                </p>
                <span className="flex items-center gap-1.5 text-xs font-mono text-gray-400 border border-gray-200 px-2.5 py-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-gray-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 bg-gray-900" />
                  </span>
                  AI Campaign Builder — now live
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-5xl font-thin md:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight text-gray-900 mb-8"
              >
                Automate growth
                <br />
                <em className="not-italic text-gray-300">across every</em>
                <br />
                channel.
              </motion.h1>

              {/* Body */}
              <motion.p
                variants={fadeUp}
                className="text-base text-gray-500 max-w-md leading-relaxed mb-12"
              >
                One platform for Email, LinkedIn, and WhatsApp — unified, AI-powered, and built to scale with your revenue team.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-gray-700 text-sm font-semibold tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors duration-150"
                >
                  Explore Features
                </Link>
              </motion.div>
            </div>

            {/* Right — channel cards */}
            <motion.div
              variants={container}
              className="flex flex-row lg:flex-col gap-3 shrink-0"
            >
              {channels.map((ch, i) => (
                <motion.div
                  key={ch.label}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ x: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="border border-gray-200 p-5 flex flex-col gap-4 hover:border-gray-900 transition-colors duration-150 cursor-default min-w-[120px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 border border-gray-200 flex items-center justify-center">
                      <ch.icon className="w-4 h-4 text-gray-700" />
                    </div>
                    <span className="font-mono text-xs text-gray-300">{ch.category}</span>
                  </div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
                    {ch.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-3 divide-x divide-gray-200 border border-gray-200"
          >
            {[
              { stat: "10,000+", label: "Teams using Space CRM" },
              { stat: "4.2B",    label: "Messages delivered" },
              { stat: "2 weeks", label: "Average onboarding time" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={i}
                className="px-8 py-6"
              >
                <p className="text-2xl font-black text-gray-900 mb-1 leading-none">{s.stat}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-400">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scrolling marquee strip at the bottom ── */}
      <motion.div
        style={{ x: marqueeX }}
        className="border-t border-gray-200 overflow-hidden select-none"
      >
        <motion.div
          className="flex items-center gap-0 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).flatMap((_, outerIndex) =>
            [
              "Email Automation",
              "LinkedIn Outreach",
              "WhatsApp Campaigns",
              "AI Content Generation",
              "Unified Inbox",
              "Lead Generation",
              "CRM Integration",
              "Real-time Analytics",
            ].map((item, i) => (
              <span
                key={`${item}-${outerIndex}-${i}`}
                className="inline-flex items-center gap-6 px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase text-gray-300 border-r border-gray-200"
              >
                <span className="w-1 h-1 bg-gray-300 flex-shrink-0" />
                {item}
              </span>
            ))
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}