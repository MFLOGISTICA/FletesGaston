import { Home, Building2, Warehouse, Package, Users, Truck, BarChart3, Globe } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Mudanzas Particulares',
    description: 'Traslado seguro de hogares, departamentos y viviendas con todo el cuidado que tu familia merece.',
  },
  {
    icon: Building2,
    title: 'Mudanzas Empresariales',
    description: 'Traslado de oficinas, comercios y equipamiento empresarial con mínima interrupción operativa.',
  },
  {
    icon: Warehouse,
    title: 'Guardamuebles',
    description: 'Espacios para almacenamiento temporal de muebles y pertenencias, seguros y organizados.',
  },
  {
    icon: Package,
    title: 'Embalaje Profesional',
    description: 'Protección completa para objetos delicados y mobiliario con materiales de primera calidad.',
  },
  {
    icon: Users,
    title: 'Carga y Descarga',
    description: 'Personal capacitado para manipulación segura de todo tipo de objetos y volúmenes.',
  },
  {
    icon: Truck,
    title: 'Fletes y Traslados',
    description: 'Traslados programados y servicios especiales adaptados a tus necesidades y plazos.',
  },
  {
    icon: BarChart3,
    title: 'Logística y Distribución',
    description: 'Soluciones para empresas y movimientos planificados con seguimiento y organización.',
  },
  {
    icon: Globe,
    title: 'Mudanzas Nacionales',
    description: 'Traslados a diferentes puntos del país con la misma seguridad y profesionalismo de siempre.',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-[#f5f5f5]" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#dc1f1f] text-white text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
            Servicios
          </div>
          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 text-balance"
          >
            Soluciones completas para tu mudanza
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Contamos con todos los servicios necesarios para que tu mudanza sea una experiencia sin estrés, desde el primer contacto hasta la entrega final.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#dc1f1f] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[#dc1f1f]/10 group-hover:bg-[#dc1f1f] rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[#dc1f1f] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-base">{service.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#dc1f1f] hover:bg-[#b81515] text-white font-bold px-8 py-4 rounded text-base transition-all hover:scale-105 shadow-md"
          >
            Solicitar Presupuesto Gratis
          </a>
        </div>
      </div>
    </section>
  )
}
