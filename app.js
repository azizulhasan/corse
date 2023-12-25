
var cors_proxy = require('cors-anywhere');
require('dotenv').config()
const express = require('express');
const cors = require('cors');

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function () {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });

// express app
const app = express();
app.use(cors({ origin: process.env.HOST }));
app.use(express.json());
// connect to mongodb & listen for requests.
const PORT = process.env.PORT || 9892;


app.listen(PORT)
