export type BlogPost = {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  featured?: boolean;
};

export const blogHero = {
  badge: "Insights",
  headline: "InvisiEdge Blog",
  subheadline:
    "Explore expert perspectives on branding, SEO, AI, social media, websites, automation, and digital growth.",
};

export const blogCategories = [
  "Brand Strategy",
  "Website Growth",
  "SEO",
  "AI Marketing",
  "Social Media",
  "Lead Generation",
  "Marketing Automation",
  "Founder Branding",
  "Event Marketing",
];

export const blogCTA = {
  headline: "Want insights tailored to your business?",
  buttonLabel: "Request a Free Growth Audit",
  href: "/contact-us",
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Brand Acceleration in SaaS",
    description:
      "Discover the critical strategies that modern SaaS startups are using to build unique identities and acquire users faster.",
    category: "Brand Strategy",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    date: "Jun 24, 2026",
  },
  {
    id: 2,
    title: "Why We Choose Next.js and Motion for Immersive Webs",
    description:
      "An in-depth look at how scroll-linked animations and modern layout systems create memorable, engaging web experiences.",
    category: "Website Growth",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    date: "Jun 18, 2026",
  },
  {
    id: 3,
    title: "Integrating AI Transformations in Creative Agencies",
    description:
      "How AI is changing the landscape of marketing orchestration, from strategy research to asset scaling and execution.",
    category: "AI Marketing",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    date: "Jun 12, 2026",
    featured: true,
  },
  {
    id: 4,
    title: "Collapsing Your Content Supply Chain into One System",
    description:
      "Learn how to optimize your production workflow and speed up asset releases using modern automation pipelines.",
    category: "Marketing Automation",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    date: "Jun 05, 2026",
  },
  {
    id: 5,
    title: "2026 SEO Playbook for High-Growth Startups",
    description:
      "A practical guide to technical SEO, content clusters, and AI-assisted optimization for scaling brands.",
    category: "SEO",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    date: "May 22, 2026",
  },
  {
    id: 6,
    title: "Social Media Systems That Actually Drive Pipeline",
    description:
      "How to turn social content into a repeatable lead engine with clear messaging and conversion paths.",
    category: "Social Media",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e939e113?auto=format&fit=crop&w=800&q=80",
    date: "May 10, 2026",
  },
  {
    id: 7,
    title: "Founder Branding: Building Trust Before the Pitch",
    description:
      "Why personal brand clarity accelerates fundraising, partnerships, and early customer acquisition.",
    category: "Founder Branding",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    date: "Apr 28, 2026",
  },
  {
    id: 8,
    title: "Lead Generation Funnels That Scale Without Burnout",
    description:
      "Frameworks for building outbound and inbound systems that compound over time.",
    category: "Lead Generation",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    date: "Apr 14, 2026",
  },
  {
    id: 9,
    title: "Event Marketing That Extends Beyond the Booth",
    description:
      "Turn conferences and launches into long-term brand assets with pre, during, and post-event playbooks.",
    category: "Event Marketing",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    date: "Mar 30, 2026",
  },
];
