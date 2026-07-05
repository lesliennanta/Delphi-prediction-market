import { markets, formatVolume } from "@/lib/markets";

export default function StatsBar() {
  const totalVolume = markets.reduce((sum, m) => sum + m.volume, 0);
  const volume24h = markets.reduce((sum, m) => sum + m.volume24h, 0);
  const traders = markets.reduce((sum, m) => sum + m.traders, 0);

  const stats = [
    { label: "Total volume", value: formatVolume(totalVolume) },
    { label: "24h volume", value: formatVolume(volume24h) },
    { label: "Open markets", value: markets.length.toString() },
    { label: "Traders", value: `${(traders / 1000).toFixed(1)}K` },
  ];

  // A thin inscription strip, not four boxed cards: the numbers read like a
  // line carved along a lintel, divided by hairlines.
  return (
    <dl className="flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-border py-3">
      {stats.map((s) => (
        <div key={s.label} className="flex items-baseline gap-2">
          <dt className="inscription text-[10px]">{s.label}</dt>
          <dd className="font-mono text-sm font-medium text-ink">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
