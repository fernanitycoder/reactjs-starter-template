var webpack = require('webpack')
var path = require('path')

var SRC_DIR = path.resolve(__dirname, 'src')
var DIST_DIR = path.resolve(__dirname, 'public')

var config = {
    entry: SRC_DIR + '/index.jsx',
    output: {
        path: DIST_DIR,
        filename: 'app.js'
    },
    module: {
        rules: [
            { test: /\.jsx?/, include: SRC_DIR, use: 'babel-loader' }
        ]
    },
    mode: 'development'
}

module.exports = config
