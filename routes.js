/**
 * Created by root on 10/1/15.
 */
'use strict';

var express = require('express')
    , router = express.Router();

    router.use('/', require('./routes/index'));
    router.use('/', require('./routes/partials'));
    router.use('/api/', require('./routes/api'));

module.exports = router;

