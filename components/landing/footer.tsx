import { Logo } from "@/components/brand/logo"

const COLUMNS = [
  {
    title: "Services",
    links: ["Virtual Numbers", "Rent a Line", "SMM Boost", "Buy Accounts"],
  },
  {
    title: "Company",
    links: ["Coverage", "How it works", "FAQ", "Support"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Refund policy", "Acceptable use"],
  },
]

export function Footer() {
  return (
    <footer id="support" className="scroll-mt-16 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Your second number and digital toolkit — clear, honest and
              wallet-first.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Verxor. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Numbers are provided for lawful verification and communication only.
          </p>
        </div>
      </div>
    </footer>
  )
}
