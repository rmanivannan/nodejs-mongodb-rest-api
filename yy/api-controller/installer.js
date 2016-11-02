var Schema = require('../db-models/installer');
var util = require('../util');
var Controller = {
    add : function (req, res) {

        if(true){ // todo allow only admin if(req.decoded._doc.role.toLowerCase() === "user"){
            
            var newEnty = util.rmExtToUpdate(Schema,req);
            var newRecord = new Schema(newEnty);
            newRecord.save(function(e,record) {
                return util.apiResp(req,res,e,record)
            });
        }
    },
    getById: function(req, res) {
        //
        Schema.findOne({ _id: req.params.id }, function(e, record) {
            return util.apiResp(req,res,e,record)
        });
    },
    getAll: function(req, res) {
        var filter = {}
        if(req.body.company_id){
            filter["company_id"] = req.body.company_id;
        }
        Schema.find( filter, function(e, records) {
            return util.apiResp(req,res,e,records)
        });
    },
    putById: function (req, res) {
        Schema.findOneAndUpdate({ _id: req.params.id }, {$set:util.rmExtToUpdate(Schema,req)}, {new: true}, function(e, record){
            return util.apiResp(req,res,e,record)
        });
    },
    deleteById: function (req, res) {
        //req.params.id
        // body...
    }
}
module.exports = Controller;