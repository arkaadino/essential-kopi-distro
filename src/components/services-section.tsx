import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Shirt, Sparkles, Scissors } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Coffee,
      title: "Coffee Shop",
      description: "Nikmati kopi premium dari biji pilihan terbaik dengan berbagai varian minuman dan makanan ringan.",
      color: "text-amber-600",
    },
    {
      icon: Shirt,
      title: "Clothing Store",
      description: "Koleksi pakaian trendy dan berkualitas untuk gaya hidup modern Anda.",
      color: "text-blue-600",
    },
    {
      icon: Sparkles,
      title: "Laundry Service",
      description: "Layanan laundry profesional dengan teknologi modern dan hasil yang memuaskan.",
      color: "text-green-600",
    },
    {
      icon: Scissors,
      title: "Barber Shop",
      description: "Layanan potong rambut dan grooming profesional untuk penampilan yang sempurna.",
      color: "text-red-600",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Layanan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Empat layanan berbeda dalam satu tempat untuk memaksimalkan waktu dan pengalaman Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <IconComponent
                      className={`h-8 w-8 ${service.color} group-hover:text-primary transition-colors duration-300`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
