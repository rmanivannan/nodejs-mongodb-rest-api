var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var Feedback = new Schema({

	inst_feedback  : util.dbValidation.str,
	cust_feedback  : util.dbValidation.str,
	rating         : util.dbValidation.str,
	requirement_id : util.dbValidation.str,
	installer_id   : util.dbValidation.str,

});

module.exports = mongoose.model('feedback', Feedback);