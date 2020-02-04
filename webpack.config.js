const HTMLWebpackPlugin = require("html-webpack-plugin");
const {join} = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {HotModuleReplacementPlugin} = require("webpack");

let conf = {
    //mode: 'development',
    entry: join(__dirname, 'index.js'),
    output: {
        path: join(__dirname, './dist'),
        filename: 'main.js',
        //publicPath: 'dist/'
    },
    devServer: {
        overlay: true,
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
            // {
            //     test: /\.css$/,
            //     use: ['vue-style-loader', 'css-loader']
            // }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HTMLWebpackPlugin({
            showErrors: true,
            //cache: true,
            //title: 'Health project',
            //favicon: path(__dirname, 'logo.png'),
            template: join(__dirname, 'index.html')
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
};
