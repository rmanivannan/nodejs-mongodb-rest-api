var User = require('../db-models/user-model');
var jwt    = require('jsonwebtoken');
var app =null;

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
                  expiresIn : 60*80 //expires in 80 min
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

        var newUser = new User({
            username : req.body.username,
            password : req.body.password,
            email    : req.body.email,
            phone    : req.body.phone,
            role     : req.body.role
        });

        newUser.save(function(e,user) {
             if(e){
                console.log(e);
                return res.status(500).send();
            }
            //console.log(user._id)
            return res.status(200).send();
        });

    },
    logout: function (req, res) {
        // body...
        // delete the token on user session from browser
    }

}

module.exports = UserMethods;