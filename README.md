# Space CRM - Marketing Automation Landing Page

A modern, high-converting marketing landing page for Space CRM built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design** - Clean, professional UI with glassmorphism effects
- 🎨 **Responsive** - Fully mobile-first responsive design
- 🚀 **Optimized** - Built with Next.js 15 for optimal performance
- 📱 **Animated** - Smooth scroll-to-reveal animations with Framer Motion
- 🔍 **SEO Ready** - Full metadata, OpenGraph, and Twitter Cards support
- ♿ **Accessible** - Semantic HTML and ARIA attributes

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
spacecrm/
├── app/
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout with Header & Footer
│   └── page.tsx          # Main landing page
├── components/
│   ├── Header.tsx        # Sticky navigation header
│   ├── Footer.tsx        # 4-column footer
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── Integrations.tsx  # Scrolling integration logos
│       ├── Features.tsx      # Core features grid
│       ├── Automation.tsx    # Automation showcase
│       ├── AIAssistant.tsx   # AI content assistant section
│       ├── Pricing.tsx       # Pricing plans
│       ├── Testimonials.tsx  # Customer testimonials
│       ├── FAQ.tsx           # FAQ accordion
│       ├── CTA.tsx           # Final call-to-action
│       └── index.ts          # Section exports
├── tailwind.config.ts    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Key Sections

1. **Hero** - High-impact headline with stats and social proof
2. **Integrations** - Animated marquee of tool integrations
3. **Features** - Core feature cards (Email, LinkedIn, WhatsApp, Unified Inbox)
4. **Automation** - Showcase of automation capabilities
5. **AI Assistant** - AI-powered content creation feature
6. **Pricing** - Three-tier pricing plans
7. **Testimonials** - Customer success stories
8. **FAQ** - Interactive accordion with common questions
9. **CTA** - Final conversion section

## Customization

### Colors

Edit the `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  primary: {
    // Indigo shades
  },
  violet: {
    // Violet shades
  },
}
```

### Content

Update the content in each component file under `components/sections/`.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this for your own projects!
