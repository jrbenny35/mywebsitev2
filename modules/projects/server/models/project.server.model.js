'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill Project title',
		trim: true
	},

	link:{
		type: String,
		default: '',
		required: 'Please set the Project link',
		trim: true
	},

	descrip: {
		type: String,
		default: '',
		required: 'Please set the Project description',
		trim: true
	},

	updated :{
		type: Date,
		default: Date.now
	},

	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Project', ProjectSchema);
