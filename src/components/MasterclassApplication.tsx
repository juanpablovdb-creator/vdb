import { useEffect, useId, useRef, useState } from "react";
import { contact } from "../data/content";
import {
  buildMasterclassPayload,
  submitMasterclassApplication,
} from "../lib/submitMasterclassApplication";
import {
  initialMasterclassApplication,
  masterclassIndustries,
  masterclassLearningTopics,
  masterclassSessionFormats,
  masterclassTeamSizes,
  masterclassTimelines,
  masterclassTools,
  type LearningTopicId,
  type MasterclassApplicationData,
} from "../data/masterclassForm";
import styles from "./MasterclassApplication.module.css";

interface MasterclassApplicationProps {
  open: boolean;
  onClose: () => void;
  sessionTitle: string;
  homeHref?: string;
}

const TOTAL_STEPS = 22;

export function MasterclassApplication({
  open,
  onClose,
  sessionTitle,
  homeHref,
}: MasterclassApplicationProps) {
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<MasterclassApplicationData>(initialMasterclassApplication);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStep(0);
      setStatus("idle");
      setForm(initialMasterclassApplication);
      setDirection("forward");
    }
  }, [open]);

  useEffect(() => {
    if (open && status === "idle") {
      inputRef.current?.focus();
    }
  }, [open, step, status]);

  if (!open) return null;

  const update = <K extends keyof MasterclassApplicationData>(
    field: K,
    value: MasterclassApplicationData[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTool = (tool: string) => {
    setForm((prev) => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter((t) => t !== tool)
        : [...prev.currentTools, tool],
    }));
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  const goNext = () => {
    if (!canProceed()) return;
    setDirection("forward");
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  };

  const goBack = () => {
    setDirection("back");
    setStep((s) => Math.max(s - 1, 0));
  };

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return true;
      case 1:
        return form.name.trim().length > 1;
      case 2:
        return form.role.trim().length > 1;
      case 3:
        return true;
      case 4:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
      case 5:
        return form.location.trim().length > 1;
      case 6:
        return !!form.experienceLevel;
      case 7:
        return !!form.usesChatTools;
      case 8:
        return !!form.automationExperience;
      case 9:
        return !!form.codingExperience;
      case 10:
        return !!form.promptEngineering;
      case 11:
        return !!form.apiExperience;
      case 12:
        return form.currentTools.length > 0;
      case 13:
        return !!form.previousTraining;
      case 14:
        return !!form.industry && (form.industry !== "Other" || form.industryOther.trim().length > 1);
      case 15:
        return !!form.teamSize;
      case 16:
        return !!form.participantCount;
      case 17:
        return !!form.learningTopic;
      case 18:
        return form.biggestChallenge.trim().length > 10;
      case 19:
        return form.successOutcome.trim().length > 10;
      case 20:
        return !!form.sessionFormat;
      case 21:
        return !!form.timeline;
      default:
        return true;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey && step > 0 && step < TOTAL_STEPS - 1) {
      event.preventDefault();
      goNext();
    }
  };

  const submit = async () => {
    setStatus("submitting");

    try {
      const payload = buildMasterclassPayload(form, sessionTitle);
      await submitMasterclassApplication(payload);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const renderStep = () => {
    if (status === "success") {
      return (
        <div className={styles.stepContent}>
          <p className={styles.stepNumber}>Done</p>
          <h2 className={styles.question}>Application received</h2>
          <p className={styles.hint}>
            Thanks, {form.name}. We&apos;ll review your answers and follow up at {form.email}.
          </p>
          <button type="button" className={styles.primaryBtn} onClick={onClose}>
            Back to site
          </button>
        </div>
      );
    }

    if (status === "error") {
      return (
        <div className={styles.stepContent}>
          <h2 className={styles.question}>Something went wrong</h2>
          <p className={styles.hint}>
            Please try again or email us at{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
          <button type="button" className={styles.primaryBtn} onClick={() => setStatus("idle")}>
            Try again
          </button>
        </div>
      );
    }

    const stepClass = direction === "forward" ? styles.stepEnterForward : styles.stepEnterBack;

    switch (step) {
      case 0:
        return (
          <div className={`${styles.stepContent} ${stepClass}`} key={step}>
            <p className={styles.stepNumber}>AI Masterclass</p>
            <h2 id={titleId} className={styles.question}>
              Let&apos;s tailor your session
            </h2>
            <p className={styles.hint}>
              22 quick questions — about 4 minutes. Your answers help us design the right
              masterclass for you or your team.
            </p>
            <button type="button" className={styles.primaryBtn} onClick={goNext}>
              Start →
            </button>
          </div>
        );

      case 1:
        return (
          <StepShell step={step} question="First, what's your name?" hint="Who will be taking the course?" className={stepClass}>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              className={styles.textInput}
              type="text"
              autoComplete="name"
              placeholder="Type your answer here…"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </StepShell>
        );

      case 2:
        return (
          <StepShell step={step} question="What's your role?" hint="Job title or what you do day-to-day." className={stepClass}>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              className={styles.textInput}
              type="text"
              placeholder="Marketing lead, founder, ops manager…"
              value={form.role}
              onChange={(e) => update("role", e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </StepShell>
        );

      case 3:
        return (
          <StepShell
            step={step}
            question="Where do you work?"
            hint="Company or team name — skip if freelance or solo."
            className={stepClass}
            optional
          >
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              className={styles.textInput}
              type="text"
              placeholder="Organization name"
              value={form.organization}
              onChange={(e) => update("organization", e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </StepShell>
        );

      case 4:
        return (
          <StepShell step={step} question="What's your email?" hint="We'll send session details here." className={stepClass}>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              className={styles.textInput}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </StepShell>
        );

      case 5:
        return (
          <StepShell step={step} question="Where are you based?" hint="City, country, or time zone." className={stepClass}>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              className={styles.textInput}
              type="text"
              placeholder="Sydney, Australia · AEST"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </StepShell>
        );

      case 6:
        return (
          <ChoiceStep
            step={step}
            question="How would you rate your overall AI experience?"
            choices={["Beginner", "Intermediate", "Advanced", "Technical / builder"]}
            value={form.experienceLevel}
            onChange={(v) => update("experienceLevel", v)}
            className={stepClass}
          />
        );

      case 7:
        return (
          <ChoiceStep
            step={step}
            question="How often do you use AI chat tools?"
            hint="ChatGPT, Claude, Gemini, Copilot…"
            choices={["Never used", "Tried a few times", "Use weekly", "Use daily"]}
            value={form.usesChatTools}
            onChange={(v) => update("usesChatTools", v)}
            className={stepClass}
          />
        );

      case 8:
        return (
          <ChoiceStep
            step={step}
            question="What's your automation experience?"
            hint="Zapier, Make, n8n, or custom workflows."
            choices={[
              "No experience",
              "Basic automations",
              "Multi-step workflows",
              "Built production automations",
            ]}
            value={form.automationExperience}
            onChange={(v) => update("automationExperience", v)}
            className={stepClass}
          />
        );

      case 9:
        return (
          <ChoiceStep
            step={step}
            question="How comfortable are you with code?"
            choices={[
              "Non-technical",
              "Basic scripts or formulas",
              "Comfortable with code",
              "Software engineer",
            ]}
            value={form.codingExperience}
            onChange={(v) => update("codingExperience", v)}
            className={stepClass}
          />
        );

      case 10:
        return (
          <ChoiceStep
            step={step}
            question="How familiar are you with prompt engineering?"
            choices={[
              "Not familiar",
              "Basic prompts",
              "Structured prompt systems",
              "Advanced / production prompts",
            ]}
            value={form.promptEngineering}
            onChange={(v) => update("promptEngineering", v)}
            className={stepClass}
          />
        );

      case 11:
        return (
          <ChoiceStep
            step={step}
            question="Have you worked with AI APIs or integrations?"
            choices={[
              "Never",
              "Explored / experimented",
              "Used in side projects",
              "Used in production",
            ]}
            value={form.apiExperience}
            onChange={(v) => update("apiExperience", v)}
            className={stepClass}
          />
        );

      case 12:
        return (
          <div className={`${styles.stepContent} ${stepClass}`} key={step}>
            <p className={styles.stepNumber}>{step} →</p>
            <h2 className={styles.question}>Which AI tools do you currently use?</h2>
            <p className={styles.hint}>Select all that apply.</p>
            <div className={styles.choiceList}>
              {masterclassTools.map((tool) => (
                <button
                  key={tool}
                  type="button"
                  className={`${styles.choiceBtn} ${form.currentTools.includes(tool) ? styles.choiceBtnActive : ""}`}
                  onClick={() => toggleTool(tool)}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        );

      case 13:
        return (
          <ChoiceStep
            step={step}
            question="Have you had formal AI training before?"
            choices={[
              "No — this would be my first",
              "A workshop or webinar",
              "Online course",
              "Multiple trainings",
            ]}
            value={form.previousTraining}
            onChange={(v) => update("previousTraining", v)}
            className={stepClass}
          />
        );

      case 14:
        return (
          <div className={`${styles.stepContent} ${stepClass}`} key={step}>
            <p className={styles.stepNumber}>{step} →</p>
            <h2 className={styles.question}>What industry are you in?</h2>
            <div className={styles.choiceList}>
              {masterclassIndustries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  className={`${styles.choiceBtn} ${form.industry === industry ? styles.choiceBtnActive : ""}`}
                  onClick={() => update("industry", industry)}
                >
                  {industry}
                </button>
              ))}
            </div>
            {form.industry === "Other" && (
              <input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                className={styles.textInput}
                type="text"
                placeholder="Your industry…"
                value={form.industryOther}
                onChange={(e) => update("industryOther", e.target.value)}
                onKeyDown={handleKeyDown}
              />
            )}
          </div>
        );

      case 15:
        return (
          <ChoiceStep
            step={step}
            question="How big is your team or company?"
            choices={[...masterclassTeamSizes]}
            value={form.teamSize}
            onChange={(v) => update("teamSize", v)}
            className={stepClass}
          />
        );

      case 16:
        return (
          <ChoiceStep
            step={step}
            question="How many people will take the course?"
            choices={["Just me", "2–5", "6–15", "16–30", "30+"]}
            value={form.participantCount}
            onChange={(v) => update("participantCount", v)}
            className={stepClass}
          />
        );

      case 17:
        return (
          <div className={`${styles.stepContent} ${stepClass}`} key={step}>
            <p className={styles.stepNumber}>{step} →</p>
            <h2 className={styles.question}>What do you want to learn most?</h2>
            <p className={styles.hint}>Pick your primary focus.</p>
            <div className={styles.topicGrid}>
              {masterclassLearningTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  className={`${styles.topicBtn} ${form.learningTopic === topic.id ? styles.topicBtnActive : ""}`}
                  onClick={() => update("learningTopic", topic.id as LearningTopicId)}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 18:
        return (
          <StepShell
            step={step}
            question="What's your biggest challenge with AI right now?"
            hint="Be specific — adoption, quality, speed, team buy-in, tooling…"
            className={stepClass}
          >
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              className={styles.textArea}
              rows={4}
              placeholder="Type your answer here…"
              value={form.biggestChallenge}
              onChange={(e) => update("biggestChallenge", e.target.value)}
            />
          </StepShell>
        );

      case 19:
        return (
          <StepShell
            step={step}
            question="What would success look like after the course?"
            hint="What should you or your team be able to do?"
            className={stepClass}
          >
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              className={styles.textArea}
              rows={4}
              placeholder="Type your answer here…"
              value={form.successOutcome}
              onChange={(e) => update("successOutcome", e.target.value)}
            />
          </StepShell>
        );

      case 20:
        return (
          <ChoiceStep
            step={step}
            question="What session format works best?"
            choices={[...masterclassSessionFormats]}
            value={form.sessionFormat}
            onChange={(v) => update("sessionFormat", v)}
            className={stepClass}
          />
        );

      case 21:
        return (
          <div className={`${styles.stepContent} ${stepClass}`} key={step}>
            <p className={styles.stepNumber}>{step} →</p>
            <h2 className={styles.question}>When are you looking to run this?</h2>
            <div className={styles.choiceList}>
              {masterclassTimelines.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`${styles.choiceBtn} ${form.timeline === option ? styles.choiceBtnActive : ""}`}
                  onClick={() => update("timeline", option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <label className={styles.optionalField}>
              <span className={styles.optionalLabel}>Anything else? (optional)</span>
              <textarea
                className={styles.textArea}
                rows={3}
                placeholder="Specific tools, constraints, or context…"
                value={form.additionalGoals}
                onChange={(e) => update("additionalGoals", e.target.value)}
              />
            </label>
            <button
              type="button"
              className={styles.primaryBtn}
              disabled={!canProceed() || status === "submitting"}
              onClick={submit}
            >
              {status === "submitting" ? "Sending…" : "Submit application"}
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const showNav = status === "idle" && step > 0 && step < TOTAL_STEPS - 1;

  return (
    <div className={styles.window}>
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      <header className={styles.header}>
        {homeHref && (
          <a href={homeHref} className={styles.homeLink}>
            VDB
          </a>
        )}
        <button type="button" className={styles.close} onClick={onClose}>
          ✕
        </button>
      </header>

      <div className={styles.body}>{renderStep()}</div>

      {showNav && (
        <footer className={styles.footer}>
          <button type="button" className={styles.backBtn} onClick={goBack}>
            ← Back
          </button>
          <button
            type="button"
            className={styles.nextBtn}
            disabled={!canProceed()}
            onClick={goNext}
          >
            Next →
          </button>
        </footer>
      )}
    </div>
  );
}

function StepShell({
  step,
  question,
  hint,
  optional,
  className,
  children,
}: {
  step: number;
  question: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.stepContent} ${className ?? ""}`} key={step}>
      <p className={styles.stepNumber}>
        {step} → {optional && <span className={styles.optionalTag}>optional</span>}
      </p>
      <h2 className={styles.question}>{question}</h2>
      {hint && <p className={styles.hint}>{hint}</p>}
      {children}
    </div>
  );
}

function ChoiceStep({
  step,
  question,
  hint,
  choices,
  value,
  onChange,
  className,
}: {
  step: number;
  question: string;
  hint?: string;
  choices: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={`${styles.stepContent} ${className ?? ""}`} key={step}>
      <p className={styles.stepNumber}>{step} →</p>
      <h2 className={styles.question}>{question}</h2>
      {hint && <p className={styles.hint}>{hint}</p>}
      <div className={styles.choiceList}>
        {choices.map((choice) => (
          <button
            key={choice}
            type="button"
            className={`${styles.choiceBtn} ${value === choice ? styles.choiceBtnActive : ""}`}
            onClick={() => onChange(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
