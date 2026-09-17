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
  /** Multiple product screenshots; the mockup crossfades between them. */
  screenshots?: string[];
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
    "Growth & AI automation builder. I ship with data, sell with storytelling, and build in code.",
  stats: [
    { value: "$1M+", label: "revenue generated" },
    { value: "3", label: "companies built" },
    { value: "8+", label: "years building" },
  ] satisfies StatItem[],
};

export const navLinks = [
  { id: "companies", label: "Companies" },
  { id: "projects", label: "Projects" },
  { id: "previous-work", label: "Previous Work" },
  { id: "education", label: "Education" },
  { id: "consultancy", label: "Consultancy" },
  { id: "contact", label: "Contact" },
];

export const projects: CardItem[] = [
  {
    id: "leadflow",
    title: "Leadflow",
    tag: "Lead Gen · CRM · Next.js",
    description:
      "Lead generation platform built to run Vloom's outbound. Company discovery, persona enrichment, CRM kanban, and KPI tracking in one tool.",
    link: "https://vloom-lead-generator.vercel.app/",
    brand: {
      bg: "#0a0a12",
      bgSecondary: "#14142a",
      text: "#f4f4ff",
      accent: "#7c6cf0",
    },
    art: "funnel",
    screenshot: "/images/projects/leadflow-1.webp",
    screenshots: [
      "/images/projects/leadflow-1.webp",
      "/images/projects/leadflow-2.webp",
      "/images/projects/leadflow-3.webp",
      "/images/projects/leadflow-4.webp",
      "/images/projects/leadflow-5.webp",
    ],
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
    screenshot: "/images/projects/nauta-1.webp",
    screenshots: [
      "/images/projects/nauta-logo.webp",
      "/images/projects/nauta-1.webp",
      "/images/projects/nauta-2.webp",
      "/images/projects/nauta-3.webp",
      "/images/projects/nauta-4.webp",
    ],
  },
  {
    id: "austral-quoter",
    title: "Quote Builder",
    tag: "Cursor · Pricing",
    description:
      "Quoting tool built for Austral Consultants. Replaced manual pricing lookups across the entire advisor team.",
    link: "#",
    brand: {
      bg: "#101c14",
      bgSecondary: "#1c3424",
      text: "#e8f4ec",
      accent: "#4caf6e",
    },
    art: "coins",
  },
  {
    id: "austral-automations",
    title: "WhatsApp Sales Bot",
    tag: "Automation · Kommo · Composio",
    description:
      "WhatsApp sales bot and CRM automation stack for Austral. Lead routing and client nurturing end to end, saving the sales team 35+ hours.",
    link: "#",
    brand: {
      bg: "#0c1a20",
      bgSecondary: "#183440",
      text: "#e6f2f6",
      accent: "#38b6c9",
    },
    art: "arrow",
  },
  {
    id: "shoot",
    title: "Shoot",
    tag: "React · TypeScript · Film Tech",
    description:
      "Production scheduling tool for film crews. Stripboards, call sheets, and day-out-of-days in one workflow.",
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
];

export const companies: CardItem[] = [
  {
    id: "vloom",
    title: "Vloom",
    tag: "Video Production · Content Strategy",
    description:
      "B2B video production and content strategy company. 20-person team, 64 clients served, 48% retention, $387K revenue in two years.",
    role: "Co-founder & CEO",
    link: "https://wearevloom.com/",
    brand: {
      bg: "#06060e",
      bgSecondary: "#10101f",
      text: "#ffffff",
      accent: "#4f8cff",
    },
    art: "timeline",
    screenshot: "/images/companies/vloom.webp",
    screenshots: [
      "/images/companies/vloom-1.webp",
      "/images/companies/vloom-2.webp",
      "/images/companies/vloom-3.webp",
      "/images/companies/vloom-4.webp",
    ],
    domain: "wearevloom.com",
  },
  {
    id: "nauta-company",
    title: "Nauta",
    tag: "Airbnb Operations",
    description:
      "Tech operations for Airbnb hosts. Portfolio management, pricing strategy, and guest experience at scale.",
    role: "Co-founder & Head of Operations",
    link: "#",
    brand: {
      bg: "#1a1610",
      bgSecondary: "#2e2618",
      text: "#f5efe6",
      accent: "#c9a96e",
    },
    art: "calendar",
    screenshot: "/images/projects/nauta-1.webp",
    screenshots: [
      "/images/projects/nauta-logo.webp",
      "/images/projects/nauta-1.webp",
      "/images/projects/nauta-2.webp",
      "/images/projects/nauta-3.webp",
      "/images/projects/nauta-4.webp",
    ],
  },
  {
    id: "legacy-ledger",
    title: "Legacy Ledger",
    tag: "Web3 · Digital Legacy",
    description:
      "Blockchain digital-inheritance platform MVP. Secure vaults, beneficiary workflows, and Pulse, an onchain liveness oracle deployed at ETHGlobal.",
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
    screenshots: [
      "/images/companies/legacy-ledger-1.webp",
      "/images/companies/legacy-ledger-2.webp",
      "/images/companies/legacy-ledger-3.webp",
      "/images/companies/legacy-ledger-4.webp",
    ],
    domain: "mylegacyledger.com",
  },
];

export const previousWorkFullTime: WorkItem[] = [
  {
    id: "vloom",
    title: "Co-Founder & CEO",
    company: "Vloom",
    period: "Jan 2024 – Present",
    description:
      "Run all business operations for a 20-person B2B video production and content strategy company, spanning P&L, enterprise sales, and production oversight. Grew revenue to $387K over two years, serving 64 clients with 48% retention. Built internal AI and automation tooling, including a quoting system and a WhatsApp and CRM stack for lead routing and client nurturing.",
  },
  {
    id: "bunny-growth",
    title: "Growth Lead",
    company: "Bunny Studio",
    period: "Apr 2022 – Nov 2023",
    description:
      "Pioneered Bunny Studio ONE, a video and content production subscription, growing it from $0 to $600K ARR across 25 institutional clients with a team of 8. Owned the full sales cycle and the ops process that scaled the model, which later grew into Bunny Creative.",
  },
  {
    id: "bunny-pm",
    title: "Video Content Project Manager",
    company: "Bunny Studio",
    period: "Jun 2020 – May 2022",
    description:
      "Managed end-to-end video and creative content projects for a global marketplace connecting brands with top-tier video, audio, and written content producers, overseeing production timelines and creative quality.",
  },
  {
    id: "film",
    title: "Producer",
    company: "Día Fragma Fábrica de Películas",
    period: "Jan 2019 – Dec 2020",
    description:
      "Produced independent film releases and coordinated regional promotional campaigns across three features: La Bronca, Los Silencios, and Niña Errante.",
  },
  {
    id: "operation-smile",
    title: "Video Content Strategist",
    company: "Operation Smile Colombia",
    period: "Jun 2017 – Dec 2022",
    description:
      "Developed brand and video content strategy for the organization, including campaign recap videos and storytelling assets used to communicate program impact.",
  },
];

export const previousWorkConsulting: WorkItem[] = [
  {
    id: "austral",
    title: "Growth & AI Automation Systems Consultant",
    company: "Austral Consultants",
    period: "Jun 2026 – Aug 2026",
    description:
      "Built a WhatsApp sales bot automating lead routing and client nurturing for the advisor team, saving 35+ hours. Built a quote builder that replaced manual pricing lookups, and delivered a 5-hour AI training session to 20 professionals in Australia.",
  },
  {
    id: "travel-diaries",
    title: "Growth Consultant, Americas Expansion",
    company: "Travel Diaries",
    period: "Sep 2025 – Nov 2025",
    description:
      "Built a US market expansion system for a Rotterdam-based travel-journaling platform: prospecting, lead scoring, CRM, and automated outreach. Opened a $15,000+ pipeline in three months, closed 1 deal, and left 5 more in negotiation for the team to run independently.",
  },
];

export const speaking: SpeakingItem[] = [
  {
    id: "ai-masterclass",
    title: "AI Masterclass",
    venue: "Professional Development, Australia",
    audience: "Marketing & ops professionals",
    topic:
      "Practical AI workflows for non-engineers. Prompt systems, automation stacks, and shipping without a dev team.",
    inquiryForm: true,
  },
  {
    id: "uniandes",
    title: "Entrepreneur for Engineers",
    venue: "University of the Andes, Bogotá",
    audience: "Engineering students & faculty",
    topic:
      "Panelist on building startups from technical foundations. When to code, when to sell, and how to do both.",
  },
  {
    id: "biz-beer",
    title: "The Power of Video Marketing for Your Personal Brand",
    venue: "Biz and Beer",
    audience: "Founders & freelancers",
    topic:
      "How short-form video builds trust faster than any pitch deck. Frameworks, gear, and a 30-day content sprint.",
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
