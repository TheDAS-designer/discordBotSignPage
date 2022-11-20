/** @type {import('next').NextConfig} */

// Only required within the scope of this monorepo
const nextConfig = {
  experimental: {
    transpilePackages: ['@web3modal/ethereum', '@web3modal/react']
  ,
  // reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },}

}

module.exports = nextConfig
