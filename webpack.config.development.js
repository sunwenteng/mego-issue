const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    //Entry point to the project
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
        './src/app/app.js',
    ],
    //Webpack config options on how to obtain modules
    resolve: {
        //When requiring, you don't need to add these extensions
        extensions: ['', '.js', '.jsx'/*, '.md', '.txt'*/],
    },
    debug: true,
    // devtool: 'eval',
    devtool: 'cheap-module-eval-source-map',
    //Output file config
    output: {
        path: buildPath,    //Path of output file
        filename: 'app.js',  //Name of output file
        // publicPath: '/'
    },
    plugins: [
        //Used to include index.html in build folder
        new HtmlWebpackPlugin({
            inject: false,
            template: path.join(__dirname, '/src/www/index.html'),
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        //Allows for sync with browser while developing (like BorwserSync)
        new webpack.HotModuleReplacementPlugin(),
        //Allows error warninggs but does not stop compiling. Will remove when eslint is added
        new webpack.NoErrorsPlugin(),
    ],
    externals: {
        fs: 'js', // To remove once https://github.com/benjamn/recast/pull/238 is released
    },
    module: {
        //Allow loading of non-es
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot',
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            // {
            //     test: /\.txt$/,
            //     loader: 'raw-loader',
            //     include: path.resolve(__dirname, 'src/app/components/raw-code'),
            // },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    eslint: {
        configFile: '.eslintrc',
    },
};

module.exports = config;
