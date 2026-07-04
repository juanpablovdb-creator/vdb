export type CardSize = "default" | "large" | "compact" | "work";

export interface CardItem {
  id: string;
  title: string;
  tag?: string;
  description: string;
  role?: string;
  link?: string;
  image?: string;
  imageAlt?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  company: string;
  period?: string;
  description: string;
}

export interface SpeakingItem {
  id: string;
  title: string;
  venue: string;
  audience: string;
  topic: string;
  inquiryForm?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AudiovisualItem {
  id: string;
  src: string;
  alt: string;
  hoverSrc?: string;
}

export const hero = {
  name: "Juan Pablo",
  tagline:
    "Technical creative builder. I ship with data, sell with story, and code by vibe.",
  stats: [
    { value: "3", label: "companies built" },
    { value: "8+", label: "years building" },
    { value: "4", label: "countries" },
  ] satisfies StatItem[],
};

export const navLinks = [
  { id: "projects", label: "Projects" },
  { id: "companies", label: "Companies" },
  { id: "previous-work", label: "Previous Work" },
  { id: "education", label: "Education" },
  { id: "consultancy", label: "Consultancy" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" },
];

export const projects: CardItem[] = [
  {
    id: "stripboarder",
    title: "Stripboarder",
    tag: "React · TypeScript · Film Tech",
    description:
      "Production scheduling tool for film crews — stripboards, call sheets, and day-out-of-days in one workflow.",
    link: "#",
    image: "/images/projects/stripboarder.webp",
    imageAlt: "Stripboarder interface preview",
  },
  {
    id: "leadflow",
    title: "Leadflow",
    tag: "AI Creative · Next.js",
    description:
      "AI-powered creative pipeline for lead gen — generates ad variants, copy, and landing pages from a single brief.",
    link: "#",
    image: "/images/projects/leadflow.webp",
    imageAlt: "Leadflow creative dashboard",
  },
  {
    id: "nauta-engineering",
    title: "Nauta — Analytics for Airbnb",
    tag: "Python · Data Pipeline · Dashboards",
    description:
      "Built the analytics backbone: listing data ingestion, revenue dashboards, and occupancy forecasting for property managers.",
    link: "#",
    image: "/images/projects/nauta.webp",
    imageAlt: "Nauta analytics dashboard",
  },
];

export const companies: CardItem[] = [
  {
    id: "vloom",
    title: "Vloom",
    tag: "Founder · Video Production",
    description:
      "Video editing & content production agency. 50+ client projects across SaaS, fintech, and creator brands.",
    role: "Founder & Creative Director",
    link: "https://vloom.co",
    image: "/images/companies/vloom.webp",
    imageAlt: "Vloom brand",
  },
  {
    id: "nauta-company",
    title: "Nauta",
    tag: "Co-founder · Airbnb Ops",
    description:
      "Tech operations for Airbnb hosts — portfolio management, pricing strategy, and guest experience at scale.",
    role: "Co-founder & Head of Operations",
    link: "#",
    image: "/images/companies/nauta.webp",
    imageAlt: "Nauta operations platform",
  },
  {
    id: "legacy-ledger",
    title: "Legacy Ledger",
    tag: "Co-founder · Web3",
    description:
      "Crypto inheritance and digital legacy platform — secure vaults, beneficiary workflows, and on-chain asset transfer.",
    role: "Co-founder & Product",
    link: "#",
    image: "/images/companies/legacy-ledger.webp",
    imageAlt: "Legacy Ledger platform",
  },
];

export const previousWork: WorkItem[] = [
  {
    id: "bunny",
    title: "Growth Manager",
    company: "Bunny Studio",
    period: "2019 – 2022",
    description:
      "Built Bunny Studio One from zero — the all-in-one creative subscription that later spun off as Bunny Creative. Owned acquisition, retention, and the product-market fit loop across 20+ countries.",
  },
  {
    id: "film",
    title: "Production Coordinator",
    company: "Independent Film",
    period: "2016 – 2019",
    description:
      "Coordinated logistics for feature films and commercial shoots across Colombia — crews of 40+, multi-location schedules, and tight delivery windows.",
  },
];

export const speaking: SpeakingItem[] = [
  {
    id: "ai-masterclass",
    title: "AI Masterclass",
    venue: "Professional Development, Australia",
    audience: "Marketing & ops professionals",
    topic:
      "Practical AI workflows for non-engineers — prompt systems, automation stacks, and shipping without a dev team.",
    inquiryForm: true,
  },
  {
    id: "uniandes",
    title: "Entrepreneur for Engineers",
    venue: "University of the Andes, Bogotá",
    audience: "Engineering students & faculty",
    topic:
      "Panelist on building startups from technical foundations — when to code, when to sell, and how to do both.",
  },
  {
    id: "biz-beer",
    title: "The Power of Video Marketing for Your Personal Brand",
    venue: "Biz and Beer",
    audience: "Founders & freelancers",
    topic:
      "How short-form video builds trust faster than any pitch deck — frameworks, gear, and a 30-day content sprint.",
  },
];

export const consultancy: CardItem[] = [
  {
    id: "travel-diaries",
    title: "Travel Diaries",
    description: "Sales & growth expansion into the US market.",
    image: "/images/consultancy/travel-diaries.webp",
  },
  {
    id: "datumcon",
    title: "Datumcon",
    description: "Growth & sales consultancy for data-driven B2B.",
    image: "/images/consultancy/datumcon.webp",
  },
  {
    id: "original-productions",
    title: "Original Productions",
    description: "Video content strategy and production consulting.",
    image: "/images/consultancy/original-productions.webp",
  },
  {
    id: "koinly",
    title: "Koinly",
    description: "Video producer for crypto tax platform campaigns.",
    image: "/images/consultancy/koinly.webp",
  },
  {
    id: "voice123",
    title: "Voice123",
    description: "Sales consultancy — pipeline optimization & outbound.",
    image: "/images/consultancy/voice123.webp",
  },
  {
    id: "ethglobal",
    title: "ETHGlobal NY 2026",
    description: "Hacker — built on-chain tooling in 36 hours.",
    tag: "Hackathon",
    image: "/images/consultancy/ethglobal.webp",
  },
];

export const photos: AudiovisualItem[] = [
  { id: "p1", src: "/images/audiovisual/photo-1.webp", alt: "On set directing", hoverSrc: "/images/audiovisual/photo-1-hover.webp" },
  { id: "p2", src: "/images/audiovisual/photo-2.webp", alt: "Conference speaking", hoverSrc: "/images/audiovisual/photo-2-hover.webp" },
  { id: "p3", src: "/images/audiovisual/photo-3.webp", alt: "Studio production", hoverSrc: "/images/audiovisual/photo-3-hover.webp" },
  { id: "p4", src: "/images/audiovisual/photo-4.webp", alt: "Team workshop", hoverSrc: "/images/audiovisual/photo-4-hover.webp" },
  { id: "p5", src: "/images/audiovisual/photo-5.webp", alt: "Location shoot", hoverSrc: "/images/audiovisual/photo-5-hover.webp" },
  { id: "p6", src: "/images/audiovisual/photo-6.webp", alt: "Editing suite", hoverSrc: "/images/audiovisual/photo-6-hover.webp" },
];

export const videos: AudiovisualItem[] = [
  { id: "v1", src: "/images/audiovisual/video-1.webp", alt: "Brand reel still", hoverSrc: "/images/audiovisual/video-1-hover.webp" },
  { id: "v2", src: "/images/audiovisual/video-2.webp", alt: "Campaign spot still", hoverSrc: "/images/audiovisual/video-2-hover.webp" },
  { id: "v3", src: "/images/audiovisual/video-3.webp", alt: "Documentary frame", hoverSrc: "/images/audiovisual/video-3-hover.webp" },
  { id: "v4", src: "/images/audiovisual/video-4.webp", alt: "Social content still", hoverSrc: "/images/audiovisual/video-4-hover.webp" },
];

export const contact = {
  availability: ["Speaking", "Consulting", "Hiring"],
  email: "hello@juanpablo.dev",
  calendar: "https://cal.com/juanpablo",
  social: [
    { label: "LinkedIn", url: "https://linkedin.com/in/juanpablo" },
    { label: "GitHub", url: "https://github.com/juanpablo" },
    { label: "Vloom", url: "https://vloom.co" },
  ],
};

export const masterclassInquiry = {
  recipientEmail: contact.email,
};
