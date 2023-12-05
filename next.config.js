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
		API_URL: process.env.API_URL
	},
	images: {
		domains: ['img.youtube.com', 'drive.google.com']
	}
}

module.exports = nextConfig
