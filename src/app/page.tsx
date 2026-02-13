import Image from "next/image";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { roster, scheduleEvents, sponsors } from "@/data/siteContent";

export default function Home() {
  const upcomingEvents = scheduleEvents.slice(0, 3);
  return (
    <div className="min-h-screen bg-vengefulBlack text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section
          id="home"
          className="rounded-3xl border border-vengefulGray bg-gradient-to-b from-vengefulDark/80 to-vengefulBlack p-10 text-center shadow-[0_0_60px_rgba(142,91,255,0.2)]"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-gray-300">
            Elite Esports Division
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Dominate every arena with{" "}
            <span className="text-vengefulLight">Vengeful Esports</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-200">
            Relentless focus, calculated aggression, and flawless teamwork—tune in
            as we chase trophies across every global stage.
          </p>
          <Link
            href="/watch"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-vengefulLight px-10 py-3 font-semibold text-vengefulBlack transition hover:bg-white"
          >
            Watch Live
          </Link>
        </section>

        <section
          id="about"
          className="grid gap-8 rounded-3xl border border-vengefulGray bg-vengefulDark/30 p-8 md:grid-cols-2"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
              About
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Forged in Rivalry</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Vengeful Esports began as a local squad in 2018 and has evolved into
              a multi-title contender recognized for disciplined fundamentals and
              unbeatable clutch instincts.
            </p>
            <p>
              Our mission is simple: elevate every arena we enter by combining
              talent, innovation, and fearless creativity for fans worldwide.
            </p>
          </div>
        </section>

        <section id="roster" className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
            Roster
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {roster.map((player) => (
              <article
                key={player.name}
                className="rounded-2xl border border-vengefulGray bg-vengefulDark/40 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{player.name}</h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {player.role}
                  </span>
                </div>
                <p className="mt-4 text-gray-300">{player.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
              Upcoming Events
            </p>
            <Link
              href="/schedule"
              className="text-xs uppercase tracking-[0.35em] text-gray-400 hover:text-vengefulLight"
            >
              Full Schedule
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.date}
                className="rounded-2xl border border-vengefulGray bg-vengefulDark/40 p-6 space-y-3"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  {event.stage}
                </p>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-400">vs {event.opponent}</p>
                <p className="text-gray-200">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  ·{" "}
                  {new Date(event.date).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  {event.location}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
            Sponsors
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {sponsors.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border border-vengefulGray bg-vengefulDark/30 px-6 py-10 text-center text-sm uppercase tracking-[0.3em] text-gray-200"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
            Subscribe
          </p>
          <div className="grid gap-6 rounded-3xl border border-vengefulGray bg-vengefulDark/40 p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="text-gray-300">
              <h3 className="text-2xl font-semibold text-white">Signal Briefing</h3>
              <p className="mt-2 text-sm text-gray-400">
                Monthly digest with match alerts and merch drops.
              </p>
            </div>
            <form className="flex flex-col items-center gap-2 text-center">
              <div className="flex w-full max-w-xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-vengefulGray bg-vengefulBlack/60 px-6 py-3 text-white placeholder:text-gray-500 focus:border-vengefulLight focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-vengefulLight px-6 py-3 font-semibold text-vengefulBlack transition hover:bg-white sm:w-auto"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </section>

        <footer className="rounded-3xl bg-vengefulDark px-6 py-8 text-sm text-gray-200">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
                Contact Us
              </p>
              <p className="mt-2 text-lg text-white">contact@vengeful.gg</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <Image
                src="/VNGFLogo_1.png"
                alt="Vengeful Esports logo"
                width={100}
                height={100}
                className="h-20 w-20 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
                Follow
              </p>
              <div className="flex gap-4 text-white">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-vengefulLight"
                  aria-label="Twitter"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M17.21 3h3.26l-7.13 8.16L21 21h-5.66l-4.43-5.23L5.73 21H2.47l7.63-8.74L3 3h5.79l4 4.72zm-1.14 15.3h1.81L7.07 4.61H5.15z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-vengefulLight"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M7 2h10c2.76 0 5 2.24 5 5v10c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5zm0 2C5.35 4 4 5.35 4 7v10c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3V7c0-1.65-1.35-3-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-400">
            © {new Date().getFullYear()} Vengeful Esports. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
