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
      "Create email campaigns with intelligent sending and high deliverability.",
    highlights: ["Drag-and-drop builder", "Smart templates", "A/B testing"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Automation",
    description:
      "Scale outreach with automated connections and personalized sequences.",
    highlights: ["Auto connections", "Smart sequences", "Profile visits"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Campaigns",
    description:
      "Engage customers directly with high open-rate WhatsApp campaigns.",
    highlights: ["Rich media", "Quick replies", "Broadcast messaging"],
  },
  {
    icon: Inbox,
    title: "Unified Inbox",
    description:
      "Manage conversations from all channels in one centralized inbox.",
    highlights: ["All channels", "Smart routing", "Team collaboration"],
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">

        {/* Header — Editorial Style */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
            Space CRM / Features
          </p>

          <h2 className="text-4xl md:text-6xl font-thin font-black leading-[0.95] tracking-tight text-gray-900 mb-6">
            Powerful tools.
            <br />
            <em className="not-italic text-gray-300">Simple execution.</em>
          </h2>

          <p className="text-base text-gray-500 max-w-md">
            Automate outreach, manage conversations, and scale growth across
            every major channel with one unified platform.
          </p>
        </div>

        {/* Feature Grid — Border Style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 border border-gray-200 divide-y sm:divide-y-0">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-8 flex flex-col gap-6 hover:bg-gray-50 transition-colors duration-200
              ${index % 2 !== 0 ? "sm:border-l border-gray-200" : ""}
              ${index >= 2 ? "border-t border-gray-200" : ""}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-gray-200 rounded-lg flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-gray-700" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs font-mono text-gray-400 border border-gray-200 px-2 py-1"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features — Minimal Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 mt-12">
          {[
            { icon: BarChart3, title: "Advanced Analytics" },
            { icon: Users, title: "Team Management" },
            { icon: Target, title: "Lead Scoring" },
            { icon: Sparkles, title: "AI Insights" },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 p-6 hover:bg-gray-50 transition-colors duration-200
              ${index !== 0 ? "border-l border-gray-200" : ""}`}
            >
              <item.icon className="w-5 h-5 text-gray-700" />
              <span className="font-semibold text-gray-900">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}