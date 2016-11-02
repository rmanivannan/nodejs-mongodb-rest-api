var Util = {
	config:{
		role:{
			user: "USER"
		},
		dbName:"mani-portfolio",
		seqList:[
			"__v",
			"password"
		]
	},

	formatErrMsg: function (err) {
		if(err.errmsg){
			return err.errmsg.replace(this.config.dbName,"") ;
		}
		var errors = err.errors;
		if(errors){
			for(var i in errors){
				return errors[i].message;
			}
		}
	},
	apiResp: function (req,res,err,doc) {
		// need to added filter on err and doc which is passed as respose
		if(err){
            console.log(err);
            return res.status(500).send({ 
		        error: this.formatErrMsg(err) 
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
	},
	dbValidation:{
		strReqUniq : { type: String, required: true, index: { unique: true }, max : 25 },
		str         : { type: String , max : 25},
		strReq      : { type: String, required: true, max : 25 },
		strUniq     : { type: String, index: { unique: true } , max : 25},
		reqUniq     : { required: true, index: { unique: true } , max : 25}
	},
	custIdFormat: function (index) {
		return "C" + (Number(index) +1);
	}
}

module.exports = Util;