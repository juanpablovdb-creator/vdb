export const masterclassLearningTopics = [
  { id: "automation", label: "Automation with AI" },
  { id: "how-to-use", label: "How to use AI" },
  { id: "skills", label: "Skills" },
  { id: "content", label: "Content creation with AI" },
  { id: "coding", label: "Coding with AI" },
] as const;

export const masterclassIndustries = [
  "Marketing & Advertising",
  "SaaS / Technology",
  "Finance & Fintech",
  "Healthcare",
  "Education",
  "Creative / Agency",
  "E-commerce / Retail",
  "Consulting",
  "Media & Entertainment",
  "Other",
] as const;

export const masterclassTools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Microsoft Copilot",
  "Midjourney / image AI",
  "Runway / video AI",
  "Zapier or Make",
  "Notion AI",
  "GitHub Copilot",
  "None yet",
] as const;

export const masterclassTeamSizes = [
  "Just me",
  "2–10 people",
  "11–50 people",
  "51–200 people",
  "200+ people",
] as const;

export const masterclassSessionFormats = [
  "Half-day workshop",
  "Full-day hands-on lab",
  "Keynote + Q&A",
  "Multi-week program",
  "1:1 coaching",
] as const;

export const masterclassTimelines = [
  "ASAP — within 4 weeks",
  "1–3 months",
  "3–6 months",
  "Just exploring options",
] as const;

export type LearningTopicId = (typeof masterclassLearningTopics)[number]["id"];

export interface MasterclassApplicationData {
  name: string;
  role: string;
  organization: string;
  email: string;
  location: string;
  experienceLevel: string;
  usesChatTools: string;
  automationExperience: string;
  codingExperience: string;
  promptEngineering: string;
  apiExperience: string;
  currentTools: string[];
  previousTraining: string;
  industry: string;
  industryOther: string;
  teamSize: string;
  participantCount: string;
  learningTopic: LearningTopicId | "";
  biggestChallenge: string;
  successOutcome: string;
  sessionFormat: string;
  timeline: string;
  additionalGoals: string;
}

export const initialMasterclassApplication: MasterclassApplicationData = {
  name: "",
  role: "",
  organization: "",
  email: "",
  location: "",
  experienceLevel: "",
  usesChatTools: "",
  automationExperience: "",
  codingExperience: "",
  promptEngineering: "",
  apiExperience: "",
  currentTools: [],
  previousTraining: "",
  industry: "",
  industryOther: "",
  teamSize: "",
  participantCount: "",
  learningTopic: "",
  biggestChallenge: "",
  successOutcome: "",
  sessionFormat: "",
  timeline: "",
  additionalGoals: "",
};
