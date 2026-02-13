import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { roster } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Roster | Vengeful Esports",
  description: "Meet the Vengeful Esports lineup.",
};

export default function RosterPage() {
  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="space-y-6">
          <div>
            <p className="section-heading">Roster</p>
            <h1 className="mt-3 text-4xl font-semibold">Alpha Unit</h1>
            <p className="mt-2 text-gray-300">
              Built on chemistry, discipline, and fearless entries.
            </p>
          </div>
          <div className="grid gap-6">
            {roster.map((player) => (
              <article key={player.name} className="glass-card p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{player.name}</h2>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {player.role}
                  </span>
                </div>
                <p className="text-gray-300">{player.bio}</p>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
                  Highlights and match stats coming soon.
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
