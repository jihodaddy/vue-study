const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //강사님이 한 설정
  publicPath: process.env.Node_ENV === "production" ? "/static/" : "/",
});
