// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Essential Kopi & Distro - Kafe Modern Bandung",
  description: "Kafe modern dengan kopi premium dan produk Kopi Saku. Lokasi strategis di Margahayu Raya, Bandung.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true} // Suppress hydration warning for browser extension attributes
      >
        {children}
      </body>
    </html>
  )
}