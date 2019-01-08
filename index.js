var express = require('express');

var app = express();
const sgMail = require('@sendgrid/mail');
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/',function(req, res){
    res.send("hello friends akshat here");
})

app.get('/sendmail', function (req, res) {
    const msg = {
        to: 'akshat.soni31@gmail.com',
        from: req.query.email,
        subject: 'New Mail from your website',
        text: `Hello Akshat !
        ${req.query.name} is written message:
        ${req.query.message},
        please repond back in
        email: ${req.query.email}
        and
        mobile: ${req.query.phone}        
        `,
      };
    
    sgMail.send(msg)
    .then(() => {
        res.sendStatus(200);
      })
    .catch(() => {
        res.sendStatus(401);
      });
});

app.listen(8181, function () {
  console.log('Example app listening on port 8181');
});