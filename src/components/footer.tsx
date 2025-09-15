import { Coffee, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <img src="/logo-esse-alt.png" alt="Essential Kopi Logo" className="h-24" />
            </div>
            <p className="text-sm text-background/70 text-pretty">
              Menghadirkan pengalaman unik yang menggabungkan kopi, fashion, laundry, dan grooming dalam satu tempat.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-background/70">Jl. Saturnus Tengah I No. 24, Margahayu Raya, Bandung</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@essentialkopi.com"
                  className="text-background/70 hover:text-secondary transition-colors"
                >
                  info@essentialkopi.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-background/70">+62 xxx xxxx xxxx</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Menu</h3>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-background/70 hover:text-secondary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-background/70 hover:text-secondary transition-colors">
                Tentang Kami
              </a>
              <a href="#services" className="block text-background/70 hover:text-secondary transition-colors">
                Layanan
              </a>
              <a href="#portfolio" className="block text-background/70 hover:text-secondary transition-colors">
                Portfolio
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ikuti Kami</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/70">© 2025 Essential Kopi & Distro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
