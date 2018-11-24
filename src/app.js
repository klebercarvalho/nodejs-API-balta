const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/api-balta');

// load models
const Product = require('./models/product');

// load route
const index = require('./routes/index').default;
const product = require('./routes/product');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', index);
app.use('/products', product);

module.exports = app;
