import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import ServicesSection from '@/components/sections/ServicesSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}
