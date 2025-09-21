"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import * as Dialog from "@radix-ui/react-dialog"
import { X, ZoomIn, ChevronLeft, ChevronRight, Coffee } from "lucide-react"

export function GallerySection() {
  type CoffeeImage = {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
  }

  const [selectedImage, setSelectedImage] = useState<CoffeeImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Base URL untuk gambar kopi
  const imageBaseUrl = "https://images.unsplash.com/photo-"

  const coffeeImages: CoffeeImage[] = [
    {
      id: 1,
      src: `https://res.cloudinary.com/dptnvqq0d/image/upload/v1758242592/IMG-20250910-WA0032_boindp.jpg`,
      alt: "Matcha latte dengan tampilan creamy dan artistik",
      title: "Matcha Latte Delight",
      description: "Perpaduan lembut bubuk matcha premium dengan susu segar, menghadirkan rasa manis alami, tekstur creamy, dan aroma khas teh hijau yang menenangkan."
    },
    {
      id: 2,
      src: `https://res.cloudinary.com/dptnvqq0d/image/upload/v1758242805/IMG-20250911-WA0041_txazpr.jpg`,
      alt: "Nugget ayam renyah dengan kentang goreng keemasan",
      title: "Crispy Nugget & Fries",
      description: "Hidangan ringan berisi nugget ayam gurih dengan balutan tepung renyah dan kentang goreng keemasan yang garing di luar namun lembut di dalam, cocok sebagai teman santai atau camilan bersama."    
      },

  ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % coffeeImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + coffeeImages.length) % coffeeImages.length)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentImage = coffeeImages[currentIndex]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="h-8 w-8 text-amber-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Galeri Essential Kopi
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nikmati pengalaman visual dari dunia kopi premium kami
          </p>
        </div>

        {/* Main Gallery Card */}
        <Card className="relative overflow-hidden shadow-2xl rounded-2xl">
          <div 
            className="relative aspect-square cursor-pointer group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => setSelectedImage(currentImage)}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay with zoom icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                {currentImage.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                {currentImage.description}
              </p>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {coffeeImages.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 py-6 bg-white/80 backdrop-blur-sm">
            {coffeeImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </Card>

        {/* Lightbox Modal */}
        <Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 animate-in fade-in-0" />
            <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 max-w-[95vw] max-h-[95vh] animate-in fade-in-0 zoom-in-95">
              <Dialog.Title className="sr-only">Coffee Gallery Image Viewer</Dialog.Title>
              <Dialog.Description className="sr-only">View coffee gallery image in full size</Dialog.Description>
              <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl shadow-2xl">
                {selectedImage && (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
                    {selectedImage?.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    {selectedImage?.description}
                  </p>
                </div>
                <Dialog.Close className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                  <X className="h-6 w-6" />
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
}