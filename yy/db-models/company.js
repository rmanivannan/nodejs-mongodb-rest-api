var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var Company = new Schema({

	name                     : util.dbValidation.str,
	address                  : util.dbValidation.str,
	type                     : util.dbValidation.str,
	email                    : util.dbValidation.str,
	phone                    : util.dbValidation.str,
	financial_turnover       : util.dbValidation.str,
	team_strength            : util.dbValidation.str,
	total_completed_projects : util.dbValidation.str,
	team_experience          : util.dbValidation.str,
	facilities               : util.dbValidation.str,
	cities                   : util.dbValidation.str,
	bank_name                : util.dbValidation.str,
	branch_name              : util.dbValidation.str

});

module.exports = mongoose.model('company', Company);