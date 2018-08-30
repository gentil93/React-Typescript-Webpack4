const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
              }
        ]
    },
    mode: 'development',
    devtool: 'eval',
    devServer: {
        port: 8080,
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
    },
});