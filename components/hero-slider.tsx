'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-VO6TAYjMQv9fcLXqdGcS4RIg4aA9jl.jpg',
    title: 'Mudanzas profesionales, seguras y sin complicaciones',
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
  
  // --- NUEVOS ESTADOS PARA EL SWIPE ---
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragEndX, setDragEndX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

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

  // --- LÓGICA DE SWIPE / DRAG ---
  const minSwipeDistance = 50 // Mínimo de píxeles que debe moverse para considerar que es un swipe

  const handleDragStart = (clientX: number) => {
    setDragStartX(clientX)
    setDragEndX(null)
    setIsDragging(true)
  }

  const handleDragMove = (clientX: number) => {
    if (isDragging) {
      setDragEndX(clientX)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    if (dragStartX === null || dragEndX === null) return

    const distance = dragStartX - dragEndX
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      next() // Deslizó hacia la izquierda, va al siguiente
    }
    if (isRightSwipe) {
      prev() // Deslizó hacia la derecha, va al anterior
    }

    // Reiniciar estados
    setDragStartX(null)
    setDragEndX(null)
  }

  return (
    <section 
      id="inicio" 
      // Agregamos cursor-grab para PC
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden cursor-grab active:cursor-grabbing" 
      aria-label="Presentación principal"
      
      // Eventos para Mobile (Touch)
      onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
      onTouchEnd={handleDragEnd}
      
      // Eventos para Desktop (Mouse)
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd} // Por si el mouse sale del contenedor mientras arrastra
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          // Agregamos pointer-events-none para que la imagen no interfiera con el arrastre del mouse
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
            draggable={false} // Previene el comportamiento nativo de arrastrar imágenes en navegadores
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Red accent bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#dc1f1f]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center sm:mx-20">
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
            {/* onPointerDown={(e) => e.stopPropagation()} previene que al hacer clic en el botón se dispare el arrastre */}
            <div 
              className="flex flex-wrap gap-4"
              onPointerDown={(e) => e.stopPropagation()} 
            >
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
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-[#dc1f1f] text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/20"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-[#dc1f1f] text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/20"
        aria-label="Slide siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2" 
        role="tablist" 
        aria-label="Slides"
        onPointerDown={(e) => e.stopPropagation()}
      >
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