"use client";

import { motion } from "framer-motion";
import { Sparkles, Wand2, MessageSquare, FileText, Zap } from "lucide-react";

const aiFeatures = [
  {
    icon: Wand2,
    title: "Smart Subject Lines",
    description:
      "Generate attention-grabbing email subjects that boost open rates",
  },
  {
    icon: MessageSquare,
    title: "Personalized Messages",
    description:
      "Create tailored outreach for LinkedIn and WhatsApp automatically",
  },
  {
    icon: FileText,
    title: "Content Templates",
    description: "AI-crafted templates for every campaign type and industry",
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "Real-time suggestions to improve your message performance",
  },
];

export default function AIAssistant() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-900 via-neutral-950 to-black relative overflow-hidden font-sans">

      {/* Subtle Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neutral-600/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — AI CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-xl">

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neutral-700 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">
                    AI Content Assistant
                  </h4>
                  <p className="text-xs text-gray-400">Powered by AI</p>
                </div>
              </div>

              {/* Input */}
              <div className="bg-black/30 rounded-xl p-4 mb-4 border border-white/10">
                <p className="text-gray-400 text-sm mb-2">
                  Describe your campaign:
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  "Write a LinkedIn connection request for a B2B SaaS
                  decision-maker interested in marketing automation..."
                </p>
              </div>

              {/* Output */}
              <div className="bg-neutral-800/60 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-300">
                    Generated Message
                  </span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  "Hi [Name], I noticed your impressive work at [Company] in
                  driving marketing innovation..."
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button className="flex-1 py-2 bg-neutral-700 text-white rounded-lg text-sm font-medium hover:bg-neutral-600 transition-colors">
                  Use This Message
                </button>
                <button className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                  Regenerate
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-neutral-800 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 shadow-lg"
            >
              ✨ 10x faster writing
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-gray-300" />
              AI-Powered
            </span>

            <h2 className="text-3xl font-thin md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Let AI write your
              <br />
              <span className="text-gray-400">
                winning campaigns
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Describe your campaign goals and let AI craft compelling messages
              for Email, LinkedIn, and WhatsApp while saving hours of writing.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}