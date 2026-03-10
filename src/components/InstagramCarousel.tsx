"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { InstagramPost } from "@/lib/instagram";

type InstagramCarouselProps = {
  posts: InstagramPost[];
  autoAdvanceMs?: number;
};

const formatDisplayDate = (value: string) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

export function InstagramCarousel({ posts, autoAdvanceMs = 6500 }: InstagramCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiplePosts = posts.length > 1;

  useEffect(() => {
    if (!hasMultiplePosts) {
      return;
    }
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % posts.length);
    }, autoAdvanceMs);
    return () => clearInterval(interval);
  }, [posts.length, autoAdvanceMs, hasMultiplePosts]);

  if (!posts.length) {
    return (
      <div className="glass-card flex h-full min-h-[360px] items-center justify-center p-8 text-center text-sm text-gray-400">
        Follow @vngfesports on Instagram to see the latest posts here.
      </div>
    );
  }

  const boundedIndex = Math.min(activeIndex, posts.length - 1);
  const activePost = posts[boundedIndex];
  const displayDate = formatDisplayDate(activePost.timestamp);

  return (
    <div className="space-y-4">
      <article className="glass-panel overflow-hidden rounded-[32px] border border-white/10 bg-black/40">
        <div className="relative aspect-[4/3] w-full">
          {activePost.mediaUrl ? (
            <Image
              src={activePost.mediaUrl}
              alt={activePost.caption || "Instagram post"}
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover"
              priority={boundedIndex === 0}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-vengefulDark to-black" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
            {displayDate ? (
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{displayDate}</p>
            ) : null}
            <p className="text-2xl font-semibold text-white">
              {activePost.caption || "View on Instagram"}
            </p>
            <Link
              href={activePost.permalink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-vengefulLight hover:text-white"
            >
              Open post {"->"}
            </Link>
          </div>
        </div>
      </article>
      {hasMultiplePosts ? (
        <div className="flex items-center justify-center gap-2">
          {posts.map((post, index) => (
            <button
              key={post.id}
              type="button"
              aria-label={`Show Instagram post ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === boundedIndex ? "bg-vengefulLight" : "bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
