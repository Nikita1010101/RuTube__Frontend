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
		APP_API: process.env.APP_API
	},
	images: {
		domains: ['img.youtube.com', 'drive.google.com']
	}
}

module.exports = nextConfig
