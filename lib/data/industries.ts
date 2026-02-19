import {
  Building2,
  Cloud,
  ShoppingCart,
  Stethoscope,
  Landmark,
  GraduationCap,
} from "lucide-react";

export interface IndustryFeature {
  title: string;
  description: string;
}

export interface IndustryBlog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string; // Ideally this would link to a real blog post
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: any; // Using 'any' to store the Lucide component directly for simplicity in this context
  iconName: string; // For string-based lookups if needed
  heroImage?: string;
  features: IndustryFeature[];
  blogs: IndustryBlog[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Automate property inquiries, follow-ups, and client scheduling. Close more deals with AI-driven lead nurturing.",
    icon: Building2,
    iconName: "Building2",
    features: [
      {
        title: "Automated Property Inquiries",
        description:
          "Instantly respond to leads from Zillow, Realtor.com, and your website with personalized messages.",
      },
      {
        title: "Open House Scheduling",
        description:
          "Let AI handle the back-and-forth of scheduling viewings and open house reminders.",
      },
      {
        title: "Client Follow-up Sequences",
        description:
          "Nurture long-term prospects with automated market updates and check-ins.",
      },
    ],
    blogs: [
      {
        title: "The Future of Real Estate Automation",
        excerpt:
          "How top agents are using AI to save 20+ hours a week and double their closing rates.",
        date: "Oct 12, 2025",
        readTime: "5 min read",
        slug: "future-real-estate-automation",
      },
      {
        title: "5 Email Templates for Home Buyers",
        excerpt:
          "High-converting email scripts to keep your buyers engaged and ready to make an offer.",
        date: "Sep 28, 2025",
        readTime: "4 min read",
        slug: "email-templates-home-buyers",
      },
      {
        title: "WhatsApp Marketing for Realtors",
        excerpt:
          "Why WhatsApp is becoming the preferred communication channel for modern home buyers.",
        date: "Sep 15, 2025",
        readTime: "6 min read",
        slug: "whatsapp-marketing-realtors",
      },
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    description:
      "Scale your user acquisition and onboarding. Reduce churn with timely, automated customer success outreach.",
    icon: Cloud,
    iconName: "Cloud",
    features: [
      {
        title: "User Onboarding Flows",
        description:
          "Guide new users to their first 'aha!' moment with targeted email and in-app messages.",
      },
      {
        title: "Churn Prevention",
        description:
          "Detect at-risk accounts based on usage patterns and trigger automated re-engagement campaigns.",
      },
      {
        title: "Upsell & Cross-sell",
        description:
          "Identify power users and automatically suggest plan upgrades or additional features.",
      },
    ],
    blogs: [
      {
        title: "Reducing SaaS Churn with Automation",
        excerpt:
          "Strategies to proactively identify and retain at-risk customers before they cancel.",
        date: "Oct 05, 2025",
        readTime: "7 min read",
        slug: "reducing-saas-churn",
      },
      {
        title: "Onboarding Best Practices 2025",
        excerpt:
          "The latest trends in user activation and how to streamline your signup flow.",
        date: "Sep 20, 2025",
        readTime: "5 min read",
        slug: "onboarding-best-practices",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Recover abandoned carts, drive repeat purchases, and build brand loyalty with personalized omnichannel campaigns.",
    icon: ShoppingCart,
    iconName: "ShoppingCart",
    features: [
      {
        title: "Abandoned Cart Recovery",
        description:
          "Recover lost revenue with timely email and WhatsApp reminders for left-behind items.",
      },
      {
        title: "Post-Purchase Delight",
        description:
          "Turn one-time buyers into loyal fans with shipping updates, thank-you notes, and review requests.",
      },
      {
        title: "Win-back Campaigns",
        description:
          "Re-engage dormant customers with exclusive offers and personalized product recommendations.",
      },
    ],
    blogs: [
      {
        title: "Omnichannel E-commerce Strategies",
        excerpt:
          "How to create a seamless shopping experience across email, social, and mobile.",
        date: "Oct 10, 2025",
        readTime: "6 min read",
        slug: "omnichannel-ecommerce",
      },
      {
        title: "Boosting LTV in E-commerce",
        excerpt:
          "Tactics to increase customer lifetime value through loyalty programs and automated outreach.",
        date: "Sep 25, 2025",
        readTime: "4 min read",
        slug: "boosting-ltv-ecommerce",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Streamline patient communication with secure appointment reminders, follow-ups, and health tips.",
    icon: Stethoscope,
    iconName: "Stethoscope",
    features: [
      {
        title: "Appointment Reminders",
        description:
          "Reduce no-shows with automated SMS and WhatsApp reminders for upcoming visits.",
      },
      {
        title: "Post-Visit Follow-up",
        description:
          "Automatically send care instructions and satisfaction surveys after appointments.",
      },
      {
        title: "Health Tips Newsletters",
        description:
          "Keep patients engaged with monthly health advice tailored to their interests.",
      },
    ],
    blogs: [
      {
        title: "HIPAA Compliant Automation",
        excerpt:
          "Navigating the complexities of healthcare marketing while maintaining patient privacy.",
        date: "Oct 01, 2025",
        readTime: "8 min read",
        slug: "hipaa-compliant-automation",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    description:
      "Build trust and manage client relationships securely. Automate updates, reports, and meeting scheduling.",
    icon: Landmark,
    iconName: "Landmark",
    features: [
      {
        title: "Market Update Briefs",
        description:
          "Keep clients informed with automated weekly or monthly market summaries.",
      },
      {
        title: "Meeting Scheduling",
        description:
          "Simplify the process of booking annual reviews and check-in calls.",
      },
      {
        title: "Lead Qualification",
        description:
          "Automatically qualify potential clients before they speak with an advisor.",
      },
    ],
    blogs: [
      {
        title: "Automation for Wealth Management",
        excerpt:
          "How modern financial advisors are using technology to scale their personalized service.",
        date: "Sep 30, 2025",
        readTime: "5 min read",
        slug: "automation-wealth-management",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    description:
      "Improve student enrollment and engagement. Automate admissions communication and alumni relations.",
    icon: GraduationCap,
    iconName: "GraduationCap",
    features: [
      {
        title: "Admissions Pipeline",
        description:
          "Nurture prospective students from inquiry to enrollment with targeted content.",
      },
      {
        title: "Student Engagement",
        description:
          "Keep current students informed about events, deadlines, and campus news.",
      },
      {
        title: "Alumni Fundraising",
        description:
          "Run effective fundraising campaigns with personalized outreach to alumni networks.",
      },
    ],
    blogs: [
      {
        title: "Digital Transformation in Education",
        excerpt:
          "How schools and universities are adapting to the digital-first expectations of students.",
        date: "Sep 18, 2025",
        readTime: "6 min read",
        slug: "digital-transformation-education",
      },
    ],
  },
];
