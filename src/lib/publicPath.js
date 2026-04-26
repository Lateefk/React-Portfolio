/**
 * Prefix public asset URLs for GitHub Pages (Next basePath /React-Portfolio).
 * NEXT_PUBLIC_BASE_PATH is set in next.config.mjs.
 */
export function publicPath(href) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  if (!href) return base
  const path = href.startsWith('/') ? href : `/${href}`
  return `${base}${path}`
}
