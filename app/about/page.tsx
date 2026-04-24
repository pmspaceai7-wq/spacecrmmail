import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, Users, Target, Award, ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Space CRM Marketing Automation Platform",
  description:
    "Learn about Space CRM's mission to revolutionize marketing automation. We're building the future of multichannel marketing with AI-powered tools for Email, LinkedIn, and WhatsApp.",
  keywords: [
    "about Space CRM",
    "marketing automation company",
    "AI marketing tools",
    "multichannel marketing",
    "business growth automation",
    "AI marketing tools 2026"
    "Advanced AI marketing tools 2026"
  ],
  openGraph: {
    title: "About Us - Space CRM Marketing Automation Platform",
    description:
      "Learn about Space CRM's mission to revolutionize marketing automation with AI-powered tools.",
    url: "https://spacecrm.net/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Space CRM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Space CRM",
    description: "Learn about our mission to revolutionize marketing automation.",
  },
  alternates: { canonical: "https://spacecrm.net/about" },
};

// ── Data ──────────────────────────────────────────────────────────────────

const values = [
  {
    label: "01",
    icon: Rocket,
    title: "Innovation First",
    description:
      "We leverage cutting-edge AI technology to automate and optimize marketing processes across all channels.",
  },
  {
    label: "02",
    icon: Users,
    title: "Customer-Centric",
    description:
      "Every feature we build is designed with our users in mind, ensuring powerful tools that are also intuitive to use.",
  },
  {
    label: "03",
    icon: Target,
    title: "Results-Driven",
    description:
      "Our platform is built to deliver measurable results, helping businesses grow revenue and scale efficiently.",
  },
  {
    label: "04",
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in our code, our support, and our commitment to your success.",
  },
];

const stats = [
  { stat: "10,000+", label: "Active businesses" },
  { stat: "60+",     label: "Countries supported" },
  { stat: "4.2B",    label: "Messages delivered" },
  { stat: "98%",     label: "Customer retention" },
];

const team = [
  {
    name: "Sarah Chen",
    role: "Co-founder & CEO",
    bio: "Former VP of Growth at Salesforce. Built multichannel automation systems serving 500M+ users.",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Marcus Obi",
    role: "Co-founder & CTO",
    bio: "Led AI research at Google. Published author on large-scale marketing machine learning systems.",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Priya Nair",
    role: "Head of Product",
    bio: "10 years scaling B2B SaaS products from zero to enterprise. Former Intercom and HubSpot.",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Luca Ferraro",
    role: "Head of Partnerships",
    bio: "Built the partner ecosystem at Pipedrive. Obsessed with creating win-win channel relationships.",
    social: { twitter: "#", linkedin: "#" },
  },
];

const milestones = [
  { year: "2020", event: "Founded in Berlin. First 10 customers onboarded in week one." },
  { year: "2021", event: "Launched LinkedIn automation suite. Crossed 1,000 active teams." },
  { year: "2022", event: "WhatsApp Business API integration ships. Series A closed." },
  { year: "2023", event: "AI predictive analytics introduced. 5,000 businesses on platform." },
  { year: "2024", event: "Expanded to 60+ countries. 4.2 billion messages delivered." },
  { year: "2025", event: "Space CRM 3.0 — unified inbox and real-time collaboration launch." },
];

const press = [
  { publication: "TechCrunch", quote: "The CRM platform that actually gets modern multi-channel GTM." },
  { publication: "Forbes", quote: "Space CRM is quietly becoming the backbone of growth teams everywhere." },
  { publication: "Product Hunt", quote: "#1 Product of the Day — two launches in a row." },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">

      {/* ── Hero ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-12">
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Space CRM / About
              </p>
              <h1 className="text-5xl font-thin md:text-7xl font-black leading-[0.95] tracking-tight text-gray-900 mb-8">
                Built for the
                <br />
                <em className="not-italic text-gray-300">modern GTM team.</em>
              </h1>
              <p className="text-base text-gray-500 max-w-md leading-relaxed">
                We're on a mission to democratize marketing automation — making powerful multichannel tools accessible to businesses of every size, across every channel.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/demo"
                className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 text-center"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 border border-gray-300 text-gray-700 text-sm font-semibold tracking-wide hover:border-gray-900 hover:text-gray-900 transition-colors duration-150 text-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              By the Numbers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="p-8">
                <p className="text-4xl font-black text-gray-900 mb-2 leading-none">{s.stat}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Our Mission
            </h2>
          </div>
          <div className="grid lg:grid-cols-[1fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-gray-200 border border-gray-200">
            <div className="p-8 lg:p-12">
              <p className="text-2xl font-black text-gray-900 leading-tight mb-6">
                Traditional CRMs are siloed and inefficient — we're changing that.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                In today's fast-paced digital landscape, businesses need to connect with customers across multiple channels simultaneously. Legacy systems leave teams overwhelmed and opportunities missed.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Space CRM provides a unified platform that automates marketing across Email, LinkedIn, and WhatsApp — powered by AI so your team can focus on relationships, not repetitive tasks.
              </p>
            </div>
            <div className="p-8 lg:p-12 bg-gray-900 flex flex-col justify-between">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Built for Growth
              </p>
              <div>
                <div className="w-10 h-10 border border-gray-700 flex items-center justify-center mb-8">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <p className="text-base font-black text-white leading-tight mb-3">
                  From startup to enterprise, the platform scales with you.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Automating repetitive tasks so you can focus on what matters most — building real relationships with customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Our Values
            </h2>
            <span className="text-xs font-mono text-gray-300">{String(values.length).padStart(2, "0")} principles</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200">
            {values.map((v) => (
              <div key={v.title} className="p-8 flex flex-col gap-6 group hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors duration-150">
                    <v.icon className="w-4 h-4 text-gray-700" />
                  </div>
                  <span className="font-mono text-xs text-gray-300">{v.label}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Our Story
            </h2>
            <span className="text-xs font-mono text-gray-300">2020 — present</span>
          </div>
          <div className="border border-gray-200 divide-y divide-gray-200">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="grid md:grid-cols-[120px_1fr] divide-y md:divide-y-0 md:divide-x divide-gray-200 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="px-8 py-6 flex items-center">
                  <span className="text-2xl font-black text-gray-900">{m.year}</span>
                </div>
                <div className="px-8 py-6 flex items-center">
                  <p className="text-sm text-gray-600 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              The Team
            </h2>
            <span className="text-xs font-mono text-gray-300">{String(team.length).padStart(2, "0")} people</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border border-gray-200">
            {team.map((member, index) => (
              <div key={member.name} className="p-8 flex flex-col justify-between group hover:bg-gray-50 transition-colors duration-200">
                <div>
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-mono text-xs text-gray-300">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-base font-black text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                  <a
                    href={member.social.twitter}
                    aria-label="Twitter"
                    className="w-7 h-7 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors duration-150"
                  >
                    <Twitter className="w-3 h-3" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    aria-label="LinkedIn"
                    className="w-7 h-7 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 transition-colors duration-150"
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              In the Press
            </h2>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
            {press.map((item) => (
              <div key={item.publication} className="p-8 flex flex-col justify-between gap-8 hover:bg-gray-50 transition-colors duration-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  "{item.quote}"
                </p>
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
                  — {item.publication}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              We're Hiring
            </h2>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-150"
            >
              All Roles <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="border border-gray-200 divide-y divide-gray-200">
            {[
              { role: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote" },
              { role: "AI / ML Research Engineer", dept: "Engineering", location: "Berlin / Remote" },
              { role: "Growth Marketing Manager", dept: "Marketing", location: "Remote" },
            ].map((job) => (
              <Link
                key={job.role}
                href="/careers"
                className="grid md:grid-cols-[1fr_auto] items-center px-8 py-6 hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="text-sm font-bold text-gray-900">{job.role}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-400">{job.dept}</span>
                    <span className="text-xs font-mono text-gray-300">·</span>
                    <span className="text-xs font-mono text-gray-400">{job.location}</span>
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-gray-900 transition-colors text-lg hidden md:block">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-4">
            <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400">
              Get in Touch
            </h2>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
            {[
              { label: "General", email: "hello@spacecrm.net", desc: "Partnerships, press, and general enquiries." },
              { label: "Support", email: "support@spacecrm.net", desc: "Technical help and account questions." },
              { label: "Sales", email: "sales@spacecrm.net", desc: "Enterprise plans and custom pricing." },
            ].map((contact) => (
              <div key={contact.label} className="p-8 group hover:bg-gray-50 transition-colors duration-200">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">{contact.label}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-0.5 mb-3 hover:gap-3 transition-all duration-150"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {contact.email}
                </a>
                <p className="text-sm text-gray-500 leading-relaxed">{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-[1fr_auto] items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
                Ready to automate growth?
              </h2>
              <p className="text-base text-gray-500 max-w-md">
                Join thousands of businesses already using Space CRM to streamline their marketing and accelerate growth.
              </p>
            </div>
            <Link
              href="/demo"
              className="px-10 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 shrink-0 text-center"
            >
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
