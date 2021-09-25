module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                  @import "@/styles/variables/_colors.scss";
                  @import "@/styles/variables/_layout.scss";
                  @import "@/styles/mixins/_mixins.scss";
                `,
      },
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
