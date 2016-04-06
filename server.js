/* eslint strict: 0, no-console: 0 */
'use strict';

const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.development');

const app = express();

const PORT = 3000;

if (process.env.HOT && process.env.NODE_ENV === 'development') {
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
    }));

    app.use(require('webpack-hot-middleware')(compiler));
    app.use(express.static('src/www'));
    console.log('enter dev mode ...');
}
else {
    app.use(express.static('dist'));
}


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/www/index.html');
});

app.listen(PORT, '0.0.0.0', err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Listening at http://localhost:${PORT}`);
});
