import { google, sheets_v4 } from "googleapis";

const sheetsScope = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const excelEpochOffset = 25569; // Excel serial date offset (days from 1899-12-30)
const msPerDay = 24 * 60 * 60 * 1000;

const normalizePrivateKey = (key?: string) => key?.replace(/\\n/g, "\n");
const excelSerialToDate = (serial: number) => {
  const msSinceUnixEpoch = Math.round((serial - excelEpochOffset) * msPerDay);
  return new Date(msSinceUnixEpoch);
};
const hasTimezone = (value: string) => /(?:Z|[+-]\d{2}:?\d{2})$/i.test(value);
const buildDateCandidates = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) {
    return [] as string[];
  }
  const normalized = trimmed.replace(/\s+/g, " ");
  const candidates = [normalized];
  if (/^\d{4}-\d{2}-\d{2}T\d{2}$/.test(normalized)) {
    candidates.push(`${normalized}:00:00`);
  } else if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(normalized)) {
    candidates.push(`${normalized}:00`);
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    candidates.push(`${normalized}T00:00:00`);
  }
  return candidates;
};

let missingCredentialWarned = false;

export type SheetsClient = {
  sheets: sheets_v4.Sheets;
  spreadsheetId: string;
};

export async function getSheetsClient(): Promise<SheetsClient | null> {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = normalizePrivateKey(process.env.GOOGLE_SHEETS_PRIVATE_KEY);
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    if (!missingCredentialWarned) {
      console.warn("Missing Google Sheets credentials; falling back to static data.");
      missingCredentialWarned = true;
    }
    return null;
  }

  const auth = new google.auth.JWT({ email: clientEmail, key: privateKey, scopes: sheetsScope });
  const sheets = google.sheets({ version: "v4", auth });
  return { sheets, spreadsheetId };
}

export const parseDateValue = (value: string | number | undefined): Date | null => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return excelSerialToDate(value);
  }
  if (typeof value === "string") {
    const numeric = Number(value);
    if (!Number.isNaN(numeric)) {
      return excelSerialToDate(numeric);
    }
    const candidates = buildDateCandidates(value);
    for (const candidate of candidates) {
      const parsed = new Date(candidate);
      if (!Number.isNaN(parsed.getTime())) {
        return parsed;
      }
      if (!hasTimezone(candidate)) {
        const parsedUtc = new Date(`${candidate}Z`);
        if (!Number.isNaN(parsedUtc.getTime())) {
          return parsedUtc;
        }
      }
    }
  }
  return null;
};
