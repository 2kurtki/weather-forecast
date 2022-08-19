const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const { getLocalIdent } = require('@dr.pogodin/babel-plugin-react-css-modules/utils');

module.exports = (env) => {
    const isDev = env.dev;

    const cssLoader = (extraLoader) => {
        let loadersList = [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        getLocalIdent,
                        localIdentName: "[path][name]__[local]--[hash:base64:5]"
                    },
                },
            }
        ];
        
        if (extraLoader) loadersList.push(extraLoader);

        return loadersList;
    };

    return {
        target: 'web',
        mode: isDev ? 'development' : 'production',
        entry: {
            bundle: './src/index.jsx'
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist'),
            clean: true
        },
        resolve: {
            alias: {
                Style: path.resolve(__dirname, './src/style'),
                Features: path.resolve(__dirname, './src/features')
            }
        },
        devtool: isDev ? 'eval-source-map' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: cssLoader(),
                },
                {
                    test: /\.sass|scss$/,
                    use: cssLoader('sass-loader'),
                },
                {
                    test: /\.(js|ts)x?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                }
            ],
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './public/index.html',
                filename: 'index.html',
                minify: {
                    collapseWhitespace: !isDev,
                }
            }),
            new MiniCssExtractPlugin(),
            new Dotenv()
        ],
    }   
};