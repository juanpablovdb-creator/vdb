export type CardSize = "default" | "large" | "compact" | "work";

export type ArtType =
  | "stripboard"
  | "funnel"
  | "chart"
  | "timeline"
  | "calendar"
  | "vault"
  | "arrow"
  | "bars"
  | "play"
  | "coins"
  | "wave"
  | "hex"
  | "aperture"
  | "mic"
  | "light"
  | "people"
  | "mountain"
  | "cut"
  | "frames"
  | "reel";

export interface BrandColors {
  bg: string;
  bgSecondary: string;
  text: string;
  accent: string;
}

export interface CardItem {
  id: string;
  title: string;
  tag?: string;
  description: string;
  role?: string;
  link?: string;
  brand: BrandColors;
  art: ArtType;
  /** Full-page screenshot shown inside a browser mockup; falls back to brand art. */
  screenshot?: string;
  domain?: string;
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
  label: string;
  alt: string;
  brand: BrandColors;
  art: ArtType;
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
    id: "shoot",
    title: "Shoot",
    tag: "React · TypeScript · Film Tech",
    description:
      "Production scheduling tool for film crews — stripboards, call sheets, and day-out-of-days in one workflow.",
    link: "https://shoot-gray.vercel.app/",
    brand: {
      bg: "#1a1a1c",
      bgSecondary: "#2a2a2e",
      text: "#f0f0f2",
      accent: "#e8b64c",
    },
    art: "stripboard",
    screenshot: "/images/projects/shoot.webp",
    domain: "shoot-gray.vercel.app",
  },
  {
    id: "leadflow",
    title: "Leadflow",
    tag: "AI Creative · Next.js",
    description:
      "AI-powered creative pipeline for lead gen — generates ad variants, copy, and landing pages from a single brief.",
    link: "https://vloom-lead-generator.vercel.app/",
    brand: {
      bg: "#0a0a12",
      bgSecondary: "#14142a",
      text: "#f4f4ff",
      accent: "#7c6cf0",
    },
    art: "funnel",
    screenshot: "/images/projects/leadflow.webp",
    domain: "vloom-lead-generator.vercel.app",
  },
  {
    id: "nauta-engineering",
    title: "Nauta",
    tag: "Python · Data · Airbnb Analytics",
    description:
      "Built the analytics backbone: listing data ingestion, revenue dashboards, and occupancy forecasting for property managers.",
    link: "#",
    brand: {
      bg: "#0c2430",
      bgSecondary: "#164a5e",
      text: "#e4f4f8",
      accent: "#3db8d4",
    },
    art: "chart",
  },
];

export const companies: CardItem[] = [
  {
    id: "vloom",
    title: "Vloom",
    tag: "Video Production · Content",
    description:
      "Video editing & content production agency. 50+ client projects across SaaS, fintech, and creator brands.",
    role: "Founder & Creative Director",
    link: "https://wearevloom.com/",
    brand: {
      bg: "#06060e",
      bgSecondary: "#10101f",
      text: "#ffffff",
      accent: "#4f8cff",
    },
    art: "timeline",
    screenshot: "/images/companies/vloom.webp",
    domain: "wearevloom.com",
  },
  {
    id: "nauta-company",
    title: "Nauta",
    tag: "Airbnb Operations",
    description:
      "Tech operations for Airbnb hosts — portfolio management, pricing strategy, and guest experience at scale.",
    role: "Co-founder & Head of Operations",
    link: "#",
    brand: {
      bg: "#1a1610",
      bgSecondary: "#2e2618",
      text: "#f5efe6",
      accent: "#c9a96e",
    },
    art: "calendar",
  },
  {
    id: "legacy-ledger",
    title: "Legacy Ledger",
    tag: "Web3 · Digital Legacy",
    description:
      "Crypto inheritance and digital legacy platform — secure vaults, beneficiary workflows, and on-chain asset transfer.",
    role: "Co-founder & Product",
    link: "https://mylegacyledger.com/",
    brand: {
      bg: "#0e0818",
      bgSecondary: "#1a1030",
      text: "#ede8f5",
      accent: "#9d7bea",
    },
    art: "vault",
    screenshot: "/images/companies/legacy-ledger.webp",
    domain: "mylegacyledger.com",
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

export interface GigItem {
  id: string;
  title: string;
  link?: string;
  logo: string;
}

export const consultancy: GigItem[] = [
  {
    id: "travel-diaries",
    title: "Travel Diaries",
    link: "https://traveldiariesapp.com",
    logo: "/images/logos/travel-diaries.png",
  },
  {
    id: "datumcon",
    title: "Datumcon",
    link: "https://datumcon.com",
    logo: "/images/logos/datumcon.png",
  },
  {
    id: "original-productions",
    title: "Original Productions",
    logo: "/images/logos/original-productions.png",
  },
  {
    id: "koinly",
    title: "Koinly",
    link: "https://koinly.io",
    logo: "/images/logos/koinly.png",
  },
  {
    id: "voice123",
    title: "Voice123",
    link: "https://voice123.com",
    logo: "/images/logos/voice123.png",
  },
  {
    id: "ethglobal",
    title: "ETHGlobal NY 2026",
    link: "https://ethglobal.com",
    logo: "/images/logos/ethglobal.png",
  },
];

export const photos: AudiovisualItem[] = [
  { id: "p1", label: "On Set", alt: "On set directing", brand: { bg: "#221610", bgSecondary: "#4a3020", text: "#faf0e8", accent: "#c4784a" }, art: "aperture" },
  { id: "p2", label: "Speaking", alt: "Conference speaking", brand: { bg: "#141a22", bgSecondary: "#283848", text: "#e8f0f8", accent: "#6a90b8" }, art: "mic" },
  { id: "p3", label: "Studio", alt: "Studio production", brand: { bg: "#181614", bgSecondary: "#302820", text: "#f0ebe4", accent: "#8a7868" }, art: "light" },
  { id: "p4", label: "Workshop", alt: "Team workshop", brand: { bg: "#141a14", bgSecondary: "#283828", text: "#e8f0e8", accent: "#6a9850" }, art: "people" },
  { id: "p5", label: "Location", alt: "Location shoot", brand: { bg: "#201610", bgSecondary: "#403020", text: "#f8f0e8", accent: "#a07858" }, art: "mountain" },
  { id: "p6", label: "Editing", alt: "Editing suite", brand: { bg: "#0e1420", bgSecondary: "#1c2840", text: "#e8eef8", accent: "#406898" }, art: "cut" },
];

export const videos: AudiovisualItem[] = [
  { id: "v1", label: "Brand Reel", alt: "Brand reel still", brand: { bg: "#1e1018", bgSecondary: "#3a2030", text: "#f8eef2", accent: "#a04868" }, art: "reel" },
  { id: "v2", label: "Campaign", alt: "Campaign spot still", brand: { bg: "#14141e", bgSecondary: "#282840", text: "#eeeef8", accent: "#6868a8" }, art: "play" },
  { id: "v3", label: "Documentary", alt: "Documentary frame", brand: { bg: "#141814", bgSecondary: "#283028", text: "#eef4ee", accent: "#688868" }, art: "frames" },
  { id: "v4", label: "Social", alt: "Social content still", brand: { bg: "#1e1814", bgSecondary: "#383028", text: "#f4f0ec", accent: "#a08878" }, art: "wave" },
];

export const contact = {
  availability: ["Speaking", "Consulting", "Hiring"],
  email: "juanpablo.vdb@gmail.com",
  calendar: "https://calendar.app.google/Kt5bXaz3eRbXCac49",
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/juan-pablo-val-de-blanquez-romero-14a47914b/" },
    { label: "GitHub", url: "https://github.com/juanpablovdb-creator" },
    { label: "Vloom", url: "https://wearevloom.com/" },
  ],
};

export const masterclassInquiry = {
  spreadsheetId: "1L9IkHRjuereozAs9uhKR3bcMImoHZ1AHPblAbZLE5jQ",
  spreadsheetUrl:
    "https://docs.google.com/spreadsheets/d/1L9IkHRjuereozAs9uhKR3bcMImoHZ1AHPblAbZLE5jQ",
};
