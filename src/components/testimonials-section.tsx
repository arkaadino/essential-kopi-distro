"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Mahasiswa",
      content:
        "Konsepnya unik banget! Bisa ngopi sambil nunggu laundry selesai. Tempatnya nyaman dan pelayanannya ramah.",
      rating: 5,
      avatar: "/young-indonesian-male-student-smiling.jpg",
    },
    {
      name: "Sari Dewi",
      role: "Karyawan Swasta",
      content:
        "Essential Kopi jadi tempat favorit saya. Bisa shopping baju sambil minum kopi, efisien banget untuk yang sibuk.",
      rating: 5,
      avatar: "/indonesian-female-professional-smiling.jpg",
    },
    {
      name: "Budi Santoso",
      role: "Entrepreneur",
      content:
        "Barber shopnya profesional, kopinya enak, dan bisa sekalian cuci baju. One stop solution yang brilliant!",
      rating: 5,
      avatar: "/indonesian-male-entrepreneur-smiling.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Testimoni Pelanggan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dengar langsung dari pelanggan yang telah merasakan pengalaman Essential Kopi
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <Quote className="h-12 w-12 text-primary mx-auto" />

                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-muted-foreground italic text-pretty">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
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

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
