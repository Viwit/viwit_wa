const fs = require('fs');

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue'
  ],
  devServer: {
    https: {
        key: fs.readFileSync('./key/private.key'),
        cert: fs.readFileSync('./key/private.crt'),
    },
    public: 'https://localhost:3500/'
}
}
