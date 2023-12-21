const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/app-features/stripe-qr-code-payments',
        destination: '/help/app-features/stripe-qr-code-payments',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
  },
});
