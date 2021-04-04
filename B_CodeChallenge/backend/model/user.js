const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: [30, "username exceeded max length (30)!"],
      
    },
  

   
});

require('./user')(UserSchema);

module.exports = mongoose.model('user', UserSchema);