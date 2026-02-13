"use client";

import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

const getRemaining = (targetMs: number): Countdown => {
  const now = new Date().getTime();
  const total = targetMs - now;

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds, total };
};

type NextEventCountdownProps = {
  targetDate: string;
};

export function NextEventCountdown({ targetDate }: NextEventCountdownProps) {
  const target = new Date(targetDate).getTime();
  const [remaining, setRemaining] = useState<Countdown>(() => getRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(getRemaining(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  if (Number.isNaN(target)) {
    return <p className="text-sm text-red-400">Invalid countdown target.</p>;
  }

  if (remaining.total <= 0) {
    return <p className="text-lg font-semibold text-vengefulLight">Event is live now!</p>;
  }

  const parts = [
    `${String(remaining.days).padStart(2, "0")}d`,
    `${String(remaining.hours).padStart(2, "0")}h`,
    `${String(remaining.minutes).padStart(2, "0")}m`,
    `${String(remaining.seconds).padStart(2, "0")}s`,
  ];

  return <p className="text-xl font-semibold text-white">{parts.join(" : ")}</p>;
}
