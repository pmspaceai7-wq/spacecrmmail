"use client";

import Image from "next/image";
import {
  CheckCircle,
  Target,
  Clock,
  Workflow,
  TrendingUp,
  Zap,
} from "lucide-react";

const automationFeatures = [
  {
    icon: Target,
    title: "Lead Tracking",
    description:
      "Improve the management and assessment of leads to prioritize high-value prospects.",
  },
  {
    icon: Clock,
    title: "Follow-ups",
    description:
      "Automate follow-ups to save time and increase engagement consistency.",
  },
  {
    icon: Workflow,
    title: "Sales Builder",
    description:
      "Create workflows for personalized client interactions.",
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
    <section id="automation" className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Editorial Content */}
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-6">
              Space CRM / Automation
            </p>

            <h2 className="text-4xl md:text-6xl  font-thin font-black leading-[0.95] tracking-tight text-gray-900 mb-6">
              Automate workflows.
              <br />
              <em className="not-italic text-gray-300">
                Accelerate growth.
              </em>
            </h2>

            <p className="text-base text-gray-500 max-w-md mb-12">
              Streamline lead management, automate follow-ups, and build scalable
              sales processes without manual effort.
            </p>

            {/* Feature List */}
            <div className="border border-gray-200 divide-y">
              {automationFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 hover:bg-gray-50 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-gray-700 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <CheckCircle className="w-4 h-4 text-gray-400" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE WITH MINIMAL FLOATING ELEMENTS */}
          <div className="relative border border-gray-200 overflow-hidden">

            {/* Main Image */}
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
                alt="Automation dashboard"
                fill
                className="object-cover"
              />
            </div>

            {/* Center Overlay — Minimal */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white border border-gray-200 px-6 py-4 flex items-center gap-3 shadow-sm">
                <Zap className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-semibold text-gray-900">
                  Automation Active
                </span>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 p-5 shadow-md">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="text-xl font-bold text-gray-900">+247%</p>
                  <p className="text-xs text-gray-500">Lead conversion</p>
                </div>
              </div>
            </div>

            {/* Floating Notification Card */}
            <div className="absolute -top-6 -right-6 bg-white border border-gray-200 p-4 shadow-md">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gray-700" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    New Lead
                  </p>
                  <p className="text-xs text-gray-500">
                    Assigned to sales
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}