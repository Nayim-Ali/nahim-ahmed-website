import { defineCollection } from 'astro:content';

/**
 * Suppress Astro's "auto-generating collections" deprecation warning.
 * The src/content/data/ folder contains CMS-managed JSON files consumed
 * directly via TypeScript imports — not via Astro Content Collections.
 * Defining an empty collection here silences the warning without changing
 * how the JSON files are used.
 */
const data = defineCollection({ type: 'data' });

export const collections = { data };
