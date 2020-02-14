const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlplugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
});

module.exports = {
    mode: 'development',
    // mode: 'production'
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlplugin],
    module: {
        rules: [
            {test: /\.css$/,use:['style-loader','css-loader','postcss-loader']},
            {test:/\.less$/,use: ['style-loader','css-loader','less-loader']},        ]
    }
}