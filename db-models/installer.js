var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var Installer = new Schema({

	name       : util.dbValidation.str,
	company_id : util.dbValidation.str,
	location   : util.dbValidation.str,
	desc       : util.dbValidation.str,
	phone      : util.dbValidation.str,
	email      : util.dbValidation.str,
	pic        : util.dbValidation.str

});

module.exports = mongoose.model('installer', Installer);