# Australian Property Platform

A polished, responsive real-estate experience built for browsing Australian properties across sale, lease, and sold categories. The project focuses on editorial presentation, smooth motion, clear property discovery, and a consistent experience across desktop and mobile.

![Australian Property Platform home page](upwork/03-home-hero.png)

## Highlights

- Immersive home page with full-screen media, animated transitions, and section-based navigation
- Property discovery flows for buying, leasing, and recently sold homes
- Dynamic property detail routes with galleries and listing information
- Team, testimonials, journal, contact, and appraisal experiences
- Responsive layouts designed for mobile, tablet, and desktop
- Reusable content blocks and a typed mock data layer that can be replaced with a CMS or API
- Automated Playwright workflow for producing portfolio screenshots

## Technology

| Area | Tools |
| --- | --- |
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, custom responsive styles |
| Motion | Lottie, fullPage.js, CSS transitions |
| Media | Mux Player, Next.js Image |
| Quality | ESLint, TypeScript, Playwright |

## Project structure

```text
src/
├── app/          # App Router pages and route layouts
├── components/   # Shared layout, property, home, and content components
├── data/         # Typed demo content and listing fixtures
└── lib/          # Data access helpers
public/           # Brand, font, and interface assets
upwork/           # Portfolio screenshots
```

## Featured routes

| Route | Experience |
| --- | --- |
| `/` | Full-screen home presentation and featured collections |
| `/buy` | Properties available for sale |
| `/lease` | Residential rental listings |
| `/sold` | Recently sold properties |
| `/property/[slug]` | Individual property details |
| `/about` and `/team` | Agency story and people |
| `/journal` | Editorial content index and article pages |
| `/contact` and `/appraisal` | Lead-generation forms |

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
git clone https://github.com/AffanZahid26/australian-property-platform.git
cd australian-property-platform
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev                # Start the development server
npm run build              # Create a production build
npm run start              # Run the production server
npm run lint               # Check the codebase with ESLint
npm run capture:portfolio  # Generate portfolio screenshots with Playwright
```

## Data and integrations

This repository is a front-end demonstration. Listing and editorial content is served from local fixtures through an asynchronous data-access layer, allowing the interface to behave like a CMS-backed application without requiring credentials. Contact and appraisal forms are presentation-only and do not submit personal data to a backend.

External media is loaded from the allowlisted image and video providers configured in `next.config.ts`. A production implementation can replace the local data functions in `src/lib/api.ts` with a headless CMS, CRM, or property-listing API.

## Portfolio notice

This independent portfolio project demonstrates front-end engineering and interaction design. It is not an official real-estate service and is not intended for commercial transactions. Referenced names, trademarks, property information, and media remain the property of their respective owners and are used only for demonstration.
