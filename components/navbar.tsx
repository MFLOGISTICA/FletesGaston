'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a1a1a] shadow-lg py-2'
          : 'bg-[#1a1a1a]/95 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
          className="flex items-center"
          aria-label="Fletes y Mudanzas Gastón - Inicio"
        >
          <Image
            src="/gasti.png"
            alt="Fletes y Mudanzas Gastón"
            width={160}
            height={50}
            className="h-12 w-auto object-contain rounded"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="text-sm font-medium text-white/90 hover:text-[#f0c800] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:01163822653"
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#f0c800] transition-colors"
          >
            <Phone size={16} />
            011 6382-2653
          </a>
          <a
            href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dc1f1f] hover:bg-[#b81515] text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            Pedir Presupuesto
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-white/90 hover:text-[#f0c800] py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/10">
              <a
                href="tel:01163822653"
                className="flex items-center gap-2 text-sm font-semibold text-white/90"
              >
                <Phone size={16} />
                011 6382-2653
              </a>
              <a
                href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#dc1f1f] text-white text-sm font-semibold px-4 py-2 rounded text-center"
              >
                Pedir Presupuesto
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
