var mongoose = require('mongoose');
var Routes = require('./api-controller');
var express = require("express");
var path = require('path');

//var csrf = require('csurf');  
//var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');

var connStr = 'mongodb://xcvsdf:lkjmnb@ds059516.mlab.com:59516/mani-portfolio';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});


//var csrfProtection = csrf({ cookie: true });  


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.text())
// we need this because "cookie" is true in csrfProtection 
//app.use(cookieParser());


var apiRoutes = express.Router(); 
app.set('superSecret', "!8765fahjds32"); // secret variable

Routes.init(apiRoutes,app);
//Routes.init(apiRoutes);

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);


app.use("/public", express.static(path.join(__dirname, 'public')));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});