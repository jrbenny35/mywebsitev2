/**
 * Created by root on 9/30/15.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('public/views/main.jade');
});

module.exports = router;
