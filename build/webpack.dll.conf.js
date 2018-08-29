process.env.NODE_ENV = 'production';

const path = require('path');

var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const srcPath = path.join(__dirname, '../static/dll/');
var env = config.build.env;

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

webpackConfig = {
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
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('node_modules/vue-lib')]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new ExtractTextPlugin({
            filename: '[name].dll.css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ // uglifjs压缩
            compress: {
                warnings: false
            }
        }),
        new webpack.DllPlugin({
            path: path.join(srcPath, '[name]-mainfest.json'), // 描述依赖对应关系的json文件
            name: '[name]_library',
            context: __dirname // 执行的上下文环境，对之后DllReferencePlugin有用
        })
    ]
}

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin({
        analyzerPort: 9999
    }))
}

module.exports = webpackConfig;