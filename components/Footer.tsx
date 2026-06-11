import Link from "next/link";
import { Rocket, Mail, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Demo", href: "/demo" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Compare", href: "/compare" },
      { label: "Industries", href: "/industries" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { label: "API Documentation", href: "/api" },
      { label: "Changelog", href: "/blog" },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/spacecrm", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/spacecrm", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/pmspaceai7-wq/spacecrmmail", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@spacecrm.net", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-900">

      {/* ── Main grid ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="w-8 h-8 bg-gray-900 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-150">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-black tracking-tight text-gray-900">Space CRM</span>
            </Link>

            <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xs">
              Automate your growth across every channel with AI-powered marketing automation for Email, LinkedIn, and WhatsApp.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors duration-150"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-5">
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-mono text-gray-400 text-center">
              © 2026 SPACECRM — Built with open-source software licensed under{" "}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900 transition-colors"
              >
                AGPL v3
              </a>
              . Source code available at{" "}
              <a
                href="https://github.com/pmspaceai7-wq/spacecrmmail"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <Link
                href="/privacy"
                className="text-xs font-mono text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                Privacy Policy
              </Link>
              <span className="hidden sm:inline text-xs font-mono text-gray-400">·</span>
              <Link
                href="/terms"
                className="text-xs font-mono text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                Terms of Service
              </Link>
              <span className="hidden sm:inline text-xs font-mono text-gray-400">·</span>
              <Link
                href="/cookies"
                className="text-xs font-mono text-gray-400 hover:text-gray-900 transition-colors duration-150"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Large watermark ── */}
      <div className="overflow-hidden border-t border-gray-100">
        <p className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black text-center text-gray-100 select-none leading-none py-2">
          SPACE CRM
        </p>
      </div>

    </footer>
  );
}