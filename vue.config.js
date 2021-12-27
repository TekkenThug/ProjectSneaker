module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                  @import "@/styles/colors.scss";
                  @import "@/styles/layout.scss";
                  @import "@/styles/mixins.scss";
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
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
