import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { SERVICES } from '@/data/services'
import ContactFormInline from '@/components/sections/ContactFormInline'
import CtaBanner from '@/components/sections/CtaBanner'
import { cn } from '@/lib/utils'

export async function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.heroDesc,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug)
  if (!service) notFound()

  const related = SERVICES.filter(s => s.slug !== service.slug && s.category === service.category).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
            <span>›</span>
            <span className="text-brand-300">{service.title}</span>
          </nav>

          <div className="flex items-start gap-6 flex-wrap">
            <div className={cn('w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center text-4xl shrink-0 shadow-2xl', service.color)}>
              {service.icon}
            </div>
            <div className="flex-1 min-w-0">
              <Badge className="mb-3 capitalize bg-brand-800 text-brand-300 border-brand-700">{service.category} Service</Badge>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{service.title}</h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl">{service.heroDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Benefits */}
              <div className="bg-white rounded-2xl border border-border p-8">
                <Badge variant="brand" className="mb-4">✅ What&apos;s Included</Badge>
                <h2 className="font-display text-2xl font-bold mb-6">Service Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-brand-50 border border-brand-100">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-800">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl border border-border p-8">
                <Badge variant="brand" className="mb-4">⚙️ Process</Badge>
                <h2 className="font-display text-2xl font-bold mb-6">How It Works</h2>
                <div className="space-y-0">
                  {service.process.map((p, i) => (
                    <div key={i} className="flex gap-5 relative pb-6 last:pb-0">
                      {i < service.process.length - 1 && (
                        <div className="absolute left-5 top-10 w-0.5 h-full bg-gradient-to-b from-brand-200 to-transparent" />
                      )}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-lg shadow-brand-200 z-10">
                        {i + 1}
                      </div>
                      <div className="pt-1.5">
                        <div className="font-semibold mb-1">{p.step}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl border border-border p-8">
                <Badge variant="brand" className="mb-4">❓ FAQs</Badge>
                <h2 className="font-display text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                      <AccordionContent>{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quote form */}
              <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="font-display text-xl font-bold mb-1">Get a Free Quote</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Request a no-obligation quote for {service.title.toLowerCase()}.
                </p>
                <ContactFormInline defaultService={service.title} />
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-brand-800 to-brand-950 rounded-2xl p-6 text-white">
                <div className="font-display font-bold text-lg mb-4">Prefer to talk?</div>
                <div className="space-y-3">
                  <a href="tel:040567792177" className="flex items-center gap-3 text-sm text-white/75 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Phone className="w-3.5 h-3.5" /></div>
                    0405 677 92177
                  </a>
                  <a href="mailto:info@sparkleclean.com.au" className="flex items-center gap-3 text-sm text-white/75 hover:text-white transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"><Mail className="w-3.5 h-3.5" /></div>
                    info@sparkleclean.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                  <div className="bg-secondary/50 rounded-2xl p-5 border border-border hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl block mb-3">{s.icon}</span>
                    <div className="font-semibold mb-1 group-hover:text-primary transition-colors">{s.title}</div>
                    <div className="text-sm text-muted-foreground mb-3">{s.shortDesc}</div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View details <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services">
                <Button variant="outline">← Back to All Services</Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}
