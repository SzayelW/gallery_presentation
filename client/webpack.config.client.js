const path = require("path");
const webpack = require('webpack');

//const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: ['@babel/polyfill', path.resolve(__dirname, "src", 'index.js')],//"./src/index.js"
    output: {
        filename: "clientBundle.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};