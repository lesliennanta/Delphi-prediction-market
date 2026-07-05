"use client";

import { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import ExploreRail from "./ExploreRail";
import FeaturedMarket from "./FeaturedMarket";
import MarketCard from "./MarketCard";
import Sidebar from "./Sidebar";
import StatsBar from "./StatsBar";
import {
  getFeaturedMarket,
  getMarketsByCategory,
  type Category,
} from "@/lib/markets";

export default function Dashboard() {
  const [category, setCategory] = useState<Category>("Trending");
  const featuredId = getFeaturedMarket().id;
  const visibleMarkets = getMarketsByCategory(category).filter(
    (m) => m.id !== featuredId,
  );

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
      <ExploreRail />
      <FeaturedMarket />

      <div className="mb-8">
        <StatsBar />
      </div>

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
