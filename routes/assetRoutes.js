var path = require("path");

module.exports = function (app) {
    app.get("/assets/perkins/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/1_ChrisPerkins.png"));
    });
    app.get("/assets/lazcano/hex1", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/1_AlexLazcano.png"));
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

    //Profile pages
    app.get("/assets/perkins/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/1_ChrisPerkinsBP.png"));
    });
    app.get("/assets/lazcano/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_AlexLazcanoBP.png"));
    });
    app.get("/assets/matt/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/1_MattGammonBP.png"));
    });
    app.get("/assets/ryan/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/1_RyanSteusloffBP.png"));
    });
    app.get("/assets/dan/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/1_DanielNarvaizV2BP.png"));
    });
    app.get("/assets/chelsea/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_ChelseaGoodaleBP.png"));
    });
    app.get("/assets/john/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_JohnVinsonv2BP.png"));
    });
    app.get("/assets/adam/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_AdamRaezlerBP.png"));
    });
    app.get("/assets/resnick/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_RyanResnickBP.png"));
    });
    app.get("/assets/drew/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_DrewDahlbergBP.png"));
    });
    app.get("/assets/jordan/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_JordanPawlickiBP.png"));
    });
    app.get("/assets/paige/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_PaigeCoppleBP.png"));
    });
    app.get("/assets/austin/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_AustinOrrBP.png"));
    });
    app.get("/assets/justin/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_JustinDuranBP.png"));
    });
    app.get("/assets/nicky/prof", function (req, res) {
        res.sendFile(path.join(__dirname, "../assets/Hexagon/bio/2_NickyTrucoisBP.png"));
    });
};