var Util = {
	error: function (req,res,err,doc) {
		// need to added filter on err and doc which is passed as respose
		if(err){
            console.log(err);
            return res.status(500).send({ 
		        success: false, 
		        error: err 
		    });
        }
        return res.status(200).json(doc);
	},
	rmExtToUpdate: function (db_model,req) {
		var newEntry = {}
        db_model.schema.eachPath(function(path) {
            var val = req.body[path];
            if(val !== undefined)
                newEntry[path] = val;
        });
        return newEntry;
	}
}

module.exports = Util;