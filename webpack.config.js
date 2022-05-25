const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    
    const isDev = env.dev;

    const cssLoader = (extraLoader) => {
        let loadersList = [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: "[path][name]__[local]--[hash:base64:5]",
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
            bundle: './src/index.js'
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist'),
            clean: true
        },
        devServer: {
            open: true,
            hot: true
        },
        // devtool: isDev ? '' : '',
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
            new MiniCssExtractPlugin()
        ],
    }   
};