import { useEffect, useId, useState, type FormEvent } from "react";
import { contact, masterclassInquiry } from "../data/content";
import styles from "./MasterclassInquiryModal.module.css";

export interface MasterclassFormData {
  name: string;
  email: string;
  location: string;
  need: string;
  topic: string;
  challenges: string;
}

interface MasterclassInquiryModalProps {
  open: boolean;
  onClose: () => void;
  sessionTitle: string;
}

const initialForm: MasterclassFormData = {
  name: "",
  email: "",
  location: "",
  need: "",
  topic: "",
  challenges: "",
};

export function MasterclassInquiryModal({
  open,
  onClose,
  sessionTitle,
}: MasterclassInquiryModalProps) {
  const titleId = useId();
  const [form, setForm] = useState<MasterclassFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
      setStatus("idle");
      setForm(initialForm);
    }
  }, [open]);

  if (!open) return null;

  const update = (field: keyof MasterclassFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("submitting");

    const payload = {
      _subject: `AI Masterclass inquiry — ${form.name}`,
      _replyto: form.email,
      session: sessionTitle,
      name: form.name,
      email: form.email,
      location: form.location,
      need: form.need,
      topic: form.topic,
      challenges: form.challenges,
    };

    try {
      const formAction = import.meta.env.VITE_MASTERCLASS_FORM_ACTION;

      if (formAction) {
        const response = await fetch(formAction, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Form submission failed");
      } else {
        const body = [
          `Session: ${sessionTitle}`,
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Location: ${form.location}`,
          `What they need: ${form.need}`,
          `Topic to deep dive: ${form.topic}`,
          `Main AI challenges: ${form.challenges}`,
        ].join("\n\n");

        const mailto = `mailto:${masterclassInquiry.recipientEmail}?subject=${encodeURIComponent(
          `AI Masterclass inquiry — ${form.name}`,
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>

        <p className={styles.eyebrow}>AI Masterclass inquiry</p>
        <h2 id={titleId} className={styles.title}>
          Request a session
        </h2>
        <p className={styles.intro}>
          Share a few details so the team can tailor the masterclass to your group.
        </p>

        {status === "success" ? (
          <div className={styles.success}>
            <p className={styles.successTitle}>Inquiry sent</p>
            <p className={styles.successText}>
              Thanks — we&apos;ll review your details and follow up at {form.email}.
            </p>
            <button type="button" className={styles.submit} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Your name</span>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Email</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Where are you based?</span>
              <input
                type="text"
                required
                placeholder="City, country, or time zone"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>What do you need?</span>
              <textarea
                required
                rows={3}
                placeholder="Team workshop, executive briefing, full-day training…"
                value={form.need}
                onChange={(e) => update("need", e.target.value)}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Which topic do you want to deep dive?</span>
              <input
                type="text"
                required
                placeholder="Prompt systems, automation stacks, shipping without a dev team…"
                value={form.topic}
                onChange={(e) => update("topic", e.target.value)}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Main challenges using AI</span>
              <textarea
                required
                rows={4}
                placeholder="What's blocking adoption, quality, or speed today?"
                value={form.challenges}
                onChange={(e) => update("challenges", e.target.value)}
              />
            </label>

            {status === "error" && (
              <p className={styles.error} role="alert">
                Something went wrong. Email us directly at{" "}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>.
              </p>
            )}

            <button type="submit" className={styles.submit} disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
