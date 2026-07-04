export type ProjectCaseStudy = {
  id: string;
  name: string;
  headline: string;
  highlight: string;
  description: string;
  services: string[];
  image: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "smoteo",
    name: "Smoteo",
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
  },
  {
    id: "niir",
    name: "Niir",
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
  },
  {
    id: "sacre-armand",
    name: "Sacré Armand",
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
  },
  {
    id: "houston-exponential",
    name: "Houston Exponential",
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
  },
  {
    id: "nami-ml",
    name: "Nami ML",
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
  },
];
