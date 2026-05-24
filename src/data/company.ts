import { Testimonial, Stat } from '@/types'

export const STATS: Stat[] = [
  { value: '500+', label: 'Happy Clients', icon: '😊' },
  { value: '12+', label: 'Services Offered', icon: '✨' },
  { value: '100%', label: 'Eco-Friendly', icon: '🌱' },
  { value: '5★', label: 'Average Rating', icon: '⭐' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Office Manager',
    suburb: 'South Yarra',
    content: 'Sparkle Clean transformed our office. The team is professional, thorough, and always on time. We\'ve never had cleaner workspaces — staff morale has genuinely improved!',
    rating: 5,
  },
  {
    name: 'James Nguyen',
    role: 'Property Manager',
    suburb: 'Richmond',
    content: 'Managing strata properties is stressful enough without worrying about cleaning. Sparkle Clean handles everything seamlessly. Residents constantly compliment the building\'s condition.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Childcare Director',
    suburb: 'Fitzroy',
    content: 'Knowing our childcare centre is cleaned with non-toxic products gives me and the parents complete peace of mind. The team is reliable, thorough, and genuinely cares about child safety.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Restaurant Owner',
    suburb: 'Collingwood',
    content: 'Event cleanup used to be a nightmare. Sparkle Clean\'s team had our venue spotless before midnight. Incredible efficiency and attention to detail. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    suburb: 'St Kilda',
    content: 'I\'ve tried several cleaning services over the years. Sparkle Clean is by far the best. My home is consistently spotless and the eco-friendly products are a big bonus for my family.',
    rating: 5,
  },
  {
    name: 'Tom Robertson',
    role: 'Retail Store Owner',
    suburb: 'Carlton',
    content: 'Our store always looks pristine thanks to Sparkle Clean. They work around our trading hours perfectly and the results speak for themselves — customers comment on how clean the store is.',
    rating: 5,
  },
]

export const FEATURES = [
  { icon: '🛡️', title: 'Fully Insured', desc: 'Complete public liability coverage and WorkSafe Victoria compliance for your peace of mind.' },
  { icon: '🌱', title: '100% Eco-Friendly', desc: 'We use only environmentally responsible, non-toxic products safe for people, pets, and the planet.' },
  { icon: '✅', title: 'Licensed & Certified', desc: 'Licensed Labour Hire Provider operating in full compliance with all Australian regulations.' },
  { icon: '⏰', title: 'Always On Time', desc: 'Punctual, reliable service that respects your schedule and minimises disruption to your day.' },
  { icon: '💬', title: 'Free Site Assessment', desc: 'We visit your property and provide a detailed, no-obligation quotation at zero cost to you.' },
  { icon: '🔄', title: 'Flexible Scheduling', desc: 'Daily, weekly, monthly or one-off — we work around your hours, not the other way around.' },
]

export const TRUST_ITEMS = [
  'Public Liability Insurance',
  'WorkSafe Victoria',
  'Licensed Labour Hire',
  'ABN: 29 686 853 663',
  'Established 2025',
  'Melbourne Based',
]
