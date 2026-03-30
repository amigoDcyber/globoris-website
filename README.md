# Globoris Technologies - Enterprise Website

A professional, enterprise-grade website for Globoris Technologies, showcasing digital solutions for fintech, govtech, and AI-powered platforms.

## Features

✨ **Beautiful Design**
- Modern, enterprise-grade interface (Stripe/Palantir style)
- Smooth animations with Framer Motion
- Responsive design (mobile-first)
- Dark/Light mode ready

🚀 **Performance**
- Next.js 14 with optimizations
- Tailwind CSS for rapid UI development
- Optimized images and lazy loading
- SEO-optimized pages

📱 **Complete Pages**
- Home - Hero, solutions, products, metrics
- About - Mission, vision, company overview
- Solutions - Fintech, GovTech, AI, Enterprise
- Products - SchoolGate, GloboRent, Stratus Sentinel
- Industries - Education, Real Estate, Gov, Finance, Healthcare, Tech
- Technology - Tech stack and architecture
- Security - Compliance and security features
- Careers - Open positions and culture
- Contact - Contact form and details

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd globoris-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript (React)

## Color Palette

- **Primary**: Deep Blue (#0A2540)
- **Secondary**: Tech Purple (#6C63FF)
- **Accent**: Cyan/Electric Blue (#00D9FF)
- **Neutral**: White & Gray scale

## Project Structure

```
globoris-website/
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   ├── about/page.js       # About page
│   ├── solutions/page.js   # Solutions page
│   ├── products/page.js    # Products page
│   ├── industries/page.js  # Industries page
│   ├── technology/page.js  # Technology page
│   ├── security/page.js    # Security page
│   ├── careers/page.js     # Careers page
│   └── contact/page.js     # Contact page
├── components/
│   ├── Navbar.js           # Navigation bar
│   ├── Footer.js           # Footer
│   ├── HeroSection.js      # Hero section
│   ├── SolutionsCard.js    # Solutions cards
│   ├── ProductsSection.js  # Products section
│   ├── WhyGloboris.js      # Why Globoris section
│   ├── MetricsSection.js   # Metrics display
│   └── CTASection.js       # Call-to-action
├── lib/                    # Utilities
├── public/                 # Static assets
└── tailwind.config.js      # Tailwind configuration
```

## Customization

### Colors
Edit `tailwind.config.js` to change color scheme:

```javascript
colors: {
  primary: '#0A2540',
  secondary: '#6C63FF',
  accent: '#00D9FF',
}
```

### Content
All page content can be easily modified in their respective files in the `app/` directory.

### Fonts
Google Fonts (Inter, Poppins) are pre-configured in `app/layout.js`.

## Deployment

The site is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- Google Cloud
- Any Node.js hosting

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Minification and bundling
- ✅ SEO meta tags on all pages
- ✅ Mobile-responsive design

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2024 Globoris Technologies Ltd. All rights reserved.

## Support

For questions or support, contact: info@globoris.com
