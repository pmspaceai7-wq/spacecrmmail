"use client";

import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/data/industries";

interface IndustriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IndustriesModal({
  isOpen,
  onClose,
}: IndustriesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <h2 className="text-xl font-bold text-gray-900">
            Solutions by Industry
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 bg-slate-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                onClick={onClose}
                className="group p-5 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <industry.icon className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
