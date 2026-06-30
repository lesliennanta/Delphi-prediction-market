import { markets, formatVolume } from "@/lib/markets";

export default function TickerStrip() {
  const items = [...markets, ...markets];

  return (
    <div className="overflow-hidden border-b border-border bg-surface">
      <div className="flex w-max animate-ticker gap-8 whitespace-nowrap py-2 text-xs">
        {items.map((m, i) => {
          const change = m.sparkline[m.sparkline.length - 1] - m.sparkline[0];
          const up = change >= 0;
          return (
            <div
              key={`${m.id}-${i}`}
              className="flex items-center gap-2 px-2 font-mono"
            >
              <span className="text-ink-muted">{m.icon}</span>
              <span className="text-ink">{m.yesPrice}¢</span>
              <span className={up ? "text-green-400" : "text-no-bright"}>
                {up ? "▲" : "▼"} {Math.abs(change)}
              </span>
              <span className="text-ink-faint">{formatVolume(m.volume24h)} vol</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
