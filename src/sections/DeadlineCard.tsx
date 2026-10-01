import { useEffect, useState } from "react";
import { Bezel } from "../components/Bezel";
import { DEADLINE, RAIL_END, RAIL_START, deadline } from "../lib/content";
import { IS_STATIC } from "../lib/env";

const DAY = 86_400_000;

// Ticks once a second. Isolated in this leaf so nothing else re-renders.
function useNow() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (IS_STATIC) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

const pad = (n: number) => String(n).padStart(2, "0");

function Countdown({ now }: { now: number }) {
  const left = Math.max(0, DEADLINE.getTime() - now);
  const days = Math.floor(left / DAY);
  const units = [
    { label: "days", value: String(days) },
    { label: "hours", value: pad(Math.floor((left % DAY) / 3_600_000)) },
    { label: "min", value: pad(Math.floor((left % 3_600_000) / 60_000)) },
    { label: "sec", value: pad(Math.floor((left % 60_000) / 1000)) },
  ];
  return (
    <div className="w-full md:w-auto">
      <p className="sr-only">
        {days} days until {deadline.date}
      </p>
      <div aria-hidden className="grid grid-cols-4 divide-x divide-white/10 rounded-2xl bg-white/[0.05] ring-1 ring-white/10">
        {units.map((u, i) => (
          <div key={u.label} className="px-3 py-3 text-center md:min-w-[74px] md:px-3">
            <div className={`font-mono text-[26px] font-medium leading-none tracking-[-0.04em] tabular-nums md:text-[32px] ${i === 0 ? "text-signal" : "text-white"}`}>
              {u.value}
            </div>
            <div className="mt-2 text-[11.5px] text-white/50">{u.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// One tick per month from ASIC's stop orders to the deadline. Remaining months carry the accent.
function MonthRail({ now }: { now: number }) {
  const span = (RAIL_END.year - RAIL_START.year) * 12 + (RAIL_END.month - RAIL_START.month);
  const months = Array.from({ length: span + 1 }, (_, i) => new Date(RAIL_START.year, RAIL_START.month + i, 1));
  const current = months.reduce((acc, m, i) => (m.getTime() <= now ? i : acc), 0);
  const pct = (i: number) => (i / (months.length - 1)) * 100;
  const tick = (m: Date, i: number) => {
    const jan = m.getMonth() === 0;
    if (i === current) return "h-8 bg-white";
    if (i < current) return jan ? "h-6 bg-white/40" : "h-4 bg-white/25";
    return jan ? "h-7 bg-signal" : "h-5 bg-signal";
  };

  return (
    <div className="mt-9" aria-hidden>
      <div className="relative h-6">
        <span
          className="absolute -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-[11.5px] font-medium text-brand-deep"
          style={{ left: `${pct(current)}%` }}
        >
          Today
        </span>
      </div>
      <div className="mt-2 flex h-8 items-end justify-between">
        {months.map((m, i) => (
          <span key={m.getTime()} className={`w-[3px] rounded-full ${tick(m, i)}`} />
        ))}
      </div>
      <div className="relative mt-3 h-4 font-mono text-[11.5px] text-white/50">
        <span className="absolute left-0">Feb 2024</span>
        {months.map((m, i) =>
          m.getMonth() === 0 && m.getFullYear() < RAIL_END.year ? (
            <span key={i} className="absolute hidden -translate-x-1/2 sm:block" style={{ left: `${pct(i)}%` }}>
              {m.getFullYear()}
            </span>
          ) : null,
        )}
        <span className="absolute right-0 text-signal">1 Jul 2027</span>
      </div>
    </div>
  );
}

export function DeadlineCard() {
  const now = useNow();
  return (
    <Bezel core="relative overflow-hidden bg-brand-deep text-on-brand">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-40 size-[440px] rounded-full bg-[radial-gradient(closest-side,rgb(96_140_205/0.28),transparent)]" />
      <div className="relative p-6 md:p-9">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13.5px] font-medium text-white/60">{deadline.label}</p>
            <p className="mt-2 whitespace-nowrap text-[44px] font-semibold leading-none tracking-[-0.045em] text-white md:text-[50px]">{deadline.date}</p>
          </div>
          <Countdown now={now} />
        </div>
        <MonthRail now={now} />
        <p className="mt-9 max-w-[64ch] text-[15.5px] leading-relaxed text-white/80">{deadline.body}</p>
        <p className="mt-4 max-w-[70ch] text-[12.5px] leading-relaxed text-white/50">{deadline.fine}</p>
      </div>
    </Bezel>
  );
}
