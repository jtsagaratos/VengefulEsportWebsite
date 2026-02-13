import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { news } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "News | Vengeful Esports",
  description: "Stay updated with the latest Vengeful Esports headlines.",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="space-y-6">
          <div>
            <p className="section-heading">News</p>
            <h1 className="mt-3 text-4xl font-semibold">Latest Dispatches</h1>
            <p className="mt-2 text-gray-300">
              Match recaps, roster updates, and organization announcements.
            </p>
          </div>
          <div className="space-y-6">
            {news.map((item) => (
              <article
                key={item.title}
                className="glass-card p-6 space-y-3 hover:-translate-y-1 transition"
              >
                <p className="section-heading text-gray-400">{item.date}</p>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-gray-300">{item.summary}</p>
                <div className="text-sm text-gray-500">
                  Full article coming soon.
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
