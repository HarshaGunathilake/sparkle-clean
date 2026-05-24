'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SERVICES } from '@/data/services'

const contactItems = [
  { icon: Phone, label: 'Phone', val: '0405 677 92177', href: 'tel:040567792177', color: 'bg-brand-100 text-brand-700' },
  { icon: Mail, label: 'Email', val: 'info@sparkleclean.com.au', href: 'mailto:info@sparkleclean.com.au', color: 'bg-blue-100 text-blue-700' },
  { icon: MapPin, label: 'Address', val: 'Altona Meadows 3028 VIC', href: null, color: 'bg-orange-100 text-orange-700' },
  { icon: Clock, label: 'Response Time', val: 'Within 24 hours', href: null, color: 'bg-violet-100 text-violet-700' },
]

const suburbs = ['Melbourne CBD', 'Western Suburbs', 'Eastern Suburbs', 'Northern Suburbs', 'Southern Suburbs', 'Mornington Peninsula']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', propertyType: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const update = (field: string, value: string) => {
    setForm(p => ({ ...p, [field]: value }))
    if (errors[field]) setErrors(p => { const n = { ...p }; delete n[field]; return n })
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-brand-300">Contact</span>
          </nav>
          <Badge className="mb-5 bg-brand-800 text-brand-300 border-brand-700">📬 Get In Touch</Badge>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5">
            Let&apos;s Get Your Space{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">Sparkling</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Request a free, no-obligation quote. We&apos;ll visit your site, assess your requirements, and provide a detailed quotation at zero cost.
          </p>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-5">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl font-bold mb-6">Contact Details</h2>
                <div className="space-y-3">
                  {contactItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</div>
                        {item.href
                          ? <a href={item.href} className="text-sm font-medium text-primary hover:text-brand-700 transition-colors">{item.val}</a>
                          : <div className="text-sm font-medium">{item.val}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Service area */}
              <motion.div className="bg-gradient-to-br from-brand-800 to-brand-950 rounded-2xl p-6 text-white"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                <div className="font-display font-bold text-lg mb-3">📍 Service Area</div>
                <p className="text-white/60 text-sm leading-relaxed mb-4">We service all Melbourne metropolitan suburbs. Contact us to confirm availability for your location.</p>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map(s => (
                    <span key={s} className="text-xs bg-white/10 border border-white/15 text-brand-300 rounded-full px-2.5 py-1">{s}</span>
                  ))}
                </div>
              </motion.div>

              {/* Business info */}
              <motion.div className="bg-white rounded-2xl border border-border p-5"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true }}>
                <div className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wider">Business Details</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {[['ABN', '29 686 853 663'], ['Established', '2025'], ['Insurance', 'Fully Insured'], ['Licence', 'Licensed Labour Hire']].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span>{k}</span><strong className="text-foreground">{v}</strong>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <div className="bg-white rounded-2xl border border-border p-8 shadow-lg">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-brand-500 mx-auto mb-5" />
                    <h3 className="font-display text-2xl font-bold mb-3">Thank You!</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      We&apos;ve received your enquiry and will be in touch within 24 hours to arrange your free site assessment.
                    </p>
                  </div>
                ) : (
                  <>
                    <Badge variant="brand" className="mb-4">✍️ Send Enquiry</Badge>
                    <h3 className="font-display text-2xl font-bold mb-2">Request a Free Quote</h3>
                    <p className="text-muted-foreground text-sm mb-6">Fill out the form and we&apos;ll be in touch within 24 hours.</p>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label>Full Name *</Label>
                          <Input placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)}
                            className={errors.name ? 'border-red-400' : ''} />
                          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                        </div>
                        <div className="space-y-1.5">
                          <Label>Phone *</Label>
                          <Input placeholder="04xx xxx xxx" value={form.phone} onChange={e => update('phone', e.target.value)}
                            className={errors.phone ? 'border-red-400' : ''} />
                          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label>Email Address</Label>
                        <Input type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)}
                          className={errors.email ? 'border-red-400' : ''} />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <Label>Service Required</Label>
                          <select className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            value={form.service} onChange={e => update('service', e.target.value)}>
                            <option value="">Select...</option>
                            {SERVICES.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <Label>Property Type</Label>
                          <select className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            value={form.propertyType} onChange={e => update('propertyType', e.target.value)}>
                            <option value="">Select...</option>
                            {['Office', 'Retail Store', 'Home', 'Strata Complex', 'Childcare Centre', 'Warehouse', 'Other'].map(t => <option key={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label>Message</Label>
                        <Textarea placeholder="Tell us about your property, size, and specific cleaning needs..." value={form.message} onChange={e => update('message', e.target.value)} className="min-h-[120px]" />
                      </div>

                      <Button className="w-full" size="lg" onClick={() => { if (validate()) setSubmitted(true) }}>
                        Request Free Quote →
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">✓ No obligation · ✓ We come to you · ✓ Response within 24h · ✓ Free site assessment</p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
