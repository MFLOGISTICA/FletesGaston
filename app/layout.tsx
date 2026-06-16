import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Fletes y Mudanzas Gastón | Pilar, Buenos Aires',
  description:
    'Más de 20 años realizando mudanzas particulares y empresariales. Guardamuebles, embalaje profesional y fletes a todo el país. Pilar, Buenos Aires.',
  keywords: 'mudanzas pilar, fletes pilar, mudanzas buenos aires, guardamuebles pilar, embalaje profesional',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#dc1f1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
