'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SERVICES } from '@/data/services'
import { CheckCircle2 } from 'lucide-react'

interface Props { defaultService?: string }

export default function ContactFormInline({ defaultService = '' }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: defaultService, message: '' })
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

  if (submitted) return (
    <div className="text-center py-8">
      <CheckCircle2 className="w-12 h-12 text-brand-500 mx-auto mb-4" />
      <div className="font-display font-bold text-lg mb-2">Thank You!</div>
      <p className="text-sm text-muted-foreground">We&apos;ll be in touch within 24 hours to arrange your free assessment.</p>
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label>Name *</Label>
          <Input placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)}
            className={errors.name ? 'border-red-400 focus-visible:ring-red-300' : ''} />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label>Phone *</Label>
          <Input placeholder="04xx xxx xxx" value={form.phone} onChange={e => update('phone', e.target.value)}
            className={errors.phone ? 'border-red-400 focus-visible:ring-red-300' : ''} />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label>Email</Label>
        <Input type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)}
          className={errors.email ? 'border-red-400 focus-visible:ring-red-300' : ''} />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-1.5">
        <Label>Service</Label>
        <select className="flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 transition-colors"
          value={form.service} onChange={e => update('service', e.target.value)}>
          <option value="">Select a service...</option>
          {SERVICES.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
        </select>
      </div>

      <div className="space-y-1.5">
        <Label>Message</Label>
        <Textarea placeholder="Tell us about your property and needs..." value={form.message} onChange={e => update('message', e.target.value)} />
      </div>

      <Button className="w-full" size="lg" onClick={() => { if (validate()) setSubmitted(true) }}>
        Request Free Quote →
      </Button>
      <p className="text-xs text-center text-muted-foreground">✓ No obligation · ✓ Response within 24h</p>
    </div>
  )
}
