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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled
            ? "border-b border-gray-200 bg-white shadow-sm"
            : "border-b border-transparent bg-white"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[8deg]">
                <Image
                  src="/icononly_transparent_nobuffer.png"
                  alt="Space CRM Logo"
                  fill
                  className="object-contain group-hover:opacity-80 transition-opacity duration-150"
                />
              </div>
              <span className="text-sm font-black tracking-tight text-gray-900 uppercase hover:tracking-tight transition-all duration-150 transition-colors duration-300 group-hover:text-indigo-600">
                Space CRM
              </span>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="hidden lg:flex items-center gap-5 xl:gap-6"
            >
              <Link
                href="/industries"
                className="text-[10px] xl:text-xs font-mono font-medium tracking-[0.12em] uppercase text-gray-400 relative hover:text-gray-900 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full"
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="text-[10px] xl:text-xs font-mono font-medium tracking-[0.12em] uppercase text-gray-400 relative hover:text-gray-900 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-[10px] xl:text-xs font-mono font-medium tracking-[0.12em] uppercase text-gray-400 relative hover:text-gray-900 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full"
              >
                Blog
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[10px] xl:text-xs font-mono font-medium tracking-[0.12em] uppercase text-gray-400 relative hover:text-gray-900 transition-colors duration-150 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* Divider and CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="hidden lg:flex items-center gap-2 xl:gap-3"
            >
              <div className="h-4 w-[1px] bg-slate-200 mx-1" />
              
              <Link
                href="/try-it-now"
                className="px-4 py-2 border border-gray-200 text-gray-600 text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase hover:border-gray-900 hover:text-gray-900 transition-all duration-150 whitespace-nowrap"
              >
                Try It for Free
              </Link>
              
              <Link
                href="/demo"
                className="px-4 py-2 bg-gray-900 text-white text-[10px] xl:text-xs font-mono tracking-[0.1em] uppercase hover:bg-gray-700 transition-colors duration-150 whitespace-nowrap relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-500"
              >
                Request a Demo
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 border border-slate-200 rounded-md hover:border-slate-900 transition-colors duration-150"
              aria-label="Toggle mobile menu"
            >
              <div className={`transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}>
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-slate-700" />
                ) : (
                  <Menu className="w-4 h-4 text-slate-700" />
                )}
              </div>
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
                className="lg:hidden overflow-hidden border-t border-slate-200 bg-white"
              >
                <div className="py-6 divide-y divide-slate-100">
                  <div className="space-y-0 pb-6">
                    <Link
                      href="/industries"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-1 py-3 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 hover:pl-3 hover:border-l-2 hover:border-l-gray-900 transition-all duration-150"
                    >
                      Industries
                    </Link>
                    {[{ href: "/about", label: "About" }, { href: "/blog", label: "Blog" }, ...navLinks].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-1 py-3 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 hover:pl-3 hover:border-l-2 hover:border-l-gray-900 transition-all duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-6 space-y-3">
                    <Link
                      href="/try-it-now"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-center px-6 py-3 border border-gray-200 text-gray-600 text-xs font-mono tracking-[0.15em] uppercase hover:border-gray-900 hover:text-gray-900 transition-all duration-150"
                    >
                      Try It for Free
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
      </motion.header>
    </>
  );
}