/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["next-superjson-plugin", {}]],
  },
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
};

module.exports = nextConfig;
