const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  publicPath: "/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        // additionalData: `
        //   @import "~@/styles/style.scss";
        // `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new (require("copy-webpack-plugin"))({
        patterns: [
          {
            from: path.resolve(__dirname, "404.html"),
            to: path.resolve(__dirname, "dist"),
          },
        ],
      }),
    ],
  },
});
