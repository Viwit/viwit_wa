const fs = require('fs');

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
      symlinks: false,
    },
  },
  devServer: {
    proxy: 'https://54.237.94.101:8000/',
  },
  transpileDependencies: ['@coreui/utils', '@coreui/vue'],
};
