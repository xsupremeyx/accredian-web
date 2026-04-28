# Accredian Enterprise — Landing Page Clone

Live Demo: [your-vercel-url]
GitHub: [your-repo-url]

## Setup Instructions
1. Clone the repo: `git clone [repo-url]`
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Open: http://localhost:3000

## Approach Taken
- Built with Next.js 15 App Router for modern SSR/SSG support
- Tailwind CSS v4 for utility-first responsive styling
- Component-based architecture with 14 reusable section components
- Client components used only where interactivity required (carousel, modal, accordion)
- Mock API route at `/api/enquire` for lead capture form submission

## AI Usage
- Used Claude and ChatGPT (claude.ai) for component code generation and structure planning with proper context.md files for proper token efficiency.
- Manually reviewed and adjusted all Tailwind classes for accurate visual matching
- Manually extracted and integrated real images and content from enterprise.accredian.com
- Manually tested responsive behavior on mobile/tablet/desktop viewports

## Features Implemented
- ✅ Fully responsive (mobile + desktop)
- ✅ All 14 landing page sections
- ✅ Lead capture modal form (EnquireModal)
- ✅ API route for form submission (`/api/enquire`)
- ✅ Logo carousel (mobile/tablet, static on desktop)
- ✅ FAQ accordion with 3 tabs
- ✅ Testimonial carousel (2-up desktop, 1-up mobile)
- ✅ Course segmentation carousel (mobile)
- ✅ Smooth scroll navigation with active link highlighting
- ✅ Mobile hamburger menu
- ✅ Dark footer on mobile, light on desktop

## Images Needed (download manually from enterprise.accredian.com)
Place these in `/public/images/`:
- `hero-professionals.png`
- `who-should-join-people.png`
- `edge-desktop.png`
- `edge-mobile.png`
- `course-program-specific.jpg`
- `course-industry-specific.jpg`
- `course-topic-specific.jpg`
- `course-level-specific.jpg`

## Improvements With More Time
- Add Supabase DB for persistent lead storage
- Add scroll-triggered animations (Framer Motion)
- Add loading skeletons for image sections
- Add form validation with react-hook-form
- SEO metadata per section
