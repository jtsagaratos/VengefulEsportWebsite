import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "About | Vengeful Esports",
  description: "Learn how Vengeful Esports was forged.",
};

const milestones = [
  { year: "FEB 2026", detail: "Vengeful Esports is founded" },
  { year: "Mid FEB 2026", detail: "VNGFL enters first MRC, placing 2nd in Open Qualifiers" },
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
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-white">Mission Statement</h2>
            <p className="text-lg text-gray-300">
              Vengeful Esports is committed to competing at the highest level while developing
              disciplined, resilient competitors through structured growth, strategic preparation,
              and relentless improvement. We build a culture where performance is earned daily,
              teamwork is intentional, and success is sustained through constant evolution.
            </p>
          </div>

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
              <h3 className="text-2xl font-semibold">Aapt</h3>
              <p className="text-gray-300">
                Aapt set out to build a world-class esports organization, and in February 2026, 
                that vision became reality with the founding of Vengeful Esports.
              </p>
            </article>
            <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Co-Owner
              </p>
              <h3 className="text-2xl font-semibold">FlyingJenn</h3>
              <p className="text-gray-300">
                FlyingJenn helped found Vengeful Esports in 2026 with a clear mission: 
                assemble elite talent and build a team culture rooted in growth and performance. 
                A proud USAF veteran, she continues to serve while leading with discipline and purpose. 
                Having played Marvel Rivals since Season 0, she enjoys flexing multiple roles and adapting 
                to whatever the team requires.
              </p>
            </article>
            <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Coach
              </p>
              <h3 className="text-2xl font-semibold">Ashh</h3>
              <p className="text-gray-300">
                Ashh is Vengeful’s Head Coach, leading the team’s competitive development and strategic preparation. Currently studying biomedical sciences, he brings discipline, structure, and analytical thinking to the roster. A former rugby player, he understands high-performance environments and what it takes to compete at the highest level.
              </p>
            </article>
            <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Assistant Coach
              </p>
              <h3 className="text-2xl font-semibold">Boomed</h3>
              <p className="text-gray-300">
                TBD
              </p>
            </article>
                        <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Manager
              </p>
              <h3 className="text-2xl font-semibold">Lea</h3>
              <p className="text-gray-300">
                Lea serves as Vengeful’s Team Manager and Social Media Director, overseeing operations and shaping the team’s digital presence. She is currently studying forensic psychology and brings strong analytical thinking to both strategy and branding. Outside of esports, she enjoys music, dogs, and competitive FPS games.
              </p>
            </article>
                        <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Analyst
              </p>
              <h3 className="text-2xl font-semibold">Yeby</h3>
              <p className="text-gray-300">
                TBD
              </p>
            </article>
                        <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                Analyst
              </p>
              <h3 className="text-2xl font-semibold">Hellfired</h3>
              <p className="text-gray-300">
                Hellfired has been an analyst for Vengeful since its inception in 2026.
                He has achieved top 300 in Overwatch as a DPS player.
                He is also a former Olympian trainee and has won multiple awards and competitions in his sport. 
              </p>
            </article>
                        <article className="glass-card p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                TBD
              </p>
              <h3 className="text-2xl font-semibold">Mr.Vexer</h3>
              <p className="text-gray-300">
                TBD
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
