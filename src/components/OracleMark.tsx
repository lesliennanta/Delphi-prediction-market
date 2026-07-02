import { getAggregateSparkline } from "@/lib/markets";

type Point = { x: number; y: number };

const WIDTH = 240;
const HEIGHT = 208;
const AMPLITUDE = 26;

const APEX: Point = { x: WIDTH / 2, y: 14 };
const BASE_LEFT: Point = { x: 18, y: HEIGHT - 10 };
const BASE_RIGHT: Point = { x: WIDTH - 18, y: HEIGHT - 10 };

/** Places `values` along the straight line from `start` to `end`, displacing
 *  each point perpendicular to the line by its deviation from the series
 *  mean. Displacement tapers to zero at both ends so the triangle's corners
 *  stay crisp — the leg reads as a straight edge from a distance and as a
 *  price line up close. */
function jitterLeg(start: Point, end: Point, values: number[]): Point[] {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const len = Math.hypot(dx, dy);
  const nx = -dy / len;
  const ny = dx / len;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const mid = (min + max) / 2;
  const range = max - min || 1;

  return values.map((v, i) => {
    const t = i / (values.length - 1);
    const px = start.x + dx * t;
    const py = start.y + dy * t;
    const taper = Math.sqrt(Math.sin(Math.PI * t));
    const offset = ((v - mid) / range) * AMPLITUDE * taper;
    return { x: px + nx * offset, y: py + ny * offset };
  });
}

/** Linearly upsamples a series to `count` points so each triangle leg reads
 *  as a real multi-point price line rather than a coarse zigzag. */
function upsample(values: number[], count: number): number[] {
  return Array.from({ length: count }, (_, i) => {
    const t = (i / (count - 1)) * (values.length - 1);
    const lo = Math.floor(t);
    const hi = Math.min(lo + 1, values.length - 1);
    const frac = t - lo;
    return values[lo] + (values[hi] - values[lo]) * frac;
  });
}

function toPath(points: Point[]): string {
  return points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

export default function OracleMark({ className = "" }: { className?: string }) {
  const pulse = upsample(getAggregateSparkline(), 20);

  const left = jitterLeg(BASE_LEFT, APEX, pulse);
  const right = jitterLeg(APEX, BASE_RIGHT, pulse);
  const strokePath = toPath([...left, ...right.slice(1)]);
  const basePath = toPath([BASE_RIGHT, BASE_LEFT]);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={className}
      role="img"
      aria-label="Delta mark traced from the aggregate movement of every open market"
    >
      <path
        d={basePath}
        fill="none"
        stroke="var(--color-border)"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d={strokePath}
        fill="none"
        stroke="var(--color-green-400)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className="oracle-mark-draw"
      />
      <circle cx={APEX.x} cy={APEX.y} r={2.5} fill="var(--color-oracle)" />
    </svg>
  );
}
