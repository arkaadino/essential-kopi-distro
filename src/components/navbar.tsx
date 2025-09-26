"use client"

import { useState } from "react"
import { Menu, X, Coffee, Bike, ShoppingBag, Truck, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import * as Dialog from "@radix-ui/react-dialog"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#portfolio", label: "Produk" },
    { href: "#gallery", label: "Galeri" },
    { href: "#testimonials", label: "Testimoni" },
    { href: "#contact", label: "Kontak" },
  ]

  const orderPlatforms = [
    {
      name: "Gojek",
      icon: <Bike className="h-5 w-5" />,
      url: "https://gofood.co.id/bandung/restaurant/essential-kopi-8da3f4c4-2f03-4410-8c1e-5ca7b0174e52?ot=eyJtZXJjaGFudF9pZCI6ImVkZjFkZTcwLWEzNzctNDgxNi1iMmRkLWY2ZjUyMGMzODc4YyIsInVzZXJfaWQiOiIwIiwiZXhwaXJ5X3RpbWVfZXBvY2giOjE3MzY2NjQ5MjgsImRlbGl2ZXJ5X3ByaWNlIjo0MDAwLCJwYXJraW5nX2ZlZSI6MCwiZXRhX2J1ZmZlcl9taW5zIjo3LCJjdXN0b21lcl9sb2NhdGlvbiI6Ii02LjE4MjMxMywxMDYuODM2NDY0NiJ9.IWu+gztpP3w9ypmCn5u93yQSSPBg0szwNRG%2Fn76x9EY%3D",
      description: "Order via GoFood"
    },
    {
      name: "GrabFood",
      icon: <Truck className="h-5 w-5" />,
      url: "https://food.grab.com/id/en/restaurant/essential-kopi",
      description: "Order via GrabFood"
    },
    {
      name: "ShopeeFood",
      icon: <ShoppingBag className="h-5 w-5" />,
      url: "https://shopeefood.co.id/essential-kopi",
      description: "Order via ShopeeFood"
    },
    {
      name: "Direct Order",
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://wa.me/6281234567890",
      description: "Order via Whatsapp"
    }

  ]

  const handlePlatformOrder = (url: string, platformName: string) => {
    console.log(`Ordering via ${platformName}`)
    window.open(url, '_blank')
    setIsOrderModalOpen(false)
  }

  return (
    <>
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
                onClick={() => setIsOrderModalOpen(true)}
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                <Coffee className="h-4 w-4 mr-2" />
                Pesan Sekarang
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
                      setIsOrderModalOpen(true)
                      setIsOpen(false)
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700 gap-2"
                  >
                    <Coffee className="h-4 w-4" />
                    Pesan Sekarang
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Order Modal - Glassmorphism */}
      <Dialog.Root open={isOrderModalOpen} onOpenChange={setIsOrderModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 animate-in fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
            z-50 w-[90vw] max-w-sm animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="bg-white/85 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Dialog.Title className="text-lg font-semibold text-gray-900">
                      Pesan Essential Kopi
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-gray-600 mt-1">
                      Pilih platform delivery
                    </Dialog.Description>
                  </div>
                  <Dialog.Close className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                    <X className="h-5 w-5" />
                  </Dialog.Close>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {orderPlatforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => handlePlatformOrder(platform.url, platform.name)}
                    className="w-full bg-white/50 hover:bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl 
                    p-4 transition-all duration-200 hover:shadow-md hover:ring-1 hover:ring-amber-500/30 
                    flex items-center gap-3 text-left"
                  >
                    <div className="bg-gray-100/70 rounded-md p-2">{platform.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{platform.name}</h4>
                      <p className="text-xs text-gray-600">{platform.description}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}