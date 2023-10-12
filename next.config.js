/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'cn', 'ne'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
