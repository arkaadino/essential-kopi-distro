"use client"

import { useState } from "react"
import { Menu, X, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#portfolio", label: "Produk" },
    { href: "#gallery", label: "Galeri" },
    { href: "#testimonials", label: "Testimoni" },
    { href: "#contact", label: "Kontak" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo-esse.png" alt="Essential Kopi Logo" className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Essential%20Kopi!', '_blank')}
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              <Coffee className="h-4 w-4 mr-2" />
              Order Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2 pt-4 border-t border-gray-100">
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/6281234567890?text=Halo%20Essential%20Kopi!', '_blank')
                    setIsOpen(false)
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 gap-2"
                >
                  <Coffee className="h-4 w-4" />
                  Order Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}