/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_API: process.env.APP_API,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['img.youtube.com', 'drive.google.com', 'localhost'],
  },
}

module.exports = nextConfig
