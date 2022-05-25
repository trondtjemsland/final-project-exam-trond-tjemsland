/** @type {import('next').NextConfig} */

module.exports = {
	images: {
		domains: ['netlify.app', 'preeminent-valkyrie-e01801.netlify.app'],
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};

const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;
