var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var Referal = new Schema({

	fname      : util.dbValidation.str,
	lname      : util.dbValidation.str,
	salutation : util.dbValidation.str,
	created_on : util.dbValidation.str,
	username   : util.dbValidation.str,
	email      : util.dbValidation.str,
	phone      : util.dbValidation.str,
	address    : util.dbValidation.str,
	tnc        : util.dbValidation.str,
	status     : util.dbValidation.str,
	rewards    : util.dbValidation.str

});

module.exports = mongoose.model('referral', Referal);