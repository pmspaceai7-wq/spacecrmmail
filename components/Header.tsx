"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import IndustriesModal from "./IndustriesModal";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#automation", label: "Automation" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isIndustriesModalOpen, setIsIndustriesModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="Space CRM Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-violet-700">
                Space CRM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => setIsIndustriesModalOpen(true)}
                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200 relative group"
              >
                Industries
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-violet-600 group-hover:w-full transition-all duration-300" />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-violet-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/demo" className="btn-primary">
                Request a Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-2xl mt-2 shadow-xl border border-gray-100"
              >
                <div className="px-4 py-6 space-y-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsIndustriesModalOpen(true);
                    }}
                    className="block w-full text-left text-base font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                  >
                    Industries
                  </button>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-base font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <Link
                      href="/demo"
                      className="btn-primary w-full text-center"
                    >
                      Request a Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <IndustriesModal
        isOpen={isIndustriesModalOpen}
        onClose={() => setIsIndustriesModalOpen(false)}
      />
    </>
  );
}
