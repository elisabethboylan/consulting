/** @type {import('next').NextConfig} */
const nextConfig = {
  // Send elisabethboylan.design (and www.) to the primary domain so there is one canonical site.
  // Both domains must also be added to the Vercel project (see README).
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(www\\.)?elisabethboylan\\.design' }],
        destination: 'https://elisabethboylan.com/:path*',
        permanent: true,
      },
      // The horizontal gallery view was retired; send old links to the homepage.
      { source: '/gallery', destination: '/', permanent: true },
      { source: '/fr/gallery', destination: '/fr', permanent: true },
    ];
  },
};

export default nextConfig;
