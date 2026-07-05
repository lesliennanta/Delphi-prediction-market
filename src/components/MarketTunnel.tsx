import { markets } from "@/lib/markets";

type Point = [number, number];

const CX = 150;
const CY = 150;
const RING_COUNT = 6;
const SCALE = 0.7;

function ringCorners(size: number): [Point, Point, Point, Point] {
  return [
    [CX - size, CY - size],
    [CX + size, CY - size],
    [CX + size, CY + size],
    [CX - size, CY + size],
  ];
}

const sizes: number[] = [140];
for (let i = 1; i < RING_COUNT; i++) sizes.push(sizes[i - 1] * SCALE);
const rings = sizes.map(ringCorners);

function squarePath(corners: [Point, Point, Point, Point]): string {
  const [a, b, c, d] = corners;
  return `M ${a[0]} ${a[1]} L ${b[0]} ${b[1]} L ${c[0]} ${c[1]} L ${d[0]} ${d[1]} Z`;
}

type Accent = "cobalt" | "saffron" | "vermilion" | "emerald";

/** A tile riding one wall of the tunnel, at the midpoint between ring k and
 *  k+1's corner `corner`. Shows a real market's ticker and price instead of
 *  a photo, colored from the fixed 4-hue block palette. */
type Tile = { ring: number; corner: 0 | 1 | 2 | 3; size: number; accent: Accent };

const TILES: Tile[] = [
  { ring: 0, corner: 0, size: 30, accent: "cobalt" },
  { ring: 0, corner: 2, size: 26, accent: "vermilion" },
  { ring: 1, corner: 1, size: 22, accent: "saffron" },
  { ring: 1, corner: 3, size: 20, accent: "emerald" },
  { ring: 2, corner: 0, size: 16, accent: "vermilion" },
  { ring: 3, corner: 2, size: 13, accent: "cobalt" },
];

export default function MarketTunnel({ className = "" }: { className?: string }) {
  const featured = markets.slice(0, TILES.length);

  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      role="img"
      aria-label="Tunnel of open markets, receding toward a vanishing point"
    >
      {rings.map((ring, i) => (
        <path
          key={i}
          d={squarePath(ring)}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth={i === 0 ? 2.5 : 1.5}
        />
      ))}

      {rings.slice(0, -1).map((ring, k) =>
        ring.map((corner, c) => {
          const next = rings[k + 1][c];
          return (
            <line
              key={`${k}-${c}`}
              x1={corner[0]}
              y1={corner[1]}
              x2={next[0]}
              y2={next[1]}
              stroke="var(--color-ink)"
              strokeWidth={1.25}
            />
          );
        }),
      )}

      {TILES.map((tile, i) => {
        const a = rings[tile.ring][tile.corner];
        const b = rings[tile.ring + 1][tile.corner];
        const mx = (a[0] + b[0]) / 2;
        const my = (a[1] + b[1]) / 2;
        const market = featured[i];
        return (
          <g key={i} transform={`translate(${mx - tile.size / 2} ${my - tile.size / 2})`}>
            <rect
              width={tile.size}
              height={tile.size}
              rx={tile.size * 0.18}
              fill={`var(--color-block-${tile.accent})`}
            />
            <text
              x={tile.size / 2}
              y={tile.size / 2 - 1}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontWeight={700}
              fontSize={tile.size * 0.24}
              fill="var(--color-surface)"
            >
              {market.icon}
            </text>
            <text
              x={tile.size / 2}
              y={tile.size / 2 + tile.size * 0.28}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontWeight={600}
              fontSize={tile.size * 0.2}
              fill="var(--color-surface)"
              opacity={0.85}
            >
              {market.yesPrice}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}
