import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { TopNav } from "@/components/TopNav";
import { streams } from "@/data/siteContent";
import { TwitchIcon } from "@/components/TwitchIcon";

export const metadata: Metadata = {
  title: "About | Vengeful Esports",
  description: "Learn how Vengeful Esports was forged.",
};

const milestones = [
  { year: "FEB 2026", detail: "Vengeful Esports is founded" },
  { year: "Mid FEB 2026", detail: "VNGFL enters first MRC, placing 2nd in Open Qualifiers" },
];

type StaffMember = {
  role: string;
  name: string;
  bio: string;
  image?: StaticImageData | string;
};

const staff: StaffMember[] = [
  {
    role: "Owner",
    name: "Aapt",
    bio: "Aapt set out to build a world-class esports organization, and in February 2026, that vision became reality with the founding of Vengeful Esports.",
  },
  {
    role: "Co-Owner",
    name: "FlyingJenn",
    bio: "FlyingJenn helped found Vengeful Esports in 2026 with a clear mission: assemble elite talent and build a team culture rooted in growth and performance. A proud USAF veteran, she continues to serve while leading with discipline and purpose. Having played Marvel Rivals since Season 0, she enjoys flexing multiple roles and adapting to whatever the team requires.",
  },
  {
    role: "Coach",
    name: "Ashh",
    bio: "Ashh is Vengeful's Head Coach, leading the team's competitive development and strategic preparation. Currently studying biomedical sciences, he brings discipline, structure, and analytical thinking to the roster. A former rugby player, he understands high-performance environments and what it takes to compete at the highest level.",
  },
  {
    role: "Assistant Coach",
    name: "Boomed",
    bio: "TBD",
  },
  {
    role: "Manager",
    name: "Lea",
    bio: "Lea serves as Vengeful's Team Manager and Social Media Director, overseeing operations and shaping the team's digital presence. She is currently studying forensic psychology and brings strong analytical thinking to both strategy and branding. Outside of esports, she enjoys music, dogs, and competitive FPS games.",
  },
  {
    role: "Analyst",
    name: "Yeby",
    bio: "Yeby is one of Vengeful's Analysts, focusing on data-driven insights that sharpen strategy and performance. Currently studying Data Science, he thrives on breaking down numbers to find competitive edges. Outside of analytics, he enjoys cooking and gaming.",
  },
  {
    role: "Analyst",
    name: "Hellfired",
    bio: "Hellfired has been an analyst for Vengeful since its inception in 2026. He has achieved top 300 in Overwatch as a DPS player. He is also a former Olympian trainee and has won multiple awards and competitions in his sport.",
  },
  {
    role: "TBD",
    name: "Mr.Vexer",
    bio: "TBD",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-12 pt-0 sm:gap-8 sm:px-6 sm:pt-0 lg:gap-10 lg:px-8">
        <TopNav className="-mt-4 sm:-mt-2 lg:-mt-24" />

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
            {staff.map((member) => {
              const twitchProfile = streams.find(
                (stream) => stream.name.toLowerCase() === member.name.toLowerCase(),
              );
              const staffImage = member.image ?? twitchProfile?.logo ?? "/VNGFLogo_1.png";
              return (
                <article
                  key={`${member.role}-${member.name}`}
                  className="glass-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={staffImage}
                      alt={`${member.name} portrait`}
                      width={112}
                      height={112}
                      className="h-28 w-28 rounded-3xl border border-white/10 object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-semibold">{member.name}</h3>
                        {twitchProfile ? (
                          <a
                            href={twitchProfile.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-vengefulLight transition hover:text-white"
                            aria-label={`${member.name} on Twitch`}
                          >
                            <TwitchIcon className="h-4 w-4" />
                          </a>
                        ) : null}
                      </div>
                      <span className="text-xs uppercase tracking-[0.4em] text-gray-400">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </article>
              );
            })}
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
