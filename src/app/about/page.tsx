'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FEATURES, TRUST_ITEMS } from '@/data/company'
import CtaBanner from '@/components/sections/CtaBanner'

const values = [
  { icon: '🌱', title: 'Sustainability', desc: 'We use only environmentally responsible products and methods, minimising our ecological footprint with every clean.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest, transparent, and reliable in everything we do — from quoting to delivery, we always do what we say.' },
  { icon: '⭐', title: 'Excellence', desc: 'We hold ourselves to the highest standards and continuously improve our services based on client feedback.' },
  { icon: '❤️', title: 'Care', desc: 'We genuinely care about our clients, their spaces, and the communities we serve across Melbourne.' },
]

const timeline = [
  { year: '2024', event: 'Sammy Gunathilake completes 5 years as Maintenance Team Leader in Melbourne\'s commercial cleaning industry.' },
  { year: 'Early 2025', event: 'Sparkle Clean is founded with a mission to bring professional, eco-friendly cleaning to Melbourne homes and businesses.' },
  { year: '2025', event: 'Achieved Licensed Labour Hire Provider status and WorkSafe Victoria compliance.' },
  { year: 'Today', event: 'Serving 500+ happy clients across Melbourne with 10+ service categories and growing.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-brand-300">About</span>
          </nav>
          <Badge className="mb-5 bg-brand-800 text-brand-300 border-brand-700">🌿 Our Story</Badge>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">Sparkle Clean</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            A Melbourne cleaning company built on professionalism, integrity, and a genuine passion for creating clean, healthy environments.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Badge variant="brand" className="mb-4">👤 Our Founder</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Led by Experience,<br />
              <span className="gradient-text">Driven by Standards</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              Sparkle Clean was founded by <strong className="text-foreground">Harsha Gunathilake</strong>, who brings deep hands-on experience from his time as a Maintenance Team Leader at a large Melbourne-based commercial cleaning company.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              That experience gave a comprehensive understanding of what clients truly need — reliable service, attention to detail, and the confidence that comes from working with a team that genuinely cares about results. He founded Sparkle Clean in 2025 with a clear mission: to provide high-quality, eco-friendly cleaning services to both residential and commercial clients across Melbourne.
            </p>
            <div className="flex flex-wrap gap-2">
              {TRUST_ITEMS.map(item => (
                <span key={item} className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 border border-brand-200 rounded-full px-3 py-1 text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3" /> {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            {/* Founder card */}
            <div className="bg-gradient-to-br from-brand-800 to-brand-950 rounded-3xl p-8 text-white mb-5">
              <div className="w-16 h-16 rounded-2xl bg-brand-600 flex items-center justify-center text-3xl mb-5">🌿</div>
              <div className="font-display font-bold text-2xl mb-1">Harsha Gunathilake</div>
              <div className="text-brand-400 text-sm mb-6 uppercase tracking-wider">Founder & Director</div>
              <blockquote className="text-white/75 leading-relaxed italic border-l-2 border-brand-400 pl-4">
                &ldquo;I started Sparkle Clean because I knew there was a better way — one that combines professional results with environmentally responsible practices. Every client deserves a space they&apos;re proud of.&rdquo;
              </blockquote>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[{ v: '2025', l: 'Founded' }, { v: '10+', l: 'Services' }, { v: '100%', l: 'Eco Products' }].map((s, i) => (
                <div key={i} className="text-center p-4 bg-brand-50 rounded-2xl border border-brand-100">
                  <div className="font-display font-bold text-2xl text-brand-600">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <Badge variant="brand" className="mb-4">🎯 What Drives Us</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our Mission & <span className="gradient-text">Vision</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🚀', title: 'Our Mission', color: 'bg-blue-50 border-blue-200', tc: 'text-blue-700', content: 'To deliver high-quality, reliable, and eco-friendly cleaning services that create clean, safe, and healthy environments for our clients across Australia. We are committed to exceeding expectations through attention to detail, professional service, and sustainable practices.' },
              { icon: '🔭', title: 'Our Vision', color: 'bg-violet-50 border-violet-200', tc: 'text-violet-700', content: 'To become a trusted and leading cleaning service provider across Australia — known for our commitment to quality, innovation, and environmentally responsible solutions. We aim to build long-term client relationships while continuously expanding our national presence.' },
              { icon: '🌿', title: 'Our Promise', color: 'bg-brand-50 border-brand-200', tc: 'text-brand-700', content: '"Clean Spaces. Better Living." Every clean we deliver is a step toward healthier homes, more productive workplaces, and a greener planet. We stand behind our work with a satisfaction guarantee and always respond within 24 hours.' },
            ].map((item, i) => (
              <motion.div key={i} className={`rounded-2xl border p-8 ${item.color}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`font-display text-xl font-bold mb-3 ${item.tc}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <Badge variant="brand" className="mb-4">💚 What We Stand For</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={i} className="group bg-secondary/50 rounded-2xl p-6 text-center border border-border hover:bg-white hover:shadow-xl hover:border-brand-200 hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <Badge variant="brand" className="mb-4">📅 Our Journey</Badge>
            <h2 className="font-display text-4xl font-bold">How We Got Here</h2>
          </motion.div>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div key={i} className="flex gap-5" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-lg">✓</div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-brand-200 mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="font-display font-bold text-brand-600 mb-1">{t.year}</div>
                  <p className="text-muted-foreground leading-relaxed">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <Badge variant="brand" className="mb-4">🛡️ Why Choose Us</Badge>
            <h2 className="font-display text-4xl font-bold">
              The Sparkle Clean <span className="gradient-text">Difference</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={i} className="flex gap-4 p-5 bg-secondary/50 rounded-2xl border border-border hover:bg-white hover:border-brand-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
                <div className="text-2xl">{f.icon}</div>
                <div>
                  <div className="font-semibold mb-1">{f.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
