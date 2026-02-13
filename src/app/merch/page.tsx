import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { merch } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Merch | Vengeful Esports",
  description: "Browse upcoming Vengeful Esports drops.",
};

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-vengefulBlack/70 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="section-heading">Merch</p>
            <h1 className="text-4xl font-semibold">Rep the Crest</h1>
            <p className="text-gray-300">
              Official jerseys and lifestyle drops for supporters worldwide.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {merch.map((item) => (
              <article
                key={item.label}
                className="glass-card flex flex-col gap-4 p-6 hover:-translate-y-1 hover:shadow-2xl transition"
              >
                <div className="h-44 rounded-2xl bg-gradient-to-br from-vengefulDark/60 to-vengefulGray/40" />
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">{item.label}</h2>
                  <p className="text-vengefulLight">{item.price}</p>
                </div>
                <p className="text-sm text-gray-400">{item.status}</p>
                <button className="mt-auto rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200 transition hover:bg-vengefulLight hover:text-vengefulBlack">
                  Notify Me
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
