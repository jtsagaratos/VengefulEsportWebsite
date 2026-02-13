import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { streams } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Watch | Vengeful Esports",
  description: "Catch our top players live on Twitch.",
};

export default function WatchPage() {
  const liveStream = streams.find((stream) => stream.isLive);
  return (
    <div className="min-h-screen bg-vengefulBlack text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="space-y-4 rounded-3xl border border-vengefulGray bg-vengefulDark/30 p-10">
          <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
            Watch
          </p>
          <h1 className="text-4xl font-semibold">Live On Twitch</h1>
          <p className="text-lg text-gray-200">
            Follow our creators to catch scrims, ranked grinds, and match-day
            prep live. Times are listed in Pacific Time.
          </p>
        </section>

        <section className="rounded-3xl border border-vengefulGray bg-vengefulDark/40 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
              Live Player
            </p>
            {liveStream ? (
              <span className="text-sm text-emerald-400">
                {liveStream.name} is live now
              </span>
            ) : (
              <span className="text-sm text-gray-400">All streams offline</span>
            )}
          </div>
          {liveStream ? (
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-vengefulGray">
              <iframe
                title={`${liveStream.name} Twitch Stream`}
                src={`https://player.twitch.tv/?channel=${liveStream.channel}&parent=localhost&parent=vengeful.gg`}
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : (
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-vengefulGray text-gray-400">
              Stream will appear here when a player goes live.
            </div>
          )}
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {streams.map((stream) => (
            <article
              key={stream.url}
              className="flex flex-col gap-4 rounded-2xl border border-vengefulGray bg-vengefulDark/40 p-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  {stream.platform}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <Image
                    src={stream.logo}
                    alt={`${stream.name} avatar`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border border-vengefulGray object-cover"
                  />
                  <h2 className="text-2xl font-semibold">{stream.name}</h2>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      stream.isLive ? "bg-emerald-400 animate-pulse" : "bg-gray-500"
                    }`}
                    aria-label={stream.isLive ? "Live" : "Offline"}
                  />
                </div>
              </div>
              <Link
                href={stream.url}
                target="_blank"
                className="mt-auto rounded-full bg-vengefulLight px-4 py-2 text-center font-semibold text-vengefulBlack transition hover:bg-white"
              >
                Watch Now
              </Link>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
