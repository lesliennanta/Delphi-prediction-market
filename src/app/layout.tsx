import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Cinzel,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

// Display — characterful grotesque for headlines and carved numbers.
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// Inscription — Roman monumental capitals, the lettering of a temple.
// Used only for the wordmark and short uppercase labels.
const cinzel = Cinzel({
  variable: "--font-inscription",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Delphi | Prediction Markets",
  description:
    "Trade on the outcome of world events. Delphi is a prediction market for politics, sports, crypto, and culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${cinzel.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
