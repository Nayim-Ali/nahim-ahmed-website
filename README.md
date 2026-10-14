# Dr Nahim Ahmed MBE — website

Static site built with [Astro 5](https://astro.build). Content managed via [Decap CMS](https://decapcms.org) at `/admin`.

## For Nahim — editing the site

1. Visit **[nahimahmed.co.uk/admin](https://nahimahmed.co.uk/admin)**
2. Log in with your email and password (set up by your web team via Netlify Identity)
3. Pick a section from the left sidebar (e.g. Testimonials, FAQ, Story)
4. Edit the fields, upload photos where needed
5. Click **Save**, then **Publish**
6. The live site rebuilds automatically — **changes appear within ~2 minutes** ✅

> Images you upload go into `public/images/` automatically.
> Videos (hero, speaking) are too large for the CMS — contact your web team to update those.

---

## For developers

### Content files
All site copy now lives in `src/content/data/*.json` — one file per section.
The TypeScript files `src/content/site.ts` and `src/content/content.ts` are
thin re-exporters that keep all component imports working unchanged.

| JSON file | Section |
|---|---|
| `data/site.json` | Site URL, name, social, nav, form settings |
| `data/hero.json` | Hero headline, CTAs |
| `data/intro.json` | Intro paragraphs, pull quote |
| `data/story.json` | Story chapters, timeline |
| `data/about.json` | Bio, boards, education, portrait |
| `data/speaking.json` | Topics, paragraphs, stage photo |
| `data/keynote.json` | Keynote title, takeaways, other keynotes |
| `data/services.json` | Services list |
| `data/credibility.json` | Stats, honours, organisations |
| `data/impact.json` | Areas, case studies |
| `data/media.json` | Videos, articles, podcasts |
| `data/testimonials.json` | Quotes, names, photos |
| `data/thoughts.json` | LinkedIn posts / thoughts |
| `data/faq.json` | Questions and answers |
| `data/book.json` | Booking form copy |
| `data/finalcta.json` | Final CTA two-liner |
| `data/footer.json` | Footer blurb and links |

Search the project for `[` to find remaining placeholders.

### Images and video
- Images → `public/images/` (can also be uploaded via CMS)
- Videos → `public/media/` (update paths in `data/site.json`)
- Encode hero with: `ffmpeg -i in.mov -vf scale=1920:-2 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart hero-desktop.mp4`

### Booking form
In `data/site.json`, set `form.provider` to `formspree` + endpoint, `netlify`, or `custom`.

### Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

### Test CMS locally
```bash
npm install -g decap-server
decap-server     # runs proxy on port 8081
```
Then uncomment `local_backend: true` in `public/admin/config.yml` and visit http://localhost:4321/admin.
Remember to comment it back out before deploying.

### Deploy (Netlify — recommended)
1. Push to GitHub
2. Import repo in Netlify → framework auto-detected
3. Enable **Netlify Identity** in Site Settings → Identity → Enable Identity
4. Enable **Git Gateway** in Identity → Services → Git Gateway
5. Invite Nahim: Identity → Invite users → enter his email
6. Point the domain DNS to Netlify

### Deploy (Vercel — mirror only)
Vercel can still be used as a secondary/preview deployment but Netlify Identity (used for CMS login) only works on the Netlify-hosted domain.
