'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/data/services'
import { cn } from '@/lib/utils'

type Filter = 'all' | 'commercial' | 'specialist' | 'domestic'

const tabs: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Services' },
  { key: 'commercial', label: '🏢 Commercial' },
  { key: 'specialist', label: '✨ Specialist' },
  { key: 'domestic', label: '🏠 Domestic' },
]

export default function ServicesSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const filtered = filter === 'all' ? SERVICES : SERVICES.filter(s => s.category === filter)

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="brand" className="mb-4">🧹 Our Services</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive cleaning solutions tailored to every space and every need — from offices to homes.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center gap-2 flex-wrap mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                filter === tab.key
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white border border-border text-foreground/70 hover:border-primary/30 hover:text-primary'
              )}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <div className="h-full bg-white rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                    {/* Icon with gradient bg */}
                    <div className={cn('w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-2xl mb-5 shadow-lg', service.color, 'opacity-90')}>
                      {service.icon}
                    </div>

                    <Badge variant="brand" className="mb-3 w-fit capitalize text-[11px]">{service.category}</Badge>

                    <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.shortDesc}</p>

                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <Button variant="outline" size="lg" className="gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
