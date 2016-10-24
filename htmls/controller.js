var path     = require('path');

var Routes = {
	init: function(router,app) {
		this.addHeaders(router,app);
		router.get('/' , this.index);
		router.get('/profile' , this.profile);
		router.get('/about-us' , this.aboutUs);
		router.get('/contact-us' , this.contactUs);

	},
	addHeaders: function (router,app) {
		router.use(function (req, res, next) {
		    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
		    res.header('Expires', '-1');
		    res.header('Pragma', 'no-cache');
		    next()
		});
	},
	index: function (req,res) {
		res.sendFile(path.join(__dirname+'/index.html'));
	},
	profile: function (req,res) {
		res.sendFile(path.join(__dirname+'/profile.html'));
	},
	aboutUs: function (req,res) {
		res.sendFile(path.join(__dirname+'/about-us.html'));
	},
	contactUs: function (req,res) {
		res.sendFile(path.join(__dirname+'/contact-us.html'));
	},
	xx: function (req,res) {
		res.sendFile(path.join(__dirname+'/xx.html'));
	}

}

module.exports = Routes;