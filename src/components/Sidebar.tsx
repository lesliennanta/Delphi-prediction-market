import { markets, formatVolume } from "@/lib/markets";

const leaderboard = [
  { name: "oraclebets", pnl: 184_200 },
  { name: "deltahunter", pnl: 96_450 },
  { name: "quorum_q", pnl: 71_800 },
  { name: "sibyl.eth", pnl: 58_120 },
  { name: "pythia99", pnl: 44_960 },
];

export default function Sidebar() {
  const topMovers = [...markets]
    .sort((a, b) => b.volume24h - a.volume24h)
    .slice(0, 5);

  return (
    <aside className="flex flex-col gap-6">
      <div className="rounded-xl border border-border bg-surface p-4">
        <h3 className="text-sm font-semibold text-ink">Top Movers</h3>
        <ul className="mt-3 flex flex-col gap-3">
          {topMovers.map((m) => (
            <li key={m.id} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-surface-2 font-mono text-[9px] font-bold text-ink-muted">
                  {m.icon}
                </span>
                <span className="truncate text-xs text-ink-muted">
                  {m.question}
                </span>
              </div>
              <span className="shrink-0 font-mono text-sm font-semibold text-accent-400">
                {m.yesPrice}%
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4">
        <h3 className="text-sm font-semibold text-ink">Leaderboard</h3>
        <ul className="mt-3 flex flex-col gap-2.5">
          {leaderboard.map((trader, i) => (
            <li key={trader.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-4 text-xs font-mono text-ink-faint">
                  {i + 1}
                </span>
                <span className="text-xs text-ink-muted">{trader.name}</span>
              </div>
              <span className="font-mono text-xs font-semibold text-accent-400">
                +{formatVolume(trader.pnl)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-accent-800 bg-accent-950 p-4">
        <h3 className="text-sm font-semibold text-accent-200">
          Create a market
        </h3>
        <p className="mt-1.5 text-xs text-accent-400/80">
          Got a question about the future? Propose a market and let the
          crowd price it.
        </p>
        <button className="mt-3 w-full rounded-lg bg-accent-500 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent-400">
          New Market
        </button>
      </div>
    </aside>
  );
}
