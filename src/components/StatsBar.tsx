import { markets, formatVolume } from "@/lib/markets";

export default function StatsBar() {
  const totalVolume = markets.reduce((sum, m) => sum + m.volume, 0);
  const volume24h = markets.reduce((sum, m) => sum + m.volume24h, 0);
  const traders = markets.reduce((sum, m) => sum + m.traders, 0);

  const stats = [
    { label: "Total Volume", value: formatVolume(totalVolume) },
    { label: "24h Volume", value: formatVolume(volume24h) },
    { label: "Open Markets", value: markets.length.toString() },
    { label: "Traders", value: `${(traders / 1000).toFixed(1)}K` },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border-2 border-ink bg-surface-2 px-5 py-4"
        >
          <div className="text-xs font-medium uppercase tracking-wide text-ink-faint">
            {s.label}
          </div>
          <div className="mt-1 font-mono text-2xl font-semibold text-ink">
            {s.value}
          </div>
        </div>
      ))}
    </div>
  );
}
