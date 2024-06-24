const ZooModel = require('../models/Zoo');
const EmplyeeModel = require('../models/Employee');
const mongoose = require('mongoose');

module.exports = {
    addZoo: async (req, res) => {
        const { NameZoo, Address } = req.body;
        try {
            const newZoo = new ZooModel({
                _id: new mongoose.Types.ObjectId(),
                NameZoo,
                Address,
                Employees: [],
                Animals: [],
            });
            const result = await newZoo.save();
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ error: "Error while inserting zoo", details: err.message });
        }
    },

    addAnimalToZoo: async (req, res) => {
        const { ZooId, nameAnimal, Weight, isHungry, Type , AnimalPic } = req.body;
        try {
            const Animal = { nameAnimal, Weight, isHungry, Type ,AnimalPic };
            const zoo = await ZooModel.findById(ZooId);
            if (!zoo) {
                return res.status(404).json({ error: "Zoo not found" });
            }
            zoo.Animals.push(Animal);
            await zoo.save();
            return res.status(200).json(zoo);
        } catch (err) {
            return res.status(500).json({ error: "Error while inserting animal to zoo", details: err.message });
        }
    },
    getAllZoo: async (req, res) => {
        try {
            const zoos = await ZooModel.find();
            return res.status(200).json(zoos);
        } catch (err) {
            return res.status(500).json({ error: "Error fetching all zoos", details: err.message });
        }

    },
    getZooByid: async (req, res) => {
        try {
            const { zooid } = req.params;
            const zoo = await ZooModel.findById(zooid);
            if (!zoo) {
                return res.status(404).json({ error: "Zoo not found" });
            }
            return res.status(200).json(zoo);
        } catch (err) {
            return res.status(500).json({ error: "Error fetching zoo by ID", details: err.message });
        }


    },
    addEmployeeToZoo: async (req, res) => {
        const { ZooId, IdEmp } = req.body;
        try {
            const emplyee = await EmplyeeModel.find({IdEmp});
            const zoo = await ZooModel.findById(ZooId);
            if (!zoo) {
                return res.status(404).json({ error: "Zoo not found" });
            }
            zoo.Employees.push(emplyee);
            await zoo.save();
            return res.status(200).json(zoo);
        } catch (err) {
            return res.status(500).json({ error: "Error while inserting Employee to zoo", details: err.message });
        }
    },
    RegisterEmployee: async (req, res) => {
    
        const { NameEmp, TypeAnimalsWork, IdEmp, Password } = req.body;
        if (!NameEmp || !TypeAnimalsWork  || !IdEmp || !Password) {
            return res.status(404).json({ error: "Paremeters empties" });
        }
        try {
            const newEmployee = new EmplyeeModel({
                _id: new mongoose.Types.ObjectId(),
                NameEmp,
                TypeAnimalsWork,
                Animals: [],
                IdEmp,
                Password
            });
            const result = await newEmployee.save();
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ error: "Error while inserting new Employee", details: err.message });
        }
    },
    LoginEmployee: async (req, res) => {
        try {
            const { IdEmp, Password } = req.body;
            if (!IdEmp || !Password) {
                return res.status(404).json({ error: "Paremeters empties" });
            }
            const result = await EmplyeeModel.findOne({ IdEmp, Password });
            if (result != null) {
                return res.status(200).json(result);
            }
            return res.status(200).json(null);
        }catch(err){
            return res.status(500).json({ error: "Error Check Login", details: err.message });
        }
    },
    addAnimalToEmployee: async (req, res) => {
        const { animalName, zooId, empId } = req.body;
        try {
            const currentZoo = await ZooModel.findById(zooId);
            if (!currentZoo) {
                return res.status(404).json({ error: "Zoo not found" });
            }

            const currentAnimal = currentZoo.Animals.find(animal => animal.nameAnimal === animalName);
            if (!currentAnimal) {
                return res.status(404).json({ error: "Animal not found in the specified zoo" });
            }

            const employee = await EmplyeeModel.findOne({ IdEmp: empId });
            if (!employee) {
                return res.status(404).json({ error: "Employee not found" });
            }

            employee.Animals.push(currentAnimal);
            await employee.save();

            return res.status(200).json(employee);
        } catch (err) {
            return res.status(500).json({ error: "Error while adding animal to employee", details: err.message });
        }
    }

};