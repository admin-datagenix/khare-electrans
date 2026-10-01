# KHARE NEW — Next.js Static Website

This is the KHARE website rebuilt as a frontend-only Next.js App Router project.

## Included
- Next.js 15 + React 19
- No Firebase
- No backend
- No Genkit
- React Icons for the contact box and UI icons
- Component-wise structure
- Local product image folder with 7 replaceable image files
- Local hero/about/gallery image folders
- KHARE logo used in navbar, footer and browser tab/favicon metadata
- Product specification modal
- Gallery filters + lightbox
- Responsive mobile navbar
- Frontend-only contact form with a success toast

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Replace the 7 product images
Go to:
`public/images/products/`

Replace these files with your own images, keeping the same names:
- distribution-transformer.jpg
- power-transformer.jpg
- furnace-transformer.jpg
- neutral-grounding-transformer.jpg
- ht-reactor.jpg
- special-purpose-transformer.jpg
- compact-substation.jpg

The existing content and product information are already wired to these filenames.

## Other replaceable images
- `public/images/hero/hero-transformer.jpg`
- `public/images/about/about-facility.jpg`
- `public/images/gallery/gallery-01.jpg` through `gallery-08.jpg`

## Logo
The provided KHARE logo is at:
`public/images/logo-khare.jpg`
It is used in the navbar, footer and metadata icon so it also appears as the browser tab icon.
