import type { Metadata } from "next";
import Image from "next/image";
import { TopNav } from "@/components/TopNav";
import { getAllGameRecaps } from "@/lib/gameRecaps";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Schedule | Vengeful Esports",
  description: "Match results and recent series from Vengeful Esports.",
};

const formatRecapDate = (value: string) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

export default async function SchedulePage() {
  const recaps = await getAllGameRecaps();
  const latestRecap = recaps[0];
  const latestRecapDate = latestRecap ? formatRecapDate(latestRecap.date) : null;

  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12 pt-0 sm:gap-8 sm:px-6 sm:pt-0 lg:gap-10 lg:px-8">
        <TopNav className="-mt-4 sm:-mt-2 lg:-mt-24" />

        <section className="glass-panel space-y-6 p-10 text-center">
          <h1 className="text-4xl font-semibold">Match Results</h1>
          {latestRecap ? (
            <div className="flex flex-col gap-4 text-sm text-gray-300 md:items-center md:justify-center">
              <div className="space-y-3 text-left">
                <div>
                  Latest result: <span className="text-white">{latestRecap.event}</span> against{" "}
                  <span className="text-white">{latestRecap.opponent}</span>
                  {latestRecapDate ? <> on {latestRecapDate}</> : null}
                </div>
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
                  <span className="text-vengefulLight">{latestRecap.opponent}</span>
                  <div className="ml-auto rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-vengefulLight">
                    {latestRecap.result}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400">Results will show up here once the Google Sheet is populated.</p>
          )}
        </section>

        <section className="space-y-6">
          <p className="section-heading">Results Feed</p>
          <div className="space-y-4">
            {recaps.map((recap) => {
              const [outcome, ...scoreParts] = recap.result.split(" ");
              const score = scoreParts.join(" ") || recap.result;
              const outcomeIsWin = outcome.toLowerCase() === "win";
              return (
                <article key={`${recap.event}-${recap.opponent}-${recap.date}`} className="glass-card p-6">
                  <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className="space-y-3">
                      <p className="section-heading text-gray-400">{recap.event}</p>
                      {recap.description ? (
                        <p className="text-sm text-gray-400">{recap.description}</p>
                      ) : null}
                      <p className="text-gray-300">{formatRecapDate(recap.date)}</p>
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
                      <span className="text-vengefulLight">{recap.opponent}</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center md:justify-self-end">
                      <p
                        className={`text-sm font-semibold uppercase tracking-[0.3em] ${
                          outcomeIsWin ? "text-emerald-300" : "text-rose-300"
                        }`}
                      >
                        {outcome}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">{score}</p>
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
