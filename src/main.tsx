import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { MasterclassApplication } from "./components/MasterclassApplication";
import "./styles/global.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const isAICourse = path === "/ai-course";

if (isAICourse) {
  document.title = "AI Masterclass — VDB";
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isAICourse ? (
      <MasterclassApplication
        open
        onClose={() => window.location.assign("/")}
        sessionTitle="AI Masterclass"
        homeHref="/"
      />
    ) : (
      <App />
    )}
  </StrictMode>,
);
