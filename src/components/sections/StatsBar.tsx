'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { STATS } from '@/data/company'

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-border py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-display font-bold text-4xl text-brand-600 mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
