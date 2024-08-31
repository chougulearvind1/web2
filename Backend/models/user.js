const mongoose = require('mongoose');
//creae schema for user 
const UserSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type : String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const User =mongoose.model('User',UserSchema)

module.exports =User;