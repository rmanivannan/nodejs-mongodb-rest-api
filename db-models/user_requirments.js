var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserRequirementSchema = new Schema({
    itemname : { type: String, required: true, index: { unique: true } },
    username : { type: String, required: true },
    quantity : { type: String, required: true },
    cost     : { type: String }
});

// write method if required
/*UserRequirementSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};*/

module.exports = mongoose.model('User_requirments', UserRequirementSchema);