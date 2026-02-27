import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TopNav } from "@/components/TopNav";
import { roster, streams } from "@/data/siteContent";
import { TwitchIcon } from "@/components/TwitchIcon";
import { fetchLiveStatuses } from "@/lib/twitch";

export const metadata: Metadata = {
  title: "Roster | Vengeful Esports",
  description: "Meet the Vengeful Esports lineup.",
};

export default async function RosterPage() {
  const fetchedStatuses = await fetchLiveStatuses(streams.map((stream) => stream.channel.toLowerCase()));
  const statusMap = { ...fetchedStatuses };
  if (process.env.FORCE_COLIN_LIVE === "true") {
    statusMap.fpscollin = true;
  }
  const hydratedStreams = streams.map((stream) => {
    const channelKey = stream.channel.toLowerCase();
    return { ...stream, isLive: Boolean(statusMap[channelKey]) };
  });

  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12 pt-0 sm:gap-8 sm:px-6 sm:pt-0 lg:gap-10 lg:px-8">
        <TopNav className="-mt-4 sm:-mt-2 lg:-mt-24" />

        <section className="space-y-6">
          <div>
            <p className="section-heading">Roster</p>
            <h1 className="mt-3 text-4xl font-semibold">Meet the Team!</h1>
            <p className="mt-2 text-gray-300">
              Built on chemistry, discipline, and fearless entries.
            </p>
          </div>
          <div className="grid gap-6">
            {roster.map((player) => {
              const playerStream = hydratedStreams.find(
                (stream) => stream.name.toLowerCase() === player.name.toLowerCase(),
              );
              const playerImage = player.image ?? playerStream?.logo ?? "/VNGFLogo_1.png";
              return (
                <article key={player.name} className="glass-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={playerImage}
                      alt={`${player.name} avatar`}
                      width={112}
                      height={112}
                      className="h-28 w-28 rounded-3xl border border-white/10 object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold">{player.name}</h2>
                        {playerStream ? (
                          <Link
                            href={playerStream.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-vengefulLight transition hover:text-white"
                            aria-label={`${player.name} on Twitch`}
                          >
                            <TwitchIcon className="h-4 w-4" />
                          </Link>
                        ) : null}
                        {playerStream?.isLive ? (
                          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" aria-label="Live on Twitch" />
                            Live
                          </span>
                        ) : null}
                      </div>
                      <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                        {player.role}
                      </span>
                    </div>
                    <p className="text-gray-300">{player.bio}</p>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200">
                      <p className="text-xs uppercase tracking-[0.35em] text-vengefulLight">Highlights</p>
                      {player.achievements?.length ? (
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-300">
                          {player.achievements.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-gray-400">Highlights and match stats coming soon!</p>
                      )}
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
