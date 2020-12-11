const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
// const MongoClient = require('mongodb').MongoClient;
var app = express();
// const url = 'mongodb://localhost:27017/';

var customerNo = 1;

app.use(function (req, res, next) {
  next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.get('/index', function (req, res) {
    console.log("got it");
});
app.listen(8000, () => console.log(`Server running on port 8000`));
