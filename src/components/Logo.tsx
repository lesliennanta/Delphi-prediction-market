export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 text-paper font-bold text-lg font-mono">
        Δ
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        Delphi
      </span>
    </div>
  );
}
