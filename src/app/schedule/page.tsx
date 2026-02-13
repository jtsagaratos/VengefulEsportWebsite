import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { NextEventCountdown } from "@/components/NextEventCountdown";
import { scheduleEvents } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Schedule | Vengeful Esports",
  description: "Upcoming matches and countdown to our next event.",
};

const sortedEvents = [...scheduleEvents].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
);
const nextEvent = sortedEvents[0];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-vengefulBlack text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="rounded-3xl border border-vengefulGray bg-vengefulDark/30 p-10 space-y-6 text-center">
          <h1 className="text-4xl font-semibold">Upcoming Battles</h1>
          {nextEvent && (
            <div className="flex flex-col gap-3 text-sm text-gray-400 md:flex-row md:items-center md:justify-center md:gap-6">
              <div className="text-left">
                Next up: <span className="text-white">{nextEvent.title}</span> vs {nextEvent.opponent} on{" "}
                {new Date(nextEvent.date).toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}{" "}
                ({nextEvent.location})
              </div>
              <NextEventCountdown targetDate={nextEvent.date} />
            </div>
          )}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-vengefulLight">
            Event List
          </h2>
          <div className="space-y-4">
            {sortedEvents.map((event) => (
              <article
                key={event.date}
                className="rounded-2xl border border-vengefulGray bg-vengefulDark/40 p-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                    {event.stage}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    {event.title} vs {event.opponent}
                  </h3>
                  <p className="text-gray-300">{event.location}</p>
                </div>
                <div className="rounded-2xl border border-vengefulGray/60 bg-vengefulBlack/40 p-4 text-center">
                  <p className="text-lg font-semibold">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-gray-300">
                    {new Date(event.date).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      timeZoneName: "short",
                    })}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
