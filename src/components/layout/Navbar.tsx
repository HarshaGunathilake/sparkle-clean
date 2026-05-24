'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/data/services'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const commercial = SERVICES.filter(s => s.category === 'commercial')
  const specialist = SERVICES.filter(s => s.category === 'specialist')
  const domestic = SERVICES.filter(s => s.category === 'domestic')

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-800 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center gap-4 flex-wrap">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">📧 info@sparkleclean.com.au</span>
            <span className="hidden md:flex items-center gap-1.5">📍 Altona Meadows, Melbourne VIC</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">✓ Fully Insured</span>
            <span className="flex items-center gap-1.5">✓ Eco-Friendly</span>
            <span className="flex items-center gap-1.5">✓ Licensed</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border'
            : 'bg-white border-b border-transparent'
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-base text-foreground">Sparkle Clean</div>
                <div className="text-[10px] text-muted-foreground tracking-widest uppercase">Melbourne</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className={cn('px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-accent', pathname === '/' ? 'text-primary' : 'text-foreground/70')}>
                Home
              </Link>

              {/* Services mega dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className={cn('flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-accent', pathname.startsWith('/services') ? 'text-primary' : 'text-foreground/70')}>
                  Services
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', servicesOpen && 'rotate-180')} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-white rounded-2xl shadow-2xl border border-border p-6"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {[
                          { label: '🏢 Commercial', items: commercial },
                          { label: '✨ Specialist', items: specialist },
                          { label: '🏠 Domestic', items: domestic },
                        ].map(col => (
                          <div key={col.label}>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 pb-2 border-b border-border">{col.label}</div>
                            <div className="space-y-1">
                              {col.items.map(s => (
                                <Link key={s.slug} href={`/services/${s.slug}`}
                                  className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-foreground/80 hover:text-primary hover:bg-accent transition-colors group"
                                >
                                  <span>{s.icon}</span>
                                  <span className="group-hover:translate-x-0.5 transition-transform">{s.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <Link href="/services" className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-primary hover:text-brand-700 transition-colors">
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className={cn('px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-accent', pathname === '/about' ? 'text-primary' : 'text-foreground/70')}>
                About
              </Link>
              <Link href="/contact" className={cn('px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-accent', pathname === '/contact' ? 'text-primary' : 'text-foreground/70')}>
                Contact
              </Link>
            </nav>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <a href="tel:040567792177">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> 0405 677 92177
                </Button>
              </a>
              <Link href="/contact">
                <Button size="sm">Free Quote</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-border bg-white overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {[{ href: '/', label: 'Home' }, { href: '/services', label: 'All Services' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }].map(l => (
                  <Link key={l.href} href={l.href} className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                ))}
                <div className="pt-2 pb-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider px-3 mb-2">Services</div>
                  {SERVICES.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm hover:bg-accent hover:text-primary transition-colors">
                      <span>{s.icon}</span> {s.title}
                    </Link>
                  ))}
                </div>
                <div className="pt-2">
                  <Link href="/contact">
                    <Button className="w-full" size="sm">Get Free Quote</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
