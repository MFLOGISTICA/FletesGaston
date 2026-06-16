import { Clock, Shield, Award, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Clock,
    title: 'Puntualidad',
    description: 'Cumplimos los horarios acordados. Tu tiempo es valioso y lo respetamos.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'Responsabilidad',
    description: 'Tratamos cada objeto con el máximo cuidado, como si fuera nuestro.',
    color: 'bg-red-50',
    iconColor: 'text-[#dc1f1f]',
  },
  {
    icon: Award,
    title: 'Experiencia',
    description: 'Más de dos décadas realizando mudanzas nos dan el conocimiento para cualquier desafío.',
    color: 'bg-yellow-50',
    iconColor: 'text-[#d4b000]',
  },
  {
    icon: HeartHandshake,
    title: 'Atención Personalizada',
    description: 'Te acompañamos antes, durante y después del servicio. Siempre disponibles para vos.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="values-title">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#dc1f1f] text-white text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
            Nuestros Valores
          </div>
          <h2
            id="values-title"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 text-balance"
          >
            Por qué nuestros clientes nos eligen
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Cada mudanza es una oportunidad para demostrar nuestro compromiso con la excelencia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#dc1f1f] shadow-sm hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#dc1f1f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <Icon size={28} className={value.iconColor} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] text-lg mb-3">{value.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
