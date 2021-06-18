const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    surName: String,
    givenName: String,
    gender: String,  
    nationality: String,
    idType: String,
    idNumber: String,
    yob: Number, 
    date: Date,
    telNoI: Number,
    telNoII: Number,
    email: String,
  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

// const mongoose = require('mongoose')

// const EmpoyeeSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     phone:String,
//     picture:String,
//     salary:String,
//     position:String
// })


// mongoose.model("employee",EmpoyeeSchema)