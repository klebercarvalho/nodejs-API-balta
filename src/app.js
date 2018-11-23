const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// load route
const index = require('./routes/index').default;
const product = require('./routes/product');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', index);
app.use('/product', product);

module.exports = app;
