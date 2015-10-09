/**
 * Created by root on 10/1/15.
 */
'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectsSchema = new Schema({

    title:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    updated_On:{
        type: String,
        require: true
    },

    link:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Projects', projectsSchema);