# Asset Guide

Use this guide whenever you export or replace media so layout, quality, and SEO stay consistent.

## Current Active Assets

Active files are in `public/site-media/` and `public/gallery/`.
The latest uploaded set is already connected in the UI.

## Export Rules (Canva)

- Photos: export as `AVIF` (best) or `WEBP`.
- Logos with transparency: export as `PNG`.
- Do not use `SVG` for photo galleries.
- Color profile: `sRGB`.
- Keep each photo under `450 KB` when possible.
- Sharpness: moderate. Avoid heavy compression.

## Required Image Names and Sizes

Use these names when preparing final assets.

| Filename | Recommended Size | Use |
|---|---:|---|
| `hero-background.avif` | 2400 x 1350 | Home hero background image |
| `hero-vehicle.avif` | 1400 x 1750 | Home hero foreground image |
| `pricing-cars-cover.avif` | 1600 x 1200 | Pricing index card for car pricing |
| `pricing-boats-cover.avif` | 1600 x 1200 | Pricing index card for boat pricing |
| `boat-hero-01.avif` | 1600 x 1200 | Home marine teaser image |
| `boats-hero-background.avif` | 2400 x 1350 | Boat pricing hero background |
| `cars-pricing-01.avif` | 1600 x 1200 | Car pricing gallery image 1 |
| `cars-pricing-02.avif` | 1600 x 1200 | Car pricing gallery image 2 |
| `cars-pricing-03.avif` | 1600 x 1200 | Car pricing gallery image 3 |
| `cars-detail-footer-01.avif` | 1600 x 1200 | Car pricing footer image 1 |
| `cars-detail-footer-02.avif` | 1600 x 1200 | Car pricing footer image 2 |
| `boats-gallery-01.avif` | 1600 x 1200 | Boat work example 1 |
| `boats-gallery-02.avif` | 1600 x 1200 | Boat work example 2 |
| `boats-gallery-03.avif` | 1600 x 1200 | Boat work example 3 |
| `boats-gallery-04.avif` | 1600 x 1200 | Boat work example 4 |
| `systemx-logo.avif` | 600 x 200 | System X section logo lockup |
| `systemx-ceramic-01.avif` | 1600 x 1200 | System X application photo |
| `systemx-ceramic-02.avif` | 1600 x 1200 | System X result photo |
| `systemx-marine-hero.avif` | 1600 x 1200 | System X marine section image |
| `car-exterior-01.avif` | 1600 x 1200 | Home work highlights |
| `car-interior-01.avif` | 1600 x 1200 | Home work highlights |
| `car-exterior-02.avif` | 1600 x 1200 | Home work highlights |
| `truck-detail-01.avif` | 1600 x 1200 | Home work highlights |
| `ceramic-closeup-01.avif` | 1600 x 1200 | Home work highlights |
| `boat-detail-01.avif` | 1600 x 1200 | Home work highlights |
| `contact-call.avif` | 1200 x 900 | Contact card image |
| `contact-instagram.avif` | 1200 x 900 | Contact card image |
| `contact-facebook.avif` | 1200 x 900 | Contact card image |
| `site-logo.avif` | 800 x 800 | Main brand logo replacement |

Current uploads are mixed `.png`, `.jpg`, and `.avif`.
For best performance, convert large `.png` and `.jpg` files to `.avif` or `.webp` and keep the same basename.

## Gallery Requirements

The gallery is loaded from `src/data/gallery.js`.

Each item must include:

- `id`
- `src`
- `alt`
- `title`
- `category`
- `location`

Recommended:

- `width`
- `height`

### Gallery file naming format

Use this pattern for SEO:

`city-service-vehicle-angle-number.webp`

Examples:

- `naples-full-detail-black-suv-exterior-01.webp`
- `naples-boat-detail-white-center-console-deck-02.webp`
- `bonita-systemx-ceramic-red-coupe-hood-01.webp`

### Gallery SEO checklist

- Use unique alt text for every image.
- Mention city + service in alt text naturally.
- Avoid keyword stuffing.
- Keep image orientation consistent in each row when possible.
- Publish at least 12 high-quality photos to launch.
- Add new jobs monthly to keep pages fresh for local SEO.

## Social Logos

Footer now uses branded icon buttons for:

- Instagram
- Facebook

Keep these links active and consistent with Google Business Profile citations.
