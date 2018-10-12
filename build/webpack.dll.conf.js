const path = require('path');
var utils = require('./utils');
var config = require('../config');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const srcPath = path.join(__dirname, '../static/dll/');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

webpackConfig = {
    mode: "production",
    entry: {
        core: config.dll.vendors
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('node_modules/vue-lib')]
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    publicPath: './',
                    limit: 1000,
                    name: 'fonts/[name].[ext]'
                }
            }]
    },
    output: {
        path: srcPath, // 输出的路径
        filename: '[name].dll.js', // 输出的文件，将会根据entry命名为vendor.dll.js
        library: '[name]_library' // 暴露出的全局变量名
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: config.build.productionSourceMap,
                uglifyOptions: {
                    warnings: false
                }
            }),
            new OptimizeCSSPlugin({
                cssProcessorOptions: config.build.productionSourceMap
                    ? {safe: true, map: {inline: false}}
                    : {safe: true}
            }),
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'dll',
                    test: /\.vue$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].dll.css'),
            //filename: utils.assetsPath('css/[name].[contenthash].css'),
        }),
        new webpack.DllPlugin({
            path: path.join(srcPath, '[name]-mainfest.json'), // 描述依赖对应关系的json文件
            name: '[name]_library',
            context: __dirname // 执行的上下文环境，对之后DllReferencePlugin有用
        })
    ]
};

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin({
        analyzerPort: 9999
    }));
}

module.exports = webpackConfig;