"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "border-b border-gray-200" : "border-b border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative w-7 h-7">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="Space CRM Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-black tracking-tighter text-gray-900 uppercase">
                Space CRM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link
                href="/industries"
                className="text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                Blog
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <Link
                href="https://mail.spacecrm.net/spacecrm"
                className="px-4 py-2 border border-gray-900 text-gray-900 text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap"
              >
                Try It Now
              </Link>
              <Link
                href="/demo"
                className="px-4 py-2 bg-gray-900 text-white text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase hover:bg-gray-700 transition-colors duration-150 whitespace-nowrap"
              >
                Request a Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 border border-gray-200 hover:border-gray-900 transition-colors duration-150"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-gray-700" />
              ) : (
                <Menu className="w-4 h-4 text-gray-700" />
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
                className="lg:hidden overflow-hidden border-t border-gray-200"
              >
                <div className="py-6 divide-y divide-gray-100">
                  <div className="space-y-0 pb-6">
                    <Link
                      href="/industries"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-1 py-3 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
                    >
                      Industries
                    </Link>
                    {[{ href: "/about", label: "About" }, { href: "/blog", label: "Blog" }, ...navLinks].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-1 py-3 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-6 space-y-3">
                    <Link
                      href="https://mail.spacecrm.net/spacecrm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center px-6 py-3 border border-gray-900 text-gray-900 text-xs font-mono tracking-[0.15em] uppercase hover:bg-gray-50 transition-colors duration-150"
                    >
                      Try It Now
                    </Link>
                    <Link
                      href="/demo"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center px-6 py-3 bg-gray-900 text-white text-xs font-mono tracking-[0.15em] uppercase hover:bg-gray-700 transition-colors duration-150"
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
    </>
  );
}