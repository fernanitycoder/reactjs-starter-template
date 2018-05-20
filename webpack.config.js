var webpack = require('webpack')
var path = require('path')

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
            { test: /\.css?/, include: SRC_DIR + '/css', use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development'
}

module.exports = config
