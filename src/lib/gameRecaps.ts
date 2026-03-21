import { cache } from "react";
import { getSheetsClient, parseDateValue } from "@/lib/googleSheets";

export type GameRecap = {
  opponent: string;
  event: string;
  date: string;
  result: string;
  description?: string;
};

const fallbackRecaps: GameRecap[] = [
  {
    opponent: "ZAYINHELLO",
    event: "MRC S6 Open Qualifiers",
    date: "February 14, 2026",
    result: "Win 3-0",
    description: "",
  },
  {
    opponent: "Purge Umbra",
    event: "MRC S6 Open Qualifiers",
    date: "February 14, 2026",
    result: "Win 1-0",
    description: "",
  },
  {
    opponent: "ScarletValor",
    event: "MRC S6 Open Qualifiers",
    date: "February 14, 2026",
    result: "Win 1-0",
    description: "",
  },
];

const defaultRecapRange = "Recaps!A2:E";

async function fetchRecapsFromGoogle(): Promise<GameRecap[]> {
  const range = process.env.GOOGLE_SHEETS_RECAP_RANGE ?? defaultRecapRange;
  const sheetsClient = await getSheetsClient();
  if (!sheetsClient) {
    return [];
  }

  try {
    const response = await sheetsClient.sheets.spreadsheets.values.get({
      spreadsheetId: sheetsClient.spreadsheetId,
      range,
      valueRenderOption: "UNFORMATTED_VALUE",
      dateTimeRenderOption: "SERIAL_NUMBER",
    });

    const rows = (response.data.values ?? []) as Array<Array<string | number | undefined>>;

    return rows
      .map((row) => {
        const [event, opponent, dateValue, result, description] = row;
        const parsedDate = parseDateValue(dateValue);
        if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
          return null;
        }
        const safeString = (value: string | number | undefined) =>
          typeof value === "number" ? String(value) : value ?? "";
        const opponentLabel = safeString(opponent).trim();
        const eventLabel = safeString(event).trim();
        const resultLabel = safeString(result).trim();
        const descriptionLabel = safeString(description).trim();
        return {
          opponent: opponentLabel || "TBD",
          event: eventLabel || "TBD",
          date: parsedDate.toISOString(),
          result: resultLabel || "TBD",
          description: descriptionLabel,
        } satisfies GameRecap;
      })
      .filter((recap): recap is GameRecap => Boolean(recap));
  } catch (error) {
    console.error("Failed to fetch game recaps from Google Sheets", error);
    return [];
  }
}

const sortRecaps = (recaps: GameRecap[]) => [...recaps].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getAllGameRecaps = cache(async () => {
  const recaps = await fetchRecapsFromGoogle();
  if (recaps.length) {
    return sortRecaps(recaps);
  }
  return sortRecaps(fallbackRecaps);
});

export const getGameRecaps = cache(async () => {
  const recaps = await getAllGameRecaps();
  return recaps.slice(0, 3);
});
