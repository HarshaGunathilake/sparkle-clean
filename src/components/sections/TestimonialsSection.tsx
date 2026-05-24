'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { TESTIMONIALS } from '@/data/company'

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-950 to-brand-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-brand-800 text-brand-300 border-brand-700">⭐ Client Reviews</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients <span className="text-brand-300">Say</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the Melbourne businesses and homeowners we clean for every week.
          </p>
        </motion.div>

        {/* Scrolling marquee */}
        <div className="relative">
          <div className="flex gap-5 animate-marquee w-max">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="w-80 shrink-0 bg-white/8 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-400/50" />
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-5 line-clamp-4">{t.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/45">{t.role} · {t.suburb}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-950 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-950 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
