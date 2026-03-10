import type { Metadata } from "next";
import Image from "next/image";
import { NextEventCountdown } from "@/components/NextEventCountdown";
import { TopNav } from "@/components/TopNav";
import { getScheduleEvents } from "@/lib/schedule";
import { formatDateParts } from "@/utils/dateFormatting";

const getEventDateParts = (
  dateString: string,
  dateOptions?: Intl.DateTimeFormatOptions,
  timeOptions?: Intl.DateTimeFormatOptions,
) =>
  formatDateParts(
    dateString,
    "en-US",
    dateOptions,
    timeOptions ?? { hour: "numeric", minute: "2-digit", timeZoneName: "short" },
  );

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Schedule | Vengeful Esports",
  description: "Upcoming matches and countdown to our next event.",
};

export default async function SchedulePage() {
  const sortedEvents = await getScheduleEvents();
  const nextEvent = sortedEvents[0];
  const nextEventFormatted = nextEvent
    ? getEventDateParts(
        nextEvent.date,
        { month: "long", day: "numeric", year: "numeric" },
        { hour: "numeric", minute: "2-digit", timeZoneName: "short" },
      )
    : null;
  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12 pt-0 sm:gap-8 sm:px-6 sm:pt-0 lg:gap-10 lg:px-8">
        <TopNav className="-mt-4 sm:-mt-2 lg:-mt-24" />

        <section className="glass-panel space-y-6 p-10 text-center">
          <h1 className="text-4xl font-semibold">Upcoming Matches</h1>
          {nextEvent && (
            <div className="flex flex-col gap-4 text-sm text-gray-300 md:items-center md:justify-center">
              <div className="space-y-3 text-left">
                {nextEventFormatted ? (
                  <div>
                    Next up: <span className="text-white">{nextEvent.title}</span> on {nextEventFormatted.dateLabel}
                    {nextEventFormatted.timeLabel ? (
                      <>
                        {" "}at {nextEventFormatted.timeLabel}
                      </>
                    ) : null}
                    {" "}({nextEvent.location})
                  </div>
                ) : null}
                <div className="flex flex-wrap items-center gap-4 text-lg font-semibold text-white">
                  <Image
                    src="/VNGFLogo_1.png"
                    alt="Vengeful Esports logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                  <span>VNGFL</span>
                  <span className="text-xs uppercase tracking-[0.4em] text-gray-500">vs</span>
                  <span className="text-vengefulLight">{nextEvent.opponent}</span>
                  <div className="ml-auto flex flex-wrap items-center gap-3 text-vengefulLight">
                    <NextEventCountdown
                      targetDate={nextEvent.date}
                      className="text-lg font-semibold text-white leading-none whitespace-nowrap"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="space-y-6">
          <p className="section-heading">Event List</p>
          <div className="space-y-4">
            {sortedEvents.map((event) => {
              const dateParts = getEventDateParts(
                event.date,
                { weekday: "short", month: "short", day: "numeric" },
                { hour: "numeric", minute: "2-digit", timeZoneName: "short" },
              );
              return (
                <article
                  key={`${event.date}-${event.opponent}-${event.stage}`}
                  className="glass-card p-6"
                >
                  <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className="space-y-3">
                      <p className="section-heading text-gray-400">{event.stage}</p>
                      <h3 className="text-2xl font-semibold">{event.title}</h3>
                      <p className="text-gray-300">{event.location}</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-base font-semibold text-white text-center">
                      <Image
                        src="/VNGFLogo_1.png"
                        alt="Vengeful Esports logo"
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain"
                      />
                      <span>VNGFL</span>
                      <span className="text-xs uppercase tracking-[0.4em] text-gray-500">vs</span>
                      <span className="text-vengefulLight">{event.opponent}</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center md:justify-self-end">
                      <p className="text-lg font-semibold">{dateParts.dateLabel}</p>
                      <p className="text-sm text-gray-300">{dateParts.timeLabel}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}


