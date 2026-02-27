import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/siteContent";

type TopNavProps = {
  className?: string;
};

export function TopNav({ className }: TopNavProps) {
  return (
    <header className={className ?? ""}>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 sm:px-6 lg:px-0">
        <Link href="/" className="block w-full">
          <Image
            src="/banner2.png"
            alt="Vengeful Esports"
            width={1600}
            height={100}
            priority
            className="h-auto w-full object-cover"
          />
        </Link>
        <nav
          className="glass-card mt-4 flex w-full flex-wrap items-center justify-center gap-4 overflow-x-auto rounded-3xl px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gray-200 shadow-lg backdrop-blur md:w-[min(90vw,720px)] md:-translate-y-8 md:gap-5 md:px-6 md:text-[0.65rem] lg:-translate-y-10 lg:px-8 lg:text-xs"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap transition hover:text-vengefulLight"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
