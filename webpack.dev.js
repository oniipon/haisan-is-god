const merge = require('webpack-merge')
const common = require('./webpack.common')
const {resolve} = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    hot: true,
    inline: true,
    contentBase: resolve(__dirname, 'public/'),
    publicPath: '/dist'
  }
})