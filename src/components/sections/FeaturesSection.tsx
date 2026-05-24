'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { FEATURES } from '@/data/company'

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="brand" className="mb-4">💚 Why Choose Us</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              More Than Just{' '}
              <span className="gradient-text">Cleaning</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We&apos;re a team of dedicated professionals who believe a clean space is the foundation for health, wellness, and productivity. Every clean we deliver is backed by years of experience, proper licensing, and genuine care.
            </p>

            {/* Founder quote */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
              <p className="text-brand-800 italic leading-relaxed mb-4">
                &ldquo;I started Sparkle Clean because I knew there was a better way — one that combines professional results with environmentally responsible practices. Every client deserves a space they&apos;re proud of.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-xl">🌿</div>
                <div>
                  <div className="font-semibold text-brand-900 text-sm">Oliver Harris</div>
                  <div className="text-brand-600 text-xs">Founder & Director</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                className="bg-secondary/50 rounded-2xl p-5 border border-border hover:border-primary/30 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
