/** @type {import('next').NextConfig} */
export default nextConfig;
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          }
        ]
      },
    images: {
        domains: [
          "picsum.photos",
        ],
      },
};