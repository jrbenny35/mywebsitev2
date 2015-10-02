/**
 * Created by root on 10/1/15.
 */

var restful = require('node-restful');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
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



module.exports = router;
