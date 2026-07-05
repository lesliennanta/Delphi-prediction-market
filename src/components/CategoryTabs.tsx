"use client";

import { categories, type Category } from "@/lib/markets";

type Props = {
  active: Category;
  onChange: (category: Category) => void;
};

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto border-b-2 border-ink pb-3">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`shrink-0 rounded-full border-2 px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-accent-500 bg-accent-500 text-surface-2"
                : "border-border bg-surface text-ink-muted hover:bg-surface-2 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
