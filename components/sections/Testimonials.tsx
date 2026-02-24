"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Headphones, Layers } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description:
      "Get started in minutes with our intuitive onboarding process. No technical expertise required.",
  },
  {
    icon: Layers,
    title: "All-in-One Platform",
    description:
      "Email, LinkedIn, and WhatsApp automation unified in a single, powerful dashboard.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption. Your data is always protected.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is here to help you succeed with personalized onboarding and priority support.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white border-b border-gray-200 overflow-hidden">

      {/* SAME GRID OVERLAY AS HERO */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative">

        {/* Header — HERO STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
            Why Choose Space CRM
          </p>

          <h2 className="text-4xl font-thin md:text-6xl font-black tracking-tight leading-[0.95] text-gray-900 mb-6">
            Built for teams that
            <br />
            demand results.
          </h2>

          <p className="text-gray-500 max-w-md leading-relaxed">
            Space CRM powers marketing teams with automation tools
            that save time and drive real business growth.
          </p>
        </motion.div>

        {/* BENEFITS GRID — HERO CARD STYLE */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="border border-gray-200 p-6 flex flex-col gap-4 hover:border-gray-900 transition-colors duration-150"
            >
              {/* Icon — MONO STYLE */}
              <div className="w-12 h-12 border border-gray-200 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-gray-700" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}