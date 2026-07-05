import { getFeaturedMarket, formatVolume } from "@/lib/markets";
import MarketTunnel from "./MarketTunnel";

/** The hero: a real open market on one side, the tunnel of every other open
 *  market on the other. Not a marketing pitch, a live view into the book. */
export default function FeaturedMarket() {
  const market = getFeaturedMarket();
  const noPrice = 100 - market.yesPrice;

  return (
    <section className="grid grid-cols-1 items-center gap-10 py-8 lg:grid-cols-[1fr_360px] lg:gap-4">
      <div>
        <span className="inline-block rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Most active
        </span>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {market.question}
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          {formatVolume(market.volume)} traded by{" "}
          {(market.traders / 1000).toFixed(1)}K forecasters. Resolves{" "}
          {market.endDate}.
        </p>

        <div className="mt-7 flex items-center gap-4">
          <div className="font-mono text-5xl font-bold text-accent-600">
            {market.yesPrice}%
          </div>
          <div className="h-2 flex-1 max-w-40 overflow-hidden rounded-full bg-grey-800">
            <div
              className="h-full rounded-full bg-accent-600"
              style={{ width: `${market.yesPrice}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid max-w-sm grid-cols-2 gap-3">
          <button className="rounded-full bg-ink py-3 text-sm font-semibold text-surface-2 transition-transform hover:-translate-y-0.5">
            Buy Yes · {market.yesPrice}¢
          </button>
          <button className="rounded-full border-2 border-ink py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
            Buy No · {noPrice}¢
          </button>
        </div>
      </div>

      <MarketTunnel className="mx-auto h-72 w-72 sm:h-80 sm:w-80" />
    </section>
  );
}
