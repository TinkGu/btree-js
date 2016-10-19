var webpack = require('webpack');
var path = require('path');

module.exports = {
    cache: true,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'ccc-bt.js',
        library: 'ccc-bt',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0', 'stage-3'],
            }
        }]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    }
}
