"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Send, MapPin, Phone, ExternalLink, Clock, Coffee, Package } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!email || !message) return
    setIsSubmitting(true)
    
    // Simulasi pengiriman email
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setEmail("")
    setMessage("")
    setIsSubmitting(false)
    
    alert("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.")
  }

  const openMaps = () => {
    const address = "Jl. Saturnus Tengah I No. 24, Margahayu Raya, Bandung"
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(mapsUrl, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Kunjungi Essential Kopi Hari Ini</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty opacity-90">
              Rasakan pengalaman kopi premium di kafe modern Bandung atau nikmati kemudahan Kopi Saku. 
              Kami siap memberikan yang terbaik untuk Anda!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6" />
                <h3 className="text-xl font-semibold">Hubungi Kami</h3>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="text-left">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Anda
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="text-left">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Pesan Anda
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Tanyakan tentang menu kafe, produk Kopi Saku, reservasi tempat, atau kolaborasi bisnis..."
                      className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !email || !message}
                    className="w-full bg-white hover:bg-gray-100 text-amber-700 font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-amber-700 mr-2"></div>
                        Mengirim...
                      </div>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Location & Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6" />
                <h3 className="text-xl font-semibold">Kunjungi Langsung</h3>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
                <div className="p-6 space-y-6">
                  {/* Location Info */}
                  <div className="space-y-4">
                    <button
                      onClick={openMaps}
                      className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity group w-full"
                    >
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium">Essential Kopi & Distro</p>
                        <p className="text-sm opacity-90">Jl. Saturnus Tengah I No. 24, Margahayu Raya, Bandung</p>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                    </button>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Telepon & WhatsApp</p>
                        <p className="text-sm opacity-90">+62 812-3456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Jam Operasional</p>
                        <p className="text-sm opacity-90">Senin - Minggu: 07:00 - 22:00</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={openMaps}
                      variant="outline"
                      className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/70 bg-transparent"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Lokasi
                    </Button>
                    <Button
                      onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Essential%20Kopi!', '_blank')}
                      variant="outline"
                      className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/70 bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h4 className="font-semibold mb-3 text-center">Yang Bisa Anda Nikmati</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <Coffee className="h-8 w-8 mx-auto opacity-90" />
                    <div>
                      <h5 className="font-medium text-sm">Kafe Experience</h5>
                      <p className="text-xs opacity-80">Menu premium & suasana nyaman</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Package className="h-8 w-8 mx-auto opacity-90" />
                    <div>
                      <h5 className="font-medium text-sm">Kopi Saku</h5>
                      <p className="text-xs opacity-80">Kemasan praktis ready to go</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA dengan Button yang Lebih Kontras */}
          <div className="text-center space-y-4">
            <p className="text-lg opacity-90">Siap merasakan pengalaman kopi yang berbeda?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={openMaps}
                size="lg"
                className="bg-amber-600 text-white hover:bg-amber-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Coffee className="h-5 w-5" />
                Kunjungi Kafe Sekarang
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tahu%20tentang%20produk%20Kopi%20Saku', '_blank')}
                size="lg"
                variant="outline"
                className="bg-white text-amber-700 hover:bg-amber-50 border-2 border-amber-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Package className="h-5 w-5" />
                Order Kopi Saku
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}