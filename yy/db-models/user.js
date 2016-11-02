var mongoose         = require('mongoose'),
    Schema           = mongoose.Schema,
    bcrypt           = require('bcrypt'),
    util             = require('../util')
    SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
    username : {
                    type     : String,
                    required : true, 
                    index    : { unique: true } ,
                    min      : 5,
                    max      : 10
    },
    password : {
                    type     : String,
                    min      : 5,
                    required : true, 
                    max      : 10
    },
    cid        : util.dbValidation.strReqUniq,
    salutation : {
                    type: String,
                    enum: ['Mrs', 'Mr']
    },
    fname      : util.dbValidation.strReq,
    lname      : util.dbValidation.strReq,
    address1   : util.dbValidation.strReq,
    address2   : util.dbValidation.strReq,
    address3   : util.dbValidation.strReq,
    email      : util.dbValidation.strReq,
    phone      : util.dbValidation.strReq,
    state      : util.dbValidation.str,
    role       : util.dbValidation.strReq
});


    userSchema.options.toJSON = {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            delete ret.password;
            return ret;
        }
    };

    userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

    userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('user',userSchema);