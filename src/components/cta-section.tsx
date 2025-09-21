"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Send, MapPin, Phone, ExternalLink } from "lucide-react"

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
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Meaningful Waiting</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty opacity-90">
              Siap berkolaborasi? Mari jadikan waktu tunggu Anda lebih berharga bersama Essential Kopi & Distro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6" />
                <h3 className="text-xl font-semibold">Kirim Pesan</h3>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
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
                      className="w-full px-3 py-2 rounded-md bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                      placeholder="Ceritakan tentang proyek kolaborasi yang Anda inginkan..."
                      className="w-full px-3 py-2 rounded-md bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !email || !message}
                    className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-secondary-foreground mr-2"></div>
                        Mengirim...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Location & Map */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6" />
                <h3 className="text-xl font-semibold">Lokasi Toko</h3>
              </div>

              {/* Map Preview */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg overflow-hidden border border-primary-foreground/20">
                <div className="relative h-48 bg-primary-foreground/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8984857516687!2d107.5985333!3d-6.9344444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7c381e3c5d1%3A0x5f1c1b1c1b1c1b1c!2sJl.%20Saturnus%20Tengah%20I%2C%20Margahayu%2C%20Bandung%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen= {false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  
                  {/* Overlay for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none"></div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <button
                      onClick={openMaps}
                      className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity group"
                    >
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Essential Kopi & Distro</p>
                        <p className="text-sm opacity-90">Jl. Saturnus Tengah I No. 24, Margahayu Raya, Bandung</p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto opacity-60 group-hover:opacity-100" />
                    </button>
                    
                    <a
                      href="tel:+6281234567890"
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Phone className="h-5 w-5" />
                      <div>
                        <p className="font-medium">Telepon</p>
                        <p className="text-sm opacity-90">+62 812-3456-7890</p>
                      </div>
                    </a>
                  </div>

                  <Button
                    onClick={openMaps}
                    className="w-full border-2 border-white/50 text-white hover:bg-white/10 hover:border-white/70"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Buka di Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}