export type Category =
  | "Trending"
  | "Politics"
  | "Sports"
  | "Crypto"
  | "Culture"
  | "Business"
  | "Science"
  | "World";

export type Market = {
  id: string;
  question: string;
  category: Category;
  icon: string;
  yesPrice: number; // cents, 1-99
  volume: number; // total volume in USD
  volume24h: number;
  traders: number;
  endDate: string;
  sparkline: number[];
  featured?: boolean;
};

export const categories: Category[] = [
  "Trending",
  "Politics",
  "Sports",
  "Crypto",
  "Culture",
  "Business",
  "Science",
  "World",
];

export const markets: Market[] = [
  {
    id: "fed-rate-cut-sept",
    question: "Will the Fed cut rates at the September meeting?",
    category: "Business",
    icon: "FED",
    yesPrice: 78,
    volume: 4_820_000,
    volume24h: 312_000,
    traders: 9120,
    endDate: "Sep 17",
    sparkline: [52, 55, 58, 61, 65, 69, 72, 75, 78],
    featured: true,
  },
  {
    id: "btc-150k-2026",
    question: "Will Bitcoin hit $150,000 before end of 2026?",
    category: "Crypto",
    icon: "BTC",
    yesPrice: 41,
    volume: 6_140_000,
    volume24h: 488_000,
    traders: 14_870,
    endDate: "Dec 31",
    sparkline: [30, 33, 31, 35, 38, 36, 40, 39, 41],
    featured: true,
  },
  {
    id: "us-recession-2026",
    question: "Will the US enter a recession in 2026?",
    category: "Politics",
    icon: "GDP",
    yesPrice: 23,
    volume: 3_950_000,
    volume24h: 201_000,
    traders: 7_340,
    endDate: "Dec 31",
    sparkline: [29, 28, 26, 27, 25, 24, 22, 23, 23],
  },
  {
    id: "champions-league-winner",
    question: "Will Real Madrid win the Champions League?",
    category: "Sports",
    icon: "UCL",
    yesPrice: 34,
    volume: 2_710_000,
    volume24h: 165_000,
    traders: 5_980,
    endDate: "May 30",
    sparkline: [22, 24, 27, 26, 29, 31, 33, 32, 34],
  },
  {
    id: "midterm-house-control",
    question: "Will Democrats win control of the House in the midterms?",
    category: "Politics",
    icon: "GOV",
    yesPrice: 56,
    volume: 8_430_000,
    volume24h: 612_000,
    traders: 21_400,
    endDate: "Nov 3",
    sparkline: [49, 50, 52, 51, 54, 53, 55, 57, 56],
    featured: true,
  },
  {
    id: "eth-flip-narrative",
    question: "Will Ethereum ETF inflows exceed $10B this year?",
    category: "Crypto",
    icon: "ETH",
    yesPrice: 62,
    volume: 1_920_000,
    volume24h: 98_000,
    traders: 4_210,
    endDate: "Dec 31",
    sparkline: [44, 47, 50, 53, 55, 58, 60, 61, 62],
  },
  {
    id: "openai-gpt6-release",
    question: "Will a new flagship model ship before October?",
    category: "Science",
    icon: "AI",
    yesPrice: 67,
    volume: 1_540_000,
    volume24h: 142_000,
    traders: 3_660,
    endDate: "Oct 1",
    sparkline: [58, 60, 59, 62, 64, 63, 66, 65, 67],
  },
  {
    id: "oscars-best-picture",
    question: "Will an A24 film win Best Picture next year?",
    category: "Culture",
    icon: "OSC",
    yesPrice: 29,
    volume: 612_000,
    volume24h: 41_000,
    traders: 1_980,
    endDate: "Mar 8",
    sparkline: [18, 20, 22, 21, 24, 26, 27, 28, 29],
  },
  {
    id: "nba-finals-winner",
    question: "Will the Boston Celtics make the NBA Finals?",
    category: "Sports",
    icon: "NBA",
    yesPrice: 45,
    volume: 3_280_000,
    volume24h: 226_000,
    traders: 6_540,
    endDate: "Jun 14",
    sparkline: [38, 36, 39, 41, 40, 43, 42, 44, 45],
  },
  {
    id: "uk-election-labour",
    question: "Will Labour remain in government after next election?",
    category: "World",
    icon: "UK",
    yesPrice: 71,
    volume: 1_140_000,
    volume24h: 58_000,
    traders: 2_870,
    endDate: "Dec 31",
    sparkline: [64, 66, 65, 68, 67, 69, 70, 70, 71],
  },
  {
    id: "spacex-starship-orbit",
    question: "Will Starship complete a full orbital flight this year?",
    category: "Science",
    icon: "SPX",
    yesPrice: 83,
    volume: 980_000,
    volume24h: 73_000,
    traders: 2_410,
    endDate: "Dec 31",
    sparkline: [70, 73, 75, 77, 79, 80, 81, 82, 83],
  },
  {
    id: "apple-foldable-2026",
    question: "Will Apple announce a foldable device in 2026?",
    category: "Business",
    icon: "AAPL",
    yesPrice: 18,
    volume: 740_000,
    volume24h: 39_000,
    traders: 1_650,
    endDate: "Dec 31",
    sparkline: [25, 23, 22, 21, 20, 19, 19, 18, 18],
  },
];

export function getMarketsByCategory(category: Category): Market[] {
  if (category === "Trending") {
    return [...markets].sort((a, b) => b.volume24h - a.volume24h);
  }
  return markets.filter((m) => m.category === category);
}

export function formatVolume(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value}`;
}
