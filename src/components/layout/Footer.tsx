import React from 'react'
import Link from 'next/link'
import { Sparkles, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/services'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const col1 = SERVICES.slice(0, 5)
  const col2 = SERVICES.slice(5)

  return (
    <footer className="bg-brand-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="font-display font-bold text-base">Sparkle Clean</div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Melbourne's trusted eco-friendly cleaning specialists for homes and businesses. Clean Spaces. Better Living.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:040567721977" className="flex items-center gap-2.5 text-white/60 hover:text-brand-400 transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> 0405 677 92177
              </a>
              <a href="mailto:info@sparkleclean.com.au" className="flex items-center gap-2.5 text-white/60 hover:text-brand-400 transition-colors">
                <Mail className="w-4 h-4 shrink-0" /> info@sparkleclean.com.au
              </a>
              <div className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Altona Meadows 3028 VIC</span>
              </div>
            </div>
          </div>

          {/* Services col 1 */}
          <div>
            <div className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-5">Commercial</div>
            <ul className="space-y-2.5">
              {col1.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {s.icon} {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col 2 */}
          <div>
            <div className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-5">Specialist & Domestic</div>
            <ul className="space-y-2.5">
              {col2.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    {s.icon} {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-5">Company</div>
            <ul className="space-y-2.5 mb-6">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'All Services' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '/contact', label: 'Get Free Quote' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-1.5 text-xs text-white/40">
              <div>ABN: 29 686 853 663</div>
              <div>Established 2025</div>
              <div>Licensed Labour Hire Provider</div>
              <div>WorkSafe Victoria Compliant</div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>© 2025 Sparkle Clean. All rights reserved.</span>
          <span>Fully Insured · Eco-Friendly · Licensed · Melbourne, VIC</span>
        </div>
      </div>
    </footer>
  )
}
