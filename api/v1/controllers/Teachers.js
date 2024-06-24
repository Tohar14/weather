const mongoose=require('mongoose');
const Teachers_Model = require('../models/Teachers');

module.exports = {
    //###    async(ההצהרה לגבי פונקציה אסינכורנית ) + await  ####
    /// 
    /// CRUD
    //  C - Create :
    
    Add_Teacher : async (req,res) => {
        console.log(req.body);
        const {Name,Age,Subjects,Email} = req.body; // הפרמטרים שמגיעים מתוך גוף הבקשה 
        
        const new_Teacher = new Teachers_Model({
            _id:new mongoose.Types.ObjectId(),
            Name:Name,
            Age:Age,
            Subjects:Subjects,
            Email:Email
        });
        const result  = await new_Teacher.save();
        
        console.log(result);

        return res.status(200).json(result);
    } ,
    // , R - Read:

    GetAll_Teachers:async(req,res)=>{
        const Teachers_array = await Teachers_Model.find();
        console.log(Teachers_array);
        if ( Teachers_array != null){
            return res.status(200).json({msg:Teachers_array});
        } else{
            return res.status(517).json({msg:"Error while Reading Data"});
        }
    },


    //  , U - Update , D - Delete 


};