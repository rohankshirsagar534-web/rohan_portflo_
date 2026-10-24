/// <reference types="vite/client" />

/**
 * Helper to resolve asset paths against Vite's BASE_URL
 * Ensures compatibility with both local development ('/') and GitHub Pages ('/rohan-new/').
 */
export const resolveAsset = (url?: string): string => {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('blob:') ||
    url.startsWith('data:')
  ) {
    return url;
  }
  const base = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || '/';
  const clean = url.startsWith('/') ? url.slice(1) : url;
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
};
