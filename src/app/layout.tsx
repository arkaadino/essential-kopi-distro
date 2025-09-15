import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Essential Kopi & Distro - A Cup That Awakens Your Senses",
  description:
    "Lebih dari sekadar kopi – Essential Kopi menghadirkan pengalaman unik yang menggabungkan laundry, coffee shop, clothing, dan barber shop.",
  keywords: "kopi, coffee, distro, laundry, barber, bandung, essential kopi",
  authors: [{ name: "Essential Kopi & Distro" }],
  openGraph: {
    title: "Essential Kopi & Distro",
    description: "A Cup That Awakens Your Senses",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
