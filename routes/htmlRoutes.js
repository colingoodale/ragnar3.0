
var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/index"));
    });
    app.get("/texas-study", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/texas_study.html"));
    })

};