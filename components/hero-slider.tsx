'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-VO6TAYjMQv9fcLXqdGcS4RIg4aA9jl.jpg',
    title: 'Mudanzas seguras para hogares y empresas',
    text: 'Realizamos mudanzas particulares y empresariales con personal capacitado, vehículos habilitados y más de 25 años de experiencia.',
    cta1: { label: 'Solicitar presupuesto', href: 'https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto' },
    cta2: { label: 'Llamar ahora', href: 'tel:01163822653' },
  },
  {
    id: 2,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mudanzasatodoelpais-VnypKrD2i7DPd4PLW1WCKxz8LcCJEc.png',
    title: 'Mudanzas a todo el país',
    text: 'Sabemos lo que significa una mudanza, te acompañamos en todo el proceso previo y post mudanza para brindarte nuestra experiencia y tu tranquilidad.',
    cta1: { label: 'Cotizar mudanza', href: 'https://wa.me/5491163822653?text=Hola!%20Quiero%20cotizar%20una%20mudanza' },
    cta2: { label: 'Consultar disponibilidad', href: 'tel:01163822653' },
  },
  {
    id: 3,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/serviciodeembalaje-1D7S6PaVEezZqlBkktRCKBbqSyFHjb.jpg',
    title: 'Servicio de embalaje profesional',
    text: 'Protegemos cada objeto con el material indicado para su correcto empaque y translado.',
    cta1: { label: 'Solicitar asesoramiento', href: 'https://wa.me/5491163822653?text=Hola!%20Quiero%20asesoramiento%20sobre%20embalaje' },
    cta2: { label: 'Ver servicios', href: '#servicios' },
  },
  {
    id: 4,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/guardamuebles-krwrFv2RZYYsYvBMkjG1dOecA0jy0r.jpg',
    title: 'Guardamuebles seguros para tus pertenencias',
    text: 'Espacios pensados para almacenar tus muebles y objetos de manera organizada y protegida, por el tiempo que necesites.',
    cta1: { label: 'Cotizar Guardamuebles', href: 'https://wa.me/5491163822653?text=Hola!%20Quiero%20cotizar%20guardamuebles' },
    cta2: { label: 'Contactar ahora', href: 'tel:01163822653' },
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 600)
  }, [isAnimating])

  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const handleCta2Click = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden" aria-label="Presentación principal">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Red accent bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#dc1f1f]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full pt-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#dc1f1f] text-white text-xs font-bold px-3 py-1.5 rounded mb-6 uppercase tracking-wider">
              <span>25+ Años de Experiencia</span>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance animate-fade-in"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
            >
              {slides[current].title}
            </h1>

            {/* Text */}
            <p
              key={`text-${current}`}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in"
            >
              {slides[current].text}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={slides[current].cta1.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#dc1f1f] hover:bg-[#b81515] text-white font-bold px-7 py-4 rounded text-base transition-all hover:scale-105 shadow-lg"
              >
                {slides[current].cta1.label}
              </a>
              <a
                href={slides[current].cta2.href}
                onClick={(e) => handleCta2Click(e, slides[current].cta2.href)}
                className="inline-flex items-center gap-2 bg-[#f0c800] hover:bg-[#d4b000] text-[#1a1a1a] font-bold px-7 py-4 rounded text-base transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={18} />
                {slides[current].cta2.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {/* <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-[#dc1f1f] text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/20"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-[#dc1f1f] text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/20"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} />
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2" role="tablist" aria-label="Slides">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            role="tab"
            aria-selected={index === current}
            aria-label={`Ir al slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'bg-[#dc1f1f] w-8 h-3'
                : 'bg-white/50 hover:bg-white/80 w-3 h-3'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
