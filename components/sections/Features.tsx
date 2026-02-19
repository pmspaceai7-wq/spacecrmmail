"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  MessageCircle,
  Inbox,
  Sparkles,
  BarChart3,
  Users,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Bulk Email Marketing",
    description:
      "Create stunning email campaigns with our drag-and-drop builder. Achieve 99.9% deliverability with intelligent sending algorithms.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    highlights: ["Drag-and-drop builder", "Smart templates", "A/B testing"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    description:
      "Scale your professional outreach with automated connection requests, follow-ups, and personalized messaging sequences.",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    highlights: ["Auto connections", "Smart sequences", "Profile visits"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Campaigns",
    description:
      "Reach customers directly with WhatsApp Business API. Enjoy 98% open rates and real-time customer engagement.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    highlights: ["98% open rates", "Rich media", "Quick replies"],
  },
  {
    icon: Inbox,
    title: "Unified Inbox",
    description:
      "Manage all conversations from Email, LinkedIn, and WhatsApp in one centralized inbox. Never miss a lead again.",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    highlights: ["All channels", "Smart routing", "Team collaboration"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-100 text-primary-700 text-xs sm:text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Unlock the power of Space CRM{" "}
            <span className="gradient-text">with key features</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            With Space CRM's robust automation tools, propel relentlessly your
            business operations forward, automating every interaction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-primary-100/50 hover:border-primary-200 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text`}
                  style={{
                    stroke: `url(#gradient-${feature.title.replace(/\s+/g, "-")})`,
                  }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id={`gradient-${feature.title.replace(/\s+/g, "-")}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {[
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              desc: "Track every metric",
            },
            {
              icon: Users,
              title: "Team Management",
              desc: "Collaborate seamlessly",
            },
            {
              icon: Target,
              title: "Lead Scoring",
              desc: "Prioritize prospects",
            },
            {
              icon: Sparkles,
              title: "AI Insights",
              desc: "Smart recommendations",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-violet-100 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
