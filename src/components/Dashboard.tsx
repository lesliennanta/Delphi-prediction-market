"use client";

import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import MarketCard from "./MarketCard";
import Sidebar from "./Sidebar";
import StatsBar from "./StatsBar";
import { getMarketsByCategory, type Category } from "@/lib/markets";

export default function Dashboard() {
  const [category, setCategory] = useState<Category>("Trending");
  const visibleMarkets = getMarketsByCategory(category);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
      <section className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Trade on what happens next.
        </h1>
        <p className="mt-2 max-w-2xl text-ink-muted">
          Real-money prediction markets on politics, sports, crypto, and
          culture. Buy Yes or No on the outcomes that matter.
        </p>
        <div className="mt-6">
          <StatsBar />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <CategoryTabs active={category} onChange={setCategory} />
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {visibleMarkets.map((market) => (
              <MarketCard key={market.id} market={market} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
