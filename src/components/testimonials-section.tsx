"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Coffee, Package } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Mahasiswa ITB",
      content: "Essential Kopi jadi tempat favorit buat ngerjain tugas. Tempatnya nyaman, WiFi kenceng, dan kopinya enak banget! Harga juga student-friendly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1645165063146-6428901840a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxhc2lhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      source: "Google Maps Review",
      date: "2 minggu lalu",
      highlight: "cafe"
    },
    {
      name: "Sari Dewi",
      role: "Marketing Executive", 
      content: "Kopi Saku nya praktis banget buat dibawa ke kantor! Rasanya tetap premium kayak kopi kafe tapi dalam kemasan yang convenient.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1525875975471-999f65706a10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
      source: "Google Maps Review", 
      date: "1 minggu lalu",
      highlight: "product"
    },
    {
      name: "Budi Santoso",
      role: "Entrepreneur",
      content: "Perfect place untuk client meeting. Suasana profesional tapi tetap cozy, kopinya berkualitas tinggi. Tim barista nya juga ramah dan profesional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMJA3fDB8MHxzZWFyY2h8MTB8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
      source: "Google Maps Review",
      date: "5 hari lalu",
      highlight: "cafe"
    },
    {
      name: "Maya Sinta", 
      role: "Content Creator",
      content: "Instagramable banget! Menu nya variatif, presentation cantik, dan yang pasti rasanya ga mengecewakan. Cocok buat content creation juga.",
      rating: 5,
      avatar: "https://plus.unsplash.com/premium_photo-1676158160205-307455ff52a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      source: "Google Maps Review",
      date: "1 minggu lalu",
      highlight: "cafe"
    },
    {
      name: "Reza Fadil",
      role: "Software Engineer",
      content: "Work from cafe terbaik di area Margahayu! Atmosphere nya mendukung produktivitas, plus Kopi Saku nya bisa jadi backup kalo lagi WFH.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMJA3fDB8MHxzZWFyY2h8MTR8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
      source: "Google Maps Review", 
      date: "3 hari lalu",
      highlight: "both"
    },
    {
      name: "Lisa Wijaya",
      role: "Ibu Rumah Tangga",
      content: "Seneng banget ada Essential Kopi di area sini. Bisa me-time sambil ngopi, plus bisa beli Kopi Saku buat suami yang suka mobile.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c6ee9ff4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
      source: "Google Maps Review",
      date: "1 hari lalu",
      highlight: "both"
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Apa Kata Mereka?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Pengalaman nyata dari pelanggan yang telah merasakan Essential Kopi
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="overflow-hidden shadow-xl border-0 bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-amber-600 mx-auto" />

                {/* Testimonial Content */}
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-muted-foreground italic text-pretty leading-relaxed">
                    "{currentTestimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-200"
                    />
                    {/* Highlight Badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                      {currentTestimonial.highlight === "cafe" && (
                        <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                          <Coffee className="w-2 h-2 text-white" />
                        </div>
                      )}
                      {currentTestimonial.highlight === "product" && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <Package className="w-2 h-2 text-white" />
                        </div>
                      )}
                      {currentTestimonial.highlight === "both" && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{currentTestimonial.role}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground/80 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{currentTestimonial.source}</span>
                      <span>•</span>
                      <span>{currentTestimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Type */}
                <div className="flex justify-center">
                  {currentTestimonial.highlight === "cafe" && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm">
                      <Coffee className="h-4 w-4" />
                      Kafe Experience
                    </div>
                  )}
                  {currentTestimonial.highlight === "product" && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
                      <Package className="h-4 w-4" />
                      Kopi Saku Experience
                    </div>
                  )}
                  {currentTestimonial.highlight === "both" && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
                      <Star className="h-4 w-4" />
                      Complete Experience
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial} 
              className="rounded-full bg-white hover:bg-amber-50 border-amber-200 hover:border-amber-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-amber-600" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial} 
              className="rounded-full bg-white hover:bg-amber-50 border-amber-200 hover:border-amber-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-amber-600">5.0</div>
              <div className="text-sm text-muted-foreground">Rating Google</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-green-600">100+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-sm text-muted-foreground">Product Lines</div>
            </div>
          </div>

          {/* Google Maps Link */}
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              onClick={() => window.open('https://www.google.com/maps/search/Essential+Kopi+Bandung', '_blank')}
              className="gap-2 border-amber-200 hover:border-amber-300 hover:bg-amber-50"
            >
              <MapPin className="w-4 h-4" />
              Lihat Semua Review di Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}