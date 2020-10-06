const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    name: 'display-flex-build',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'hidden-source-map' : 'eval',
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
    },
    entry: {
        app: './src/index',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: !isProduction }),
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            templateParameters: {
                gaId: process.env.GA_ID || '',
            },
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    GA_ID: JSON.stringify(process.env.GA_ID),
                }
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '',
                },
            ],
        }),
        new workboxPlugin.GenerateSW({
            // we want our service worker to cache the dist directory
            // globDirectory: 'publish',
            // these are the sorts of files we want to cache
            // globPatterns: ['**/*.{html,js,css,png,svg,jpg,gif,json}'],
            // this is where we want our ServiceWorker to be created
            swDest: path.resolve('output', 'sw.js'),
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    output: {
        filename: 'dist/[name].js',
        path: path.join(__dirname, 'output'),
    },
};
