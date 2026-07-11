export type ValueProp = {
  title: string;
  description: string;
};

export type ServiceVisualType =
  | "brand"
  | "website"
  | "seo"
  | "social"
  | "ai-video"
  | "crm"
  | "lead-gen"
  | "gtm";

export type ServiceDetail = {
  title: string;
  shortTitle: string;
  overview: string;
  keyServices: string[];
  businessBenefits: string[];
  visualType: ServiceVisualType;
  tags: string[];
};

export const servicesHero = {
  title: "Services",
  subheadline:
    "From brand strategy to full-funnel execution, InvisiEdge provides the creative, technical, and strategic support businesses need to grow.",
};

export const valueProps: ValueProp[] = [
  {
    title: "Strategy-Led Execution",
    description:
      "We don't create random content or campaigns. Every service is connected to a clear growth objective.",
  },
  {
    title: "End-to-End Support",
    description:
      "From brand identity to website development, SEO, content, automation, and lead generation — we manage the full growth ecosystem.",
  },
  {
    title: "Scalable Team",
    description:
      "Access a complete marketing team without the cost and complexity of hiring in-house.",
  },
  {
    title: "AI & Automation Ready",
    description:
      "We help brands work faster and smarter using AI content, CRM systems, automation, and workflow optimization.",
  },
  {
    title: "Data-Driven Growth",
    description:
      "We track performance and use insights to improve campaigns, content, and conversions.",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    title: "Brand Strategy & Positioning",
    shortTitle: "Branding",
    visualType: "brand",
    tags: ["Positioning", "Identity", "Messaging", "Guidelines"],
    overview:
      "A strong brand gives your business clarity, trust, and direction. We help define your positioning, voice, identity, and messaging so your brand can stand out in a crowded market.",
    keyServices: [
      "Brand positioning",
      "Brand identity development",
      "Brand messaging",
      "Visual direction",
      "Logo refresh",
      "Founder branding",
      "Brand guidelines",
    ],
    businessBenefits: [
      "Clearer communication",
      "Stronger brand recall",
      "Better audience connection",
      "More professional market presence",
      "Improved trust and credibility",
    ],
  },
  {
    title: "Website Design & Development",
    shortTitle: "Web Design",
    visualType: "website",
    tags: ["UI/UX", "Next.js", "Landing Pages", "Webflow"],
    overview:
      "Your website should do more than look good. It should explain your value, build trust, guide users, and convert visitors into leads.",
    keyServices: [
      "UI/UX design",
      "Website development",
      "Landing pages",
      "Website redesign",
      "Microsites",
      "Conversion-focused page structure",
      "Mobile optimization",
    ],
    businessBenefits: [
      "Better user experience",
      "Higher conversion potential",
      "Stronger brand credibility",
      "Improved lead generation",
      "Modern digital presence",
    ],
  },
  {
    title: "SEO & Digital Visibility",
    shortTitle: "SEO",
    visualType: "seo",
    tags: ["Technical SEO", "Keywords", "Content", "Reporting"],
    overview:
      "We help your brand become more discoverable through search-focused strategy, technical optimization, and content built for authority.",
    keyServices: [
      "SEO audit",
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Local SEO",
      "Content clusters",
      "SEO reporting",
    ],
    businessBenefits: [
      "Higher organic visibility",
      "More qualified website traffic",
      "Stronger online authority",
      "Long-term lead generation",
      "Better search performance",
    ],
  },
  {
    title: "Social Media & Content Marketing",
    shortTitle: "Content",
    visualType: "social",
    tags: ["Calendars", "LinkedIn", "Instagram", "Reels"],
    overview:
      "Consistency builds trust. We create content systems that help your brand stay active, relevant, and engaging across digital platforms.",
    keyServices: [
      "Social media strategy",
      "Content calendars",
      "Creative direction",
      "Post copywriting",
      "LinkedIn content",
      "Instagram content",
      "Reels and short videos",
      "Community engagement support",
    ],
    businessBenefits: [
      "Stronger brand presence",
      "Higher engagement",
      "Consistent communication",
      "Better audience trust",
      "Improved thought leadership",
    ],
  },
  {
    title: "AI-Powered Content & Video",
    shortTitle: "AI & Video",
    visualType: "ai-video",
    tags: ["AI Avatars", "Voiceovers", "Short-form", "Scripts"],
    overview:
      "We use AI tools and creative production workflows to create modern, scalable content for brands, leaders, and campaigns.",
    keyServices: [
      "AI avatar videos",
      "AI voiceovers",
      "Short-form videos",
      "Explainer videos",
      "Corporate videos",
      "Event recap videos",
      "Video scripts",
      "Automated content workflows",
    ],
    businessBenefits: [
      "Faster content production",
      "More scalable video output",
      "Modern brand presentation",
      "Cost-effective creative production",
      "Higher content consistency",
    ],
  },
  {
    title: "CRM & Funnel Automation",
    shortTitle: "Automation",
    visualType: "crm",
    tags: ["CRM Setup", "Email", "WhatsApp", "Pipelines"],
    overview:
      "We help businesses organize, automate, and improve how they manage leads and customer communication.",
    keyServices: [
      "CRM setup",
      "Lead tagging",
      "Pipeline creation",
      "Email automation",
      "SMS automation",
      "WhatsApp workflows",
      "Follow-up systems",
      "Event and webinar funnels",
    ],
    businessBenefits: [
      "Better lead management",
      "Faster follow-ups",
      "Improved sales visibility",
      "Reduced manual work",
      "Stronger customer journeys",
    ],
  },
  {
    title: "Lead Generation & Outreach",
    shortTitle: "Lead Gen",
    visualType: "lead-gen",
    tags: ["LinkedIn", "Email", "ICP", "Sequences"],
    overview:
      "We build outreach systems that help your business identify, connect with, and nurture the right prospects.",
    keyServices: [
      "ICP mapping",
      "LinkedIn outreach",
      "Email outreach",
      "Lead enrichment",
      "Lead scoring",
      "Sales messaging",
      "Outreach sequences",
    ],
    businessBenefits: [
      "More qualified leads",
      "Better prospect targeting",
      "Improved sales conversations",
      "Consistent pipeline growth",
      "Stronger conversion opportunities",
    ],
  },
  {
    title: "GTM, Events & Paid Growth",
    shortTitle: "Growth",
    visualType: "gtm",
    tags: ["GTM", "Events", "Paid Media", "Campaigns"],
    overview:
      "We help brands launch campaigns, promote events, support sales teams, and reach the right audience through strategic execution.",
    keyServices: [
      "Go-to-market strategy",
      "Offer structuring",
      "Sales decks",
      "Campaign planning",
      "Event branding",
      "Expo designs",
      "Paid media strategy",
      "Performance optimization",
    ],
    businessBenefits: [
      "Stronger campaign launches",
      "Better event visibility",
      "Improved sales enablement",
      "Higher audience reach",
      "Clearer market positioning",
    ],
  },
];
