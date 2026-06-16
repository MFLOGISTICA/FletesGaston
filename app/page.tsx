import Navbar from '@/components/navbar'
import HeroSlider from '@/components/hero-slider'
import TrustBar from '@/components/trust-bar'
import ServicesSection from '@/components/services-section'
import WhyUs from '@/components/why-us'
import MovingKit from '@/components/moving-kit'
import ProcessSection from '@/components/process-section'
import ValuesSection from '@/components/values-section'
import TestimonialsSection from '@/components/testimonials-section'
import ServiceArea from '@/components/service-area'
import FinalCta from '@/components/final-cta'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <TrustBar />
      <ServicesSection />
      <WhyUs />
      <MovingKit />
      <ProcessSection />
      <ValuesSection />
      <TestimonialsSection />
      <ServiceArea />
      <FinalCta />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
