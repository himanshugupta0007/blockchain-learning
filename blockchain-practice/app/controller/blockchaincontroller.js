const express = require("express");
const httpStatus = require("http-status-codes");
const BlockChain = require("../../blockchain/blockchain");

const blockchain = new BlockChain();

exports.getBlocks = (req, res) => {
    res.status(httpStatus.StatusCodes.OK).send(blockchain);
};