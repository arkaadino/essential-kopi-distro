import { Card, CardContent } from "@/components/ui/card"

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Dine-in Experience",
      description: "85% pelanggan memilih untuk menikmati layanan di tempat",
      image: "/placeholder-1jqnc.png",
      stat: "85%",
    },
    {
      title: "Take Away Service",
      description: "15% pelanggan memilih layanan take away untuk mobilitas tinggi",
      image: "/placeholder-q74w4.png",
      stat: "15%",
    },
    {
      title: "Average Duration",
      description: "Durasi rata-rata kunjungan 30-60 menit untuk pengalaman optimal",
      image: "/placeholder-636fy.png",
      stat: "30-60 Min",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Portfolio & Statistik</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Data dan pengalaman pelanggan yang menunjukkan kualitas layanan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {item.stat}
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
