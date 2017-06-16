var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;

app.use(express.static(path.join((__dirname))));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MAILER

var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');
var mailConfig = {
  transport: 'SMTP',
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
};

var transporter = nodemailer.createTransport(mailConfig);

app.post('/subscribe', function(req, res) {
  console.log(req.body);
  var mailOptions = {
    from: 'RubbyDuck Customer Support <matt@mattcarterdev.com>',
    to: req.body.email,
    subject: 'Thanks from RubbyDuck!',
    html: 'Email Address: <br/>' + req.body.email + '<br/><br/>' +
          '<br/><br/>' + 'The content of this email is provided by and is the responsibility of the person posting the email communication. You acknowledge that any reliance on material in email communications is at your own risk.'+ '</b>'
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      return console.log(error);
    }
    console.log('Message sent:', info.response);
  });
});

// ROUTES

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(port, function() {
  console.log('app listening on port', port);
});
