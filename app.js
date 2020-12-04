var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
const http = require('http');
const port = process.env.PORT || 3000
const fs = require('fs');

app.use(express.static('public'));

app.get('/public', function(req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
  });

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res){
  const obj = JSON.parse(JSON.stringify(req.body));
   console.log(obj.nume);
   console.log(obj.mail);
   console.log(obj.injuratura);

   let transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 587,
   secure: false,
   requireTLS: true,
   auth: {
       user: 'user@gmail.com',
       pass: 'password'
   }
});

let mailOptions = {
   from: obj.mail,
   to: 'destinatar@gmail.com',
   subject: 'Form data',
   text: obj.nume + ' a completat formularul:\n' + obj.injuratura + '\n Mail: ' + obj.mail
};

transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
       return console.log(error.message);
   }
   console.log('success');
});

  res.sendFile(path.join(__dirname + '/index.html'));
});

// app.listen(8080);

app.listen(port,() => {
  console.log(`Server running at port `+port);
});
