import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "About | Vengeful Esports",
  description: "Learn how Vengeful Esports was forged.",
};

const milestones = [
  { year: "2018", detail: "Grassroots LAN squad forms in Seattle." },
  { year: "2021", detail: "First international trophy secured." },
  { year: "2025", detail: "Opened a 7k sq. ft. performance facility." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="glass-panel p-10 space-y-6">
          <div>
            <p className="section-heading">About</p>
            <h1 className="mt-3 text-4xl font-semibold">Forged in Rivalry</h1>
          </div>
          <p className="text-lg text-gray-200">
            Vengeful Esports began as a collective of friends obsessed with
            refining every round. Years later, we are a multi-title contender that
            blends sports science, data, and bold creativity to entertain millions.
          </p>
          <p className="text-lg text-gray-300">
            Our culture rewards relentless practice, genuine chemistry, and
            fearless innovation. Every member—players, staff, and fans—contributes
            to the momentum we bring onto the stage.
          </p>
        </section>

        <section className="glass-panel p-8 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
              Leadership
            </p>
          </div>
          <div className="grid gap-6">
            <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Owner
              </p>
              <h3 className="text-2xl font-semibold">Avery “Venge” Cole</h3>
              <p className="text-gray-300">
                Former FPS pro who founded Vengeful in 2018 with the vision of blending
                data science and sports psychology to build disciplined, fearless rosters.
                Oversees competitive direction, brand partnerships, and player development.
              </p>
            </article>
            <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Co-Owner
              </p>
              <h3 className="text-2xl font-semibold">Maya “Pulse” Serrano</h3>
              <p className="text-gray-300">
                Veteran operations lead who joined in 2020 to architect the organization’s
                content studio and performance facility. Handles talent scouting, broadcast
                strategy, and community initiatives.
              </p>
            </article>
          </div>
        </section>

        <section className="glass-panel p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-vengefulLight">
            Milestones
          </h2>
          <div className="space-y-4">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="flex flex-col gap-1 border-l-2 border-vengefulLight/40 pl-4"
              >
                <span className="text-sm uppercase tracking-[0.4em] text-gray-400">
                  {item.year}
                </span>
                <p className="text-gray-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
