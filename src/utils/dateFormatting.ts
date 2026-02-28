export type DateLabels = {
  dateLabel: string;
  timeLabel: string;
};

export const DEFAULT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
};

export const DEFAULT_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "2-digit",
};

const DEFAULT_EVENT_TIME_ZONE = process.env.NEXT_PUBLIC_EVENT_TIMEZONE ?? "America/New_York";

const invalidLabels: DateLabels = { dateLabel: "TBD", timeLabel: "" };

const withEventTimeZone = (options?: Intl.DateTimeFormatOptions) => ({
  ...(options ?? {}),
  timeZone: options?.timeZone ?? DEFAULT_EVENT_TIME_ZONE,
});

export const formatDateParts = (
  dateString: string,
  locale = "en-US",
  dateOptions: Intl.DateTimeFormatOptions = DEFAULT_DATE_OPTIONS,
  timeOptions: Intl.DateTimeFormatOptions = DEFAULT_TIME_OPTIONS,
): DateLabels => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return invalidLabels;
  }

  try {
    const dateFormatter = new Intl.DateTimeFormat(locale, withEventTimeZone(dateOptions));
    const timeFormatter = new Intl.DateTimeFormat(locale, withEventTimeZone(timeOptions));
    return {
      dateLabel: dateFormatter.format(date),
      timeLabel: timeFormatter.format(date),
    };
  } catch (error) {
    console.error("Failed to format date", error);
    return invalidLabels;
  }
};
