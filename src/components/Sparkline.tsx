type Props = {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
};

export default function Sparkline({
  data,
  width = 96,
  height = 32,
  className = "",
}: Props) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  });

  const up = data[data.length - 1] >= data[0];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke={up ? "var(--color-green-400)" : "var(--color-no-bright)"}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
