import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 bg-secondary/30">
      <div className="text-center">
        <div className="text-7xl mb-6">🌿</div>
        <h1 className="font-display text-8xl font-bold text-brand-200 mb-4">404</h1>
        <h2 className="font-display text-2xl font-bold mb-3 text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
          Looks like this page got swept away. Let&apos;s get you back to a clean space.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/"><Button size="lg">Go Home</Button></Link>
          <Link href="/services"><Button variant="outline" size="lg">View Services</Button></Link>
        </div>
      </div>
    </section>
  )
}
