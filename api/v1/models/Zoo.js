const mongoose=require('mongoose');


mongoose.pluralize(null);


const Zoo_Schema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    NameZoo:String,
    Address: String , 
    Employees: Array , 
    Animals: Array , 
});


module.exports = mongoose.model("Zoo",Zoo_Schema);


