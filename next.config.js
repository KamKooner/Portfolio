/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configuration options...

  // Remove the following line, as we're handling export in GitHub Actions
  // output: 'out/',
  // Add the following line for static HTML export
  output: 'standalone',
};

module.exports = nextConfig;
