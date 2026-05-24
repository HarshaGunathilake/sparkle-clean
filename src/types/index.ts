export interface Service {
  slug: string
  icon: string
  title: string
  shortDesc: string
  category: 'commercial' | 'domestic' | 'specialist'
  color: string
  heroDesc: string
  benefits: string[]
  process: { step: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  suburb: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  propertyType: string
}
