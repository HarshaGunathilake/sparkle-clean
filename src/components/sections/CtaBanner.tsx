'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CtaBanner() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800">
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-5xl mb-6">🌿</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready for a Cleaner Space?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Get a free, no-obligation site assessment. We come to you — anywhere across Melbourne.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Link href="/contact">
              <Button size="xl" variant="white" className="gap-2">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:040567721977">
              <Button size="xl" variant="white-outline" className="gap-2">
                <Phone className="w-4 h-4" /> 0405 677 92177
              </Button>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/55 text-sm">
            {['✓ No obligation', '✓ We come to you', '✓ Response within 24h', '✓ Free site assessment'].map(b => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
