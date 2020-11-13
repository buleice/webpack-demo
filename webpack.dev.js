const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');
 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   plugins:[
    // 而 vendor 的 hash 发生变化是我们要修复的
    new webpack.NamedModulesPlugin()
   ]
 });