# Things to Work On - Portfolio Project

**Last Checked:** 2026-04-27

## ✅ Files That Follow Standards

### Core Configuration
- ✅ `package.json` - Correct dependencies and scripts
- ✅ `tsconfig.json` - Proper TypeScript configuration with path aliases
- ✅ `eslint.config.mjs` - Standard Next.js ESLint config
- ✅ `postcss.config.mjs` - Tailwind CSS v4 configuration

### Layout & Structure
- ✅ `app/layout.tsx` - Proper Next.js layout with metadata
- ✅ `app/page.tsx` - Clean component structure
- ✅ `app/globals.css` - Proper CSS variables and theme setup
- ✅ `components/layout/MainLayout.tsx` - Good component composition
- ✅ `components/layout/Navbar.tsx` - Responsive with proper accessibility
- ✅ `components/layout/Footer.tsx` - Complete with contact info and links
- ✅ `components/layout/CustomCursor.tsx` - Desktop-only with proper event cleanup

### Pages
- ✅ `app/about/page.tsx` - Clean page structure
- ✅ `app/contact/page.tsx` - Good layout with contact info
- ✅ `app/faq/page.tsx` - Clean FAQ implementation
- ✅ `app/hire/page.tsx` - Good service listing
- ✅ `app/globals.css` - Proper CSS variables and theme setup

### Components
- ✅ `components/sections/Hero.tsx` - Good animations and structure
- ✅ `components/sections/WhatIDo.tsx` - Well-organized service cards
- ✅ `components/sections/Skills.tsx` - Good progress bars and categories
- ✅ `components/sections/Projects.tsx` - Clean project cards
- ✅ `components/sections/Stats.tsx` - Good animated stats
- ✅ `components/sections/CTA.tsx` - Clear call-to-action

---

## 🚨 CRITICAL ISSUES (Must Fix)

### 1. Missing `types/global.d.ts`
**Status:** File doesn't exist
**Impact:** TypeScript path alias `@/*` is defined in tsconfig.json but the types file is missing
**Location:** `tsconfig.json` line 22
**Fix:** Create `types/global.d.ts` with proper type definitions

### 2. Missing `og-image.jpg`
**Status:** File doesn't exist
**Impact:** Social media sharing will show broken image
**Location:** `app/layout.tsx` line 25, 33
**Fix:** Create an Open Graph image with dimensions 1200x630

### 3. Missing CV PDF File
**Status:** File doesn't exist
**Impact:** "Download Full CV" button on About page will fail
**Location:** `app/about/page.tsx` line 23
**Fix:** Add Abbas_Rasool_CV_v3.pdf to `public/` directory

### 4. Missing Social Profile Links
**Status:** Links point to generic URLs
**Impact:** Users can't find actual social profiles
**Locations:**
- `components/layout/Navbar.tsx` lines 105, 113
- `components/layout/Footer.tsx` lines 132, 141
**Fix:** Update to actual GitHub and LinkedIn URLs

### 5. Missing Contact Form Implementation
**Status:** Not implemented (was marked "in progress")
**Impact:** No way for users to submit messages
**Fix:** Create API route `app/api/contact/route.ts` and update Contact page with form

---

## ⚠️ HIGH PRIORITY ISSUES

### 6. Missing Individual Page Metadata
**Status:** Pages have minimal metadata
**Impact:** Poor SEO for individual pages
**Locations:** All page files (`about/page.tsx`, `contact/page.tsx`, etc.)
**Fix:** Add comprehensive metadata to each page (title, description, keywords)

### 7. Missing JSON-LD Structured Data
**Status:** Not implemented
**Impact:** Better SEO and rich snippets
**Fix:** Add JSON-LD structured data to layout.tsx

### 8. Missing sitemap.xml
**Status:** Footer links to it, but file doesn't exist
**Impact:** Broken link in footer
**Fix:** Create `app/sitemap.ts` and regenerate sitemap.xml

### 9. Missing robots.txt
**Status:** Not present
**Impact:** Search engines may not crawl properly
**Fix:** Create `app/robots.ts` and regenerate robots.txt

### 10. Missing favicon
**Status:** Not present
**Impact:** Browser tab shows default icon
**Fix:** Add favicon.ico to `public/` directory

### 11. Missing PWA manifest
**Status:** Not present
**Impact:** No app-like experience on mobile
**Fix:** Create `public/manifest.json`

---

## 📋 MEDIUM PRIORITY

### 12. Missing Page Transition Animations
**Status:** Not implemented
**Impact:** No smooth page transitions
**Fix:** Implement page transition wrapper or use next-view-transitions

### 13. Missing favicon.ico
**Status:** Already covered above
**Impact:** Browser tab shows default icon
**Fix:** Add favicon.ico to `public/` directory

### 14. Missing Manifest.json
**Status:** Already covered above
**Impact:** No app-like experience on mobile
**Fix:** Create `public/manifest.json`

### 15. Missing Open Graph Images
**Status:** Already covered above
**Impact:** Social media sharing shows broken images
**Fix:** Create og-image.jpg and Twitter image

### 16. Missing Next.js Image Optimization
**Status:** No Next.js Image components used
**Impact:** Images not optimized automatically
**Fix:** Replace img tags with next/image components

### 17. Missing Service Worker (PWA)
**Status:** Not implemented
**Impact:** No offline support
**Fix:** Implement PWA with service worker

---

## 📝 LOW PRIORITY / ENHANCEMENTS

### 18. Missing Analytics
**Status:** Not implemented
**Impact:** No user tracking
**Fix:** Add Google Analytics or similar

### 19. Missing Email Service Integration
**Status:** Contact form exists but no backend
**Impact:** Form submissions not received
**Fix:** Integrate with EmailJS, Formspree, or similar

### 20. Missing Newsletter Signup
**Status:** Not implemented
**Impact:** No way to capture leads
**Fix:** Add newsletter section with form

### 21. Missing Testimonials
**Status:** Not implemented
**Impact:** No social proof
**Fix:** Add testimonials section

### 22. Missing Blog/Articles Section
**Status:** Not implemented
**Impact:** Limited content depth
**Fix:** Add blog section for technical content

### 23. Missing Dark/Light Mode Toggle
**Status:** Only dark mode implemented
**Impact:** Users forced to use dark theme
**Fix:** Implement theme toggle

---

## 📊 Code Quality Checks

### TypeScript
- ✅ Proper type annotations
- ✅ No `any` types used
- ✅ Proper interface definitions

### React Best Practices
- ✅ Proper component structure
- ✅ Proper event handler cleanup (useEffect)
- ✅ Proper key usage in lists
- ✅ Proper use of "use client" directive

### Accessibility
- ✅ Proper aria-labels
- ✅ Proper semantic HTML
- ✅ Color contrast ratios are good
- ⚠️ Missing skip navigation link
- ⚠️ Missing focus management for mobile menu

### Performance
- ✅ Proper code splitting (component-based)
- ✅ Good use of React.lazy (not yet implemented)
- ⚠️ Images not optimized (use next/image)
- ⚠️ No lazy loading for below-fold content

### SEO
- ✅ Proper metadata in root layout
- ✅ Proper meta tags
- ✅ Canonical URLs
- ⚠️ Missing meta description on individual pages
- ⚠️ Missing OG tags on individual pages

---

## 🎯 PRIORITY ORDER FOR FIXING

1. **CRITICAL:**
   - Create `types/global.d.ts`
   - Add `og-image.jpg`
   - Add CV PDF file
   - Update social profile links
   - Implement contact form

2. **HIGH:**
   - Add metadata to all pages
   - Add JSON-LD structured data
   - Create sitemap.xml
   - Create robots.txt
   - Add favicon.ico
   - Create manifest.json

3. **MEDIUM:**
   - Implement page transition animations
   - Replace img with next/image
   - Add service worker (PWA)

4. **LOW:**
   - Add analytics
   - Integrate email service
   - Add newsletter signup
   - Add testimonials
   - Add blog section
   - Implement theme toggle

---

## 📝 NOTES

- All pages follow Next.js 14+ App Router conventions
- TypeScript is properly configured with strict mode
- Tailwind CSS v4 is properly set up
- Framer Motion animations are well-structured
- Code follows React best practices
- Responsive design is implemented
- Dark theme is properly configured
