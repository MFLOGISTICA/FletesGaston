import { Award, Truck, Warehouse, Package, MapPin } from 'lucide-react'

const items = [
  { icon: Award, text: 'Más de 25 años de experiencia' },
  { icon: Truck, text: 'Mudanzas particulares y empresariales' },
  { icon: Warehouse, text: 'Guardamuebles' },
  { icon: Package, text: 'Embalaje profesional' },
  { icon: MapPin, text: 'Mudanzas a todo el país' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#1a1a1a] py-5 border-t-4 border-[#dc1f1f]" aria-label="Nuestros servicios destacados">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.text} className="flex items-center gap-2.5 text-white">
                <Icon size={20} className="text-[#f0c800] shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold whitespace-nowrap">{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
