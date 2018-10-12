const utils = require('./utils');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        public: `localhost:${config.dev.port}`,
        quiet: true,
        overlay: {
            warnings: false,
            errors: true
        },
        open: true
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            talkingDataid: 'A8A3B1A4DA27444FBEB92B2DADF03A8C',
            inject: true,
        }),
        new FriendlyErrorsPlugin()
    ]
});
