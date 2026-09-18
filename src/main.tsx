import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { CaseStudyTemplate } from "./components/CaseStudyTemplate";
import { MasterclassApplication } from "./components/MasterclassApplication";
import { caseStudiesByPath } from "./data/caseStudies";
import "./styles/global.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const caseStudy = caseStudiesByPath[path];

if (path === "/ai-course") {
  document.title = "AI Masterclass | VDB";
} else if (caseStudy) {
  document.title = caseStudy.documentTitle;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {path === "/ai-course" ? (
      <MasterclassApplication
        open
        onClose={() => window.location.assign("/")}
        sessionTitle="AI Masterclass"
        homeHref="/"
      />
    ) : caseStudy ? (
      <CaseStudyTemplate study={caseStudy} />
    ) : (
      <App />
    )}
  </StrictMode>,
);
