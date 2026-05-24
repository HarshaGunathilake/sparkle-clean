'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const steps = [
  { num: '01', icon: '📞', title: 'Free Consultation', desc: 'Contact us for a no-obligation site assessment. We visit your property and understand your exact cleaning requirements.' },
  { num: '02', icon: '📋', title: 'Custom Quote', desc: 'We provide a detailed, transparent quotation tailored to your schedule, budget, and operational needs — always free.' },
  { num: '03', icon: '✅', title: 'Scheduled Cleaning', desc: 'Our trained team arrives on time, fully equipped, and delivers high-quality eco-friendly results with minimal disruption.' },
  { num: '04', icon: '💬', title: 'Your Satisfaction', desc: 'We follow up after every clean to ensure complete satisfaction and continuously refine our service to your feedback.' },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="brand" className="mb-4">⚙️ How It Works</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Seamless</span> Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From first contact to spotless results — we make it effortless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative text-center group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              {/* Number bubble */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white border-2 border-brand-200 shadow-lg shadow-brand-100 flex flex-col items-center justify-center group-hover:border-brand-400 group-hover:shadow-brand-200 transition-all duration-300 relative z-10">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-xs font-bold text-brand-400 mt-0.5">{step.num}</span>
              </div>

              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
