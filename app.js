var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ApiError = require('./libs/ApiError');

/* This is a Kind of Hack. But comprimising for clean code in the rest part of the App. Thanks to @joelabair */
process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use(function(req, res, next) {
  next( ApiError('Not found', 404 ));
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
  next && next();
});


module.exports = app;
