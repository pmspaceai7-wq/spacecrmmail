"use client";

import { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { Check, Loader2 } from "lucide-react";

const CREATE_DEMO_REQUEST_MUTATION = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      company
      phoneNumber
      companySize
      projectDetails
      formType
    }
  }
`;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phoneNumber: string;
  companySize: string;
  projectDetails: string;
}

interface CreateDemoRequestMutationData {
  createDemoRequest?: {
    _id?: string | null;
  } | null;
}

interface CreateDemoRequestMutationVariables {
  input: FormData & {
    formType: string;
  };
}

function DemoRequestFormContent() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    companySize: "",
    projectDetails: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createDemoRequest, { loading }] = useMutation<
    CreateDemoRequestMutationData,
    CreateDemoRequestMutationVariables
  >(
    CREATE_DEMO_REQUEST_MUTATION,
    {
      onCompleted: (data) => {
        if (data.createDemoRequest?._id) {
          setIsSubmitted(true);
          setError(null);
        } else {
          setError("Something went wrong. Please try again.");
        }
      },
      onError: (err) => {
        setError(err.message || "Something went wrong. Please try again.");
      },
    },
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await createDemoRequest({
        variables: {
          input: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            company: formData.company,
            phoneNumber: formData.phoneNumber,
            companySize: formData.companySize,
            projectDetails: formData.projectDetails,
            formType: "SpaceCRM",
          },
        },
      });
    } catch {
      // Error is handled in onError callback
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your demo request has been submitted. Our team will reach out to you
          within 24 hours to schedule your personalized Space CRM walkthrough.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              company: "",
              phoneNumber: "",
              companySize: "",
              projectDetails: "",
            });
          }}
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Demo</h3>
        <p className="text-gray-600 text-sm">
          Fill out the form below and our team will get in touch to show you how
          Space CRM can grow your business.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="john.doe@company.com"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Acme Inc."
          />
        </div>
        <div>
          <label
            htmlFor="companySize"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Size
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none"
          >
            <option value="">Select size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1000 employees</option>
            <option value="1000+">1000+ employees</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="projectDetails"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your needs or any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Request Demo"
        )}
      </button>

      <p className="mt-4 text-xs text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-primary-600 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-primary-600 hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}

import { ApolloWrapper } from "./ApolloWrapper";

// ... (rest of the file remains the same until the export)

export default function DemoRequestForm() {
  return (
    <ApolloWrapper>
      <DemoRequestFormContent />
    </ApolloWrapper>
  );
}
