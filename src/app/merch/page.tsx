import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { merch } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Merch | Vengeful Esports",
  description: "Browse upcoming Vengeful Esports drops.",
};

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-vengefulBlack text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <TopNav />

        <section className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.4em] text-vengefulLight">
              Merch
            </p>
            <h1 className="text-4xl font-semibold">Rep the Crest</h1>
            <p className="text-gray-300">
              Official jerseys and lifestyle drops for supporters worldwide.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {merch.map((item) => (
              <article
                key={item.label}
                className="flex flex-col gap-4 rounded-2xl border border-vengefulGray bg-vengefulDark/30 p-6"
              >
                <div className="h-44 rounded-xl bg-vengefulGray/30" />
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold">{item.label}</h2>
                  <p className="text-vengefulLight">{item.price}</p>
                </div>
                <p className="text-sm text-gray-400">{item.status}</p>
                <button className="mt-auto rounded-full border border-vengefulGray px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-gray-200">
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
