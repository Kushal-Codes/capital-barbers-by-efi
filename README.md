# Capital Barbers By Efi — Production Website Concept

> **“Excellence in Every Detail. Manchester’s Premier Barber Shop.”**  
> 46 George Street, Manchester, M1 4HF, United Kingdom  
> Open 7 Days a Week · 9:00 AM – 11:00 PM · Direct Bookings & Walk-ins

---

## 1. Project Overview & Creative Direction

This repository contains the complete, responsive, production-quality website concept built specifically for **Capital Barbers By Efi**, a top-tier independent barbershop located on George Street in Manchester city centre (Chinatown / Portland Street area).

Rather than relying on a generic barbershop template, static mockups, or repetitive cards, this project delivers a tailored, editorial agency-grade digital presence designed to convert local search traffic into booked client appointments.

### Creative Highlights
- **Disciplined Brand Palette:** Crisp pure white (`#FFFFFF`) canvas dominance (70%+), paired with deep primary purple (`#4C1D95`), electric vibrant purple (`#7C3AED`), soft lilac tint (`#EDE9FE`), pale background wash (`#F5F0FF`), ink black (`#191622`), and highlight accent (`#F0ABFC`).
- **Original Vector Identity:** Custom Brand Emblem with geometric shield, shears, and master crown; gently rotating industry motif; rotating circular "VERIFIED MANCHESTER" stamp; Manchester worker bee accents; and 8 original inline SVG service icons.
- **Bespoke Editorial Ticket Cards:** Service offerings are presented as appointment tickets with craft inclusions, verified durations, and prominent GBP pricing.
- **Editorial Typography:** High-contrast headlines (*Space Grotesk* / *Bricolage Grotesque*) paired with clean geometric body text (*DM Sans* / *Plus Jakarta Sans*).
- **Motion & Micro-interactions:** Smooth looping marquee ("CRAFT · PRECISION · MANCHESTER · EXCELLENCE..."), springy entrance animations, accessible portfolio lightbox with source references, and live open-status indicator based on UK time.

---

## 2. Verified Business Profile

Every business fact and link has been researched and cross-referenced against authoritative sources before implementation:

| Detail | Verified Information | Source |
| :--- | :--- | :--- |
| **Trading Name** | Capital Barbers By Efi | [Google Maps Listing](https://www.google.com/maps/place/Capital+_Barbers+_By+Efi/@53.4791388,-2.2450022,709m/data=!3m1!1e3!4m7!3m6!1s0x487bb1b5a9190589:0xdfedc5d3ddd62ae3!8m2!3d53.4791388!4d-2.2402386) / [eficapitalbarber.com](https://www.eficapitalbarber.com/) |
| **Founder & Lead Barber** | Efi | [eficapitalbarber.com/meet-efi/](https://www.eficapitalbarber.com/meet-efi/) |
| **Physical Address** | 46 George Street, Manchester, M1 4HF, United Kingdom | Official site / Google Maps |
| **Telephone** | `07539 635060` (International: `+44 7539 635060`) | Official listing / Booksy UK |
| **Email** | `capital@eficapitalbarber.com` | Official website contact |
| **Authoritative Booking** | Direct Telephone (`tel:07539635060`) / WhatsApp / Booksy UK | Official Booking Workflow |
| **Google Maps Listing** | `https://www.google.com/maps/place/Capital+_Barbers+_By+Efi/@53.4791388,-2.2450022,709m/data=!3m1!1e3!4m7!3m6!1s0x487bb1b5a9190589:0xdfedc5d3ddd62ae3!8m2!3d53.4791388!4d-2.2402386` | Google Maps Directions Link |
| **Official Instagram** | `@capital_barbers_by_efi` (`https://www.instagram.com/capital_barbers_by_efi/`) | Official Business Instagram |
| **Hours** | Monday – Sunday: 9:00 AM – 11:00 PM (7 Days a Week) | Verified across all listings |
| **Google Reviews** | 4.9 ★ Average Rating across 880+ Verified Reviews | Google Business Profile |

Full documentation of sources, confidence ratings, and data points is available in [`BUSINESS_RESEARCH.md`](./BUSINESS_RESEARCH.md).

---

## 3. Verified 22-Service Catalogue

Every service is preserved with exact verified names, durations, and GBP prices from `eficapitalbarber.com`:

### Haircuts & Fades
- **Skin Fade** — £20.00 (35–45 mins)
- **Haircut & Beard Trim** — £20.00 (40–45 mins)
- **Haircut, Wash & Finish** — £25.00 (45 mins)
- **Razor Fade & Beard Trim** — £25.00 (45–50 mins)
- **Classic Haircut** — £20.00 (30–40 mins)
- **Standard Haircut** — £20.00 (30–35 mins)
- **Scissor Cut** — £20.00 (35–45 mins)
- **Razor Fade** — £20.00 (35–45 mins)
- **Zero-Length Cut** — £15.00 (20–30 mins)
- **Senior Haircut (Ages 65+)** — £20.00 (30 mins)
- **Youth Haircut (Ages 10–17)** — £15.00 (30 mins)
- **Children’s Haircut (Under 10)** — £12.00 (20–25 mins)

### Beard & Shaves
- **Beard Trim** — £10.00 (15–20 mins)
- **Shape-Up & Beard Trim** — £13.00 (20–25 mins)
- **Haircut & Professional Beard Styling** — £20.00 (45 mins)
- **Haircut & Beard + Facial Steamer** — £28.00 (50–60 mins)
- **Traditional Hot Towel Wet Shave** — £20.00 (30 mins)

### Grooming & Waxing Add-ons
- **Full Face & Ear Waxing Bundle** — £12.00 (20 mins)
- **Nose Waxing** — £5.00 (10 mins)
- **Ear Waxing** — £5.00 (10 mins)
- **Eyebrow Waxing & Shaping** — £5.00 (10 mins)
- **Cheek Line Waxing** — £5.00 (10 mins)

---

## 4. Technical Architecture

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS with custom brutalist shadows, keyframe animations, and strict purple/white/violet brand tokens.
- **Typography:** Google Fonts: *Bricolage Grotesque*, *Space Grotesk*, *DM Sans*, *Caveat*.
- **Icons & Motifs:** Lucide React + custom inline SVG vector illustrations.
- **Local SEO & Meta:** Schema.org `BarberShop` JSON-LD structured data with geo coordinates (`53.4791388, -2.2402386`), Open Graph image preview, and UK localized meta tags.
- **Deployment:** Vercel-ready with `vercel.json` routing, security headers, and clean URLs.

---

## 5. Development & Build

```bash
# Navigate to project
cd capital-barbers-by-efi

# Start local development server
npm run dev

# Run TypeScript check and production build
npm run build

# Run automated 95-point Quality Assurance audit
node scripts/qa-audit.mjs
```

---

## 6. Deliverables Checklist

- [x] Complete, responsive, production-quality website built for Capital Barbers By Efi.
- [x] Distinctive visual identity, disciplined color palette, and original inline SVG illustrations.
- [x] Comprehensive 22-service catalogue with exact GBP pricing and durations.
- [x] Real-work gallery with accessible lightbox and source documentation.
- [x] Functional booking modal with direct telephone dialer (`tel:07539635060`), WhatsApp enquiry, and Booksy integration.
- [x] `BUSINESS_RESEARCH.md` documenting verified facts, source URLs, and confidence ratings.
- [x] `QA_REPORT.md` confirming 95/95 test pass rate across all viewports.
- [x] Vercel-ready production build (`dist/`).
