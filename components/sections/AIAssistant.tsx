"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Card - AI Interface Mock */}
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    AI Content Assistant
                  </h4>
                  <p className="text-xs text-gray-400">Powered by GPT-4</p>
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                <p className="text-gray-400 text-sm mb-2">
                  Describe your campaign:
                </p>
                <p className="text-white">
                  "Write a LinkedIn connection request for a B2B SaaS
                  decision-maker interested in marketing automation..."
                </p>
              </div>

              {/* Output Area */}
              <div className="bg-gradient-to-br from-primary-500/20 to-violet-500/20 rounded-xl p-4 border border-primary-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary-400 animate-pulse" />
                  <span className="text-sm text-primary-400">
                    Generated Message
                  </span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  "Hi [Name], I noticed your impressive work at [Company] in
                  driving marketing innovation. Given your focus on efficiency,
                  I thought you might be interested in how teams are using AI to
                  automate their multi-channel outreach..."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button className="flex-1 py-2 bg-gradient-to-r from-primary-500 to-violet-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Use This Message
                </button>
                <button className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                  Regenerate
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            >
              ✨ 10x faster writing
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-primary-400" />
              AI-Powered
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Let AI write your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-violet-400">
                winning campaigns
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Describe your campaign goals and let our AI Content Assistant
              craft compelling messages for Email, LinkedIn, and WhatsApp. Save
              hours of writing time while boosting engagement rates.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
