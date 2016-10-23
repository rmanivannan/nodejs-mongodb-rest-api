var mongoose = require('mongoose'),
    util = require('../util'),
    Schema = mongoose.Schema;

var UserRequirementSchema = new Schema({
    itemname              : { type: String, required: true, index: { unique: true } },
    username              : { type: String, required: true },
    rooftop_area          : { type: String },
    installAt             : { type: String },
    installAt             : { type: String },
    req_visit_time        : { type: String },
    req_visit_date        : { type: String },
    location              : { type: String },
    address_l1            : { type: String },
    address_l2            : { type: String },
    pin                   : { type: String },
    owner_gender          : { type: String },
    owner_fname           : { type: String },
    owner_lname           : { type: String },
    owner_phone           : { type: String },
    owner_email           : { type: String },
    installer_id          : { type: String },
    act_visit_time        : { type: String },
    act_visit_date        : { type: String },
    is_consultant_visited : { type: String },
    approve_status        : { type: String }
});

module.exports = mongoose.model('requirments', UserRequirementSchema);