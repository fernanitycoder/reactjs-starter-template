var webpack = require('webpack')
var path = require('path')

var MiniCssExtractPlugin = require("mini-css-extract-plugin");


var SRC_DIR = path.resolve(__dirname, 'src')
var DIST_DIR = path.resolve(__dirname, 'public')


var config = {
    module: {},
    entry: SRC_DIR + '/app.js',
    output: {
        path: DIST_DIR,
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.jsx?/, include: SRC_DIR + '/components', use: 'babel-loader' },
            { test: /\.css$/, include: SRC_DIR + '/css', use: [ MiniCssExtractPlugin.loader, "css-loader" ] }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "build.min.css",
            chunkFilename: "[id].css"
        })
    ],
    //mode: 'development'
}

module.exports = config
