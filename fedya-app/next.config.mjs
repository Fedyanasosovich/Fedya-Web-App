/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "minio-rwgosso4gwg0sw8cws4soccs.77.37.87.117.sslip.io",
      "buypfizergenotropinhgh.com",
      "fakegenotropinhgh.com",
    ],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
