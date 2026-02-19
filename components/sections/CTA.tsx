"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Mail,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-600 via-violet-600 to-primary-700"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-[10%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Mail className="w-8 h-8 text-white/80" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 right-[15%] hidden lg:block"
      >
        <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <Linkedin className="w-7 h-7 text-white/80" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-1/3 left-[15%] hidden lg:block"
      >
        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white/80" />
        </div>
      </motion.div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8"
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Embark on the journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              excellence
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Become part of a movement that embraces your ambitions and delivers
            exceptional experiences, where your business is our top priority.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo" className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5">
              Request a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-white/60 text-sm"
          >
            ✓ No credit card required &nbsp; ✓ 14-day free trial &nbsp; ✓ Cancel
            anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
