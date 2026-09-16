"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Phone, Wallet, User } from "lucide-react"

const ITEMS = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/numbers", label: "Numbers", icon: Phone },
  { href: "/fund", label: "Fund", icon: Wallet },
  { href: "/profile", label: "Profile", icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-md items-stretch">
        {ITEMS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium"
            >
              <Icon
                className={`size-5 ${active ? "text-primary" : "text-muted"}`}
                strokeWidth={active ? 2.4 : 2}
              />
              <span className={active ? "text-primary" : "text-muted"}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
