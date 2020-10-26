const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:{
        indexJs: ["babel-polyfill","./src/index.js"],
        indexController: ["./src/controllers/indexController.js", "./src/js/batalha.js"]
    },

    output: {
        filename: '[name].bundle.js',
        publicPath: 'dist'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js/ig,
            }),
            new OptimizeCssAssetsPlugin()
        ]
    },


    plugins: [new MiniCssExtractPlugin({
        filename: "main.bundle.css"
    })],

    module: {
        rules: [
            {
                test: /\.css$/ig,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(scss)$/ig,
                use: [{
                    loader: MiniCssExtractPlugin.loader, // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 3000,
        open: true
    }
}