import type { MasterclassApplicationData } from "../data/masterclassForm";
import { masterclassLearningTopics } from "../data/masterclassForm";

export interface MasterclassSubmission extends MasterclassApplicationData {
  session: string;
  industry: string;
  learning_topic: string;
  current_tools: string;
}

export function buildMasterclassPayload(
  form: MasterclassApplicationData,
  sessionTitle: string,
): MasterclassSubmission {
  const industry =
    form.industry === "Other" ? form.industryOther.trim() || "Other" : form.industry;
  const topicLabels = masterclassLearningTopics
    .filter((t) => form.learningTopics.includes(t.id))
    .map((t) => t.label);

  return {
    ...form,
    session: sessionTitle,
    industry,
    learning_topic: topicLabels.join(", "),
    current_tools: form.currentTools.join(", "),
  };
}

export async function submitMasterclassApplication(
  payload: MasterclassSubmission,
): Promise<void> {
  const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error(
      "Google Sheets webhook is not configured. Set VITE_GOOGLE_SHEETS_WEBHOOK_URL in .env.local",
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const text = await response.text();

  try {
    const result = JSON.parse(text) as { success?: boolean; error?: string };
    if (!result.success) {
      throw new Error(result.error || "Submission failed");
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      if (!response.ok) throw new Error("Submission failed");
      return;
    }
    throw error;
  }
}
