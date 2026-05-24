'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SERVICES } from '@/data/services'
import CtaBanner from '@/components/sections/CtaBanner'
import { cn } from '@/lib/utils'

type Filter = 'all' | 'commercial' | 'specialist' | 'domestic'

const tabs: { key: Filter; label: string; desc: string }[] = [
  { key: 'all', label: 'All Services', desc: 'Our complete range of cleaning solutions' },
  { key: 'commercial', label: '🏢 Commercial', desc: 'For businesses and commercial properties' },
  { key: 'specialist', label: '✨ Specialist', desc: 'Deep cleaning and specialist techniques' },
  { key: 'domestic', label: '🏠 Domestic', desc: 'For homes and residential properties' },
]

export default function ServicesPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const filtered = filter === 'all' ? SERVICES : SERVICES.filter(s => s.category === filter)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-brand-300">Services</span>
          </nav>
          <Badge className="mb-5 bg-brand-800 text-brand-300 border-brand-700">🧹 What We Offer</Badge>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-5">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">Services</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            From regular office cleans to specialist carpet and floor treatments — a service for every space and every need.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-2 flex-wrap mb-10">
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setFilter(tab.key)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                  filter === tab.key
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white border border-border text-foreground/70 hover:border-primary/30 hover:text-primary'
                )}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-center mb-8 text-sm text-muted-foreground">
            {tabs.find(t => t.key === filter)?.desc} —{' '}
            <strong className="text-primary">{filtered.length} services</strong>
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => (
                <motion.div key={service.slug} layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                >
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <div className="h-full bg-white rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative overflow-hidden">
                      <div className={cn('absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300', service.color)} />
                      <div className="absolute top-4 right-4">
                        <Badge variant="brand" className="capitalize text-[10px]">{service.category}</Badge>
                      </div>
                      <div className={cn('w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-2xl mb-5 shadow-lg', service.color)}>
                        {service.icon}
                      </div>
                      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors pr-16">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.shortDesc}</p>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {service.benefits.slice(0, 1).map(b => (
                            <span key={b} className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full truncate max-w-[140px]">{b}</span>
                          ))}
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
