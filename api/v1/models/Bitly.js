const mongoose=require('mongoose');


mongoose.pluralize(null);

const Bitly_Schema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    LongLink:String,
    ShortLink:String
  
});


module.exports = mongoose.model("Bitly",Bitly_Schema);

