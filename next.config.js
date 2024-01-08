/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configuration options...

  // Add the following lines to enable static HTML export
  // See: https://nextjs.org/docs/advanced-features/static-html-export
  target: 'experimental-serverless-trace',
  output: 'out/',
};

module.exports = nextConfig;
