/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
  experimental: {
    appDir: true, // Ensure app directory support is enabled
  },
  output: 'standalone', // Helps in Vercel deployments
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false, // Prevents Next.js from trying to use Node.js modules in Edge Runtime
      net: false,
      tls: false,
    };
    return config;
  },
};

export default nextConfig;
