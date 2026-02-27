"use client";

import { FormEvent, useState } from "react";

type StatusState = "idle" | "loading" | "success" | "error";

export function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<StatusState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setStatus("error");
      setMessage("Enter an email address first.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Subscription failed.");
      }
      setStatus("success");
      setMessage("You're in! Watch your inbox for match alerts.");
      setEmail("");
    } catch (error) {
      console.error("Subscribe request failed", error);
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Try again.");
    }
  };

  return (
    <section id="subscribe" className="glass-panel space-y-6 p-10">
      <div className="flex flex-col gap-2 text-center">
        <p className="section-eyebrow">Signal briefing</p>
        <h2 className="text-3xl font-semibold">Monthly digest with match alerts and drops.</h2>
        <p className="text-sm text-gray-400">Zero spam, just the intel we would want as fans.</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
        <input
          type="email"
          name="email"
          className="w-full rounded-full border border-white/10 bg-black/40 px-6 py-4 text-white placeholder:text-gray-500 focus:border-vengefulLight focus:outline-none"
          placeholder="you@example.com"
          value={email}
          autoComplete="email"
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className="rounded-full bg-vengefulLight px-8 py-4 text-sm font-semibold text-vengefulBlack transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <p
        className={`text-center text-sm ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}
        aria-live="polite"
      >
        {status === "idle" ? "\u00A0" : message || (status === "success" ? "You're all set!" : "")}
      </p>
    </section>
  );
}
