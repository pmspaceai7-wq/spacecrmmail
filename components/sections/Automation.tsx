"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Target,
  TrendingUp,
  Clock,
  Workflow,
  Zap,
} from "lucide-react";

const automationFeatures = [
  {
    icon: Target,
    title: "Lead Tracking",
    description:
      "Improve the management and assessment of leads to prioritize and convert high-value prospects effectively.",
  },
  {
    icon: Clock,
    title: "Follow-ups",
    description:
      "Streamline your workflow by automating follow-ups, which not only saves management time but also significantly boosts results.",
  },
  {
    icon: Workflow,
    title: "Sales Builder",
    description:
      "Easily create sales and marketing workflows to facilitate personalized and meaningful interactions with potential clients.",
  },
];

const benefits = [
  "Reduce manual work by 80%",
  "Increase response rates by 3x",
  "Close deals 40% faster",
  "Never miss a follow-up",
];

export default function Automation() {
  return (
    <section
      id="automation"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50/30 to-white"
    >
      {/* Background Elements - Lighter */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold mb-6">
              Automation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Streamlined and automated processes for{" "}
              <span className="gradient-text">
                managing potential customer leads
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Leverage Space CRM's powerful automation tools to optimize
              operations, strengthen customer relationships, and accelerate
              growth.
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-8">
              {automationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits Badges */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-green-100 rounded-full shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Visual - Lighter Style */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-violet-200/40">
              {/* Main Image - Lighter violet overlay */}
              <div className="aspect-[4/3] bg-gradient-to-br from-violet-400 via-primary-500 to-violet-500 relative">
                <Image
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
                  alt="Team collaborating on marketing automation dashboard"
                  fill
                  className="object-cover mix-blend-overlay opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-xl font-semibold">
                      Automation in Action
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-5 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-200">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">+247%</p>
                  <p className="text-sm text-gray-500">Lead conversion</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Notification Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    New Lead!
                  </p>
                  <p className="text-xs text-gray-500">
                    Auto-assigned to sales
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
