/**
 * PAGE CONTENT
 * All copy is now stored in src/content/data/*.json
 * and managed via the CMS at /admin.
 *
 * This file re-exports everything with the same named exports
 * that all components expect — no component changes needed.
 *
 * Helper: cleans up empty image objects that Decap CMS may write
 * when an optional image field is cleared.
 */

import heroData from './data/hero.json';
import introData from './data/intro.json';
import storyData from './data/story.json';
import aboutData from './data/about.json';
import speakingData from './data/speaking.json';
import keynoteData from './data/keynote.json';
import servicesData from './data/services.json';
import credibilityData from './data/credibility.json';
import impactData from './data/impact.json';
import mediaData from './data/media.json';
import testimonialsData from './data/testimonials.json';
import thoughtsData from './data/thoughts.json';
import faqData from './data/faq.json';
import bookData from './data/book.json';
import finalCtaData from './data/finalcta.json';
import footerData from './data/footer.json';

// ── Type definitions (kept here so components can import them) ──────────────

export type StoryChapter = {
  id: string;
  kicker: string;
  statement: string;
  body: string[];
  image?: { src: string; alt: string; caption?: string };
};

export type CaseStudy = {
  title: string;
  context: string;
  challenge: string;
  what: string;
  happened: string;
  learned: string;
  image?: { src: string; alt: string };
  placeholder?: boolean;
};

export type MediaItem = {
  type: 'video' | 'article' | 'podcast' | 'talk';
  title: string;
  source: string;
  date?: string;
  href?: string;
  youtubeId?: string;
  image?: { src: string; alt: string };
  featured?: boolean;
  placeholder?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  organisation?: string;
  photo?: { src: string; alt: string };
  featured?: boolean;
  placeholder?: boolean;
};

export type Thought = {
  title: string;
  excerpt: string;
  source: string;
  href: string;
  date?: string;
  size?: 'large' | 'small';
};

// ── Helper ──────────────────────────────────────────────────────────────────

/** Strip image objects where src is empty — Decap CMS writes these when a
 *  user clears an optional image field. Components check `if (item.image)`
 *  so returning undefined keeps the existing logic working. */
function cleanImg<T extends { src?: string | null }>(
  img: T | null | undefined,
): T | undefined {
  return img && img.src ? img : undefined;
}

// ── Re-exports ───────────────────────────────────────────────────────────────

export const hero = heroData;

export const intro = introData;

export const story = {
  ...storyData,
  chapters: storyData.chapters.map((ch) => ({
    ...ch,
    image: cleanImg(ch.image),
  })) as StoryChapter[],
};

export const about = aboutData;

export const speaking = speakingData;

export const keynote = keynoteData;

export const services = servicesData;

export const credibility = credibilityData;

export const impact = {
  ...impactData,
  caseStudies: impactData.caseStudies.map((cs) => ({
    ...cs,
    image: cleanImg(cs.image),
  })) as CaseStudy[],
};

export const media = {
  ...mediaData,
  items: mediaData.items.map((item) => ({
    ...item,
    image: cleanImg(item.image),
  })) as MediaItem[],
};

export const testimonials = {
  ...testimonialsData,
  items: testimonialsData.items.map((t) => ({
    ...t,
    photo: cleanImg(t.photo),
  })) as Testimonial[],
};

export const thoughts = {
  ...thoughtsData,
  items: thoughtsData.items as Thought[],
};

export const faq = faqData;

export const book = bookData;

export const finalCta = finalCtaData;

export const footer = footerData;
