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


router.get('/contact', function(req, res){
   return models.contact.find(function(err, contact){
      if (!err){
         return res.send(contact);
      } else {
         return console.log(err);
      }
   });
});


module.exports = router;
