const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
    amount:Number,
    detail:String,
    Date:{type:Date, default:new Date()},
    createdAt:{type:Date, default:Date.now},
});

module.exports = mongoose.model('Transaction', transactionSchema);
