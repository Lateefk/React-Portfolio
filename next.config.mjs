/** @type {import('next').NextConfig} */
// GitHub Pages needs basePath; Vercel serves at the domain root. If GITHUB_PAGES is
// set by mistake in Vercel env vars, assets 404. Vercel always sets VERCEL=1 at build time.
const isVercel = process.env.VERCEL === '1'
const isGithubPages = !isVercel && process.env.GITHUB_PAGES === 'true'
const publicBasePath = isGithubPages ? '/React-Portfolio' : ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: publicBasePath,
  },
  ...(isGithubPages && {
    basePath: '/React-Portfolio',
    assetPrefix: '/React-Portfolio/',
  }),
}

export default nextConfig
