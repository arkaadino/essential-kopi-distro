import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Meaningful Waiting</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-pretty opacity-90">
              Siap berkolaborasi? Mari jadikan waktu tunggu Anda lebih berharga bersama Essential Kopi & Distro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <a href="mailto:info@essentialkopi.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Hubungi Kami Sekarang
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">
              Atau kunjungi langsung toko kami di Jl. Saturnus Tengah I No. 24, Margahayu Raya, Bandung
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
