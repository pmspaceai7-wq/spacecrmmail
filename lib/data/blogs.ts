export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readTime: string;
  category: string;
  categorySlug: string;
  author: string;
  keyPoints: string[];
  keywords: string[];
  sections: BlogSection[];
  image: string;
}

function toIsoDate(dateLabel: string): string {
  const timestamp = Date.parse(`${dateLabel} UTC`);

  if (Number.isNaN(timestamp)) {
    return "2025-01-01";
  }

  return new Date(timestamp).toISOString().split("T")[0];
}

interface RawBlogPost extends Omit<BlogPost, "publishedAt"> {}

const RAW_BLOG_POSTS: RawBlogPost[] = [
  {
    slug: "email-deliverability-guide-2026",
    title: "The Complete Email Deliverability Guide for 2026",
    excerpt: "SPF, DKIM, DMARC, inbox placement, domain reputation — everything you need to ensure your emails land in the inbox, not spam.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Email Deliverability",
    categorySlug: "email-deliverability",
    author: "SpaceCRM Team",
    image: "/images/blog_images/email-deliverability-guide.jpg",
    keyPoints: [
      "How SPF, DKIM, and DMARC work together",
      "Why domain warming matters before bulk sending",
      "How to monitor and fix deliverability issues"
    ],
    keywords: ["email deliverability", "SPF DKIM DMARC", "inbox placement", "sender reputation"],
    sections: [
      {
        heading: "Why deliverability is the foundation of email marketing",
        paragraphs: [
          "Even the best campaign fails if it lands in spam. Deliverability depends on technical setup, sender reputation, and list hygiene working together.",
          "In 2026, inbox providers have raised standards significantly. Authentication is no longer optional — it is a baseline requirement for any business sending bulk or transactional email."
        ]
      },
      {
        heading: "SPF, DKIM, and DMARC explained",
        paragraphs: [
          "SPF tells receiving servers which IPs are authorized to send from your domain. DKIM adds a cryptographic signature proving the email was not tampered with in transit.",
          "DMARC ties SPF and DKIM together and specifies what to do when authentication fails. A p=reject policy is the gold standard for protecting your domain from spoofing."
        ]
      },
      {
        heading: "Domain warming and list hygiene",
        paragraphs: [
          "A new domain has no reputation. Start with 50-100 sends per day and double every 3-4 days over 4-6 weeks. Only send to engaged contacts during the warmup period.",
          "Remove hard bounces immediately after the first bounce. Suppress contacts with no engagement in 90+ days. High bounce and complaint rates destroy domain reputation fast."
        ]
      }
    ]
  },
  {
    slug: "cold-email-sequence-guide",
    title: "How to Write a Cold Email Sequence That Gets Replies in 2026",
    excerpt: "A step-by-step framework for cold email sequences — subject lines, body copy, and follow-up timing that converts.",
    date: "Jan 08, 2026",
    readTime: "6 min read",
    category: "Email Marketing",
    categorySlug: "email-marketing",
    author: "SpaceCRM Team",
    image: "/images/blog_images/cold-email-sequence.jpg",
    keyPoints: [
      "The 5-touch sequence structure that drives replies",
      "Subject line formulas with real open rate data",
      "When to stop following up"
    ],
    keywords: ["cold email", "email sequence", "outreach email", "B2B email marketing"],
    sections: [
      {
        heading: "Why most cold email sequences fail",
        paragraphs: [
          "Most replies come on the 3rd or 4th follow-up yet most senders give up after one attempt. A sequence is a structured series of messages sent over 2-3 weeks.",
          "Each email should build context and add value — not just repeat the same pitch. Keep every email under 150 words and use one CTA per message."
        ]
      },
      {
        heading: "The 5-touch sequence structure",
        paragraphs: [
          "Day 1: Short personalized opener, one ask, under 75 words. Day 3: Add a case study or result. Day 7: Try a different pain point angle. Day 12: Social proof or testimonial. Day 18: Polite breakup email.",
          "Plain text outperforms HTML in cold outreach. Never give the prospect two things to decide in one email — one CTA only."
        ]
      },
      {
        heading: "Subject lines that get opened",
        paragraphs: [
          "Best cold email subject lines are specific and conversational. Examples: 'quick question about [company]', '[mutual connection] suggested I reach out', '[result] for [similar company]'.",
          "Test 2-3 subject lines per campaign using A/B testing. A 5% improvement in open rate compounds significantly across thousands of contacts."
        ]
      }
    ]
  },
  {
    slug: "linkedin-outreach-automation",
    title: "LinkedIn Outreach Automation: Scale Without Getting Banned",
    excerpt: "How to automate LinkedIn connection requests and follow-ups safely, avoid restrictions, and build a predictable pipeline.",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    category: "LinkedIn Automation",
    categorySlug: "linkedin-automation",
    author: "SpaceCRM Team",
    image: "/images/blog_images/linkedin-outreach.jpg",
    keyPoints: [
      "LinkedIn daily limits and how to stay safe",
      "Connection request vs InMail conversion rates",
      "How to personalize at scale"
    ],
    keywords: ["LinkedIn automation", "LinkedIn outreach", "B2B prospecting", "sales automation"],
    sections: [
      {
        heading: "LinkedIn automation done right",
        paragraphs: [
          "LinkedIn is the highest-converting channel for B2B outreach but comes with strict limits. Exceeding them triggers restrictions or bans.",
          "Safe automation means staying under 20-30 connection requests per day, using randomized send timing, and pausing on weekends. SpaceCRM handles all of this automatically."
        ]
      },
      {
        heading: "Connection requests that get accepted",
        paragraphs: [
          "Use the 300-character note wisely: mention a specific reason for connecting — shared group, their recent post, or a mutual connection. Never pitch in the first message.",
          "Acceptance rates above 35% are achievable with personalized notes. Below 20% means your targeting or messaging needs work."
        ]
      },
      {
        heading: "Follow-up after connection",
        paragraphs: [
          "Wait 24-48 hours before the first message. Lead with value — a relevant insight or resource. Save the pitch for message 2 or 3.",
          "A 3-message sequence on Day 1, Day 4, and Day 10 is the sweet spot. After 3 messages with no reply, move the contact to email or WhatsApp follow-up."
        ]
      }
    ]
  },
  {
    slug: "whatsapp-business-marketing-guide",
    title: "WhatsApp Business Marketing: How to Run Campaigns That Convert",
    excerpt: "A practical guide to WhatsApp broadcast campaigns, automated replies, and using the WhatsApp Business API for high-engagement marketing.",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    category: "WhatsApp Marketing",
    categorySlug: "whatsapp-marketing",
    author: "SpaceCRM Team",
    image: "/images/blog_images/whatsapp-marketing.jpg",
    keyPoints: [
      "WhatsApp Business API vs the regular app",
      "How to get template messages approved by Meta",
      "Open rates and benchmarks"
    ],
    keywords: ["WhatsApp marketing", "WhatsApp Business API", "WhatsApp campaigns", "messaging marketing"],
    sections: [
      {
        heading: "Why WhatsApp outperforms every other marketing channel",
        paragraphs: [
          "WhatsApp messages have a 98% open rate compared to 20-25% for email. Messages are read within 3 minutes on average.",
          "The WhatsApp Business API is required for broadcast campaigns and automation at scale. SpaceCRM connects directly to the official Meta API."
        ]
      },
      {
        heading: "Getting template messages approved",
        paragraphs: [
          "WhatsApp requires all outbound templates to be pre-approved by Meta. Write in plain language, avoid excessive sales language, and always include an opt-out option.",
          "Transactional and utility templates are approved fastest — typically within 24-48 hours."
        ]
      },
      {
        heading: "Building a WhatsApp campaign funnel",
        paragraphs: [
          "Start with an opt-in mechanism — landing page, website widget, or QR code. Quality opt-in lists always outperform purchased contacts.",
          "Structure campaigns as 3 steps: announcement, follow-up with social proof, and final CTA with urgency. Use rich media and buttons to increase engagement."
        ]
      }
    ]
  },
  {
    slug: "transactional-email-best-practices",
    title: "Transactional Email Best Practices: OTPs, Receipts, and Notifications That Always Deliver",
    excerpt: "How to set up transactional email infrastructure correctly so critical emails never land in spam.",
    date: "Dec 12, 2025",
    readTime: "7 min read",
    category: "Transactional Email",
    categorySlug: "transactional-email",
    author: "SpaceCRM Team",
    image: "/images/blog_images/transactional-email.jpg",
    keyPoints: [
      "Why transactional and marketing emails need separate infrastructure",
      "How to integrate SpaceCRM Send API in under 30 minutes",
      "Monitoring OTP delivery rates"
    ],
    keywords: ["transactional email", "send API", "SMTP relay", "OTP email", "email infrastructure"],
    sections: [
      {
        heading: "Transactional vs marketing email — keep them separate",
        paragraphs: [
          "Sending OTPs through the same infrastructure as bulk campaigns risks deliverability contamination. One spam complaint on a campaign can delay a customer's OTP.",
          "Use a dedicated transactional sending domain and IP pool so your most critical emails are never affected by marketing performance."
        ]
      },
      {
        heading: "Integrating the SpaceCRM Send API",
        paragraphs: [
          "Authentication via API key, a single POST endpoint, and webhook callbacks for delivery events. Integration takes under 30 minutes in any language.",
          "Use the API for OTPs, welcome emails, password resets, order confirmations, and notifications. Every send is logged with full event history."
        ]
      },
      {
        heading: "Monitoring critical email delivery",
        paragraphs: [
          "Set up webhook listeners for bounce and complaint events. A 2%+ bounce rate on transactional email needs immediate attention.",
          "Monitor OTP delivery time specifically. Users expect OTPs in under 10 seconds. If p95 delivery exceeds 30 seconds, review your sending infrastructure."
        ]
      }
    ]
  },
  {
    slug: "email-ab-testing-guide",
    title: "A/B Testing Email Campaigns: What to Test and What Moves the Needle",
    excerpt: "A/B testing framework for email marketers — subject lines, send times, CTAs, and content — with real data on what works.",
    date: "Dec 05, 2025",
    readTime: "5 min read",
    category: "Email Marketing",
    categorySlug: "email-marketing",
    author: "SpaceCRM Team",
    image: "/images/blog_images/ab-testing-email.jpg",
    keyPoints: [
      "Which elements have highest impact on open and click rates",
      "How to calculate statistical significance",
      "Common A/B testing mistakes"
    ],
    keywords: ["email A/B testing", "email optimization", "subject line testing", "email open rates"],
    sections: [
      {
        heading: "What to test first",
        paragraphs: [
          "Subject lines have the biggest impact on open rates. Compare: question vs statement, short vs long, personalized vs generic.",
          "After subject lines, test send time, then CTA button text, then email length. Test one variable at a time."
        ]
      },
      {
        heading: "Statistical significance matters",
        paragraphs: [
          "Never call a winner before reaching 95% statistical significance. With a list under 1,000 contacts, most A/B tests are statistically meaningless.",
          "Run one test at a time. Testing subject line AND send time simultaneously makes it impossible to know which variable caused the difference."
        ]
      },
      {
        heading: "Building a testing culture",
        paragraphs: [
          "Document every test: hypothesis, result, sample size, and conclusion. Build a swipe file of winning subject lines and CTAs.",
          "Use SpaceCRM's built-in A/B testing to automate split sending and auto-deploy the winner to the remaining list after a set time period."
        ]
      }
    ]
  },
  {
    slug: "multichannel-outreach-strategy",
    title: "Multichannel Outreach: Combining Email, LinkedIn, and WhatsApp for Maximum Reply Rates",
    excerpt: "How to coordinate outreach across email, LinkedIn, and WhatsApp without annoying prospects — and which sequences drive the highest replies.",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    category: "Sales Automation",
    categorySlug: "sales-automation",
    author: "SpaceCRM Team",
    image: "/images/blog_images/multichannel-outreach.jpg",
    keyPoints: [
      "The optimal channel sequence for B2B outreach",
      "How to avoid seeming aggressive across multiple channels",
      "Measuring multichannel attribution correctly"
    ],
    keywords: ["multichannel outreach", "sales automation", "email LinkedIn WhatsApp", "B2B sales"],
    sections: [
      {
        heading: "Why multichannel outreach works",
        paragraphs: [
          "Reaching a prospect on three channels with consistent messaging creates familiarity. Multichannel sequences achieve 2-3x higher reply rates than single-channel campaigns.",
          "Each channel adds new context — LinkedIn builds credibility, email provides detail, WhatsApp creates urgency."
        ]
      },
      {
        heading: "The optimal sequence",
        paragraphs: [
          "Day 1: LinkedIn connection request. Day 3: First cold email. Day 5: LinkedIn message referencing the email. Day 8: Email follow-up 2. Day 14: WhatsApp for warm prospects. Day 20: Final breakup email.",
          "SpaceCRM detects replies across all channels and pauses the sequence automatically when a prospect responds."
        ]
      },
      {
        heading: "Avoiding the spam reputation",
        paragraphs: [
          "Space touches at least 2-3 days apart. Never send on the same day across two different channels.",
          "Personalization is the filter. If a message could be sent to anyone, it will feel like spam. Reference something specific in every message."
        ]
      }
    ]
  },
  {
    slug: "lead-generation-email-automation",
    title: "How to Build an Automated Lead Generation System with Email",
    excerpt: "From lead capture to qualified sales conversation — how to build an end-to-end automated lead generation system using email sequences and behavioral triggers.",
    date: "Nov 20, 2025",
    readTime: "6 min read",
    category: "Lead Generation",
    categorySlug: "lead-generation",
    author: "SpaceCRM Team",
    image: "/images/blog_images/lead-generation-email.jpg",
    keyPoints: [
      "Building a lead magnet funnel that attracts qualified contacts",
      "Nurture sequence structure for different buyer stages",
      "Behavioral triggers that signal sales-readiness"
    ],
    keywords: ["lead generation", "email automation", "lead nurture", "lead scoring"],
    sections: [
      {
        heading: "The anatomy of an automated lead generation system",
        paragraphs: [
          "Four parts: attract (traffic and lead magnets), capture (forms), nurture (email sequences), and convert (sales handoff triggers). Most businesses invest in the first two and neglect the last two.",
          "The nurture and convert stages are where automation creates the most leverage."
        ]
      },
      {
        heading: "Designing the nurture sequence",
        paragraphs: [
          "Move contacts from awareness to intent over 2-4 weeks. Start with educational content, introduce your solution in the middle, close with social proof and a specific CTA.",
          "Segment by how they opted in. Someone who downloaded a pricing guide is further down the funnel than a newsletter subscriber — they need different sequences."
        ]
      },
      {
        heading: "Behavioral triggers for sales handoff",
        paragraphs: [
          "Notify your sales team when a lead opens 3+ emails, visits the pricing page, or clicks a demo link. These signals are far more reliable than time-based lead scoring.",
          "SpaceCRM lets you configure these triggers and assign leads to team members automatically."
        ]
      }
    ]
  },
  {
    slug: "smtp-relay-setup-guide",
    title: "SMTP Relay Setup: Configure Your Sending Infrastructure for Maximum Deliverability",
    excerpt: "A technical guide to setting up SMTP relay — authentication, bounce handling, and monitoring.",
    date: "Nov 12, 2025",
    readTime: "8 min read",
    category: "Transactional Email",
    categorySlug: "transactional-email",
    author: "SpaceCRM Team",
    image: "/images/blog_images/smtp-relay-setup.jpg",
    keyPoints: [
      "SMTP relay vs direct sending",
      "Configuring SPF and DKIM for relay",
      "Handling bounces automatically"
    ],
    keywords: ["SMTP relay", "email infrastructure", "SMTP setup", "email deliverability"],
    sections: [
      {
        heading: "What is SMTP relay and when to use it",
        paragraphs: [
          "SMTP relay routes outbound emails through a server with established IP reputation. Use it when sending more than 500 emails per day or when your server IP has poor reputation.",
          "SpaceCRM SMTP: Host smtp.spacecrm.net, Port 587 (TLS) or 465 (SSL), Username: your API key."
        ]
      },
      {
        heading: "Configuration and authentication",
        paragraphs: [
          "Update your domain SPF record to include SpaceCRM's sending servers. Enable DKIM signing in SpaceCRM domain settings. Both are required for full authentication.",
          "Most email clients and frameworks support these settings with no modifications. Integration takes under 15 minutes."
        ]
      },
      {
        heading: "Bounce management",
        paragraphs: [
          "Connect a webhook to receive delivery events: delivered, bounced, complained, unsubscribed. Process hard bounces immediately — do not retry.",
          "A complaint rate above 0.1% is a warning. Above 0.3% triggers sending limits. Review weekly in SpaceCRM's deliverability dashboard."
        ]
      }
    ]
  },
  {
    slug: "ai-email-copywriting",
    title: "AI Email Copywriting: Write Outreach Emails That Sound Human",
    excerpt: "How to use SpaceCRM's AI assistant to generate personalized cold email copy, follow-up sequences, and subject lines — without sounding robotic.",
    date: "Nov 05, 2025",
    readTime: "5 min read",
    category: "AI & Automation",
    categorySlug: "ai-automation",
    author: "SpaceCRM Team",
    image: "/images/blog_images/ai-email-copywriting.jpg",
    keyPoints: [
      "Prompting AI for cold email that sounds personal",
      "Which parts AI writes best and worst",
      "Human editing checklist before sending"
    ],
    keywords: ["AI email writing", "AI copywriting", "cold email AI", "email personalization"],
    sections: [
      {
        heading: "What AI does well in email copywriting",
        paragraphs: [
          "AI excels at generating first drafts, producing A/B test variations, and maintaining consistent tone across large sequences.",
          "AI is weakest at genuine personalization — referencing specific prospect context. That part still requires a human."
        ]
      },
      {
        heading: "Prompting for cold email copy",
        paragraphs: [
          "A good prompt includes: target role and industry, one specific pain point, your relevant value proposition, desired tone, and length constraint under 100 words.",
          "Use SpaceCRM's AI assistant with pre-built prompts for cold email, LinkedIn messages, and WhatsApp copy. All outputs are editable before adding to any sequence."
        ]
      },
      {
        heading: "The human editing checklist",
        paragraphs: [
          "Before sending any AI-generated email: Does it sound like a real person? Is there one specific personalized detail? Is there exactly one clear CTA? Is it under 150 words?",
          "AI-generated emails that skip this checklist consistently underperform. Use AI to speed up the first draft, then apply human judgment."
        ]
      }
    ]
  },
  {
    slug: "email-list-hygiene",
    title: "Email List Hygiene: Clean Your List and Protect Your Sender Reputation",
    excerpt: "Why list hygiene is the most underrated factor in deliverability — and a step-by-step process for cleaning your contact database.",
    date: "Oct 28, 2025",
    readTime: "5 min read",
    category: "Email Deliverability",
    categorySlug: "email-deliverability",
    author: "SpaceCRM Team",
    image: "/images/blog_images/email-list-hygiene.jpg",
    keyPoints: [
      "4 types of addresses destroying deliverability",
      "How often to clean your list",
      "Re-engagement campaigns before suppression"
    ],
    keywords: ["email list hygiene", "email deliverability", "bounce rate", "email list cleaning"],
    sections: [
      {
        heading: "The 4 types of harmful addresses",
        paragraphs: [
          "Hard bounces: remove immediately. Soft bounces: suppress after 3 consecutive. Spam traps: addresses maintained by blacklist operators to catch bulk senders. Complaints: suppress immediately.",
          "Purchased lists contain all four in high concentrations. Never send without running through an email verification service first."
        ]
      },
      {
        heading: "The list cleaning process",
        paragraphs: [
          "Run through an email verification tool before every major campaign. Remove invalid, disposable, and role-based addresses (info@, admin@).",
          "Segment by last engagement date. Contacts with no opens in 90+ days should receive a re-engagement campaign before your next broadcast."
        ]
      },
      {
        heading: "Running a re-engagement campaign",
        paragraphs: [
          "2-3 emails with a clear subject: 'Are we still a good fit?' or 'Last chance to stay on our list'. Make unsubscribing easy and obvious.",
          "After the sequence, suppress all non-openers. Your list will be smaller but deliverability, open rates, and revenue per contact will all increase."
        ]
      }
    ]
  },
  {
    slug: "domain-warming-guide",
    title: "Domain Warming Guide: Build Sender Reputation from Zero",
    excerpt: "A complete domain warming schedule — day-by-day send volumes, what to monitor, and when you are ready for full volume.",
    date: "Oct 20, 2025",
    readTime: "6 min read",
    category: "Email Deliverability",
    categorySlug: "email-deliverability",
    author: "SpaceCRM Team",
    image: "/images/blog_images/domain-warming.jpg",
    keyPoints: [
      "The exact warming schedule by week",
      "Metrics to watch during warming",
      "Common mistakes that reset reputation"
    ],
    keywords: ["domain warming", "email warmup", "sender reputation", "email deliverability"],
    sections: [
      {
        heading: "Why domain warming exists",
        paragraphs: [
          "A new domain has no sending history. Inbox providers use historical patterns to determine inbox vs spam placement. Sending thousands of emails from a new domain immediately triggers spam filters.",
          "Warming builds reputation gradually by demonstrating consistent, low-complaint sending over 4-6 weeks."
        ]
      },
      {
        heading: "The warming schedule",
        paragraphs: [
          "Week 1: 50/day. Week 2: 200/day. Week 3: 500/day. Week 4: 1,000/day. Week 5: 3,000/day. Week 6+: scale to target. Send only to your most engaged contacts during warming.",
          "SpaceCRM's mailbox warmup automates this schedule by sending warmup emails between SpaceCRM accounts and automatically opening and replying to build engagement signals."
        ]
      },
      {
        heading: "Metrics to monitor",
        paragraphs: [
          "Watch: inbox placement rate (target 95%+), spam folder rate (keep below 2%), open rate (above 20%), complaint rate (below 0.1%).",
          "If spam placement exceeds 5%, pause immediately. Review authentication setup, list quality, and email content before resuming."
        ]
      }
    ]
  },
  {
    slug: "sales-email-templates",
    title: "12 Sales Email Templates You Can Use Today (With Performance Data)",
    excerpt: "Proven templates for cold outreach, follow-ups, meeting requests, and closing — with real open rate and reply rate data.",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    category: "Email Marketing",
    categorySlug: "email-marketing",
    author: "SpaceCRM Team",
    image: "/images/blog_images/sales-email-templates.jpg",
    keyPoints: [
      "Templates for every stage of the sales cycle",
      "What makes each template work",
      "Open rates and reply rates per template type"
    ],
    keywords: ["sales email templates", "cold email templates", "follow-up email", "B2B sales email"],
    sections: [
      {
        heading: "Cold outreach templates",
        paragraphs: [
          "Template 1 — The Specific Problem: 'Hi [Name], I noticed [company] is doing [specific thing]. Most [role]s struggle with [related problem]. We helped [similar company] solve this with [result]. Worth 15 minutes?' Open rate: 42%. Reply rate: 8%.",
          "Template 2 — The Referral: '[Mutual connection] suggested I reach out. They mentioned you were looking at [problem]. Can I share what we did for their team?' Open rate: 58%. Reply rate: 18%."
        ]
      },
      {
        heading: "Follow-up templates",
        paragraphs: [
          "Template 3 — Value Add: 'Following up. Thought this [article] on [relevant topic] might be useful regardless of whether we work together.' Reply rate: 6%.",
          "Template 4 — The Breakup: 'I will assume the timing is not right. I will not reach out again, but if [problem] becomes a priority, feel free to get back in touch.' Reply rate: 12% — the highest of all follow-ups."
        ]
      },
      {
        heading: "Meeting and closing templates",
        paragraphs: [
          "Template 5 — Calendar Link: 'Would it make sense to talk 15 minutes this week? Here is my calendar: [link]. If none work, let me know what does.' Keep it simple — every extra sentence reduces conversion.",
          "Store all templates in SpaceCRM's template library with personalization tokens and track performance per template across your team."
        ]
      }
    ]
  },
  {
    slug: "email-marketing-metrics",
    title: "Email Marketing Metrics: The Only Numbers That Actually Matter",
    excerpt: "Cut through vanity metrics. Focus on the email KPIs that directly predict revenue: reply rate, conversion rate, and revenue per email.",
    date: "Oct 02, 2025",
    readTime: "5 min read",
    category: "Email Marketing",
    categorySlug: "email-marketing",
    author: "SpaceCRM Team",
    image: "/images/blog_images/email-metrics.jpg",
    keyPoints: [
      "Why open rate is misleading post-iOS 15",
      "The 3 metrics that predict email revenue",
      "Benchmarks by campaign type"
    ],
    keywords: ["email marketing metrics", "email KPIs", "email open rate", "email ROI"],
    sections: [
      {
        heading: "Why open rate is no longer reliable",
        paragraphs: [
          "Since Apple Mail Privacy Protection (iOS 15), open rates are inflated for any list with iOS Mail users. Apple pre-fetches email content, registering opens even when never read.",
          "Open rate is still useful as a relative metric comparing campaigns to each other but unreliable as an absolute number."
        ]
      },
      {
        heading: "The 3 metrics that matter",
        paragraphs: [
          "1. Reply rate for cold outreach — benchmark: 5-10% good, 15%+ excellent. 2. Click-to-open rate for campaigns — benchmark: 15-25%. 3. Revenue per email sent — total revenue divided by emails sent.",
          "Track these weekly, not just per campaign. Trends reveal whether list health and content quality are improving or declining."
        ]
      },
      {
        heading: "Benchmarks by campaign type",
        paragraphs: [
          "Cold outreach: 30-50% open, 5-15% reply. Newsletter: 25-40% open, 2-5% click. Transactional: 50-70% open. Re-engagement: if below 5% open, suppress non-openers.",
          "Use SpaceCRM's analytics to track all metrics per campaign, per sequence, and per contact."
        ]
      }
    ]
  },
  {
    slug: "inbox-management-sales-teams",
    title: "Unified Inbox for Sales Teams: Manage Email, LinkedIn, and WhatsApp Replies in One Place",
    excerpt: "How a unified inbox eliminates tab-switching chaos and helps sales teams respond faster and close more deals.",
    date: "Sep 22, 2025",
    readTime: "4 min read",
    category: "Sales Automation",
    categorySlug: "sales-automation",
    author: "SpaceCRM Team",
    image: "/images/blog_images/unified-inbox.jpg",
    keyPoints: [
      "The cost of slow response times in sales",
      "How to set up conversation routing",
      "Inbox management habits for high-volume SDRs"
    ],
    keywords: ["unified inbox", "sales inbox", "email management", "multichannel inbox"],
    sections: [
      {
        heading: "Why response time decides the deal",
        paragraphs: [
          "Responding within 5 minutes of a prospect reply increases conversion by 400% compared to a 1-hour response. In competitive markets, the first to respond often wins.",
          "Replies come across email, LinkedIn, and WhatsApp simultaneously. Most teams monitor these in separate apps — context gets lost and replies get missed."
        ]
      },
      {
        heading: "Setting up a unified inbox",
        paragraphs: [
          "SpaceCRM pulls replies from all channels into one view. Each conversation shows full history across channels, the campaign that triggered the reply, and contact profile data.",
          "Set routing rules to assign conversations by territory, account size, or campaign source. Unassigned conversations should trigger a Slack or email alert."
        ]
      },
      {
        heading: "Inbox habits for SDRs",
        paragraphs: [
          "Process the inbox in focused blocks: 9am, 1pm, and 4pm. Respond to all new replies within each block. Use saved reply templates for common questions.",
          "Never leave a replied conversation unresolved for more than 24 hours. Flag conversations that need follow-up and set reminders."
        ]
      }
    ]
  },
  {
    slug: "spacecrm-send-api-tutorial",
    title: "SpaceCRM Send API Tutorial: Send Your First Transactional Email in 10 Minutes",
    excerpt: "Hands-on tutorial for integrating SpaceCRM's Send API in Node.js, Python, and PHP — from API key to first successful send.",
    date: "Sep 15, 2025",
    readTime: "6 min read",
    category: "Transactional Email",
    categorySlug: "transactional-email",
    author: "SpaceCRM Team",
    image: "/images/blog_images/send-api-tutorial.jpg",
    keyPoints: [
      "Getting your API key from SpaceCRM dashboard",
      "Making your first API call in Node.js or Python",
      "Handling webhook callbacks for delivery events"
    ],
    keywords: ["SpaceCRM API", "send API tutorial", "transactional email API", "email API integration"],
    sections: [
      {
        heading: "Getting started",
        paragraphs: [
          "Generate your API key from SpaceCRM Settings → API Keys. Store it in an environment variable — never hardcode in source code.",
          "Base URL: https://api.spacecrm.net/v1. All requests require Authorization: Bearer YOUR_API_KEY header and Content-Type: application/json."
        ]
      },
      {
        heading: "Your first API call",
        paragraphs: [
          "POST /v1/emails with body: { from, to, subject, html }. A 200 response returns { id: 'msg_xxx', status: 'queued' }. Works the same in Python and PHP.",
          "Check spacecrm.net/api for full SDK installation and endpoint reference."
        ]
      },
      {
        heading: "Handling webhook events",
        paragraphs: [
          "Register a webhook endpoint in Settings → Webhooks. You receive POST requests for each event: email.delivered, email.opened, email.bounced, email.complained. Always return 200 within 5 seconds.",
          "Process hard bounces immediately. Suppress complained addresses from all future sends."
        ]
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = RAW_BLOG_POSTS.map((post) => ({
  ...post,
  publishedAt: toIsoDate(post.date),
})).sort(
  (a, b) =>
    new Date(`${b.publishedAt}T00:00:00Z`).getTime() -
    new Date(`${a.publishedAt}T00:00:00Z`).getTime(),
);

export function getAllBlogs(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
