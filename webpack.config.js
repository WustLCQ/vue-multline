const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './example/index.js', // 项目的入口文件，webpack会从index.js开始，把所有依赖的js都加载打包
    output: {
        path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
        publicPath: '/dist/', // 通过devServer访问路径
        filename: 'build.js' // 打包后的文件名
    },
    devServer: {
        historyApiFallback: true,
        overlay: true,
        port: 3709
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }

};