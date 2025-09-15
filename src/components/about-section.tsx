import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const features = [
    "Konsep multi-layanan dalam satu tempat",
    "Kualitas kopi premium dari biji pilihan",
    "Pengalaman menunggu yang bermakna",
    "Lokasi strategis di Bandung",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Tentang Kami</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Essential Kopi & Distro lahir dari visi untuk menghadirkan konsep bisnis yang revolusioner di Indonesia.
                Kami menggabungkan empat layanan berbeda dalam satu tempat yang nyaman dan modern.
              </p>
              <p className="text-muted-foreground text-pretty">
                Dengan filosofi "Meaningful Waiting", kami percaya bahwa setiap momen menunggu bisa diubah menjadi
                pengalaman yang berharga. Nikmati secangkir kopi berkualitas sambil menunggu laundry selesai, atau
                berbelanja pakaian trendy sambil menunggu giliran di barber shop.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Keunggulan Kami:</h3>
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
            <Card className="overflow-hidden">
              <img
                src="/lobby.png"
                alt="Essential Kopi Interior"
                className="w-full h-96 lg:h-[500px] object-none"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
