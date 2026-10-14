/**
 * SITE CONFIG
 * All site-wide settings are now stored in src/content/data/site.json
 * and managed via the CMS at /admin.
 *
 * To edit: log in at /admin → "Site & Contact"
 */

import siteData from './data/site.json';

export const site = siteData as typeof siteData & {
  form: { provider: 'none' | 'formspree' | 'netlify' | 'custom'; endpoint: string };
};
