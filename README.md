# Ohros Global Youth Initiative (OGYI) – website

Plain HTML/CSS/JS. No build step.

## Open it
Double-click `index.html`, or upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, cPanel).

## Files
- `index.html` – all page content (text, sections, links)
- `css/style.css` – styles. Brand colours and fonts are at the top under `:root`
- `js/main.js` – mobile menu, rotating causes, story strip, counters, donate form, newsletter
- `images/` – photos (free Unsplash licence). `collage.jpg` fills the big hero letters

## Common edits
- Name: search and replace "OGYI" / "Ohros"
- Colour: change `--orange` in `css/style.css`
- Photos: replace files in `images/` keeping the same names
- Donations/newsletter: the forms are placeholders. Connect a payment provider (e.g. Paystack, Flutterwave, Stripe) and a mailing list in `js/main.js`
