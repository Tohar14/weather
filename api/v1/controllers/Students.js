const mongoose = require('mongoose');
const Students_Model = require('../models/Students');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    Add_Student: async (req, res) => {
        console.log(req.body);
        const { Name, Age, Grades, Password } = req.body;
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(Password, salt);
        console.log(hashedPassword);

        const new_Student = new Students_Model({
            _id: new mongoose.Types.ObjectId(),
            Name,
            Age,
            Grades,
            Password: hashedPassword
        });
        const result = await new_Student.save();

        console.log(result);

        return res.status(200).json(result);
    },

    Student_Login: async (req, res) => {
      
        const { Name, Password } = req.body;
        const student = await Students_Model.findOne({ Name });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const passwordMatch = await bcrypt.compare(Password, student.Password);

        if (passwordMatch) {
            const user = { name: student.Name };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            return res.status(200).json({ message: "Login successful", accessToken });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
       
    },

    getallStu: async (req, res) => {
        try {
            const students = await Students_Model.find();
            if (students.length > 0) {
                return res.status(200).json(students);
            } else {
                return res.status(404).json({ message: "No students found" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Server Error occurred" });
        }
    }
};
