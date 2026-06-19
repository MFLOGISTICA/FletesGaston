import Image from 'next/image'
import { Box, Archive, Shirt, Shield } from 'lucide-react'

const kitItems = [
  { icon: Box, label: 'Cajas identificadas' },
  { icon: Archive, label: 'Baúles' },
  { icon: Shirt, label: 'Percheros móviles' },
  { icon: Shield, label: 'Elementos de protección' },
]

export default function MovingKit() {
  return (
    <section className="py-20 bg-[#1a1a1a] overflow-hidden" aria-labelledby="kit-title">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-[#f0c800] text-[#1a1a1a] text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
              Kit de Mudanza
            </div>
            <h2
              id="kit-title"
              className="text-3xl md:text-4xl font-bold text-white mb-5 text-balance"
            >
              Todo lo necesario para una mudanza organizada
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              No necesitás comprar materiales adicionales. Contamos con un kit de mudanza completo, diseñado para facilitar todo el proceso y proteger al máximo tus pertenencias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {kitItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                    <div className="w-9 h-9 bg-[#f0c800]/20 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#f0c800]" aria-hidden="true" />
                    </div>
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                )
              })}
            </div>

            <a
              href="https://wa.me/5491163822653?text=Hola!%20Quiero%20saber%20sobre%20el%20kit%20de%20mudanza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f0c800] hover:bg-[#d4b000] text-[#1a1a1a] font-bold px-7 py-4 rounded text-base transition-all hover:scale-105"
            >
              Consultar sobre el Kit
            </a>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roperitos-a0Gy3JnpHReDTH8nJWhNQSxzVqmKWj.jpg"
                alt="Percheros móviles de madera con ropa colgada"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden mt-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-a2nlseQTEmgWOYPWnsn0bsZIprn1iJ.jpg"
                alt="Sofá completamente envuelto y asegurado para transporte"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-44 rounded-xl overflow-hidden col-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-yFtx47CnqG94F5CMSJt53jalKKSzLC.jpg"
                alt="Furgón cargado con materiales perfectamente organizados"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
