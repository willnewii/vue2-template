const path = require('path');

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    transpileDependencies: ['vue-lib'],
    productionSourceMap: false,
    pluginOptions: {
        dll: {
            open: process.env.NODE_ENV === 'production',
            entry: [
                'vue',
                'vue-router',
                'vuex',
                'axios',
                'qs',
            ],
            output: path.join(__dirname, './public/dll'),
            inject: true,
        },
        webpackBundleAnalyzer: {
            analyzerMode: process.env.report == 'true' ? 'server' : 'disabled',
        }
    },
    configureWebpack: config => {

        //提取公共样式
        /* config.optimization.splitChunks.cacheGroups.styles = {
            name: 'styles',
            test: /\.(sass|scss|css)(\?.*)?$/,
            chunks: 'all',
            enforce: true,
            priority: 20,
            minChunks: 1,
        } */

        /* if (process.env.NODE_ENV === 'production') {
            // let extractCss = config.plugin('extract-css')
            // delete extractCss.chunkFilename ;
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        } */

    },
    chainWebpack: config => {
        //https://github.com/vuejs/vue-cli/issues/2843#issuecomment-458802639
        // 这里的 appStyles 中的 app 是入口文件的配置名称(从 vue inspect 中可以得到)
        const splitOptions = config.optimization.get('splitChunks');
        splitOptions.cacheGroups.appStyles = {
            name: 'styles',
            test: (m, c, entry = 'app') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
            chunks: 'all',
            minChunks: 1,
            enforce: true
        };
        config.optimization.splitChunks(splitOptions);
    }
};

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}
