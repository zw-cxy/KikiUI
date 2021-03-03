const Mock = require('./mock/index.js')
const path = require('path')

module.exports = {
  chainWebpack: (config) => {   
    config.resolve.alias
    .set( '@', path.resolve(__dirname, '/'))//设置@为src目录的别名)
  },
  devServer: {
    contentBase: path.join(__dirname, 'mock'),
    compress: true,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    before(app){
      console.log('mock')
      Mock(app)
    }
}
}