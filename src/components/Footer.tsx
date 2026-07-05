import Logo from "./Logo";

const columns = [
  {
    title: "Markets",
    links: ["Politics", "Sports", "Crypto", "Business"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog"],
  },
  {
    title: "Resources",
    links: ["Docs", "API", "Help Center"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Risk Disclosure"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-ink bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-ink-faint">
              Delphi is a real-time prediction market. Trade on the outcome
              of politics, sports, crypto, and culture.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {col.title}
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-ink-faint transition-colors hover:text-ink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-ink-faint">
          © {new Date().getFullYear()} Delphi Markets. All forecasts are
          probabilistic, not financial advice.
        </div>
      </div>
    </footer>
  );
}
