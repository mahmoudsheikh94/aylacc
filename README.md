# Ayla Construction LTD - Website

A modern, SEO-first landing website for Ayla Construction LTD, a UK-based construction company. Built with Astro and Tailwind CSS for optimal performance.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server runs at `http://localhost:4321`

## Project Structure

```
/
├── public/
│   ├── projects/           # Project images (add your images here)
│   ├── favicon.svg         # Site favicon
│   ├── robots.txt          # Search engine directives
│   └── manifest.webmanifest
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.astro    # Sticky navigation
│   │   ├── Footer.astro    # Site footer
│   │   ├── Hero.astro      # Hero section
│   │   ├── Services.astro  # 6 service cards
│   │   ├── About.astro     # Founder story & timeline
│   │   ├── FeaturedProjects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro       # With schema.org support
│   │   └── Contact.astro   # Netlify Forms
│   ├── content/
│   │   ├── config.ts       # Content Collections schema
│   │   └── projects/       # Project markdown files
│   ├── data/
│   │   └── services.ts     # Services data
│   ├── layouts/
│   │   └── BaseLayout.astro # SEO, meta tags, structured data
│   ├── pages/
│   │   ├── index.astro     # Homepage
│   │   └── projects/
│   │       ├── index.astro # Projects grid
│   │       └── [...slug].astro # Dynamic project pages
│   └── styles/
│       └── global.css      # Tailwind + custom styles
└── astro.config.mjs        # Astro configuration
```

## How to Customise

### Contact Information

Search for `PLACEHOLDER` in the codebase to find all items that need replacing:

1. **Phone number**: Update in these files:
   - `src/layouts/BaseLayout.astro` (schema)
   - `src/components/Footer.astro`
   - `src/components/Contact.astro`
   - `src/pages/index.astro` (schema)

2. **Email**: Update in:
   - `src/components/Footer.astro`
   - `src/components/Contact.astro`
   - `src/pages/index.astro` (schema)

### Company Information

- **Slogan**: `src/components/Hero.astro`, `src/components/Footer.astro`
- **About/Timeline**: `src/components/About.astro`
- **Testimonials**: `src/components/Testimonials.astro`
- **FAQ**: `src/components/FAQ.astro`

### Projects

Project content is stored in `src/content/projects/`. Each project is a markdown file with frontmatter:

```markdown
---
title: "Project Title"
description: "Short description for cards and SEO"
category: "Commercial Buildings" # Must match one from config.ts
location: "London, UK"
completionDate: "2024"
featured: true
image: "/projects/my-project.jpg"
client: "Client Name"
duration: "12 weeks"
value: "£500,000"
---

## Project Overview

Your project content here...
```

To add a new project:
1. Create a new `.md` file in `src/content/projects/`
2. Add the project image to `public/projects/`
3. Fill in the frontmatter and content

### Project Images

Add images to `public/projects/`. Recommended:
- Format: WebP or optimised JPEG
- Size: 800x600px minimum for cards, 1600x900px for detail pages
- Include descriptive filenames for SEO

### Services

Edit `src/data/services.ts` to modify the 6 service offerings.

### Design Customisation

Colours and fonts are defined in `src/styles/global.css`:

```css
@theme {
  --color-primary: #1E3A5F;      /* Deep Steel Blue */
  --color-accent: #F59E0B;        /* Amber/Gold for CTAs */
  --color-dark: #1F2937;          /* Charcoal */
  --color-light: #F9FAFB;         /* Off-white background */
}
```

## SEO Features

### Included
- Semantic HTML5 structure
- Meta tags (title, description, Open Graph, Twitter Cards)
- Canonical URLs
- Structured data (JSON-LD):
  - Organization
  - LocalBusiness / GeneralContractor
  - Service (for each service)
  - FAQPage
  - Article (for project pages)
- Auto-generated sitemap via `@astrojs/sitemap`
- robots.txt
- Web App Manifest

### Sitemap

The sitemap is auto-generated at build time. After deploying, verify at:
`https://aylacc.com/sitemap-index.xml`

## Deployment

### Netlify (Recommended)

Netlify is recommended for its native form handling.

1. Push your code to GitHub
2. Connect the repository to Netlify
3. Netlify will auto-detect Astro - no configuration needed
4. Set your custom domain in Netlify settings
5. Enable HTTPS (automatic)

**Important**: After deploying, go to Netlify > Forms to see submitted contact forms and configure email notifications.

### Alternative Platforms

The site works on any static hosting:

**Vercel**:
```bash
npm run build
# Deploy dist/ folder
```

**Cloudflare Pages**:
- Build command: `npm run build`
- Output directory: `dist`

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Performance

This site is optimised for excellent Lighthouse scores:
- Zero JavaScript on static pages (except mobile menu toggle)
- Tailwind CSS with automatic purging
- Optimised font loading with preconnect
- Lazy loading for below-fold images
- Semantic HTML for accessibility

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not supported.

## License

Private - Ayla Construction LTD

---

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
