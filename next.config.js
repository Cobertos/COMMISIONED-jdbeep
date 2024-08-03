const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: /component/,
      use: ['@svgr/webpack']
    });

    if (!isServer) {
      // hacked together from: https://github.com/vercel/next.js/issues/42530#issuecomment-1601317656
      // This is because next-plugin-preact was not updated for Next 13
      // Nor was @preact/compat (which is how next-plugin-preact aliases react to preact)
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});