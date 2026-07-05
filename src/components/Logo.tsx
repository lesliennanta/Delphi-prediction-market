import LaurelMark from "./LaurelMark";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LaurelMark className="h-8 w-8 shrink-0" />
      <span className="font-inscription text-lg font-semibold tracking-[0.12em] text-ink">
        Delphi
      </span>
    </div>
  );
}
