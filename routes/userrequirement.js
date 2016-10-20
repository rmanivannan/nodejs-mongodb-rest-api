var User_requirement = require('../db-models/user_requirments');
var util = require('../util');
var Userrequirement = {
	add : function (req, res) {
		var userRequirement = new User_requirement({
            itemname: req.body.itemname,
            username: req.body.username,
            quantity: req.body.quantity,
            cost: req.body.cost
        });

        userRequirement.save(function(e,requirement) {
            return util.error(req,res,e,requirement)
        });
	},
	getById: function(req, res) {
		//
		User_requirement.findOne({ _id: req.params.id }, function(e, requirement) {
	        return util.error(req,res,e,requirement)
	    });
	},
    getAll: function(req, res) {
        if(req.decoded._doc.role === "user"){
            User_requirement.find({username:req.decoded._doc.username}, function(e, requirement) {
                return util.error(req,res,e,requirement)
            });
        }
        if(req.decoded._doc.role === "admin"){
            User_requirement.find({}, function(e, requirement) {
                return util.error(req,res,e,requirement)
            });
        }
    },
	putById: function (req, res) {
		User_requirement.findOneAndUpdate({ _id: req.params.id }, {$set:util.rmExtToUpdate(User_requirement,req)}, {new: true}, function(e, requirement){
		    return util.error(req,res,e,requirement)
		});
	},
	deleteById: function (req, res) {
		//req.params.id
		// body...
	}
}
module.exports = Userrequirement;