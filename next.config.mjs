/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'
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
