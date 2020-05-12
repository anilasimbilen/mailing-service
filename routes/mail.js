var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
const configurations = require("../config.json");

let transport = nodemailer.createTransport({
  host: configurations.smtp.host,
  port: configurations.smtp.port,
  auth: {
    user: configurations.credentials.email_address,
    pass: configurations.credentials.password,
  },
});

router.get("/", function (req, res, next) {
  return res.status(200).json({ msg: "Mailing Service" });
});

router.post("/text", async (req, res) => {
  const message = {
    from: configurations.credentials.email_address, // Sender address
    to: req.body.to, // List of recipients
    subject: req.body.subject, // Subject line
    text: req.body.text, // Plain text body
  };
  transport.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error });
    } else {
      return res.status(200).json({ info });
    }
  });
});

router.post("/html", async (req, res) => {
  const message = {
    from: configurations.credentials.email_address,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.html,
  };
  transport.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error });
    } else {
      return res.status(200).json({ info });
    }
  });
});

module.exports = router;
