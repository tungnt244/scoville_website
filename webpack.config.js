var path = require('path')
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
    {
    entry: {
        'assets/browser': './src/Components/Index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:'css-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin('[dist]'),
        new ExtractTextPlugin('assets/css/style.css')
    ]
    },
    {
    entry: {
        server: './src/index.js',
        'assets/browser': './src/Components/Index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    node: {
        __filename:false,
        __dirname: false
    },
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:'css-loader'
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin('[dist]'),
        new ExtractTextPlugin('assets/css/style.css')
    ]
}]