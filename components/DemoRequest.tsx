"use client";

import { useState } from "react";
import { gql } from "@apollo/client";
import { ApolloProvider, useMutation } from "@apollo/client/react";
import { apolloClient } from "@/lib/apollo-client";

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

function DemoRequestForm() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your demo request has been submitted. Our team will reach out to you
          within 24 hours.
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
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-8"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Demo</h3>
        <p className="text-gray-600 text-sm">
          Fill out the form below and our team will get in touch.
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
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
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
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
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
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
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
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
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
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, companySize: e.target.value }))
            }
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
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
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
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
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your marketing automation needs..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-200 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          "Request Demo"
        )}
      </button>

      <p className="mt-4 text-xs text-gray-500 text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}

export default function DemoRequest() {
  return (
    <ApolloProvider client={apolloClient}>
      <DemoRequestForm />
    </ApolloProvider>
  );
}
