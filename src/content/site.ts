/**
 * SITE CONFIG
 * Everything global lives here: name, links, contact details, hero video, form endpoint.
 * Anything in [SQUARE BRACKETS] is a placeholder that needs replacing.
 */

export const site = {
  // Used for canonical URL, Open Graph and the sitemap. Replace before deploying.
  url: 'https://nahimahmed.co.uk', // [SITE URL] — confirm final domain

  name: 'Dr Nahim Ahmed MBE',
  shortName: 'Nahim Ahmed',
  firstName: 'Nahim',
  postNominals: 'DSc (h.c), MSc, PGDip, BA (Hons), JNC',
  descriptor: 'Keynote speaker. Youth worker. Born and raised in Tower Hamlets.',

  // SEO
  seo: {
    title: 'Dr Nahim Ahmed MBE — Keynote Speaker & Youth Work Leader',
    description:
      'Dr Nahim Ahmed MBE is a keynote speaker and youth and community leader from Tower Hamlets. Book Nahim to speak on youth work, leadership, resilience, purpose and community.',
    ogImage: '/images/og-image.jpg', // [OG IMAGE] — 1200×630 photo of Nahim
    twitterHandle: '@nahimahmedMBE',
  },

  // Contact
  email: 'hello@nahimahmed.co.uk', // [EMAIL] — from existing draft site, please confirm
  phone: '', // [PHONE] — optional
  location: 'London, UK',

  // Social
  social: {
    linkedin: 'https://www.linkedin.com/in/nahimahmedmbe',
    instagram: 'https://instagram.com/nahimahmedmbe', // [CONFIRM]
    x: 'https://x.com/nahimahmedMBE',
  },

  // Where "Book Nahim" buttons go. Default is the on-page form.
  // Change to an external URL (Calendly, agency page etc.) if you'd rather.
  bookingUrl: '#book', // [BOOKING URL]

  // Hero video
  hero: {
    poster: '/media/hero-poster.jpg', // [HERO POSTER] — a still from the video, ~1920×1080, compressed
    videoDesktop: '/media/hero-desktop.mp4', // [HERO VIDEO] — 1080p, ~8–12s loop, < 6MB
    videoMobile: '/media/hero-mobile.mp4', // [HERO VIDEO MOBILE] — 720p portrait or square, < 3MB
    videoWebm: '', // optional .webm version for smaller file sizes
    captions: '', // optional /media/hero.vtt — recommended if the sound toggle is used
    hasAudio: true, // set to false to hide the sound toggle
  },

  // Looping video band in the Speaking section (the treatment used on the reference site).
  // No text over it except one button. Can be the same file as the hero video.
  speakingVideo: {
    video: '/media/speaking-loop.mp4', // [SPEAKING VIDEO] — 1080p, 10–20s of Nahim on stage, no audio needed
    mobileVideo: '/media/speaking-loop-mobile.mp4', // [SPEAKING VIDEO MOBILE] — optional
    poster: '/media/speaking-poster.jpg', // [SPEAKING POSTER]
    alt: '[SPEAKING VIDEO] Nahim speaking on stage',
  },

  /**
   * BOOKING FORM
   * provider:
   *   'none'      — form validates and shows success, but nothing is sent (for development)
   *   'formspree' — set endpoint to https://formspree.io/f/XXXX
   *   'netlify'   — deploy on Netlify; the form is detected automatically
   *   'custom'    — POSTs JSON to endpoint (your own API, HubSpot, Zapier, Make…)
   */
  form: {
    provider: 'none' as 'none' | 'formspree' | 'netlify' | 'custom',
    endpoint: '', // [FORM ENDPOINT]
  },

  nav: [
    { label: 'Story', href: '#story' },
    { label: 'Speaking', href: '#speaking' },
    { label: 'Impact', href: '#impact' },
    { label: 'Media', href: '#media' },
    { label: 'Thoughts', href: '#thoughts' },
  ],

  copyrightName: 'Dr Nahim Ahmed MBE',
};
