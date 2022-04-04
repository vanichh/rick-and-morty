/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
  },
  async redirects() {
    return [
      {
        source: "/character",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
