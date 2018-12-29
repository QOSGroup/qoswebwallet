const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin')

const ROOT_PATH = path.resolve(__dirname, '../');
const APP_PATH = path.join(ROOT_PATH, 'src'); 
const APP_FILE = path.join(APP_PATH, 'index.js'); 
const BUILD_PATH = path.join(ROOT_PATH, '/dist'); 


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: APP_FILE,
    output: {
        path: BUILD_PATH,
        filename: 'index.js'
    },
    devServer: {
        index: "test.html",
        contentBase: BUILD_PATH, 
        historyApiFallback: true, 
        inline: true 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                exclude: /^node_modules$/,
                use: 'vue-loader'
            }, {
                test: /\.json$/,
                exclude: /^node_modules$/,
                use: "json"
            },{
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                use: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.js$/,
                exclude: /^node_modules$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') 
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            { from: path.join(APP_PATH, 'test.html'), to: 'test.html' },
            { from: path.join(APP_PATH, 'background.js'), to: 'background.js' },
            { from: path.join(APP_PATH, 'style/treeit.css'), to: 'treeit.css' },
            { from: path.join(APP_PATH, 'chrome/manifest.json'), to: 'manifest.json' }
        ]),
        // new ExtractTextPlugin('[name].css')
    ]
}