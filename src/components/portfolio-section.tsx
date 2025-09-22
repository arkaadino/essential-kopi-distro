import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Package, Users } from "lucide-react"

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Kafe Experience",
      description: "Suasana nyaman dengan kopi premium dan makanan lezat untuk dine-in yang berkesan",
      image: "https://res.cloudinary.com/dptnvqq0d/image/upload/v1758242592/IMG-20250910-WA0032_boindp.jpg",
      icon: Coffee,
      tag: "Dine-In",
      features: ["Menu kopi specialty", "Makanan & pastry", "WiFi gratis", "Suasana cozy"]
    },
    {
      title: "Kopi Saku Premium",
      description: "Produk kopi kemasan berkualitas tinggi, praktis untuk gaya hidup aktif dan dinamis",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop&crop=center",
      icon: Package,
      tag: "Take Home",
      features: ["Ready to drink", "Kualitas kafe", "Kemasan praktis", "Varian rasa"]
    },
    {
      title: "Komunitas & Hangout",
      description: "Tempat berkumpul yang ideal untuk meeting, belajar, atau sekadar bersantai bersama",
      image: "https://res.cloudinary.com/dptnvqq0d/image/upload/v1758182312/IMG-20250904-WA0027_1_fxprny.jpg",
      icon: Users,
      tag: "Community",
      features: ["Meeting friendly", "Study space", "Group gathering", "Event space"]
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Produk & Layanan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dari pengalaman kafe premium hingga produk kemasan inovatif untuk gaya hidup modern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <IconComponent className="h-4 w-4" />
                      {item.tag}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Value Proposition Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-transparent">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Coffee className="h-8 w-8 text-amber-600" />
                <h3 className="text-2xl font-semibold text-foreground">Pengalaman Kafe</h3>
              </div>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Ruang nyaman untuk bekerja, bersantai, atau bertemu teman. Dengan menu kopi premium 
                dan makanan lezat yang dibuat dengan penuh perhatian.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Espresso</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Latte</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Cappuccino</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Cold Brew</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-transparent">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Package className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-foreground">Kopi Saku</h3>
              </div>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Inovasi produk kemasan yang memungkinkan Anda menikmati kualitas kopi kafe 
                di mana saja. Perfect untuk gaya hidup mobile dan profesional sibuk.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Ready to Drink</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Premium Quality</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Portable</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Mengapa Pelanggan Memilih Kami?</h3>
            <p className="text-muted-foreground">Data berdasarkan feedback dan kebiasaan pelanggan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber-600">85%</div>
              <div className="text-sm font-medium text-foreground">Pelanggan Dine-In</div>
              <div className="text-xs text-muted-foreground">Menikmati suasana kafe</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">15%</div>
              <div className="text-sm font-medium text-foreground">Take Away & Kopi Saku</div>
              <div className="text-xs text-muted-foreground">Untuk mobilitas tinggi</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">30-60</div>
              <div className="text-sm font-medium text-foreground">Menit Rata-rata</div>
              <div className="text-xs text-muted-foreground">Durasi kunjungan optimal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}