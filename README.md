# Dr Nahim Ahmed MBE — website

Static site built with Astro. No CMS, no database; all content is in two files.

## Edit content
- `src/content/site.ts` — name, email, social links, booking URL, hero video paths, form provider, nav.
- `src/content/content.ts` — every word on the page: story, about, speaking topics, keynote, services, credibility, impact/case studies, media, testimonials, thoughts, FAQ, CTAs.

Search the project for `[` to find every placeholder.

## Images and video
Put files in `public/images/` and `public/media/` using the filenames referenced in the content files (or change the paths). Placeholder blocks disappear automatically once a real image loads.

Hero video: `public/media/hero-desktop.mp4` (1080p, ≤6MB), `hero-mobile.mp4` (720p, ≤3MB), `hero-poster.jpg`. Encode with `ffmpeg -i in.mov -vf scale=1920:-2 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart hero-desktop.mp4` (drop `-an` if you want the sound toggle to work).

## Booking form
In `site.ts` set `form.provider` to `formspree` (+ endpoint), `netlify`, or `custom` (POSTs JSON to your endpoint). The only network call is `send()` in `src/scripts/form.ts`.

## Run
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Deploy
Vercel or Netlify: import the repo, framework auto-detected. Or upload `dist/` to any static host.
Before launch: set `site.url`, fix the Sitemap URL in `public/robots.txt`, replace privacy/terms placeholders.
