const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    mode: 'development',
    entry: {
        index: './src/mico-core/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
            template: 'src/index.template.html',
            inject: 'body'
        }),
    ],
    devServer: {
        contentBase: './dist',
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
 };