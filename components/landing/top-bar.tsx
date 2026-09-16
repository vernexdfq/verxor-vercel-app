"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/brand/logo"

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "#support" },
]

export function TopBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="Verxor home">
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/home"
            className="hidden rounded-[8px] bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:inline-flex"
          >
            Get started
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-[8px] border border-border text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-ink last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/home"
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 rounded-[8px] bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
