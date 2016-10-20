var user = require('./user'),
	login = user.login,
	register = user.register,
	jwt = require('jsonwebtoken'),
	userrequirement = require('./userrequirement');

var Routes = {
	init: function(apiRoutes,app) {
		Routes.initPreloginRoutes(apiRoutes);
		Routes.authendicateFilter(apiRoutes,app);
		Routes.initPostloginRoutes(apiRoutes);
	},
	initPreloginRoutes: function(apiRoutes) {
		apiRoutes.post('/register', register);
		apiRoutes.post('/login', login);
	},
	initPostloginRoutes: function(apiRoutes) {
		apiRoutes.post('/user-requirement', userrequirement.add);
		apiRoutes.post('/user-requirement/all', userrequirement.getAll); // it should be get but for safty purpose its addede as post
		apiRoutes.post('/user-requirement/:id', userrequirement.getById); // it should be get but for safty purpose its addede as post
		apiRoutes.put('/user-requirement/:id', userrequirement.putById);
		apiRoutes.patch('/user-requirement/:id', userrequirement.putById);
		apiRoutes.post('/user-requirement/:id/delete', userrequirement.deleteById);// it should be get but for safty purpose its addede as post
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