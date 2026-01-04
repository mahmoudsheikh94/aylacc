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
