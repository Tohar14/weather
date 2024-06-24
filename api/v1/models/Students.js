const mongoose = require('mongoose');

mongoose.pluralize(null);

const Students_Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Age: Number,
    Grades: Array,
    Password: String
});

module.exports = mongoose.model("Students", Students_Schema);
