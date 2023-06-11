const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName:{type: String, required:true},
    lastName:{type: String, required:['Last name is required']},
    email:{type: String, required:['Email is required']},
    password:{type: String, required:['Password is required']},    
},
{timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
