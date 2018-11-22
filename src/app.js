"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const route = router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "Node Store API",
    version: "0.0.1"
  });
});

const create = router.post("/", (req, res, next) => {
  res.status(201).send(req.body);
});

const put = router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body
  });
});

const del = router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body
  });
});

app.use("/", route);
app.use("/product", create);
app.use("/product", put);
app.use("/product", del);

module.exports = app;
