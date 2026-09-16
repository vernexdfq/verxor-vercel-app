import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Verxor — Your second number anywhere in the world",
  description:
    "Global virtual numbers for OTP, dedicated line rentals, SMM boost and verified accounts. Fund once, spend across services. Wallet-first, honest, global.",
  keywords: [
    "virtual numbers",
    "OTP numbers",
    "rent a number",
    "SMM boost",
    "buy accounts",
    "second number",
    "verification numbers",
  ],
  openGraph: {
    title: "Verxor — Your second number anywhere in the world",
    description:
      "Global virtual numbers, dedicated rentals, SMM boost and accounts. Fund once, spend across services.",
    type: "website",
    siteName: "Verxor",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
