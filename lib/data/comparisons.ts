export interface ComparisonData {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bgGradient: string;
    buttonClass: string;
    ctaBgClass: string;
  };
  sections: any[]; // For now, flexible
}

export const comparisons: ComparisonData[] = [
  {
    slug: "gusto-vs-space-hr",
    title: "Gusto vs Space HR - AI-Powered HR Comparison",
    description: "Compare Gusto and Space HR: Discover how Space HR's advanced AI predictive forecasting revolutionizes HR management compared to Gusto's traditional approach.",
    keywords: [
      "Gusto vs Space HR",
      "HR software comparison",
      "AI predictive forecasting",
      "HR automation",
      "payroll software",
      "benefits management"
    ],
    hero: {
      title: "Gusto vs Space HR",
      subtitle: "",
      description: "Experience the future of HR with Space HR's AI predictive forecasting. See how we outperform Gusto in automation, insights, and workforce optimization.",
      bgGradient: "from-green-50 to-blue-100",
      buttonClass: "bg-green-600 hover:bg-green-700",
      ctaBgClass: "bg-green-600"
    },
    sections: [
      {
        type: "table",
        title: "Feature Comparison",
        features: [
          { name: "AI Predictive Forecasting", competitor: "Limited", spaceHR: "Advanced" },
          { name: "Payroll Processing", competitor: "Good", spaceHR: "Excellent" },
          { name: "Benefits Management", competitor: "Good", spaceHR: "Excellent" },
          { name: "HR Analytics", competitor: "Basic", spaceHR: "AI-Powered" },
          { name: "Automation Level", competitor: "Moderate", spaceHR: "High" }
        ]
      },
      {
        type: "focus",
        title: "AI Predictive Forecasting: The Game Changer",
        competitorTitle: "What Gusto Offers",
        competitorPoints: [
          "Basic payroll and benefits management",
          "Standard HR compliance tools",
          "Manual reporting and analytics",
          "Limited predictive capabilities"
        ],
        spaceHRTitle: "Space HR's AI Advantages",
        spaceHRPoints: [
          "Predictive workforce planning with 95% accuracy",
          "AI-driven turnover risk assessment",
          "Automated budget forecasting for HR costs",
          "Real-time insights for strategic decision-making"
        ]
      },
      {
        type: "testimonial",
        quote: "\"Switching from Gusto to Space HR transformed our HR operations. The AI predictive forecasting helped us reduce turnover by 30% and optimize our hiring budget by 25%.\"",
        author: "Sarah Johnson, HR Director at TechCorp"
      }
    ]
  },
  {
    slug: "rippling-alternative",
    title: "Rippling Alternative for Global Teams - Space HR",
    description: "Discover why Space HR is the superior alternative to Rippling for global teams. Leverage AI-powered HR automation, predictive analytics, and seamless global compliance management.",
    keywords: [
      "Rippling alternative",
      "HR software for global teams",
      "AI HR automation",
      "global payroll",
      "HR compliance",
      "Space HR vs Rippling"
    ],
    hero: {
      title: "Rippling Alternative for Global Teams",
      subtitle: "",
      description: "Space HR offers superior AI-driven HR management for global teams, surpassing Rippling with advanced automation, predictive insights, and seamless international compliance.",
      bgGradient: "from-blue-50 to-indigo-100",
      buttonClass: "bg-blue-600 hover:bg-blue-700",
      ctaBgClass: "bg-blue-600"
    },
    sections: [
      {
        type: "grid",
        title: "Why Choose Space HR Over Rippling?",
        competitorTitle: "Rippling Limitations",
        competitorPoints: [
          "Limited AI capabilities for HR predictions",
          "Complex global compliance management",
          "Basic automation without deep insights",
          "Higher costs for global scaling"
        ],
        spaceHRTitle: "Space HR Advantages",
        spaceHRPoints: [
          "AI-powered predictive analytics for workforce planning",
          "Automated global compliance and tax calculations",
          "Intelligent automation with real-time insights",
          "Cost-effective scaling with AI optimization"
        ]
      },
      {
        type: "features",
        title: "AI-Powered Global HR Management",
        features: [
          {
            icon: "🤖",
            title: "Predictive Forecasting",
            description: "AI analyzes workforce data to predict hiring needs, turnover risks, and budget requirements for global teams."
          },
          {
            icon: "🌍",
            title: "Global Compliance",
            description: "Automated compliance management across 150+ countries with real-time updates on labor laws and regulations."
          },
          {
            icon: "⚡",
            title: "Smart Automation",
            description: "Intelligent workflows that adapt to your global team's needs, reducing manual HR tasks by 80%."
          }
        ]
      }
    ]
  },
  {
    slug: "workday-alternative",
    title: "Workday Alternative for Mid-Market Enterprises - Space HR",
    description: "Discover Space HR as the perfect Workday alternative for mid-market enterprises. AI-powered HR solutions that are simpler, more affordable, and more effective than Workday.",
    keywords: [
      "Workday alternative",
      "HR software for mid-market",
      "AI HR solutions",
      "enterprise HR management",
      "Space HR vs Workday",
      "mid-market HR software"
    ],
    hero: {
      title: "Workday Alternative for Mid-Market Enterprises",
      subtitle: "",
      description: "Space HR delivers enterprise-grade AI-powered HR capabilities at a fraction of Workday's cost and complexity. Perfect for mid-market companies ready to scale.",
      bgGradient: "from-purple-50 to-indigo-100",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      ctaBgClass: "bg-purple-600"
    },
    sections: [
      {
        type: "icons",
        title: "Why Mid-Market Companies Choose Space HR Over Workday",
        features: [
          {
            icon: "💰",
            title: "Cost Effective",
            description: "50% lower total cost of ownership compared to Workday, with no hidden fees or complex licensing."
          },
          {
            icon: "🚀",
            title: "Faster Implementation",
            description: "Go live in weeks, not months. Our AI-powered setup adapts to your processes automatically."
          },
          {
            icon: "🤖",
            title: "AI-Powered Insights",
            description: "Advanced AI analytics that Workday can't match, providing predictive workforce insights."
          }
        ]
      },
      {
        type: "grid",
        title: "Enterprise Features Without Enterprise Complexity",
        competitorTitle: "Workday Challenges for Mid-Market",
        competitorPoints: [
          "Overwhelming complexity and learning curve",
          "High implementation costs and long timelines",
          "Limited AI capabilities for mid-market needs",
          "Expensive customizations and integrations",
          "Not designed for companies with 500-5000 employees"
        ],
        spaceHRTitle: "Space HR for Mid-Market Growth",
        spaceHRPoints: [
          "Intuitive interface with AI-guided workflows",
          "Rapid deployment with pre-built integrations",
          "Advanced AI for predictive HR analytics",
          "Flexible scaling without vendor lock-in",
          "Optimized for mid-market companies' unique needs"
        ]
      },
      {
        type: "icons",
        title: "AI Advantages That Drive Mid-Market Success",
        features: [
          {
            icon: "📊",
            title: "Predictive Analytics",
            description: "Forecast hiring needs and budget requirements with 95% accuracy."
          },
          {
            icon: "🎯",
            title: "Talent Optimization",
            description: "AI identifies high-potential employees and retention risks."
          },
          {
            icon: "⚡",
            title: "Process Automation",
            description: "Automate 80% of routine HR tasks with intelligent workflows."
          },
          {
            icon: "📈",
            title: "Growth Insights",
            description: "Data-driven recommendations for scaling your workforce."
          }
        ]
      },
      {
        type: "testimonial",
        quote: "\"We migrated from Workday to Space HR and saw immediate improvements. The AI predictive forecasting helped us reduce hiring costs by 30%, and the platform is so much easier to use. Our HR team productivity increased by 50%.\"",
        author: "Michael Chen, VP of HR at GrowthTech Solutions"
      }
    ]
  }
];