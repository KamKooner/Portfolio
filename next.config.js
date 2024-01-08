/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configuration options...

  // Add the following lines to enable static HTML export
  // See: https://nextjs.org/docs/advanced-features/static-html-export
  output: 'out/',
};

module.exports = {
  // other configurations...
  exportPathMap: async function () {
    return {
      '/': { page: '/' }, // Export the root page
    };
  },
};
