const mongoose=require('mongoose')
//mongoose Schema 
const userSchema = mongoose.Schema({
    name:String,
    email:{type:String,require:true},
    age:Number
});
//mongoose model
const User = mongoose.model("User" ,userSchema )
module.exports= User