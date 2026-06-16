import Image from 'next/image'
import { MapPin, CheckCircle2 } from 'lucide-react'

const areas = [
  'Pilar y Pilar Centro',
  'Zona Norte del GBA',
  'Ciudad de Buenos Aires',
  'Gran Buenos Aires',
  'Interior del país',
  'Traslados nacionales',
]

export default function ServiceArea() {
  return (
    <section className="py-20 bg-white" aria-labelledby="area-title">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ssgEZwqK2hjoNbATz5hODnF83p4rUK.jpg"
              alt="Camiones de Gastón Fletes y Mudanzas en zona norte de Buenos Aires"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#1a1a1a]/30" />
            {/* Location pin overlay */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <MapPin size={20} className="text-[#dc1f1f]" aria-hidden="true" />
              <div>
                <div className="font-bold text-[#1a1a1a] text-sm">Pilar, Buenos Aires</div>
                <div className="text-[#6b7280] text-xs">Zona de operación principal</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-[#dc1f1f] text-white text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
              Cobertura
            </div>
            <h2
              id="area-title"
              className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-5 text-balance"
            >
              Trabajamos en Pilar y alrededores
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              Brindamos servicios en Pilar, Zona Norte, Ciudad de Buenos Aires y realizamos mudanzas a todo el país. Dondequiera que necesites llegar, estamos ahí.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" aria-label="Zonas de cobertura">
              {areas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#dc1f1f] shrink-0" aria-hidden="true" />
                  <span className="text-[#1a1a1a] font-medium text-sm">{area}</span>
                </li>
              ))}
            </ul>

            {/* Map placeholder */}
            <div className="bg-[#f5f5f5] rounded-xl p-4 border border-gray-200 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#dc1f1f] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-[#1a1a1a] text-sm">Oficina Central</div>
                  <div className="text-[#6b7280] text-sm">25 de Mayo 1484, Pilar Centro</div>
                  <div className="text-[#6b7280] text-sm">Provincia de Buenos Aires</div>
                  <a
                    href="https://maps.google.com/?q=25+de+Mayo+1484+Pilar+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#dc1f1f] text-sm font-semibold hover:underline mt-1 inline-block"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5491163822653?text=Hola!%20Quiero%20saber%20si%20hacen%20mudanzas%20en%20mi%20zona"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#dc1f1f] hover:bg-[#b81515] text-white font-bold px-6 py-3 rounded transition-all hover:scale-105"
            >
              Consultar mi zona
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
