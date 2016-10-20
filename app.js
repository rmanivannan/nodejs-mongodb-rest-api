var mongoose = require('mongoose');
var Routes = require('./routes/index');
var express = require("express");
var bodyParser = require('body-parser');

var connStr = 'mongodb://user2:pass2@ds059516.mlab.com:59516/mani-portfolio';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.text())

var apiRoutes = express.Router(); 
app.set('superSecret', "!8765fahjds32"); // secret variable

Routes.init(apiRoutes,app);
//Routes.init(apiRoutes);

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});