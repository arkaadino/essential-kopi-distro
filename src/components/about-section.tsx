import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Coffee, Package } from "lucide-react"

export function AboutSection() {
  const features = [
    "Kafe modern dengan suasana nyaman di Bandung",
    "Kopi premium dari biji pilihan berkualitas tinggi", 
    "Produk kopi kemasan 'Kopi Saku' ready to go",
    "Lokasi strategis di Margahayu Raya, Bandung",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            {/* Content */}
            <div className="space-y-8">
              {/* Company Description */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Tentang Essential Kopi</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Essential Kopi adalah kafe modern di Bandung yang menghadirkan pengalaman kopi premium 
                  dalam suasana yang nyaman dan hangat. Kami berkomitmen menyajikan kopi berkualitas tinggi 
                  untuk setiap pelanggan.
                </p>
                <p className="text-muted-foreground text-pretty">
                  Selain pengalaman dine-in yang berkesan, kami juga menghadirkan <strong>"Kopi Saku"</strong> - 
                  produk kopi kemasan premium yang cocok untuk gaya hidup aktif. Nikmati kualitas kopi kafe 
                  dalam kemasan praktis yang bisa dibawa ke mana saja.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Mengapa Essential Kopi?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="mt-12 lg:mt-0">
              <Card className="overflow-hidden sticky top-8">
                <img
                  src="https://res.cloudinary.com/dptnvqq0d/image/upload/v1758182312/IMG-20250904-WA0027_1_fxprny.jpg"
                  alt="Interior Essential Kopi yang modern dan nyaman"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </Card>
            </div>
          </div>

          {/* Products Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Yang Kami Tawarkan</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dua pengalaman kopi dalam satu tempat - nikmati di kafe atau bawa pulang
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Coffee className="h-8 w-8 text-amber-600" />
                    <h4 className="text-xl font-semibold text-foreground">Kafe Experience</h4>
                  </div>
                  <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
                    Nikmati berbagai menu kopi premium, makanan ringan, dan suasana yang nyaman 
                    untuk bersantai, bekerja, atau berkumpul bersama teman.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Menu kopi specialty yang beragam</li>
                    <li>• Makanan ringan dan pastry</li>
                    <li>• WiFi gratis untuk digital nomad</li>
                    <li>• Suasana cozy dan Instagram-able</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="h-8 w-8 text-blue-600" />
                    <h4 className="text-xl font-semibold text-foreground">Kopi Saku</h4>
                  </div>
                  <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
                    Produk kopi kemasan premium dengan kualitas kafe yang bisa dinikmati kapan saja, 
                    di mana saja. Perfect untuk gaya hidup modern yang dinamis.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ready to drink, praktis dibawa</li>
                    <li>• Kualitas kafe dalam kemasan</li>
                    <li>• Cocok untuk profesional sibuk</li>
                    <li>• Tersedia berbagai varian rasa</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">Visi Kami</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Menjadi kafe terdepan di Bandung yang menghadirkan pengalaman kopi premium 
                    dan produk inovatif untuk gaya hidup modern.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 space-y-4">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">Misi Kami</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Menyajikan kopi berkualitas premium dengan pelayanan terbaik, menciptakan 
                    suasana nyaman, dan menghadirkan inovasi produk untuk lifestyle aktif.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}