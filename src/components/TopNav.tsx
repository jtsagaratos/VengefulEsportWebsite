import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/siteContent";

const BANNER_WIDTH = 1600;
const BANNER_HEIGHT = 100;
const NAV_OFFSET = -150; // negative brings nav up into the banner

type TopNavProps = {
  className?: string;
};

export function TopNav({ className }: TopNavProps) {
  return (
    <header className={className ?? ""}>
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        <Link href="/" className="block w-full">
          <Image
            src="/banner2.png"
            alt="Vengeful Esports"
            width={BANNER_WIDTH}
            height={BANNER_HEIGHT}
            priority
            className="h-auto w-full object-cover"
          />
        </Link>
        <nav
          className="glass-card flex w-[min(90vw,720px)] flex-wrap items-center justify-center gap-5 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-200"
          style={{ transform: "translateY(-50%)", marginTop: `${NAV_OFFSET}px` }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-vengefulLight"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
