import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Coffee } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://res.cloudinary.com/dptnvqq0d/image/upload/v1758182312/IMG-20250904-WA0027_1_fxprny.jpg" alt="Essential Kopi Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                A Cup That <span className="text-secondary">Awakens</span> Your Senses
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl text-pretty">
                Lebih dari sekadar kopi – Essential Kopi menghadirkan pengalaman unik yang menggabungkan laundry, coffee
                shop, clothing, dan barber shop, sehingga waktu menunggu jadi lebih bermakna.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              >
                <a href="#about" className="flex items-center gap-2">
                  Pelajari lebih lanjut
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-secondary">85%</div>
                <div className="text-sm text-gray-300">Dine-in</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-secondary">15%</div>
                <div className="text-sm text-gray-300">Take Away</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-secondary">30-60</div>
                <div className="text-sm text-gray-300">Menit</div>
              </div>
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