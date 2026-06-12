"use client"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { gql } from "@apollo/client"
import { useMutation } from "@apollo/client/react"
import { ApolloWrapper } from "@/components/ApolloWrapper"

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
`

interface FormDataInput {
  firstName: string
  lastName: string
  email: string
  company: string
  phoneNumber: string
  companySize: string
  projectDetails: string
}

interface CreateDemoRequestMutationVariables {
  input: FormDataInput & {
    formType: string
  }
}

interface CreateDemoRequestMutationData {
  createDemoRequest?: {
    _id?: string | null
  } | null
}

function TryItNowFormContent() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [companySize, setCompanySize] = useState("")
  const [primaryGoal, setPrimaryGoal] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [isLocalLoading, setIsLocalLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [createDemoRequest, { loading }] = useMutation<
    CreateDemoRequestMutationData,
    CreateDemoRequestMutationVariables
  >(CREATE_DEMO_REQUEST_MUTATION, {
    onCompleted: (data) => {
      if (data.createDemoRequest?._id) {
        setSubmitError(null)
        setTimeout(() => {
          window.location.href = "https://mail.spacecrm.net"
        }, 1500)
      } else {
        setSubmitError("Something went wrong. Please try again.")
        setIsLocalLoading(false)
      }
    },
    onError: (err) => {
      setSubmitError(err.message || "Something went wrong. Please try again.")
      setIsLocalLoading(false)
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    const newErrors = {
      firstName: !firstName.trim(),
      lastName: !lastName.trim(),
      email: !email.trim(),
      company: !company.trim(),
      companySize: !companySize || companySize === "Select size",
      primaryGoal: !primaryGoal || primaryGoal === "Select goal",
    }

    setErrors(newErrors)

    const hasErrors = Object.values(newErrors).some((err) => err)
    if (hasErrors) return

    setIsLocalLoading(true)

    try {
      await createDemoRequest({
        variables: {
          input: {
            firstName,
            lastName,
            email,
            company,
            companySize,
            phoneNumber: phone,
            projectDetails: `Goal: ${primaryGoal} | Message: ${message}`,
            formType: "TryItNow",
          },
        },
      })
    } catch {
      // Error is caught in onError callback
    }
  }

  const isLoading = isLocalLoading || loading

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 p-8 lg:p-10 bg-white">
      {/* ROW 1: First & Last Name */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
            First Name <span className="text-gray-400 font-normal">*</span>
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            className={`w-full border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150 ${
              errors.firstName ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.firstName && (
            <p className="text-xs text-red-400 mt-1">This field is required</p>
          )}
        </div>
        <div>
          <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
            Last Name <span className="text-gray-400 font-normal">*</span>
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            className={`w-full border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150 ${
              errors.lastName ? "border-red-400" : "border-gray-200"
            }`}
          />
          {errors.lastName && (
            <p className="text-xs text-red-400 mt-1">This field is required</p>
          )}
        </div>
      </div>

      {/* ROW 2: Work Email */}
      <div className="mb-5">
        <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
          Work Email <span className="text-gray-400 font-normal">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={`w-full border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150 ${
            errors.email ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.email && (
          <p className="text-xs text-red-400 mt-1">This field is required</p>
        )}
      </div>

      {/* ROW 3: Company Name */}
      <div className="mb-5">
        <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
          Company Name <span className="text-gray-400 font-normal">*</span>
        </label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Your company name"
          className={`w-full border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150 ${
            errors.company ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.company && (
          <p className="text-xs text-red-400 mt-1">This field is required</p>
        )}
      </div>

      {/* ROW 4: Company Size & Primary Goal */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
            Company Size <span className="text-gray-400 font-normal">*</span>
          </label>
          <select
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            className={`w-full border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150 ${
              errors.companySize ? "border-red-400" : "border-gray-200"
            }`}
          >
            <option value="">Select size</option>
            <option value="1-10 employees">1-10 employees</option>
            <option value="11-50 employees">11-50 employees</option>
            <option value="51-200 employees">51-200 employees</option>
            <option value="201-1000 employees">201-1000 employees</option>
            <option value="1000+ employees">1000+ employees</option>
          </select>
          {errors.companySize && (
            <p className="text-xs text-red-400 mt-1">This field is required</p>
          )}
        </div>
        <div>
          <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
            Primary Goal <span className="text-gray-400 font-normal">*</span>
          </label>
          <select
            value={primaryGoal}
            onChange={(e) => setPrimaryGoal(e.target.value)}
            className={`w-full border px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150 ${
              errors.primaryGoal ? "border-red-400" : "border-gray-200"
            }`}
          >
            <option value="">Select goal</option>
            <option value="Email Marketing Campaigns">Email Marketing Campaigns</option>
            <option value="LinkedIn Outreach Automation">LinkedIn Outreach Automation</option>
            <option value="WhatsApp Business Marketing">WhatsApp Business Marketing</option>
            <option value="Transactional Email / API">Transactional Email / API</option>
            <option value="Lead Generation">Lead Generation</option>
            <option value="All of the above">All of the above</option>
          </select>
          {errors.primaryGoal && (
            <p className="text-xs text-red-400 mt-1">This field is required</p>
          )}
        </div>
      </div>

      {/* ROW 5: Phone Number */}
      <div className="mb-5">
        <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 000-0000"
          className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150"
        />
      </div>

      {/* ROW 6: Message */}
      <div className="mb-5">
        <label className="text-xs font-mono tracking-[0.15em] uppercase text-gray-400 mb-1.5 block">
          Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your outreach goals or current challenges..."
          rows={3}
          className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-900 transition-colors duration-150 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide hover:bg-gray-700 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            Setting up...
            <div className="animate-spin border-2 border-white/30 border-t-white rounded-full w-4 h-4" />
          </>
        ) : (
          <>
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Legal terms below submit */}
      <p className="text-xs text-gray-400 text-center mt-4 leading-normal">
        By submitting this form you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-gray-900 transition-colors">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="underline hover:text-gray-900 transition-colors">
          Terms of Service
        </Link>
        .
      </p>

      {/* Error display */}
      {submitError && (
        <p className="text-xs text-red-400 text-center mt-4">{submitError}</p>
      )}
    </form>
  )
}

export default function TryItNowForm() {
  return (
    <ApolloWrapper>
      <TryItNowFormContent />
    </ApolloWrapper>
  )
}
