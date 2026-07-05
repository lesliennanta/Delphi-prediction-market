import { getFeaturedMarket, formatVolume } from "@/lib/markets";
import OracleMark from "./OracleMark";

/** The signature block: the single most-active market, rendered large as the
 *  oracle's current reading. A returning trader opens onto live content, not a
 *  marketing pitch. The delta mark is traced from this market's own history. */
export default function FeaturedMarket() {
  const market = getFeaturedMarket();
  const noPrice = 100 - market.yesPrice;

  return (
    <section className="rounded-lg border border-border bg-surface">
      <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="flex flex-col">
          <span className="inscription text-[11px]">Today&rsquo;s reading</span>
          <h1 className="mt-3 max-w-[18ch] font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl">
            {market.question}
          </h1>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
            <div>
              <dt className="text-xs text-ink-faint">Volume</dt>
              <dd className="mt-0.5 text-ink">{formatVolume(market.volume)}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-faint">Traders</dt>
              <dd className="mt-0.5 text-ink">
                {(market.traders / 1000).toFixed(1)}K
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink-faint">Resolves</dt>
              <dd className="mt-0.5 text-ink">{market.endDate}</dd>
            </div>
          </dl>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-8 sm:max-w-md">
            <button className="rounded-md bg-accent-500 py-3 text-sm font-semibold text-surface transition-transform hover:-translate-y-px active:translate-y-0">
              Buy Yes · {market.yesPrice}¢
            </button>
            <button className="rounded-md border border-no bg-[#f4ddd5] py-3 text-sm font-semibold text-no transition-transform hover:-translate-y-px active:translate-y-0">
              Buy No · {noPrice}¢
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 lg:w-64">
          <OracleMark
            data={market.sparkline}
            className="h-32 w-40 sm:h-36 sm:w-44"
          />
          <div className="text-center">
            <div className="font-mono text-6xl font-bold leading-none text-accent-400">
              {market.yesPrice}
              <span className="text-3xl align-top">%</span>
            </div>
            <div className="mt-1.5 text-xs text-ink-faint">chance of yes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
