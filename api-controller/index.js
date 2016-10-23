// This page has to be removed if it grows or complex
var user         = require('./user'),
login            = user.login,
register         = user.register,
jwt              = require('jsonwebtoken'),
tableControllers = {
	"requirement"  : require('./requirement'),
	"assessment"   : require('./assessment'),
	"company"      : require('./company'),
	"feedback"     : require('./feedback'),
	"installer"    : require('./installer'),
	"installation" : require('./installation'),
	"referral"     : require('./referral')
};

var Routes = {
	init: function(apiRoutes,app) {
		this.initPreloginRoutes(apiRoutes);
		this.authendicateFilter(apiRoutes,app);
		this.initPostloginRoutes(apiRoutes);
	},
	initPreloginRoutes: function(apiRoutes) {
		apiRoutes.post('/register', register);
		apiRoutes.post('/login', login);
	},
	initPostloginRoutes: function(apiRoutes) {

		for(var item in tableControllers){
			var ctrl = tableControllers[item];
			apiRoutes.post  ('/'+ item ,               ctrl.add);
			apiRoutes.post  ('/'+ item +'/all',        ctrl.getAll); // it should be get but for safty purpose its addede as post
			apiRoutes.post  ('/'+ item +'/:id',        ctrl.getById); // it should be get but for safty purpose its addede as post
			apiRoutes.put   ('/'+ item +'/:id',        ctrl.putById);
			apiRoutes.patch ('/'+ item +'/:id',        ctrl.putById);
			apiRoutes.post  ('/'+ item +'/:id/delete', ctrl.deleteById);// it should be get but for safty purpose its addede as post
		}

	},
	authendicateFilter: function (apiRoutes,app) {
		apiRoutes.use(function(req, res, next) {
		  // check header or url parameters or post parameters for token
		  var token = req.body.token || req.query.token || req.headers['x-access-token'];

		  // decode token
		  if (token) {

		    // verifies secret and checks exp
		    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
		      if (err) {
		        return res.json({ success: false, message: 'Failed to authenticate token.' });    
		      } else {
		        // if everything is good, save to request for use in other routes
		        req.decoded = decoded;    
		        next();
		      }
		    });

		  } else {

		    // if there is no token
		    // return an error
		    return res.status(403).send({ 
		        success: false, 
		        message: 'No auth infermation provided.' 
		    });
		    
		  }
		});
	}
}

module.exports = Routes;