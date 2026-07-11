export type ProjectApproachStep = {
  title: string;
  description: string;
};

export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectShot = {
  src: string;
  alt: string;
  /** Lead shots run the full width of the gallery. */
  wide?: boolean;
  caption?: string;
};

export type ProjectCaseStudy = {
  id: string;
  name: string;
  /** One-liner under the project name in the hero. */
  tagline: string;
  headline: string;
  highlight: string;
  description: string;
  services: string[];
  image: string;
  /** Short phrase in the hero spotlight ring. */
  spotlight: string;
  /** Outcome numbers shown beside the hero mockup. */
  stats: ProjectStat[];
  /** Additional screens of the work. */
  gallery: ProjectShot[];
  /** Short paragraph introducing how we helped the brand. */
  contributionIntro: string;
  /** The concrete work we delivered, broken into steps. */
  approach: ProjectApproachStep[];
};

export const projectsHero = {
  title: "Projects",
  subheadline:
    "Explore how we help brands show up stronger through strategy, design, content, websites, campaigns, and digital systems.",
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "smoteo",
    name: "Smoteo",
    tagline: "Fitness workout app",
    headline: "Our design helped Smoteo's user base",
    highlight: "soared 150%",
    description:
      "Smoteo is a fitness app that offers personalized workout programs, an extensive exercise library, and individual approach to training.",
    services: [
      "Brand & Product Design",
      "UX/UI Design",
      "Animations",
      "No-Code Development",
      "Marketing Assets",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    spotlight: "Track how you progress",
    stats: [
      { value: "4 months", label: "Average app usage lifecycle" },
      { value: "24 minutes", label: "Average daily session length" },
      { value: "31%", label: "Average trial-to-paid transition" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
        alt: "Smoteo workout dashboard on desktop",
        wide: true,
        caption: "The workout dashboard — programs, streaks and progress in one view.",
      },
      {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
        alt: "Smoteo exercise library",
        caption: "Exercise library with filters by muscle group.",
      },
      {
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        alt: "Smoteo marketing site",
        caption: "Campaign landing page built for acquisition.",
      },
    ],
    contributionIntro:
      "Smoteo came to us with a strong training methodology but a product that struggled to convert first-time users into committed members. We rebuilt the brand and the experience around one goal: make progress feel effortless and rewarding from the very first session.",
    approach: [
      {
        title: "Brand & product identity",
        description:
          "We defined a bold, energetic visual language and a clear brand voice so Smoteo felt motivating and premium across every touchpoint.",
      },
      {
        title: "Reimagined onboarding & UX",
        description:
          "We redesigned the onboarding flow and workout journey to reduce friction, personalize programs faster, and keep users coming back day after day.",
      },
      {
        title: "Motion & no-code build",
        description:
          "We brought the interface to life with purposeful animations and shipped a fast, maintainable no-code build so the team could iterate without engineering bottlenecks.",
      },
      {
        title: "Growth-ready marketing assets",
        description:
          "We produced a library of on-brand marketing assets that fueled acquisition campaigns and helped the user base soar 150%.",
      },
    ],
  },
  {
    id: "niir",
    name: "Niir",
    tagline: "Energy communications hub",
    headline: "Our design accelerated Niir's",
    highlight: "time-to-market by 40%",
    description:
      "Niir is a strategic communications and digital content hub for an innovative energy brand, built to scale across global markets.",
    services: [
      "Branding",
      "UX/UI Design",
      "Marketing Assets",
      "Art direction",
    ],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    spotlight: "Built to scale globally",
    stats: [
      { value: "40%", label: "Faster time-to-market" },
      { value: "6 markets", label: "Launched in the first year" },
      { value: "3x", label: "Faster content production" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80",
        alt: "Niir content hub on desktop",
        wide: true,
        caption: "The content hub — modular templates any market can publish to.",
      },
      {
        src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
        alt: "Niir brand system",
        caption: "Brand guidelines built for regional teams.",
      },
      {
        src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
        alt: "Niir campaign assets",
        caption: "Art-directed campaign asset kit.",
      },
    ],
    contributionIntro:
      "Niir needed to launch across global markets quickly without sacrificing the polish expected of a forward-thinking energy brand. We built a flexible brand system and content hub that let their team move at speed.",
    approach: [
      {
        title: "Scalable brand foundation",
        description:
          "We created a modular branding system with clear guidelines so Niir could stay consistent as it expanded into new regions and channels.",
      },
      {
        title: "Content hub architecture",
        description:
          "We designed an intuitive UX for their communications hub, making it easy for stakeholders to publish and discover strategic content.",
      },
      {
        title: "Art direction & assets",
        description:
          "We set the art direction and delivered a ready-to-use marketing asset kit, cutting production time and accelerating time-to-market by 40%.",
      },
    ],
  },
  {
    id: "sacre-armand",
    name: "Sacré Armand",
    tagline: "Premium gourmet dining",
    headline: "Our design boosted Sacré Armand's",
    highlight: "user engagement by 50%",
    description:
      "Sacré Armand is a premium gourmet dining brand. We crafted a refined brand story, copywriting pipeline, and digital experience for high-end clientele.",
    services: [
      "UX/UI Design",
      "Web Development",
      "Design system",
      "Art Direction",
    ],
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    spotlight: "An experience worth the table",
    stats: [
      { value: "50%", label: "Lift in user engagement" },
      { value: "2.4x", label: "More reservation requests" },
      { value: "68%", label: "Returning visitors" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        alt: "Sacré Armand website on desktop",
        wide: true,
        caption: "The homepage — art direction that sets the table before you arrive.",
      },
      {
        src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        alt: "Sacré Armand menu experience",
        caption: "Seasonal menu, told as a story.",
      },
      {
        src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80",
        alt: "Sacré Armand reservation flow",
        caption: "Reservation flow reduced to three steps.",
      },
    ],
    contributionIntro:
      "Sacré Armand wanted a digital experience worthy of its high-end clientele. We shaped a refined brand story and an elegant online presence that turned casual visitors into loyal guests.",
    approach: [
      {
        title: "Brand story & copywriting",
        description:
          "We crafted a distinctive brand narrative and a repeatable copywriting pipeline so every word reflected the brand's premium positioning.",
      },
      {
        title: "Design system",
        description:
          "We built a cohesive design system that kept the experience luxurious and consistent across pages and future campaigns.",
      },
      {
        title: "Web experience & art direction",
        description:
          "We designed and developed an immersive, art-directed website that elevated the dining experience and lifted user engagement by 50%.",
      },
    ],
  },
  {
    id: "houston-exponential",
    name: "Houston Exponential",
    tagline: "Startup ecosystem hub",
    headline: "Our design decreased Houston Exponential's",
    highlight: "registration friction by 70%",
    description:
      "A comprehensive digital hub and resource ecosystem built to accelerate Houston's primary technology and startup landscape.",
    services: [
      "Brand Strategy",
      "UX/UI Design",
      "Web Development",
      "Content Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    spotlight: "Joining takes one minute",
    stats: [
      { value: "70%", label: "Less registration friction" },
      { value: "1 minute", label: "Average time to sign up" },
      { value: "5,000+", label: "Founders onboarded" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        alt: "Houston Exponential hub on desktop",
        wide: true,
        caption: "The ecosystem hub — resources, events and members in one place.",
      },
      {
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
        alt: "Houston Exponential registration flow",
        caption: "The rebuilt registration flow.",
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        alt: "Houston Exponential resource library",
        caption: "Resource library organised by startup stage.",
      },
    ],
    contributionIntro:
      "Houston Exponential set out to become the central hub for the city's tech and startup ecosystem, but a clunky sign-up process was holding growth back. We reworked the experience to make joining effortless.",
    approach: [
      {
        title: "Brand strategy",
        description:
          "We clarified the brand's positioning as the connective tissue of Houston's tech scene, giving every page a clear purpose.",
      },
      {
        title: "Streamlined UX",
        description:
          "We redesigned the registration flow end-to-end, removing steps and confusion to decrease registration friction by 70%.",
      },
      {
        title: "Content & development",
        description:
          "We structured the content strategy and developed a fast, resource-rich hub that scales with the community it serves.",
      },
    ],
  },
  {
    id: "nami-ml",
    name: "Nami ML",
    tagline: "Subscription intelligence suite",
    headline: "Our design boosted Nami ML's",
    highlight: "onboarding rates by 24%",
    description:
      "A premium visual identity refresh and frontend design integration for the leading subscription app intelligence suite.",
    services: [
      "Visual Identity",
      "UX/UI Design",
      "Frontend Integration",
      "Design System",
    ],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    spotlight: "First win in under 5 minutes",
    stats: [
      { value: "24%", label: "Higher onboarding completion" },
      { value: "5 minutes", label: "Time to first insight" },
      { value: "120+", label: "Components in the design system" },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        alt: "Nami ML analytics dashboard on desktop",
        wide: true,
        caption: "The analytics dashboard — subscription health at a glance.",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        alt: "Nami ML paywall builder",
        caption: "Paywall builder with live preview.",
      },
      {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        alt: "Nami ML design system",
        caption: "The design system handed to their frontend team.",
      },
    ],
    contributionIntro:
      "Nami ML had a powerful product but a visual identity that no longer matched its market-leading ambitions. We refreshed the brand and integrated a polished frontend that made the product feel as intelligent as it is.",
    approach: [
      {
        title: "Visual identity refresh",
        description:
          "We modernized the visual identity to signal authority and trust in the subscription-intelligence space.",
      },
      {
        title: "Product UX/UI",
        description:
          "We redesigned key product surfaces with a focus on clarity, guiding new users toward their first win faster.",
      },
      {
        title: "Design system & frontend",
        description:
          "We delivered a reusable design system and integrated it into the frontend, improving onboarding rates by 24%.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((project) => project.id === slug);
}
