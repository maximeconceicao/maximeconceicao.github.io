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
});
