'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator' )

module.exports = validate({
    devtool: 'source-map',

    entry: [
        'react-hot-loader/patch', // RHL patch
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
          }],

        loaders: [{
            test: /\.jsx?$/,
            exclude:/(node_modules|bower_components)/,
            include: path.join(__dirname, 'src'),
            loader: 'babel', 
            query  :{
                presets:['react','es2015']
            }
        }]
    }
});


