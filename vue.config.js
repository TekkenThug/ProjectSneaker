module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                  @import "@/styles/variables/_colors.scss";
                  @import "@/styles/variables/_layout.scss";
                `,
            },
        },
    },
}
