import { integrations } from "../../../lib/integrations-data";
import IntegrationPageClient from "./IntegrationPageClient";

// ── Page ──────────────────────────────────────────────────────────────────

export default async function IntegrationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const integration = integrations.find((i) => i.slug === slug);

  if (!integration) {
    return (
      <main className="bg-white text-gray-900 min-h-screen pt-20 lg:pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Integration Not Found</h1>
          <p className="text-gray-500 mb-8">The integration you're looking for doesn't exist.</p>
          <a
            href="/integrations"
            className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150"
          >
            Back to Integrations
          </a>
        </div>
      </main>
    );
  }

  return <IntegrationPageClient slug={slug} />;
}