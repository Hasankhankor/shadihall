/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
	  appDir: true,
	},
	optimization: {
	  scripts: true,
	  styles: {

		inlineCritical: false,
	  },
	  fonts: true,
	},
  };

  module.exports = nextConfig;