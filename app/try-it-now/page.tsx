import type { Metadata } from "next"
import TryItNowForm from "@/components/TryItNowForm"

export const metadata: Metadata = {
  title: "Try SpaceCRM Free — Get Started Today",
  description:
    "Start using SpaceCRM free. Send email campaigns, automate LinkedIn outreach, WhatsApp marketing, and transactional email — no credit card required.",
}

export default function TryItNowPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24">
      {/* HERO section */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">
            
            {/* Left Column: Information and Trust Badges */}
            <div>
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 mb-8">
                Space CRM / Get Started
              </p>
              
              <h1 className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-6">
                Start your free
                <br />
                <em className="not-italic text-gray-300">SpaceCRM workspace.</em>
              </h1>
              
              <p className="text-base text-gray-500 max-w-md leading-relaxed mb-10">
                Fill out the form and we will get your workspace ready. Email campaigns, 
                LinkedIn automation, WhatsApp marketing, and transactional email — all in one place.
              </p>
              
              {/* Trust Badges */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <span className="text-gray-500 font-bold">✓</span> Free forever on starter plan
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <span className="text-gray-500 font-bold">✓</span> No credit card required
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <span className="text-gray-500 font-bold">✓</span> Setup in under 5 minutes
                </div>
              </div>
            </div>
            
            {/* Right Column: Contact Form */}
            <div>
              <TryItNowForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
