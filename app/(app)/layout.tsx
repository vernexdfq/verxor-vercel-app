import type { ReactNode } from "react"
import { BottomNav } from "@/components/app/bottom-nav"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto min-h-dvh max-w-md pb-20">{children}</main>
      <BottomNav />
    </div>
  )
}
