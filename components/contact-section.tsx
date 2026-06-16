import { MapPin, Phone, Clock, MessageCircle, Share2, Camera } from 'lucide-react'

const hours = [
  { day: 'Lunes a Viernes', time: '7:30 a.m. – 6:00 p.m.' },
  { day: 'Sábado', time: '8:00 a.m. – 1:00 p.m.' },
  { day: 'Domingo', time: 'Cerrado' },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-[#f5f5f5]" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#dc1f1f] text-white text-xs font-bold px-4 py-1.5 rounded mb-4 uppercase tracking-wider">
            Contacto
          </div>
          <h2
            id="contact-title"
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 text-balance"
          >
            Estamos listos para ayudarte
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Contactanos por cualquier medio y te respondemos a la brevedad con un presupuesto sin cargo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-11 h-11 bg-[#dc1f1f]/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#dc1f1f]" aria-hidden="true" />
              </div>
              <div>
                <div className="font-bold text-[#1a1a1a] text-sm mb-1">Dirección</div>
                <p className="text-[#6b7280] text-sm">25 de Mayo 1484, Pilar Centro</p>
                <p className="text-[#6b7280] text-sm">Provincia de Buenos Aires</p>
                <a
                  href="https://maps.google.com/?q=25+de+Mayo+1484+Pilar+Buenos+Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#dc1f1f] text-xs font-semibold hover:underline mt-1 inline-block"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-11 h-11 bg-[#dc1f1f]/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#dc1f1f]" aria-hidden="true" />
              </div>
              <div>
                <div className="font-bold text-[#1a1a1a] text-sm mb-1">Teléfono / WhatsApp</div>
                <a href="tel:01163822653" className="text-[#6b7280] text-sm hover:text-[#dc1f1f] transition-colors">
                  011 6382-2653
                </a>
                <div className="flex gap-2 mt-2">
                  <a
                    href="tel:01163822653"
                    className="text-xs bg-[#dc1f1f] text-white px-3 py-1 rounded font-semibold hover:bg-[#b81515] transition-colors"
                  >
                    Llamar
                  </a>
                  <a
                    href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-[#25D366] text-white px-3 py-1 rounded font-semibold hover:bg-[#1db954] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-11 h-11 bg-[#dc1f1f]/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#dc1f1f]" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-[#1a1a1a] text-sm mb-2">Horarios de Atención</div>
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm mb-1">
                    <span className="text-[#374151] font-medium">{h.day}</span>
                    <span className={`${h.time === 'Cerrado' ? 'text-[#dc1f1f]' : 'text-[#6b7280]'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-11 h-11 bg-[#dc1f1f]/10 rounded-lg flex items-center justify-center shrink-0">
                <MessageCircle size={20} className="text-[#dc1f1f]" aria-hidden="true" />
              </div>
              <div>
                <div className="font-bold text-[#1a1a1a] text-sm mb-2">Redes Sociales</div>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/mudanzasyfletesgaston/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#E1306C] transition-colors font-medium"
                  >
                    <Camera size={16} aria-hidden="true" />
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/FletesGastonPilar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#1877F2] transition-colors font-medium"
                  >
                    <Share2 size={16} aria-hidden="true" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1a1a1a] text-xl mb-6">Solicitar Presupuesto</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const name = (form.elements.namedItem('name') as HTMLInputElement)?.value
                const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value
                const text = encodeURIComponent(`Hola! Soy ${name}. Mi teléfono es ${phone}. ${message}`)
                window.open(`https://wa.me/5491163822653?text=${text}`, '_blank')
              }}
              aria-label="Formulario de contacto"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#dc1f1f] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Tu número de teléfono"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#dc1f1f] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1">
                    Descripción de la mudanza
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Contanos desde dónde y hacia dónde, qué necesitás mover..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#dc1f1f] focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#dc1f1f] hover:bg-[#b81515] text-white font-bold py-4 rounded-lg text-base transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
