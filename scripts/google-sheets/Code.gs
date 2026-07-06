/**
 * Google Apps Script — paste into your spreadsheet:
 * Extensions → Apps Script → replace Code.gs → Deploy → New deployment → Web app
 *   Execute as: Me | Who has access: Anyone
 * Copy the Web app URL into .env.local as VITE_GOOGLE_SHEETS_WEBHOOK_URL
 *
 * Spreadsheet: https://docs.google.com/spreadsheets/d/1L9IkHRjuereozAs9uhKR3bcMImoHZ1AHPblAbZLE5jQ
 */

const SPREADSHEET_ID = "1L9IkHRjuereozAs9uhKR3bcMImoHZ1AHPblAbZLE5jQ";

const HEADERS = [
  "Timestamp",
  "Session",
  "Name",
  "Role",
  "Organization",
  "Email",
  "Location",
  "Experience Level",
  "Chat Tools Usage",
  "Automation Experience",
  "Coding Experience",
  "Prompt Engineering",
  "API Experience",
  "Current Tools",
  "Previous Training",
  "Industry",
  "Team Size",
  "Participant Count",
  "Learning Topic",
  "Biggest Challenge",
  "Success Outcome",
  "Session Format",
  "Timeline",
  "Additional Goals",
];

function doPost(e) {
  try {
    const sheet = getSheet_();
    ensureHeaders_(sheet);
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.session || "",
      data.name || "",
      data.role || "",
      data.organization || "",
      data.email || "",
      data.location || "",
      data.experienceLevel || "",
      data.usesChatTools || "",
      data.automationExperience || "",
      data.codingExperience || "",
      data.promptEngineering || "",
      data.apiExperience || "",
      data.current_tools || "",
      data.previousTraining || "",
      data.industry || "",
      data.teamSize || "",
      data.participantCount || "",
      data.learning_topic || "",
      data.biggestChallenge || "",
      data.successOutcome || "",
      data.sessionFormat || "",
      data.timeline || "",
      data.additionalGoals || "",
    ]);

    return jsonResponse_({ success: true });
  } catch (err) {
    return jsonResponse_({ success: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse_({ status: "ok", sheet: SPREADSHEET_ID });
}

function getSheet_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
