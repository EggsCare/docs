const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

// module.exports = withNextra()

// If you have other Next.js configurations, you can pass them as the parameter:
module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
})
