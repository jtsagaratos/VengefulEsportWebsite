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
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="glass-panel space-y-6 p-10 text-center">
          <h1 className="text-4xl font-semibold">Upcoming Battles</h1>
          {nextEvent && (
            <div className="flex flex-col gap-4 text-sm text-gray-300 md:flex-row md:items-center md:justify-center md:gap-6">
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
          <p className="section-heading">Event List</p>
          <div className="space-y-4">
            {sortedEvents.map((event) => (
              <article
                key={event.date}
                className="glass-card grid gap-4 p-6 md:grid-cols-[1.2fr_0.8fr]"
              >
                <div>
                  <p className="section-heading text-gray-400">{event.stage}</p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    {event.title} vs {event.opponent}
                  </h3>
                  <p className="text-gray-300">{event.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
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
