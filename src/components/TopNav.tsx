import Link from "next/link";
import { navLinks } from "@/data/siteContent";

type TopNavProps = {
  className?: string;
};

export function TopNav({ className }: TopNavProps) {
  return (
    <header
      className={`flex items-center justify-between border-b border-vengefulGray pb-5 ${className ?? ""}`}
    >
      <span className="text-2xl font-extrabold tracking-[0.3em] text-vengefulLight">
        VENGEFUL
      </span>
      <nav className="flex gap-6 text-sm uppercase text-gray-300">
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
    </header>
  );
}
