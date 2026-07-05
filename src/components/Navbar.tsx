"use client";

import Logo from "./Logo";

const navLinks = ["Markets", "Portfolio", "Leaderboard", "Activity"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b-2 border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-muted lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={
                i === 0
                  ? "text-ink transition-colors hover:text-accent-400"
                  : "transition-colors hover:text-ink"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="relative ml-2 hidden flex-1 max-w-md md:block">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search markets..."
            className="w-full rounded-full border-2 border-border bg-surface py-2 pl-9 pr-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-500 focus:outline-none"
          />
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <button className="hidden rounded-full border-2 border-ink px-3.5 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 sm:block">
            Sign In
          </button>
          <button className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-surface-2 transition-transform hover:-translate-y-0.5">
            Deposit
          </button>
        </div>
      </div>
    </header>
  );
}
