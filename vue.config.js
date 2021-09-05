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
}
