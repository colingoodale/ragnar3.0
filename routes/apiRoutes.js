
const db = require("../models");
const nodemailer = require("nodemailer");

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
    app.post('/api/send'), function (req, res) {
        db.Request.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            mobile_number: req.body.mobile_number,
            message: req.body.message
        });
        let transport = nodemailer.createTransport({
            host: 'smtp-relay.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: "info@ragnarresearch.com",
                password: "10Ragnar!@#"
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        let info = {
            from: '"Ragnar Website Resuest" <info@ragnarresearch.com>', //sender address
            to: 'colingoodale@gmail.com, gammon@ragnarresearch.com', //list of receipts
            subject: "Test Subject", //subject
            text: 'This is a test!',
            html: '<h2>This is a succesful test</h2>'
        };
        transport.sendMail(mailOptions, function (err, info) {
            console.log(info);
            if (err) {
                return console.log(err);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.gettestMessageURrl(info));
            alert("Ragnar will get back to you shortly");
        });

        console.log(req);
    };

}
