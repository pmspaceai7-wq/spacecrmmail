"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Mail,
  Linkedin,
  MessageCircle,
  Users,
  BarChart3,
  Inbox,
  Bot,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Mail, text: "Unlimited Email Campaigns" },
  { icon: Linkedin, text: "LinkedIn Automation" },
  { icon: MessageCircle, text: "WhatsApp Campaigns" },
  { icon: Inbox, text: "Unified Inbox" },
  { icon: Bot, text: "AI Content Assistant" },
  { icon: Users, text: "Unlimited Team Members" },
  { icon: BarChart3, text: "Advanced Analytics & Reporting" },
  { icon: Zap, text: "Custom Workflows & Integrations" },
];

export default function Pricing() {
  return (
    <section className="relative bg-white border-b border-gray-200 overflow-hidden">
      
      {/* Decorative grid overlay — SAME AS HERO */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
            Features & Pricing
          </p>

          <h2 className="text-4xl md:text-6xl font-thin font-black tracking-tight leading-[0.95] text-gray-900 mb-6">
            Everything you need
            <br />
            to scale outreach.
          </h2>

          <p className="text-gray-500 max-w-md leading-relaxed">
            One platform for Email, LinkedIn, and WhatsApp — unified, AI-powered,
            and built to scale with your revenue team.
          </p>
        </motion.div>

        {/* Feature Grid — HERO CARD STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {features.map((feature) => (
            <div
              key={feature.text}
              className="border border-gray-200 p-5 flex items-center gap-4 hover:border-gray-900 transition-colors duration-150"
            >
              <div className="w-10 h-10 border border-gray-200 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-gray-700" />
              </div>

              <span className="text-sm font-medium text-gray-800">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA — MATCH HERO BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="#cta"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
          </Link>

          <Link
            href="#cta"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-gray-700 text-sm font-semibold tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors duration-150"
          >
            Contact Sales
          </Link>
        </motion.div>

        {/* Trust Row — HERO STATS STYLE */}
        <div className="mt-20 grid grid-cols-3 divide-x divide-gray-200 border border-gray-200">
          {[
            { stat: "No credit card", label: "Required" },
            { stat: "14 days", label: "Free trial" },
            { stat: "Cancel", label: "Anytime" },
          ].map((s) => (
            <div key={s.label} className="px-8 py-6">
              <p className="text-2xl font-black text-gray-900 mb-1 leading-none">
                {s.stat}
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-gray-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}