const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 解决无法加载less的问题
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "red",
        },
      },
    },
  },
  // 解决跨域问题
  lintOnSave: false,
  devServer: {
    // 设置代理
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 后端接口api地址
        changeOrigin: true, // 开启代理：在本地会创建一个虚假服务器，然后发送请求的数据，
        //并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          // 路径重写：将路径中 /api 替换为''（空字符串），保证路径访问正确,如:'/api/search/users2'====>'http://localhost:5000/search/users2'
          "^/api": "",
        },
      },
    },
  },
});
