"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all! Space CRM is designed for marketers, not developers. Our drag-and-drop interfaces, pre-built templates, and AI content assistant make it easy to create powerful campaigns without any coding knowledge.",
  },
  {
    question: "I already have a custom domain. Can I use it with Space CRM?",
    answer:
      "Absolutely! You can connect your custom domain for email sending, which helps maintain brand consistency and improves deliverability. Our team will help you set up proper DNS records including SPF, DKIM, and DMARC.",
  },
  {
    question: "Does Space CRM include hosting for my website?",
    answer:
      "Space CRM focuses on marketing automation rather than website hosting. However, we integrate seamlessly with all major website platforms and CMS systems. Your landing pages and forms can be embedded on any website.",
  },
  {
    question: "I'm bad at learning new software, will someone help me?",
    answer:
      "Yes! All plans include access to our help center, video tutorials, and community forum. Pro and Enterprise plans include dedicated onboarding sessions, priority support, and a dedicated success manager to ensure you get the most out of Space CRM.",
  },
  {
    question: "Are Space CRM campaigns mobile-ready?",
    answer:
      "Absolutely! All emails, landing pages, and forms created with Space CRM are fully responsive and optimized for mobile devices. We also provide mobile preview features so you can see exactly how your content looks on different screen sizes.",
  },
  {
    question: "Is my data secure with Space CRM?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption (AES-256), are SOC 2 Type II compliant, and follow GDPR best practices. Your data is stored in secure data centers with regular backups and 99.99% uptime guarantee.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with 180+ tools including CRMs (Salesforce, HubSpot), e-commerce platforms (Shopify, WooCommerce), payment processors (Stripe), and many more. We also offer API access and Zapier integration for custom workflows.",
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base sm:text-lg font-medium transition-colors duration-200 pr-4 ${
            isOpen
              ? "text-primary-600"
              : "text-gray-900 group-hover:text-primary-600"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-primary-600 rotate-180"
              : "bg-gray-100 group-hover:bg-primary-100"
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-colors ${
              isOpen
                ? "text-white"
                : "text-gray-500 group-hover:text-primary-600"
            }`}
          />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            FAQ's : Write in the{" "}
            <span className="gradient-text">customer's voice</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Space offers a comprehensive suite of online payment solutions,
            encompassing everything from credit card processing and digital
            wallets.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Contact our support team
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
