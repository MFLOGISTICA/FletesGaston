import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Personal capacitado y uniformado',
  'Vehículos habilitados y asegurados',
  'Embalaje con materiales de primera calidad',
  'Puntualidad garantizada',
  'Asesoramiento previo sin cargo',
  'Empresa familiar con trayectoria comprobada',
]

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-20 bg-white" aria-labelledby="whyus-title">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative h-56 rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-26qaTyfl1kuvWE8OvE0dNlkncDT1Ge.jpg"
                    alt="Equipo de Gastón empacando sofás con cuidado"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-iSwXWF4OnZxZ1YhnDYfEnqw7t6b0yQ.jpg"
                    alt="Trabajadores asegurando mueble con cintas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-zvzmTMa3TM5xyfoVcfUJRz0CwQu8C9.jpg"
                    alt="Mudanza en altura, subiendo mueble a segundo piso"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-56 rounded-xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-pBhbsksLs4c9AYEoYrtF94zDunTCOj.png"
                    alt="Vehículo Gastón Fletes y Mudanzas al atardecer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#dc1f1f] text-white rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-black leading-none">20+</div>
              <div className="text-xs font-semibold uppercase tracking-wide mt-1">Años de<br />Trayectoria</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-[#dc1f1f] text-white text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
              Quiénes Somos
            </div>
            <h2
              id="whyus-title"
              className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-5 text-balance"
            >
              Más de 20 años ayudando a familias y empresas
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">
              Somos una empresa familiar con una amplia trayectoria brindando servicios de mudanzas, traslados, logística y guardamuebles en Pilar y toda la región.
            </p>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              Disponemos de unidades habilitadas y personal experimentado para garantizar que cada pertenencia llegue en perfectas condiciones, tratando cada objeto como si fuera propio.
            </p>

            <ul className="space-y-3 mb-8" aria-label="Características del servicio">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#dc1f1f] shrink-0" aria-hidden="true" />
                  <span className="text-[#1a1a1a] font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#dc1f1f] hover:bg-[#b81515] text-white font-bold px-6 py-3 rounded transition-all hover:scale-105"
              >
                Pedir Presupuesto
              </a>
              <a
                href="tel:01163822653"
                className="border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-bold px-6 py-3 rounded transition-all"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
