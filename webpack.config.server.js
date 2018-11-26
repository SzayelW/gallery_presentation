const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: "./server/index.js",
    output: {
        filename: "serverBundle.js",
        path: path.resolve(__dirname, "server","build")
    },
    target: "node",
    externals: [nodeExternals()]
};