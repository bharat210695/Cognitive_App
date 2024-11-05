const express = require("express");
const Router = express.Router();
const co = require("co");
const service = require("../services/sEmployee");

Router.post("/empDetail", (req, res) => {
    var result = [];
    co(async function () {
        try {
            result = await service.getEmployeeDtl(req.body);
            res.send(result);
        } catch (error) {
            console.log(error);
            result.message = error.message;
            res.send(error);
        }
    });
});

module.exports = Router
