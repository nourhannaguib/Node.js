var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username :{
        type: String,
        lowercase: true
    },
    age : Number
});

var user = mongoose.model('user',userSchema);
module.exports = user;