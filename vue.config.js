/** @format */
const { resolve } = require('path');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '.',
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "${resolve('/src/styles/mixins/index.less')}";`, // less前置
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@src', resolve('src'));
  },
  devServer: {
    proxy: {
      // '/screenAdmin': { target: 'http://124.91.150.6:10904', changeOrigin: true },
      '/screenAdmin': { target: 'http://10.2.0.215:8050', changeOrigin: true },
    },
  },
});
