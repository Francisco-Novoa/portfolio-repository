const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/tictactoe',
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, // for js or jsx files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }, // for css files
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }, // for images files
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: ['file-loader']
            }  // for fonts
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'Popper': 'popper.js'
        })
    ]
};
