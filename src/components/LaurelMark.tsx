const LEFT_LEAVES = [
  "M 38.37 20.05 Q 44.65 20.03 47.05 11.06 Q 38.17 13.78 38.37 20.05 Z",
  "M 29.30 25.03 Q 35.74 22.97 35.31 12.98 Q 27.07 18.65 29.30 25.03 Z",
  "M 22.15 32.50 Q 28.00 28.37 24.38 18.41 Q 17.86 26.76 22.15 32.50 Z",
  "M 17.57 41.78 Q 22.08 35.86 15.38 27.13 Q 11.53 37.44 17.57 41.78 Z",
  "M 16.00 52.00 Q 18.55 44.91 9.42 38.52 Q 8.85 49.65 16.00 52.00 Z",
  "M 17.57 62.22 Q 17.87 54.79 7.38 51.48 Q 10.14 62.13 17.57 62.22 Z",
  "M 22.15 71.50 Q 20.27 64.59 9.67 64.58 Q 15.29 73.57 22.15 71.50 Z",
  "M 29.30 78.97 Q 25.65 73.29 16.12 76.29 Q 23.72 82.78 29.30 78.97 Z",
  "M 38.37 83.95 Q 33.55 79.93 25.94 85.26 Q 34.49 88.88 38.37 83.95 Z",
];

const RIGHT_LEAVES = [
  "M 61.63 20.05 Q 61.83 13.78 52.95 11.06 Q 55.35 20.03 61.63 20.05 Z",
  "M 70.70 25.03 Q 72.93 18.65 64.69 12.98 Q 64.26 22.97 70.70 25.03 Z",
  "M 77.85 32.50 Q 82.14 26.76 75.62 18.41 Q 72.00 28.37 77.85 32.50 Z",
  "M 82.43 41.78 Q 88.47 37.44 84.62 27.13 Q 77.92 35.86 82.43 41.78 Z",
  "M 84.00 52.00 Q 91.15 49.65 90.58 38.52 Q 81.45 44.91 84.00 52.00 Z",
  "M 82.43 62.22 Q 89.86 62.13 92.62 51.48 Q 82.13 54.79 82.43 62.22 Z",
  "M 77.85 71.50 Q 84.71 73.57 90.33 64.58 Q 79.73 64.59 77.85 71.50 Z",
  "M 70.70 78.97 Q 76.28 82.78 83.88 76.29 Q 74.35 73.29 70.70 78.97 Z",
  "M 61.63 83.95 Q 65.51 88.88 74.06 85.26 Q 66.45 79.93 61.63 83.95 Z",
];

const STEM_LEFT = "M 50 82 Q 44 70 38.37 20.05";
const STEM_RIGHT = "M 50 82 Q 56 70 61.63 20.05";

/** An original laurel wreath, generated from two mirrored arcs of leaves
 *  rather than traced from a reference image. Apollo's sacred plant, worn
 *  by victors and petitioners at the Delphi sanctuary — the logomark. */
export default function LaurelMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Delphi">
      <path
        d={STEM_LEFT}
        fill="none"
        stroke="var(--color-aegean-bright)"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.55}
      />
      <path
        d={STEM_RIGHT}
        fill="none"
        stroke="var(--color-aegean-bright)"
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.55}
      />
      {[...LEFT_LEAVES, ...RIGHT_LEAVES].map((d, i) => (
        <path key={i} d={d} fill="var(--color-aegean-bright)" />
      ))}
    </svg>
  );
}
