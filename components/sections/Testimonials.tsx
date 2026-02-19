"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Headphones, Layers } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get started in minutes with our intuitive onboarding process. No technical expertise required.",
  },
  {
    icon: Layers,
    title: "All-in-One Platform",
    description: "Email, LinkedIn, and WhatsApp automation unified in a single, powerful dashboard.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption. Your data is always protected.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Our team is here to help you succeed with personalized onboarding and priority support.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-50/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-50 text-primary-700 text-xs sm:text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Built for teams that{" "}
            <span className="gradient-text">demand results</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Space CRM powers marketing teams with automation
            tools that save time and drive real business growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg shadow-gray-100/50 border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-50 to-violet-50 mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
