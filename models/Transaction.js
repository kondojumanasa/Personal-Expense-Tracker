const mongoose=require('mongoose');

const TransactionSchema=new mongoose.Schema({
    type:{type:String,enum:['income','expense'],required:true},
    category:{type:String,required:true},
    amount:{type:Number,required:true},
    date:{type:Date,default:Date.now},
    description:{type:String,required:false},
})
module.exports = mongoose.model('Transaction',TransactionSchema);