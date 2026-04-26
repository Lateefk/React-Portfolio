import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**'],
  },
  ...nextCoreWebVitals,
  {
    files: ['src/**/*.jsx', 'src/**/*.js', 'pages/**/*.js'],
    rules: {
      // Static export + public/ assets; <img> with publicPath is intentional
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
