var mongoose = require('mongoose'),
	util = require('../util'),
    Schema = mongoose.Schema;

var Assessment = new Schema({

	utility                         : util.dbValidation.str,
	present_tariff                  : util.dbValidation.str,
	annual_bill                     : util.dbValidation.str,
	annual_consumption              : util.dbValidation.str,
	
	sys_size                        : util.dbValidation.str,
	roof_area                       : util.dbValidation.str,
	est_anual_prod                  : util.dbValidation.str,
	enery_mix_solar                 : util.dbValidation.str,
	enery_mix_grid                  : util.dbValidation.str,
	
	inverter                        : util.dbValidation.str,
	systemkit                       : util.dbValidation.str,
	module_specifics                : util.dbValidation.str, 
	warranty_specifics              : util.dbValidation.str, 
	
	env_co2_impact                  : util.dbValidation.str,
	equ_driving                     : util.dbValidation.str,
	equ_carbon                      : util.dbValidation.str,
	equ_coal                        : util.dbValidation.str,
	
	fin_upfront                     : util.dbValidation.str,
	fin_upfront_aft_inc             : util.dbValidation.str,
	fin_upfront_anual_save          : util.dbValidation.str,
	fin_upfront_yr20_save           : util.dbValidation.str,
	
	fin_paypartial_plan1            : util.dbValidation.str,
	fin_paypartial_plan1_aft_inc    : util.dbValidation.str,
	fin_paypartial_plan1_anual_save : util.dbValidation.str,
	fin_paypartial_plan1_yr20_save  : util.dbValidation.str,
	
	fin_paypartial_plan2            : util.dbValidation.str,
	fin_paypartial_plan2_aft_inc    : util.dbValidation.str,
	fin_paypartial_plan2_anual_save : util.dbValidation.str,
	fin_paypartial_plan2_yr20_save  : util.dbValidation.str,
	
	paynothing_plan                : util.dbValidation.str,
	paynothing_plan_aft_inc        : util.dbValidation.str,
	paynothing_plan_anual_save     : util.dbValidation.str,
	paynothing_plan_yr20_save      : util.dbValidation.str,
	
	payment_status                  : util.dbValidation.str, // this will be set by admin, out of user context
	advance_payment                 : util.dbValidation.str,
	
	plan_chosen                     : util.dbValidation.str,  
	aft_inc                         : util.dbValidation.str,
	anual_sav                       : util.dbValidation.str,
	yr20_sav                        : util.dbValidation.str,
	ctr_cp_sent_on                  : util.dbValidation.str, // <admin shuld have>
	singed_copy_res_on              : util.dbValidation.str,  // <admin shuld have>

	installation_status             : util.dbValidation.str  // [true, false]

});

module.exports = mongoose.model('assessment', Assessment);