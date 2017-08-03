var path = require('path')
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
    {
        entry: {
            server: './src/index.js',
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
                },{
                    test: /\.css$/,
                    use: [
                        'ignore-loader'
                    ]
                }
            ]
        },
        devtool:'inline-source-map',
        plugins:[
            new CleanWebpackPlugin('[dist]'),
        ]
}]