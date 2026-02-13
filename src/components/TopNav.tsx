import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/siteContent";

const BANNER_WIDTH = 1200; // px
const BANNER_HEIGHT = 280; // px
const BANNER_ZOOM = 1; // 1 = original size, >1 zooms in
const BANNER_POSITION = { x: 50, y: 50 }; // percentage offsets (0-100)
const BANNER_CROP = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}; // px cropped from each side

type TopNavProps = {
  className?: string;
};

export function TopNav({ className }: TopNavProps) {
  const bannerWrapperStyles: CSSProperties = {
    width: `${BANNER_WIDTH}px`,
    height: `${BANNER_HEIGHT}px`,
    maxWidth: "100%",
  };

  const bannerImageStyles: CSSProperties = {
    transform: `scale(${BANNER_ZOOM})`,
    transformOrigin: "center",
    objectPosition: `${BANNER_POSITION.x}% ${BANNER_POSITION.y}%`,
    clipPath: `inset(${BANNER_CROP.top}px ${BANNER_CROP.right}px ${BANNER_CROP.bottom}px ${BANNER_CROP.left}px)`,
  };

  return (
    <header
      className={`border-b border-vengefulGray pb-4 ${className ?? ""}`}
    >
      <div className="relative">
        <Link href="/" className="block">
          <div
            className="relative overflow-hidden rounded-2xl border border-vengefulGray/60 bg-vengefulBlack"
            style={bannerWrapperStyles}
          >
            <Image
              src="/VNGF_Banner.png"
              alt="Vengeful Esports"
              fill
              priority
              className="object-cover"
              style={bannerImageStyles}
            />
          </div>
        </Link>
        <nav className="absolute inset-x-6 bottom-4 flex flex-wrap items-center justify-center gap-6 rounded-full bg-vengefulBlack/60 px-6 py-2 text-sm uppercase text-gray-200 backdrop-blur">
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
