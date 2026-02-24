"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all! Space CRM is designed for marketers, not developers. Our drag-and-drop interfaces, pre-built templates, and AI content assistant make it easy to create powerful campaigns without any coding knowledge.",
  },
  {
    question: "Can I use my custom domain?",
    answer:
      "Absolutely. You can connect your custom domain for email sending, maintain brand consistency, and improve deliverability with proper DNS configuration.",
  },
  {
    question: "Does Space CRM host my website?",
    answer:
      "Space CRM focuses on marketing automation. We integrate seamlessly with all major website platforms so your landing pages and forms can live anywhere.",
  },
  {
    question: "Will someone help me onboard?",
    answer:
      "Yes. All plans include help resources, while Pro and Enterprise include dedicated onboarding and priority support.",
  },
  {
    question: "Are campaigns mobile-ready?",
    answer:
      "All emails, landing pages, and forms are fully responsive and optimized for mobile devices.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use enterprise-grade encryption, SOC 2 compliance practices, and secure data infrastructure with regular backups.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with 180+ tools including CRMs, e-commerce platforms, payment processors, and automation tools.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 pr-6 group-hover:text-gray-600 transition-colors">
          {faq.question}
        </span>

        <span
          className={`flex items-center justify-center w-8 h-8 border border-gray-200 transition-all duration-200 ${
            isOpen ? "rotate-180 border-gray-900" : ""
          }`}
        >
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white border-b border-gray-200 overflow-hidden">

      {/* SAME GRID OVERLAY */}
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
            FAQ
                </p>
      <h2 className="text-4xl md:text-6xl font-thin font-black tracking-tight leading-[0.95] text-gray-900 mb-6">
  Got questions?
  <br />
  We’ve got answers.
</h2>

          <p className="text-gray-500 max-w-md leading-relaxed">
            Everything you need to know about using Space CRM
            to automate and scale your outreach.
          </p>
        </motion.div>

        {/* Accordion — BORDER STYLE */}
        <div className="border border-gray-200 p-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Support CTA — HERO STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-500 mb-4">
            Still have questions? We're here to help.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-900 border-b border-gray-300 hover:border-gray-900 transition-colors"
          >
            Contact support →
          </a>
        </motion.div>

      </div>
    </section>
  );
}