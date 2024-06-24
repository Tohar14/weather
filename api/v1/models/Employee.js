const mongoose=require('mongoose');


mongoose.pluralize(null);


const Employee_Schema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    NameEmp:String, 
    TypeAnimalsWork: String , 
    Animals: Array,
    IdEmp : String , 
    Password: String ,
});


module.exports = mongoose.model("Employee",Employee_Schema);


