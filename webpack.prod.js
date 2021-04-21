const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        publicPath: 'http://35.222.227.86:8080/js/',
        compress: true,
        port: 8080
    }
})
