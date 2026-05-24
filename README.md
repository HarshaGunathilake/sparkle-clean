# ✨ Sparkle Clean — Next.js Cleaning Website

A modern, multi-page cleaning business website built with **Next.js 14**, **Tailwind CSS**, **Radix UI**, and **Framer Motion**.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** | App Router, SSG, page routing |
| **TypeScript** | Full type safety |
| **Tailwind CSS** | Utility-first styling |
| **Radix UI** | Accessible primitives (Accordion, Dialog, etc.) |
| **Shadcn UI** | Pre-built components (Button, Card, Badge, Input) |
| **Framer Motion** | Page & scroll animations |
| **Lucide React** | Icon library |

---

## 📁 Project Structure

```
sparkle-clean/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (Navbar + Footer)
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Tailwind + CSS variables
│   │   ├── not-found.tsx           # 404 page
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact & quote form page
│   │   └── services/
│   │       ├── page.tsx            # All services listing
│   │       └── [slug]/
│   │           └── page.tsx        # Dynamic service detail page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky navbar with mega dropdown
│   │   │   └── Footer.tsx          # Full footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Animated hero section
│   │   │   ├── StatsBar.tsx        # Stats row
│   │   │   ├── ServicesSection.tsx # Filterable services grid
│   │   │   ├── FeaturesSection.tsx # Why choose us
│   │   │   ├── TestimonialsSection.tsx # Auto-scrolling reviews
│   │   │   ├── ProcessSection.tsx  # 4-step process
│   │   │   ├── CtaBanner.tsx       # CTA banner
│   │   │   └── ContactFormInline.tsx # Reusable contact form
│   │   └── ui/
│   │       ├── button.tsx          # Shadcn Button
│   │       ├── card.tsx            # Shadcn Card
│   │       ├── badge.tsx           # Shadcn Badge
│   │       ├── accordion.tsx       # Radix Accordion
│   │       ├── input.tsx           # Shadcn Input
│   │       ├── textarea.tsx        # Shadcn Textarea
│   │       ├── label.tsx           # Shadcn Label
│   │       └── separator.tsx       # Radix Separator
│   ├── data/
│   │   ├── services.ts             # 10 services with full detail
│   │   └── company.ts              # Stats, testimonials, features
│   ├── lib/
│   │   └── utils.ts                # cn() utility
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔗 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, stats, services, features, testimonials, process, CTA |
| `/services` | All services with category filter |
| `/services/[slug]` | Individual service page (10 pages) |
| `/about` | Founder story, mission, values, timeline |
| `/contact` | Full contact form + service area |
| `*` | 404 Not Found |

---

## 🚀 Getting Started

```bash
# Install
npm install

# Dev server (http://localhost:3000)
npm run dev

# Production build
npm run build
npm start
```

---

## 🎨 Design Highlights

- **Dark green hero** with animated gradient orbs and floating cards
- **Mega dropdown navbar** with service categories
- **Auto-scrolling testimonials** marquee
- **Filterable services grid** with Framer Motion layout animations
- **Radix Accordion** for FAQs on service pages
- **Fully responsive** mobile-first design
- **Framer Motion** scroll-triggered animations throughout
