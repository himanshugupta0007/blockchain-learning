const express = require("express");
const morgon = require("morgan");
const blockChainRoute = require("../app/route/blockchainrouter");

const app = express();

// this is a middleware which modifies the request in JSON format
app.use(express.json());
// adding morgon to log request response
app.use(morgon("dev"));
// encoded url
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/blockchain", blockChainRoute);

module.exports = app;
