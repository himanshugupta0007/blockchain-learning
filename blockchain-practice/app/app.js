const express = require("express");
const morgon = require("morgan");

const app = express();

// this is a middleware which modifies the request in JSON format
app.use(express.json());
// adding morgon to log request response
app.use(morgon("dev"));
// encoded url
app.use(express.urlencoded({ extended: true }));


module.exports = app;
