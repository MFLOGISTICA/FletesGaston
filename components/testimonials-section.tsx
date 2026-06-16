'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mercedes Barreto',
    stars: 5,
    text: 'Hicimos una mudanza y todo se realizó en tiempo y forma. Excelente atención, profesionalismo y cuidado. Muy recomendables.',
  },
  {
    name: 'Lam Bastidores',
    stars: 5,
    text: 'Trasladaron una obra de gran tamaño con muchísimo cuidado. Puntuales y profesionales. No podría haber salido mejor.',
  },
  {
    name: 'Nati Tondo',
    stars: 5,
    text: 'Mudanza impecable, responsables y comprometidos. Súper recomendables. Un servicio que supera todas las expectativas.',
  },
  {
    name: 'Fernando Grassi',
    stars: 5,
    text: 'Muy responsables y cuidadosos con todas las pertenencias. Todo llegó en perfectas condiciones. Excelente servicio.',
  },
  {
    name: 'Martin Loboda',
    stars: 5,
    text: 'Llegaron antes del horario acordado y todo llegó en perfectas condiciones. Definitivamente los voy a volver a contratar.',
  },
  {
    name: 'Alejandro Marotta',
    stars: 5,
    text: 'Rápidos, atentos y amables. Exactamente lo que se necesita para una mudanza sin estrés. 100% recomendados.',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const totalPages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(current * perPage, current * perPage + perPage)

  return (
    <section id="testimonios" className="py-20 bg-[#f5f5f5]" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#dc1f1f] text-white text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
            Testimonios
          </div>
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 text-balance"
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            La satisfacción de quienes confiaron en nosotros es la mejor prueba de nuestro trabajo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t) => (
            <article
              key={t.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-6xl text-[#dc1f1f]/10 font-serif leading-none select-none" aria-hidden="true">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${t.stars} estrellas`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#f0c800] text-[#f0c800]" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-[#374151] text-sm leading-relaxed mb-5 relative z-10">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#dc1f1f] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#1a1a1a] text-sm">{t.name}</div>
                  <div className="text-[#6b7280] text-xs">Cliente verificado</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              disabled={current === 0}
              className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-[#dc1f1f] hover:border-[#dc1f1f] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all text-[#1a1a1a]"
              aria-label="Testimonios anteriores"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-current={i === current ? 'true' : undefined}
                  aria-label={`Página ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-[#dc1f1f] w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => Math.min(totalPages - 1, p + 1))}
              disabled={current === totalPages - 1}
              className="p-2.5 rounded-full border border-gray-200 bg-white hover:bg-[#dc1f1f] hover:border-[#dc1f1f] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all text-[#1a1a1a]"
              aria-label="Testimonios siguientes"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Google rating summary */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-[#f0c800] text-[#f0c800]" aria-hidden="true" />
              ))}
            </div>
            <div>
              <span className="font-bold text-[#1a1a1a]">5.0</span>
              <span className="text-[#6b7280] text-sm ml-1">en Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
