const steps = [
  {
    number: '01',
    title: 'Contacto y asesoramiento',
    description: 'Nos contactás y analizamos tus necesidades. Te brindamos orientación personalizada sin cargo.',
  },
  {
    number: '02',
    title: 'Cotización personalizada',
    description: 'Te enviamos un presupuesto claro, detallado y sin sorpresas, adaptado a tu situación.',
  },
  {
    number: '03',
    title: 'Embalaje y preparación',
    description: 'Nuestro equipo protege cada objeto con los materiales adecuados antes del traslado.',
  },
  {
    number: '04',
    title: 'Traslado seguro',
    description: 'Realizamos la carga y transporte profesional con vehículos habilitados y personal capacitado.',
  },
  {
    number: '05',
    title: 'Entrega organizada',
    description: 'Todo llega en tiempo y forma al destino, colocado donde vos necesitás.',
  },
]

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-20 bg-[#f5f5f5]" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#dc1f1f] text-white text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
            Cómo Funciona
          </div>
          <h2
            id="process-title"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 text-balance"
          >
            Un proceso simple y sin estrés
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Cada mudanza tiene un método probado que garantiza orden, seguridad y tranquilidad en cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-[#e5e7eb] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Number circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-5 border-4 shadow-md ${
                    index === 0 || index === steps.length - 1
                      ? 'bg-[#dc1f1f] border-[#dc1f1f] text-white'
                      : 'bg-white border-[#dc1f1f] text-[#dc1f1f]'
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-sm">{step.title}</h3>
                <p className="text-[#6b7280] text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/5491163822653?text=Hola!%20Quiero%20comenzar%20con%20el%20proceso%20de%20mudanza"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#dc1f1f] hover:bg-[#b81515] text-white font-bold px-8 py-4 rounded text-base transition-all hover:scale-105 shadow-md"
          >
            Comenzar mi mudanza
          </a>
        </div>
      </div>
    </section>
  )
}
