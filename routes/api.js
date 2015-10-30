/**
 * Created by root on 10/1/15.
 */


var express = require('express');
var app = express();
var router = express.Router();
var nodemailer = require('nodemailer');


//models
var models = require('../models/index');


router.get('/projects', function(req, res){
   return models.projects.find(function (err, projects) {
      if (!err) {
         return res.send(projects);
      } else {
         return console.log(err);
      }
   });
});


router.post('/contact', function(req, res){

   var contact;
   console.log("POST: ");
   console.log(req.body);

   contact = new models.contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
   });

   contact.save(function (err) {
      if (!err) {
         return console.log("Created");
      } else {
         return console.log(err);
      }
   });

   //Nodemailer email
   console.log('Nodemailer post ' + req.body);

   //Create Transport Service
   var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
         user: 'jrbenny169@gmail.com',
         pass: 'Rustler@135'
      }
   });

   //Define mail parameters
   var mailOptions = {
      from: 'Node app bennyjr169@gmail.com', // sender address
      to: 'bennyjr169@gmail.com', // list of receivers
      subject: req.body.name + ' Sent you an email!', // Subject line
      text: req.body.email + ' Sent you an email. They wrote: ' + req.body.message // plaintext body
   };

   // send mail with defined transport object
   transporter.sendMail(mailOptions, function(error, info){
      if(error){
         return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      transporter.close();

   });


   return res.send(contact);

});


module.exports = router;
