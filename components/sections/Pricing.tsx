"use client";

import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Calendar,
  ArrowRight,
  Zap,
  Mail,
  Linkedin,
  MessageCircle,
  Users,
  BarChart3,
  Inbox,
  Bot,
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
    <section
      id="pricing"
      className="section-padding bg-gradient-to-b from-slate-50/50 to-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-50 text-primary-700 text-xs sm:text-sm font-semibold mb-4">
            Features & Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Everything you need to{" "}
            <span className="gradient-text">scale your outreach</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            One powerful platform with all the features you need. Custom pricing
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Single Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-primary-500/10 border border-gray-100 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-primary-100/50 to-violet-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            {/* Badge */}
            <div className="relative flex justify-center mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-violet-600 text-white text-xs sm:text-sm font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                All-In-One Marketing Automation
              </span>
            </div>

            {/* Features Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50/80 hover:bg-primary-50/80 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-800">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary-600 to-violet-600 text-white rounded-full font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Book a Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 group text-sm sm:text-base"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="relative mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
              <p className="text-center text-xs sm:text-sm text-gray-500">
                ✓ No credit card required &nbsp;&nbsp; ✓ 14-day free trial
                &nbsp;&nbsp; ✓ Cancel anytime
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
