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
      // Old Squarespace page /design (linked from résumés, LinkedIn, Behance) → homepage.
      { source: '/design', destination: '/', permanent: true },
      { source: '/fr/design', destination: '/fr', permanent: true },
    ];
  },
};

export default nextConfig;
