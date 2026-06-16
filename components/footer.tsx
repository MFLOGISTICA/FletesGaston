import Image from 'next/image'
import { MapPin, Phone, Camera, ArrowUp, Share2 } from 'lucide-react'

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

const services = [
  'Mudanzas Particulares',
  'Mudanzas Empresariales',
  'Guardamuebles',
  'Embalaje Profesional',
  'Fletes y Traslados',
  'Mudanzas Nacionales',
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/loguitoas-A0Xl5RXXU0eiUltzT5JvO0BbT8b25F.jpg"
              alt="Fletes y Mudanzas Gastón"
              width={160}
              height={50}
              className="h-12 w-auto object-contain rounded mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Más de 20 años trasladando hogares, empresas y proyectos con responsabilidad y confianza.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mudanzasyfletesgaston/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#E1306C] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Camera size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/FletesGastonPilar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Share2 size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Navegación</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const el = document.querySelector(link.href)
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-white/60 hover:text-[#f0c800] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/60 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#dc1f1f] mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-white/60 text-sm">
                  25 de Mayo 1484<br />Pilar Centro, Buenos Aires
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#dc1f1f] shrink-0" aria-hidden="true" />
                <a href="tel:01163822653" className="text-white/60 hover:text-[#f0c800] text-sm transition-colors">
                  011 6382-2653
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#dc1f1f] hover:bg-[#b81515] text-white text-sm font-bold px-5 py-2.5 rounded transition-colors"
            >
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fletes y Mudanzas Gastón. Todos los derechos reservados.
          </p>
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-1.5 text-white/40 hover:text-[#f0c800] text-xs transition-colors"
            aria-label="Volver al inicio"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  )
}
