"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import * as Dialog from "@radix-ui/react-dialog"
import { X, ZoomIn, ChevronLeft, ChevronRight, Coffee, Package, Camera } from "lucide-react"

export function GallerySection() {
  type GalleryImage = {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
    category: "cafe" | "product";
  }

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState<"all" | "cafe" | "product">("all")
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dptnvqq0d/image/upload/v1758242592/IMG-20250910-WA0032_boindp.jpg",
      alt: "Matcha latte dengan tampilan creamy dan artistik",
      title: "Matcha Latte Premium",
      description: "Perpaduan lembut bubuk matcha premium dengan susu segar yang menghadirkan rasa manis alami dan tekstur creamy yang memanjakan lidah.",
      category: "cafe"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dptnvqq0d/image/upload/v1758242805/IMG-20250911-WA0041_txazpr.jpg",
      alt: "Nugget ayam renyah dengan kentang goreng keemasan",
      title: "Crispy Nugget & Fries",
      description: "Menu favorit pelanggan - nugget ayam dengan coating renyah dan kentang goreng golden yang perfect sebagai teman ngopi sore.",
      category: "cafe"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dptnvqq0d/image/upload/v1758182312/IMG-20250904-WA0027_1_fxprny.jpg",
      alt: "Interior kafe Essential Kopi yang modern dan cozy",
      title: "Suasana Kafe Modern",
      description: "Interior yang dirancang untuk kenyamanan maksimal - cocok untuk work from cafe, meeting santai, atau quality time bersama teman.",
      category: "cafe"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop&crop=center",
      alt: "Produk Kopi Saku kemasan premium ready to drink",
      title: "Kopi Saku - Ready to Drink",
      description: "Inovasi kami dalam kemasan - kualitas kopi kafe yang bisa dinikmati kapan saja. Perfect untuk gaya hidup mobile dan dinamis.",
      category: "product"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop&crop=center",
      alt: "Display berbagai varian kemasan Kopi Saku",
      title: "Varian Kopi Saku",
      description: "Berbagai pilihan rasa untuk berbagai selera - dari espresso bold untuk yang suka strong, hingga latte creamy untuk yang menyukai mild.",
      category: "product"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop&crop=center",
      alt: "Barista Essential Kopi sedang menyiapkan coffee art",
      title: "Craft Coffee Making",
      description: "Setiap cangkir kopi dibuat dengan passion dan keahlian tinggi. Tim barista kami memastikan consistency dalam setiap sajian.",
      category: "cafe"
    }
  ]

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter(img => img.category === filter)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
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
    if (filteredImages.length === 0) return
    
    const interval = setInterval(() => {
      nextImage()
    }, 4000)

    return () => clearInterval(interval)
  }, [filteredImages.length, currentIndex])

  // Reset currentIndex when filter changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [filter])

  const currentImage = filteredImages[currentIndex]

  if (filteredImages.length === 0) {
    return null
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="h-8 w-8 text-amber-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Galeri Essential Kopi
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jelajahi suasana kafe yang cozy dan produk Kopi Saku yang inovatif
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 mb-12">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={`gap-2 ${filter === "all" ? "bg-amber-600 hover:bg-amber-700" : ""}`}
          >
            <Camera className="h-4 w-4" />
            Semua ({galleryImages.length})
          </Button>
          <Button
            variant={filter === "cafe" ? "default" : "outline"}
            onClick={() => setFilter("cafe")}
            className={`gap-2 ${filter === "cafe" ? "bg-amber-600 hover:bg-amber-700" : ""}`}
          >
            <Coffee className="h-4 w-4" />
            Kafe ({galleryImages.filter(img => img.category === "cafe").length})
          </Button>
          <Button
            variant={filter === "product" ? "default" : "outline"}
            onClick={() => setFilter("product")}
            className={`gap-2 ${filter === "product" ? "bg-amber-600 hover:bg-amber-700" : ""}`}
          >
            <Package className="h-4 w-4" />
            Kopi Saku ({galleryImages.filter(img => img.category === "product").length})
          </Button>
        </div>

        {/* Main Gallery Card */}
        <Card className="relative overflow-hidden shadow-2xl rounded-2xl mb-8">
          <div 
            className="relative aspect-[16/10] cursor-pointer group"
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
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                currentImage.category === 'cafe' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {currentImage.category === 'cafe' ? (
                  <>
                    <Coffee className="h-3 w-3" />
                    Kafe
                  </>
                ) : (
                  <>
                    <Package className="h-3 w-3" />
                    Kopi Saku
                  </>
                )}
              </span>
            </div>
            
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
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 py-6 bg-white/80 backdrop-blur-sm">
            {filteredImages.map((_, index) => (
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

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentIndex ? 'ring-2 ring-amber-500' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="aspect-square relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute bottom-2 left-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                    image.category === 'cafe' 
                      ? 'bg-amber-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {image.category === 'cafe' ? (
                      <Coffee className="h-2 w-2" />
                    ) : (
                      <Package className="h-2 w-2" />
                    )}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 animate-in fade-in-0" />
            <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 max-w-[95vw] max-h-[95vh] animate-in fade-in-0 zoom-in-95">
              <Dialog.Title className="sr-only">Gallery Image Viewer</Dialog.Title>
              <Dialog.Description className="sr-only">View gallery image in full size</Dialog.Description>
              <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl shadow-2xl">
                {selectedImage && (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  <div className="flex items-center gap-2 mb-3">
                    {selectedImage?.category === 'cafe' ? (
                      <Coffee className="h-5 w-5 text-amber-400" />
                    ) : (
                      <Package className="h-5 w-5 text-blue-400" />
                    )}
                    <span className="text-white/80 text-sm">
                      {selectedImage?.category === 'cafe' ? 'Kafe Experience' : 'Produk Kopi Saku'}
                    </span>
                  </div>
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