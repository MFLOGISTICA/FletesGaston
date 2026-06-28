import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'

export default function FinalCta() {
  return (
    <section className="relative py-24 overflow-hidden" aria-label="Llamada a la acción final">
      {/* Background image */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-zexn9IEpySp4xM8QKMFfFL9FJy2Pvb.webp"
        alt="Camión Gastón Mudanzas en ruta"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1a1a]/80" />
      {/* Red bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#dc1f1f]" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block bg-[#f0c800] text-[#1a1a1a] text-xs font-bold px-4 py-1.5 rounded mb-6 uppercase tracking-wider">
          ¡Pedí tu Presupuesto!
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
          Tu próxima mudanza puede ser mucho más simple
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Solicitá tu presupuesto personalizado y dejá tu mudanza en manos de profesionales con más de 25 años de experiencia.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto%20para%20mi%20mudanza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded text-lg transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle size={22} aria-hidden="true" />
            Enviar WhatsApp
          </a>
          <a
            href="tel:01163822653"
            className="inline-flex items-center gap-3 bg-[#dc1f1f] hover:bg-[#b81515] text-white font-bold px-8 py-4 rounded text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Phone size={22} aria-hidden="true" />
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
