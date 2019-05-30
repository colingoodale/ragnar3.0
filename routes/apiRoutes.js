
const db = require("../models");

module.exports = function (app) {
    app.get("/api/request", function (req, res) {
        res.json("resquests");
    });
    app.post("/api/request", function (req, res) {
        db.Request.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            mobile_number: req.body.mobile_number,
            message: req.body.message
        });
    });



}