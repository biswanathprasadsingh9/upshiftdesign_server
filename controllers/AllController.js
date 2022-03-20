const { response } = require("express");
const Contact = require("../models/Contact");
const RequestQuote = require("../models/RequestQuote");
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "flowerhornfishstoreindia@gmail.com",
    pass: "Apple@123",
  },
});

const contactsubmit = (req, res) => {
  Contact.create(req.body).then((response) => {
    res.json({
      response: true,
    });
  });

  const mailOptions = {
    from: "flowerhornfishstoreindia@gmail.com", // sender address
    to: "b21341995returns@gmail.com, biswanathprasadsingh9@gmail.com", // list of receivers
    subject: "New Contact Request", // Subject line
    html: `<p><b>First Name:</b> ${req.body.firstname}</p><p><b>Last Name:</b> ${req.body.lastname}</p><p><b>Email:</b> ${req.body.email}</p><p><b>Phone:</b> ${req.body.phone}</p><p><b>Message:</b> ${req.body.message}</p>`, // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

const requestaquotesubmit = (req, res) => {
  RequestQuote.create(req.body).then((response) => {
    res.json({
      response: true,
    });
  });

  const mailOptions = {
    from: "flowerhornfishstoreindia@gmail.com", // sender address
    to: "b21341995returns@gmail.com, biswanathprasadsingh9@gmail.com", // list of receivers
    subject: "New Request A Quote", // Subject line
    html: `<p><b>Name:</b> ${req.body.name}</p><p><b>Email:</b> ${req.body.email}</p><p><b>Contact:</b> ${req.body.contact}</p><p><b>Organization:</b> ${req.body.organization}</p><p><b>Website:</b> ${req.body.website}</p><p><b>Country:</b> ${req.body.country}</p><p><b>Message:</b> ${req.body.message}</p>`, // plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

module.exports = { contactsubmit, requestaquotesubmit };
