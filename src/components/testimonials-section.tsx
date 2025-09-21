"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Mahasiswa",
      content:
        "Konsepnya unik banget! Bisa ngopi sambil nunggu laundry selesai. Tempatnya nyaman dan pelayanannya ramah.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1645165063146-6428901840a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxhc2lhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      source: "Google Maps Review",
      date: "2 minggu lalu"
    },
    {
      name: "Sari Dewi",
      role: "Karyawan Swasta", 
      content:
        "Essential Kopi jadi tempat favorit saya. Bisa shopping baju sambil minum kopi, efisien banget untuk yang sibuk.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1525875975471-999f65706a10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
      source: "Google Maps Review",
      date: "1 minggu lalu"
    },
    {
      name: "Budi Santoso",
      role: "Entrepreneur",
      content:
        "Barber shopnya profesional, kopinya enak, dan bisa sekalian cuci baju. One stop solution yang brilliant!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
      source: "Google Maps Review", 
      date: "3 hari lalu"
    },
    {
      name: "Maya Sinta",
      role: "Ibu Rumah Tangga",
      content:
        "Anak-anak suka banget kesini. Bisa main sambil mama ngopi dan nungguin laundry. Pelayanannya juga cepat!",
      rating: 5,
      avatar: "https://plus.unsplash.com/premium_photo-1676158160205-307455ff52a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      source: "Google Maps Review",
      date: "5 hari lalu"
    },
    {
      name: "Yudha Eko", 
      role: "Freelancer",
      content:
        "Perfect place untuk digital nomad! WiFi kenceng, kopi enak, dan bisa sekalian potong rambut. Recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFzaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
      source: "Google Maps Review",
      date: "1 hari lalu"
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Testimoni Pelanggan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dengar langsung dari pelanggan yang telah merasakan pengalaman Essential Kopi
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <Quote className="h-12 w-12 text-primary mx-auto" />

                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-muted-foreground italic text-pretty">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground/80">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonials[currentIndex].source}</span>
                      <span>•</span>
                      <span>{testimonials[currentIndex].date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial} 
              className="rounded-full bg-white hover:bg-gray-50 border-gray-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial} 
              className="rounded-full bg-white hover:bg-gray-50 border-gray-200"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Google Maps Link */}
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              onClick={() => window.open('https://www.google.com/maps/search/Essential+Kopi+Bandung', '_blank')}
              className="gap-2"
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