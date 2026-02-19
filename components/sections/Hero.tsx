"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Mail, Linkedin, MessageCircle } from "lucide-react";

const channels = [
  { label: "Email", icon: Mail, color: "text-primary-600 bg-primary-50" },
  { label: "LinkedIn", icon: Linkedin, color: "text-blue-600 bg-blue-50" },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    color: "text-green-600 bg-green-50",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Gradients - Lighter and softer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-200/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 shadow-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-700">
              New: AI-Powered Campaign Builder is here
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6 px-2"
          >
            Automate Your Growth{" "}
            <span className="gradient-text">Across Every Channel</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4"
          >
            Powerful marketing automation for{" "}
            <span className="font-semibold text-primary-600">Email</span>,{" "}
            <span className="font-semibold text-blue-600">LinkedIn</span>, and{" "}
            <span className="font-semibold text-green-600">WhatsApp</span>.
            Seamlessly connect your sales, teams, and customers on one platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16"
          >
            <Link href="/demo" className="btn-primary group">
              Request a Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="btn-secondary group">
              <Play className="w-4 h-4 mr-2 text-primary-600" />
              Watch Demo
            </button>
          </motion.div>

          {/* Channel Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 sm:gap-6 px-4"
          >
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${channel.color} flex items-center justify-center shadow-sm`}
                >
                  <channel.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-600">
                  {channel.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
