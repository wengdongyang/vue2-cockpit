/** @format */
const { resolve } = require('path');
const { defineConfig } = require('@vue/cli-service');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  // productionSourceMap: process.env.NODE_ENV === 'development',
  css: {
    loaderOptions: {
      less: {
        lessOptions: { javascriptEnabled: true },
        // additionalData: `@import "${resolve('/src/styles/mixins/index.less')}";`, // less前置
      },
    },
  },
  // configureWebpack: {
  //   // plugins: [new BundleAnalyzerPlugin()],
  // },
  chainWebpack: (config) => {
    config.resolve.alias.set('@src', resolve('src'));
  },
  devServer: {
    open: true,
    proxy: {
      // '/screenAdmin': { target: 'http://124.91.150.6:10904', changeOrigin: true },
      '/screenAdmin': { target: 'http://10.2.0.215:8050', changeOrigin: true },
    },
  },
});
