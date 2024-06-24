const mongoose=require('mongoose');


mongoose.pluralize(null);


const Teachers_Schema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Name:String ,
    Age:Number , 
    Subjects: Array , 
    Email:String
});


module.exports = mongoose.model("Teachers",Teachers_Schema);


