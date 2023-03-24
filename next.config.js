/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com'],
   },
  experimental: {
    
    appDir: true,
  },
  head: {
    title: 'Chatgpt Clone',
  },
}

module.exports = nextConfig
