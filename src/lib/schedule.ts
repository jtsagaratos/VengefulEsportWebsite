import { cache } from "react";
import { scheduleEvents as fallbackSchedule } from "@/data/siteContent";
import { getSheetsClient, parseDateValue } from "@/lib/googleSheets";

export type ScheduleEvent = {
  title: string;
  opponent: string;
  date: string;
  location: string;
  stage: string;
};

const defaultRange = "Schedule!A2:E";

async function fetchScheduleFromGoogle(): Promise<ScheduleEvent[]> {
  const range = process.env.GOOGLE_SHEETS_RANGE ?? defaultRange;
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
        const [title, opponent, dateValue, location, stage] = row;
        const parsedDate = parseDateValue(dateValue);
        if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
          return null;
        }
        return {
          title: title?.trim() || "TBD",
          opponent: opponent?.trim() || "TBD",
          date: parsedDate.toISOString(),
          location: location?.trim() || "TBD",
          stage: stage?.trim() || "TBD",
        } satisfies ScheduleEvent;
      })
      .filter((event): event is ScheduleEvent => Boolean(event));
  } catch (error) {
    console.error("Failed to fetch schedule from Google Sheets", error);
    return [];
  }
}

const sortEvents = (events: ScheduleEvent[]) =>
  [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

export const getScheduleEvents = cache(async () => {
  const sheetEvents = await fetchScheduleFromGoogle();
  if (sheetEvents.length) {
    return sortEvents(sheetEvents);
  }
  return sortEvents(
    fallbackSchedule.map((event) => ({
      ...event,
      date: new Date(event.date).toISOString(),
    })),
  );
});