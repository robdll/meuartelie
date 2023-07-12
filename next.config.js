module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'it'],
    localeDetection: false,
  },
  images: {
    domains: ['scontent.cdninstagram.com'],
  }
};