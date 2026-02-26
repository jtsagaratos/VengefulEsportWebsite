import Image from "next/image";
import Link from "next/link";
import { NextEventCountdown } from "@/components/NextEventCountdown";
import { TopNav } from "@/components/TopNav";
import { merch, news, roster, scheduleEvents, sponsors, streams } from "@/data/siteContent";

const statHighlights = [
  { label: "Matches Played", value: "80+", detail: "since MR S6" },
  { label: "Win rate", value: "78%", detail: "last 12 months" },
  { label: "Best Streak", value: "4-0 vs Igni", detail: "since 2026" },
];

const culturePillars = [
  {
    title: "Discipline first",
    copy: "Repetition builds trust. Every strat is rehearsed until it is instinct.",
  },
  {
    title: "Creative counters",
    copy: "We weaponize analysts and creators to find new timings weekly.",
  },
  {
    title: "Relentless Execution",
    copy: "Preparation means nothing without delivery. When the moment comes, we close.",
  },
];

const contentHighlights = [
  {
    title: "Watch Us Live",
    copy: "We do play almost daily, tune in and watch us live!",
    action: "Watch Live",
    href: "/watch",
  },
  {
    title: "Behind the keyboards",
    copy: "Instagram reels from events, bootcamps, and fan meetups.",
    action: "Follow IG",
    href: "https://www.instagram.com/vngfesports/",
  },
  {
    title: "Tactical briefing",
    copy: "Weekly newsletter with opponent scouting reports and drops.",
    action: "Join List",
    href: "#subscribe",
  },
];

const previousMatches = [
  {
    opponent: "ZAYINHELLO",
    event: "MRC S6 Open Qualifiers",
    date: "February 14, 2026",
    result: "Win 3-0",
  },
 {
    opponent: "Purge Umbra",
    event: "MRC S6 Open Qualifiers",
    date: "February 14, 2026",
    result: "Win 1-0",
  },
 {
    opponent: "ScarletValor",
    event: "MRC S6 Open Qualifiers",
    date: "February 14, 2026",
    result: "Win 1-0",
  },
  
];

export default function Home() {
  const nextEvent = scheduleEvents[0];
  const upcomingEvents = scheduleEvents.slice(0, 4);
  const latestNews = news.slice(0, 2);
  const merchDrops = merch.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      return { dateLabel: "TBD", timeLabel: "" };
    }
    return {
      dateLabel: date.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
      timeLabel: date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
    };
  };

  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <TopNav className="pt-6" />

        <section
          id="home"
          className="grid gap-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-vengefulDark/80 via-vengefulBlack to-black p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12"
        >
          <div className="space-y-8">
            <div className="badge-pill w-fit">North American Esports Team</div>
            <div className="space-y-4">
              <p className="section-eyebrow">Vengeful Esports</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Command every arena with ruthless precision.
              </h1>
              <p className="text-lg text-gray-200">
                Training blocks, sports science, and fearless creativity collide so our roster can
                outpace the meta week after week.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/watch"
                className="inline-flex items-center justify-center rounded-full bg-vengefulLight px-8 py-3 font-semibold text-vengefulBlack transition hover:bg-white"
              >
                Watch Live
              </Link>
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:text-vengefulLight"
              >
                Schedule
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {statHighlights.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel relative flex flex-col gap-6 overflow-hidden p-8">
            <div className="flex items-center justify-between">
              <p className="section-eyebrow">Next match</p>
              <span className="text-sm text-gray-400">{nextEvent?.location ?? "TBD"}</span>
            </div>
            {nextEvent ? (
              <>
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-semibold text-white">{nextEvent.title}</p>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500">{nextEvent.stage}</p>
                    <p className="text-gray-400">
                      {formatDate(nextEvent.date).dateLabel}
                      {" "}
                      <span className="text-gray-500">|</span>
                      {" "}
                      {formatDate(nextEvent.date).timeLabel}
                    </p>
                  </div>
                  <div className="text-right">
                    <NextEventCountdown targetDate={nextEvent.date} />
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Countdown</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
                  <div className="flex items-end justify-between text-2xl font-bold">
                    <div className="flex items-end gap-4">
                      <div className="translate-y-2">
                        <Image
                          src="/VNGFLogo_1.png"
                          alt="Vengeful Esports logo"
                          width={48}
                          height={48}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                      <p className="text-4xl leading-none">0</p>
                    </div>
                    <div className="text-xs uppercase tracking-[0.5em] text-gray-500">vs</div>
                    <div className="flex items-end gap-4 text-right">
                      <p className="text-base uppercase tracking-[0.45em] text-gray-300">{nextEvent.opponent}</p>
                      <p className="text-4xl leading-none">0</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                  <div className="badge-pill bg-black/40">MRC</div>
                  <div className="badge-pill bg-black/40">Double Elimination</div>
                </div>
                <Link
                  href="/schedule"
                  className="text-xs uppercase tracking-[0.35em] text-vengefulLight hover:text-white"
                >
                  View full bracket
                </Link>
              </>
            ) : (
              <p className="text-gray-400">Stay tuned - new matches drop soon.</p>
            )}
          </div>
        </section>

        <section className="glass-panel flex flex-col gap-6 px-6 py-8 text-center">
          <div>
            <p className="section-eyebrow">Trusted partners</p>
            <p className="text-sm text-gray-400">Brands that fuel our grind on every continent.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {sponsors.map((brand) => (
              <div key={brand} className="rounded-2xl border border-white/5 bg-black/30 px-4 py-3 text-xs uppercase tracking-[0.35em] text-gray-300">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="glass-panel space-y-6 bg-gradient-to-br from-vengefulDark/80 via-black to-black p-10 lg:h-[540px]">
            <p className="section-eyebrow">Inside the program</p>
            <h2 className="text-3xl font-semibold">Forged through rivalry and relentless review.</h2>
            <p className="text-gray-300">
              Vengeful was founded in 2026 and became a home for some of the best players that Marvel Rivals
              has to offer. Even though this is our first season competing as a team in MRC, we have already
              proven that we are not a force to be reckoned with.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {culturePillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm font-semibold text-white">{pillar.title}</p>
                  <p className="mt-2 text-sm text-gray-400">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card flex h-full flex-col gap-6 p-8 lg:h-[540px]">
            <div>
              <p className="section-eyebrow">Game Recaps</p>
              <p className="text-2xl font-semibold text-white">Witness Greatness</p>
              <p className="mt-2 text-sm text-gray-400">
                Scroll through the latest series to see how the roster is trending.
              </p>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
              {previousMatches.map((match) => {
                const [outcome, ...scoreParts] = match.result.split(" ");
                const score = scoreParts.join(" ") || match.result;
                const outcomeIsWin = (outcome ?? "").toLowerCase() === "win";
                return (
                  <div
                    key={`${match.event}-${match.opponent}`}
                    className="space-y-3 rounded-2xl border border-white/10 bg-black/40 p-4"
                  >
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <p className="uppercase tracking-[0.4em] text-vengefulLight">{match.event}</p>
                      <p>{match.date}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/VNGFLogo_1.png"
                          alt="Vengeful Esports logo"
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                        <span className="text-xs font-semibold uppercase tracking-[0.5em] text-gray-500">vs</span>
                        <p className="text-lg font-semibold text-white">{match.opponent}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-full px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] ${
                            outcomeIsWin ? "bg-emerald-400/15 text-emerald-300" : "bg-rose-400/15 text-rose-300"
                          }`}
                        >
                          {outcome ?? match.result}
                        </span>
                        <p className="text-2xl font-bold text-white">{score}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="roster" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-eyebrow">Roster spotlight</p>
              <h2 className="text-3xl font-semibold">Talent built to close out finals.</h2>
            </div>
            <Link href="/roster" className="text-xs uppercase tracking-[0.35em] text-gray-400 hover:text-vengefulLight">
              Full roster
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {roster.map((player) => {
              const playerStream = streams.find(
                (stream) => stream.name.toLowerCase() === player.name.toLowerCase(),
              );
              const playerImage = player.image ?? playerStream?.logo ?? "/VNGFLogo_1.png";

              return (
                <article key={player.name} className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={playerImage}
                      alt={`${player.name} avatar`}
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-3xl border border-white/10 object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-2xl font-bold">{player.name}</h3>
                      <span className="text-xs uppercase tracking-[0.4em] text-gray-500">{player.role}</span>
                    </div>
                    <p className="text-gray-300">{player.bio}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      {(player.badges ?? ["Match ready"]).map((badge) => (
                        <span key={badge} className="badge-pill bg-black/40">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="schedule" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-eyebrow">Upcoming battles</p>
              <h2 className="text-3xl font-semibold">Lock in the next watch parties.</h2>
            </div>
            <Link href="/schedule" className="text-xs uppercase tracking-[0.35em] text-gray-400 hover:text-vengefulLight">
              See calendar
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <article
                key={`${event.date}-${event.opponent}`}
                className="glass-panel grid gap-4 p-6 text-sm sm:grid-cols-[1.2fr_0.8fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-vengefulLight">{event.stage}</p>
                  <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                  <p className="text-gray-400">vs {event.opponent}</p>
                </div>
                <div className="text-center text-gray-400 sm:justify-self-center">
                  <p className="text-base text-white">{formatDate(event.date).dateLabel}</p>
                  <p>{formatDate(event.date).timeLabel}</p>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.35em] text-gray-500">{event.location}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="news" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-eyebrow">Latest news</p>
              <h2 className="text-3xl font-semibold">Stories from the road.</h2>
            </div>
            <Link href="/news" className="text-xs uppercase tracking-[0.35em] text-gray-400 hover:text-vengefulLight">
              Browse all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {latestNews.map((item) => (
              <article key={item.title} className="glass-card flex flex-col gap-4 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-vengefulLight">{item.date}</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.summary}</p>
                <Link href="/news" className="text-sm font-semibold text-vengefulLight hover:text-white">
                  Read more {"->"}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="merch" className="space-y-6">
          <div className="glass-panel grid gap-10 p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="section-eyebrow">Merch drop</p>
              <h2 className="text-3xl font-semibold">Merch coming soon!</h2>
              <p className="text-gray-300">
                Rep the crest with limited capsule pieces inspired by our stage fits. Join the waitlist to be first in line.
              </p>
              <Link
                href="/merch"
                className="inline-flex items-center justify-center rounded-full bg-vengefulLight px-6 py-3 text-sm font-semibold text-vengefulBlack transition hover:bg-white"
              >
                Join waitlist
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {merchDrops.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-500">{item.status}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-gray-400">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {contentHighlights.map((item) => (
            <article key={item.title} className="glass-card flex flex-col gap-4 p-6">
              <p className="section-eyebrow">Content</p>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300">{item.copy}</p>
              <Link href={item.href} className="text-sm font-semibold text-vengefulLight hover:text-white">
                {item.action} {"->"}
              </Link>
            </article>
          ))}
        </section>

        <section id="subscribe" className="glass-panel space-y-6 p-10">
          <div className="flex flex-col gap-2 text-center">
            <p className="section-eyebrow">Signal briefing</p>
            <h2 className="text-3xl font-semibold">Monthly digest with match alerts and drops.</h2>
            <p className="text-sm text-gray-400">Zero spam, just the intel we would want as fans.</p>
          </div>
          <form className="mx-auto flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              className="w-full rounded-full border border-white/10 bg-black/40 px-6 py-4 text-white placeholder:text-gray-500 focus:border-vengefulLight focus:outline-none"
              placeholder="you@example.com"
            />
            <button
              type="submit"
              className="rounded-full bg-vengefulLight px-8 py-4 text-sm font-semibold text-vengefulBlack transition hover:bg-white"
            >
              Subscribe
            </button>
          </form>
        </section>

        <footer className="glass-panel grid gap-8 px-8 py-10 md:grid-cols-3">
          <div className="space-y-2">
            <p className="section-eyebrow">Contact</p>
            <p className="text-lg text-white">vengflesports@gmail.com</p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <Image src="/VNGFLogo_1.png" alt="Vengeful Esports logo" width={96} height={96} className="h-20 w-20 object-contain" />
            <p className="text-xs text-gray-500">(c) {new Date().getFullYear()} Vengeful Esports</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p className="section-eyebrow">Follow</p>
            <div className="flex gap-4">
              <a href="https://x.com/VNGFesports" target="_blank" rel="noreferrer" className="hover:text-vengefulLight">
                Twitter
              </a>
              <a href="https://www.instagram.com/vngfesports/" target="_blank" rel="noreferrer" className="hover:text-vengefulLight">
                Instagram
              </a>
              <a href="https://twitch.tv" target="_blank" rel="noreferrer" className="hover:text-vengefulLight">
                Twitch
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
