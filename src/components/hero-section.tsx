import { Button } from "@/components/ui/button"
import { Coffee, ShoppingBag } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-amber-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dptnvqq0d/image/upload/v1758632793/lobby_fzl6zu.png" 
          alt="Essential Kopi Cafe Interior" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Essential Kopi Bandung
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl text-pretty">
                Kafe modern dengan kopi premium berkualitas tinggi. Nikmati di tempat atau bawa pulang 
                <span className="text-stone-300"> "Kopi Saku"</span> kami yang praktis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white gap-2"
              >
                <Coffee className="h-5 w-5" />
                <a href="#about">
                  Kunjungi Kafe
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground bg-transparent gap-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <a href="#portfolio">
                  Lihat Produk
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-amber-600">Kafe Premium</div>
                <div className="text-sm text-gray-300">Dine-in Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-amber-600">Kopi Saku</div>
                <div className="text-sm text-gray-300">Ready to Go</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Single Logo Image */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dptnvqq0d/image/upload/v1758613319/Gemini_Generated_Image_z1qn8yz1qn8yz1qn-removebg-preview_dsv18h.png" 
                alt="Essential Kopi Logo" 
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coffee Bean Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <Coffee className="w-6 h-6 text-white animate-pulse" />
        </div>
      </div>
    </section>
  )
}