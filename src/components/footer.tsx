import { MapPin, Mail, Phone, Instagram, Facebook, Twitter, Clock, Coffee, Package } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/essentialkopi", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/essentialkopi", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/essentialkopi", label: "Twitter" },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo-esse-alt.png" alt="Essential Kopi Logo" className="h-20" />
            </div>
            <p className="text-sm text-gray-300 text-pretty leading-relaxed">
              Kafe modern di Bandung dengan kopi premium berkualitas tinggi dan produk Kopi Saku 
              untuk gaya hidup aktif dan dinamis.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <Coffee className="h-4 w-4" />
                Kafe Premium
              </span>
              <span className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                Kopi Saku
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Alamat</p>
                  <p className="text-gray-300">Jl. Saturnus Tengah I No. 24, Margahayu Raya, Bandung</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Telepon/WhatsApp</p>
                  <a
                    href="tel:+6281234567890"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:info@essentialkopi.com"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    info@essentialkopi.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Navigasi</h3>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Beranda
              </a>
              <a href="#about" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Tentang Kami
              </a>
              <a href="#portfolio" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Produk & Layanan
              </a>
              <a href="#gallery" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Galeri
              </a>
              <a href="#testimonials" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Testimoni
              </a>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium text-sm">Jam Operasional</span>
              </div>
              <p className="text-xs text-gray-300">Senin - Minggu</p>
              <p className="text-sm text-white font-medium">07:00 - 22:00</p>
            </div>
          </div>

          {/* Products & Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-400">Produk Kami</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Coffee className="h-4 w-4 text-amber-400" />
                    <h4 className="text-sm font-medium text-white">Kafe Experience</h4>
                  </div>
                  <p className="text-xs text-gray-300">Menu kopi premium, makanan lezat, suasana nyaman</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="h-4 w-4 text-blue-400" />
                    <h4 className="text-sm font-medium text-white">Kopi Saku</h4>
                  </div>
                  <p className="text-xs text-gray-300">Kemasan praktis, kualitas premium, ready to go</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-400">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 hover:text-white transition-all duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Essential Kopi & Distro. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <span>Jl. Saturnus Tengah I No. 24, Bandung</span>
              <span>•</span>
              <span>07:00 - 22:00</span>
              <span>•</span>
              <a 
                href="tel:+6281234567890" 
                className="hover:text-amber-400 transition-colors"
              >
                +62 812-3456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}