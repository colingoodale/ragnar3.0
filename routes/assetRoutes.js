var path = require("path");

module.exports = function (app) {
    app.get("/assets/perkins/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/1_ChrisPerkins.png"));
    });
    app.get("/assets/matt/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/1_MattGammon.png"));
    });
    app.get("/assets/ryan/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/1_RyanSteusloffv2.jpg"));
    });
    app.get("/assets/dan/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/1_DanielNarvaizV2.png"));
    });
    app.get("/assets/chelsea/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_ChelseaGoodale.png"));
    });
    app.get("/assets/john/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_JohnVinsonv2.png"));
    });
    app.get("/assets/adam/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_AdamRaezler.png"));
    });
    app.get("/assets/resnick/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_RyanResnick.png"));
    });
    app.get("/assets/drew/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_DrewDahlberg.png"));
    });
    app.get("/assets/jordan/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_JordanPawlicki.png"));
    });
    app.get("/assets/paige/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_PaigeCopple.png"));
    });
    app.get("/assets/austin/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/1_AustinOrr.png"));
    });
    app.get("/assets/justin/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_JustinDuran.png"));
    });
    app.get("/assets/nicky/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/2_NickyTrucios.png"));
    });
};