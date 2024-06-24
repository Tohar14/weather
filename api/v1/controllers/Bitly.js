const mongoose = require('mongoose');
const Bitly_Model = require('../models/Bitly');

function GetRandomString(length){
    let str="";
    const chars="abcdefghijklmnopqrstuvwxyz0123456789ABCDEF";
    let index;
    for(let i=0;i<length;i++){
        index=Math.floor(Math.random() * chars.length); // ceil --- > floor 
        str+=chars[index];
    }
    return str;
};

module.exports = {
    createShortLink: async (req, res) => {
        try {
            const { longLink } = req.body;
            const newLink = new Bitly_Model({
                _id: new mongoose.Types.ObjectId(),
                LongLink: longLink,
                ShortLink: GetRandomString(5) // adjust as you want 
            });
            const savedLink = await newLink.save();
            res.status(201).json(savedLink.ShortLink);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getLinkByShortUrl: async (req, res) => {
        try {
            const shortLink = req.params.shortLink;
            const link = await Bitly_Model.findOne({ ShortLink: shortLink });
            if (!link) {
                return res.status(404).json({ message: "Link not found" });
            }
            res.status(200).json(link);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAllLinks: async (req, res) => {
        try {
            const links = await Bitly_Model.find();
            res.status(200).json(links);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}
