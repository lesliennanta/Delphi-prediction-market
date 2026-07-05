const items = [
  { label: "Markets", color: "var(--color-block-cobalt)", text: "var(--color-surface-2)" },
  { label: "Portfolio", color: "var(--color-block-saffron)", text: "var(--color-ink)" },
  { label: "Leaderboard", color: "var(--color-block-vermilion)", text: "var(--color-surface-2)" },
  { label: "Activity", color: "var(--color-block-emerald)", text: "var(--color-surface-2)" },
];

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

/** Site sections as solid color blocks instead of text links, adapted from
 *  the reference. Wayfinding color only, never used on transactional UI. */
export default function ExploreRail() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item, i) => (
        <button
          key={item.label}
          className={`rounded-2xl px-5 py-6 text-left font-display text-base font-semibold transition-transform hover:-translate-y-0.5 hover:rotate-0 ${rotations[i]}`}
          style={{ backgroundColor: item.color, color: item.text }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
