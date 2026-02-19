import Link from "next/link";
import { Rocket, Mail, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Overview", href: "#" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
      { label: "Changelog", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  features: {
    title: "Features",
    links: [
      { label: "Email Campaigns", href: "#" },
      { label: "LinkedIn Automation", href: "#" },
      { label: "WhatsApp Messaging", href: "#" },
      { label: "AI Assistant", href: "#" },
      { label: "Unified Inbox", href: "#" },
    ],
  },

};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300">
      <div className="container-custom py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Space CRM</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Automate your growth across every channel with AI-powered
              marketing automation for Email, LinkedIn, and WhatsApp.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Space CRM. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="relative overflow-hidden py-4 sm:py-8">
        <div className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-center text-white/[0.02] select-none leading-none">
          SPACE CRM
        </div>
      </div>
    </footer>
  );
}
