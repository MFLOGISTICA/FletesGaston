'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/5491163822653?text=Hola!%20Quiero%20solicitar%20un%20presupuesto%20para%20mi%20mudanza"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1db954] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 group ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <MessageCircle size={28} aria-hidden="true" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" aria-hidden="true" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-[#1a1a1a] text-white text-xs font-semibold px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chateá con nosotros
      </span>
    </a>
  )
}
