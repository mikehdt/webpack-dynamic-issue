const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    entry: {
        client: [
            './src/client.js',
        ],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: __dirname + '/dist',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,

                            plugins: ['react-hot-loader/babel'],
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        hot: true,
    },
};

module.exports = config;
