import { formatVolume, type Market } from "@/lib/markets";
import Sparkline from "./Sparkline";

export default function MarketCard({ market }: { market: Market }) {
  const noPrice = 100 - market.yesPrice;

  return (
    <div className="group flex flex-col rounded-xl border border-border bg-surface p-4 transition-colors hover:border-grey-600">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-surface-2 font-mono text-[10px] font-bold text-ink-muted">
            {market.icon}
          </span>
          <p className="text-sm font-medium leading-snug text-ink line-clamp-2">
            {market.question}
          </p>
        </div>
        <Sparkline data={market.sparkline} className="shrink-0 opacity-80" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="font-mono text-2xl font-bold text-accent-400">
          {market.yesPrice}%
        </div>
        <div className="flex-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-grey-800">
            <div
              className="h-full rounded-full bg-accent-500"
              style={{ width: `${market.yesPrice}%` }}
            />
          </div>
        </div>
      </div>
      <p className="mt-1 text-xs text-ink-faint">chance of Yes</p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="rounded-lg border border-accent-700 bg-accent-950 py-2 text-sm font-semibold text-accent-400 transition-colors hover:bg-accent-900">
          Yes · {market.yesPrice}¢
        </button>
        <button className="rounded-lg border border-grey-700 bg-grey-900 py-2 text-sm font-semibold text-grey-300 transition-colors hover:bg-grey-800">
          No · {noPrice}¢
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-ink-faint">
        <span>{formatVolume(market.volume)} vol</span>
        <span>Ends {market.endDate}</span>
      </div>
    </div>
  );
}
