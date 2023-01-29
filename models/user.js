const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
SALT_WORKER_FACTOR = 10;


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// to create a hashed password before the save event
UserSchema.pre('save',function(next){
    let user = this;

    if(!user.isModified('password')){
        return next();
    }
    // generating a salt
    bcrypt.genSalt(SALT_WORKER_FACTOR,function(err,salt){
        if(err){
            return next(err);
        }
        // generating a hash using the salt generated
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err){
                return next(err);
            }
            // storing the hashed password
            user.password = hash;
            next();
        })
    })

})
// defining a method to compare the hashed password
UserSchema.methods.comparePassword = function(candidatePassword,cb){
        bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
            if(err){
                return cb(err);
            }
            cb(null,isMatch);
        })
}


const User = mongoose.model('User', UserSchema);
module.exports = User;
