# Project Cards Redesign

## Problem
Project cards have dark background (bg-black) with dark text (text-cream/50), making descriptions unreadable.

## Tasks
- [x] Update ProjectCard.astro to use light theme with blue accents
- [x] Add fancy hover animations
- [x] Ensure text contrast is readable

---

## Review

### Changes Made to ProjectCard.astro

**Background & Structure:**
- Changed from `bg-black` to `bg-white` with `rounded-lg` corners
- Updated border from `border-cream/10` to `border-gray-200` with `hover:border-blue-900/40`
- Added `shadow-sm` with `hover:shadow-xl` for depth

**Hover Animations:**
- Added lift effect: `hover:-translate-y-2`
- Image zoom: `group-hover:scale-110` (increased from 105)
- Top border accent slides in from left on hover
- Expanding line in footer section
- Arrow icon moves right on hover

**Text Readability:**
- Title: `text-gray-900` (was `text-white`)
- Description: `text-gray-600` (was `text-cream/50`) - now clearly visible
- Location: `text-gray-500` (was `text-cream/50`)

**Color Updates:**
- Category badge: `bg-blue-900 text-white` (was gold)
- Overlay: Blue gradient instead of black
- All accents now use blue-900 palette

**Removed:**
- Corner accent decorations (cleaner look)
- Black gradient background in content area

---

# Text Updates (January 2026)

## Tasks
- [x] Update location from "London & South East" to "West and North West London"
- [x] Update Malek's journey to show: Middle East -> USA -> UK
- [x] Rename "Ali's Conservatory" to "Conservatory in Hayes"

---

## Review

### Location Updates
Changed service area references across the site:
- **Contact.astro** (line 220): "West & North West London" (removed Surrey, Kent, Essex, Hertfordshire)
- **Footer.astro** (line 120): "West & North West London"
- **About.astro** (line 106): "West and North West London"
- **FAQ.astro** (line 5): Updated FAQ answer about service areas

### Malek's Journey Timeline
Updated About.astro to show full journey:
- **2004**: "Ayla Construction established in the Middle East" (was Jordan)
- **2015**: Added new entry "United States Expansion"
- **2021**: UK Operations Begin (unchanged)
- Updated story paragraph to mention Middle East -> USA -> UK progression

### Project Rename
- **alis-conservatory.md**: Changed title from "Ali's Conservatory" to "Conservatory in Hayes"
- Updated location from "London, UK" to "Hayes, UK"
