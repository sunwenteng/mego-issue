var webpack = require("webpack");

module.exports = {

    entry: './src/app/app.js',
    output: {
        path: __dirname + '/build-cordova/www/assets',
        filename: 'app.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {},
        extensions: ['', '.jsx', '.js']
    },
    module: {
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
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            { test: /\.scss/, loader: 'style!css!sass?sourceMap' }, // use ! to chain loaders
            { test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true})
        new webpack.HotModuleReplacementPlugin(),
    ]
};