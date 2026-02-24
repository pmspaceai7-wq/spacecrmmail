"use client";

import { motion } from "framer-motion";

// SVG Icons for each platform
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#EA4335"
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#0A66C2"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#25D366"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#000000"
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#E01E5A"
      d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
    />
    <path
      fill="#36C5F0"
      d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
    />
    <path
      fill="#2EB67D"
      d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
    />
    <path
      fill="#ECB22E"
      d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
    />
  </svg>
);

const HubSpotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#FF7A59"
      d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.2 2.2 0 0 0 17.231.836h-.066a2.2 2.2 0 0 0-2.2 2.198v.066c0 .871.507 1.626 1.242 1.981v2.852a5.662 5.662 0 0 0-2.883 1.303l-7.6-5.919a2.607 2.607 0 0 0 .094-.678 2.633 2.633 0 0 0-5.267 0 2.633 2.633 0 0 0 2.633 2.633c.471 0 .91-.127 1.294-.343l7.472 5.823a5.653 5.653 0 0 0-.183 1.409c0 .514.073 1.012.202 1.485l-2.5 1.048a2.038 2.038 0 0 0-1.869-1.225 2.049 2.049 0 1 0 1.893 2.816l2.57-1.078a5.696 5.696 0 1 0 3.927-9.82z"
    />
  </svg>
);

const ZapierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#FF4A00"
      d="M15.633 1.664l-3.627 6.274 3.627 6.274h-7.26l-3.628-6.274L8.373 1.664h7.26zM8.367 22.336l3.627-6.274-3.627-6.274h7.26l3.628 6.274-3.628 6.274h-7.26z"
    />
  </svg>
);

const SalesforceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#00A1E0"
      d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.39 0-.78-.045-1.155-.12-.6 1.83-2.34 3.165-4.395 3.165-1.02 0-1.965-.33-2.73-.9-.765 1.17-2.07 1.935-3.54 1.935-1.83 0-3.39-1.155-3.975-2.79-.285.045-.585.075-.885.075-2.64 0-4.8-2.19-4.8-4.89 0-2.04 1.23-3.78 2.985-4.5-.135-.435-.21-.9-.21-1.38 0-2.61 2.1-4.725 4.68-4.725 1.59 0 2.985.795 3.84 2.01l.351.231z"
    />
  </svg>
);

const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#F25022" d="M1 1h10v10H1z" />
    <path fill="#00A4EF" d="M1 13h10v10H1z" />
    <path fill="#7FBA00" d="M13 1h10v10H13z" />
    <path fill="#FFB900" d="M13 13h10v10H13z" />
  </svg>
);

const integrations = [
  { name: "Google", icon: GoogleIcon, color: "bg-white" },
  { name: "Gmail", icon: GmailIcon, color: "bg-white" },
  { name: "LinkedIn", icon: LinkedInIcon, color: "bg-white" },
  { name: "WhatsApp", icon: WhatsAppIcon, color: "bg-white" },
  { name: "Twitter / X", icon: TwitterIcon, color: "bg-white" },
  { name: "Slack", icon: SlackIcon, color: "bg-white" },
  { name: "HubSpot", icon: HubSpotIcon, color: "bg-white" },
  { name: "Zapier", icon: ZapierIcon, color: "bg-white" },
  { name: "Salesforce", icon: SalesforceIcon, color: "bg-white" },
  { name: "Microsoft", icon: MicrosoftIcon, color: "bg-white" },
];

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50/50"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-thin md:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tight text-gray-900 mb-8">
            Integrate with the ,<br /> tools you already use
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Get more done in less time by connecting Space CRM to all your
            favorite platforms
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* First Row - Left to Right */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={`${integration.name}-${index}`}
                  className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-200 hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <div className="w-10 h-10  bg-gray-50 flex items-center justify-center">
                    <integration.icon />
                  </div>
                  <span className="font-semibold text-gray-800 whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex overflow-hidden mt-4">
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[
                ...integrations.slice().reverse(),
                ...integrations.slice().reverse(),
              ].map((integration, index) => (
                <div
                  key={`${integration.name}-reverse-${index}`}
                  className="flex items-center gap-3 px-6 py-4 bg-white  border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <div className="w-10 h-10 bg-yellow-50 flex items-center justify-center">
                    <integration.icon />
                  </div>
                  <span className="font-semibold text-gray-800 whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
