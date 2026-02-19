import { notFound } from "next/navigation";
import { INDUSTRIES } from "@/lib/data/industries";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.name} Automation Solutions | Space CRM`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((ind) => ind.slug === slug);

  if (!industry) {
    return notFound();
  }

  const Icon = industry.icon;

  return (
    <main className="pt-20 lg:pt-24 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10" />
        <div className="container-custom py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-sm font-medium mb-6">
              <Icon className="w-4 h-4" />
              <span>{industry.name} Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {industry.name} Automation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-violet-600">
                Done Right
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-10">
              {industry.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className="btn-primary">
                Get a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="#features" className="btn-secondary">
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 lg:py-24 container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tailored for {industry.name}
          </h2>
          <p className="text-lg text-gray-600">
            Specific tools and workflows designed to address the unique
            challenges of the {industry.name.toLowerCase()} industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industry.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                <span className="font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Latest Insights
            </h2>
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
            >
              View all articles
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.blogs.map((blog, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
                  {/* Placeholder for blog image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-6xl opacity-20 font-black">
                      BLOG
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 container-custom">
        <div className="bg-gradient-to-br from-primary-600 to-violet-700 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your {industry.name.toLowerCase()} business?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Join thousands of {industry.name} professionals using Space CRM to
              automate growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="btn-secondary bg-white text-primary-700 border-white hover:bg-gray-100 w-full sm:w-auto"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
