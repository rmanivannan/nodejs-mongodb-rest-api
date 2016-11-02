var User = require('../db-models/user');
var jwt    = require('jsonwebtoken');
var app =null;
var util = require('../util');


var UserMethods = {
    setApp: function(a) {
        app = a;
    },
	login:function (req, res) {

	    User.findOne({ username: req.body.username }, function(e, user) {
	        if (e || !user) {
	            console.log(e);
	            return res.status(500).send();
	        }

	        // test a matching password
	        user.comparePassword(req.body.password, function(e, isMatch) {
	            if (e) {
	                console.log(e);
	                return res.status(500).send();
	            }
                var token = jwt.sign(user, req.app.get('superSecret'), {
                  expiresIn : 60*80*10000000 //expires in 80 min
                });
	            return  res.json({
                          success: true,
                          message: 'Enjoy your token!',
                          token: token
                        });
	        });
	    });

	},
    register:function (req, res) {
        User.count({}, function( err, count){
            console.log( "Number of users:", (count+1) );
            var data = util.rmExtToUpdate(User,req);
            data['cid'] = util.custIdFormat(count);
            data['role'] = util.config.role.user;
            var user = new User(data);
            user.save(function(e,user) {
                return util.apiResp(req,res,e,user)
            });
        })


    },
    update: function (req,res) {
        User.findOneAndUpdate({ _id: req.params.id }, {$set:util.rmExtToUpdate(User,req)}, {new: true}, function(e, user){
            return util.apiResp(req,res,e,user)
        });
    },
    logout: function (req, res) {
        // body...
        // delete the token on user session from browser
    },
    add:function (req,res) {
        // body...
    },
    getAll: function (req,res) {
       if(req.decoded._doc.role.toLowerCase() === "user"){
            User.find({username:req.decoded._doc.username}, function(e, records) {
                return util.apiResp(req,res,e,records)
            });
        }
    },
    getById: function (req,res) {
       if(req.decoded._doc.role.toLowerCase() === "user"){
            User.findOne({username:req.decoded._doc.username}, function(e, records) {
                return util.apiResp(req,res,e,records)
            });
        }
    },
    putById: function (req,res) {
       if(req.decoded._doc.role.toLowerCase() === "user"){
            User.find({username:req.decoded._doc.username}, function(e, records) {
                return util.apiResp(req,res,e,records)
            });
        }
    },
    deleteById: function (req,res) {
       if(req.decoded._doc.role.toLowerCase() === "user"){
            User.find({username:req.decoded._doc.username}, function(e, records) {
                return util.apiResp(req,res,e,records)
            });
        }
    }

}

module.exports = UserMethods;