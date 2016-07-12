// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
console.log(__dirname)
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve('D:\\webwork\\biketo_racing\\Application\\Wap\\View\\Bet\\index.html'),
    assetsRoot: path.resolve('D:\\webwork\\biketo_racing\\Public'),
    assetsSubDirectory: 'bet',
    assetsPublicPath: '/Public/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    assetsPublicPath: '/',
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {
        '/app/**/*': {
            target: 'http://rent.l',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
  }
}
