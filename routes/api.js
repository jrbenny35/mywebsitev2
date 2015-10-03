/**
 * Created by root on 10/1/15.
 */


var express = require('express');
var app = express();
var router = express.Router();

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

   return res.send(contact);

});


module.exports = router;
