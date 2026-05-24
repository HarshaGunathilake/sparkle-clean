'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle2, Star, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const checks = ['Fully Insured & Licensed', '100% Eco-Friendly Products', 'Free Site Assessment', 'Flexible Scheduling']

const floatingCards = [
  { icon: '⭐', label: '5-Star Rated', sub: '200+ reviews', x: 'right-4 md:right-12', y: 'top-24', delay: 0.8 },
  { icon: '🌱', label: 'Eco-Friendly', sub: '100% green products', x: 'left-4 md:left-8', y: 'bottom-32', delay: 1.0 },
  { icon: '✅', label: 'Fully Insured', sub: 'WorkSafe Victoria', x: 'right-4 md:right-8', y: 'bottom-24', delay: 1.2 },
]

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="brand-dark" className="mb-6 gap-1.5 text-brand-200 bg-brand-800/80 border border-brand-700">
                <Sparkles className="w-3 h-3" />
                Melbourne&apos;s #1 Eco-Friendly Cleaning Service
              </Badge>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Clean Spaces.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300">
                Better Living.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/65 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional, eco-friendly cleaning solutions for homes and businesses across Melbourne. Reliable, thorough, and tailored to your needs.
            </motion.p>

            {/* Checklist */}
            <motion.div
              className="grid grid-cols-2 gap-2.5 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {checks.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/75">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button size="xl" variant="white" className="gap-2">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:0405677977">
                <Button size="xl" variant="white-outline" className="gap-2">
                  <Phone className="w-4 h-4" /> Call Now
                </Button>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex -space-x-2">
                {['🧑', '👩', '👨', '🧑‍💼', '👩‍💼'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-brand-700 border-2 border-brand-900 flex items-center justify-center text-sm">
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <div className="text-xs text-white/50 mt-0.5">500+ happy clients across Melbourne</div>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <motion.div
              className="relative mx-auto w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-4xl mb-4 shadow-xl shadow-brand-500/40 animate-float">
                    🌿
                  </div>
                  <div className="font-display font-bold text-2xl text-white mb-1">Sparkle Clean</div>
                  <div className="text-brand-300 text-sm">Melbourne&apos;s Eco Cleaning Experts</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { v: '10+', l: 'Services' },
                    { v: '500+', l: 'Clients' },
                    { v: '100%', l: 'Eco-Friendly' },
                    { v: '5★', l: 'Rating' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="font-display font-bold text-xl text-white">{s.v}</div>
                      <div className="text-xs text-white/55">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-xl p-3 text-center text-sm text-white/70">
                  📍 Serving all Melbourne suburbs
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${card.x} ${card.y} glass rounded-xl px-3 py-2 shadow-xl`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: card.delay }}
                  style={{ animation: `float ${3.5 + i * 0.5}s ease-in-out ${i * 1.2}s infinite` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{card.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-foreground">{card.label}</div>
                      <div className="text-[10px] text-muted-foreground">{card.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 37 720 42.7C840 48 960 48 1080 42.7C1200 37 1320 27 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="hsl(120 20% 98%)" />
        </svg>
      </div>
    </section>
  )
}
