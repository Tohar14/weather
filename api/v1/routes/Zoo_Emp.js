const router = require('express').Router();

const { getAllZoo , getZooByid , addAnimalToZoo ,addAnimalToEmployee, addEmployeeToZoo , RegisterEmployee , LoginEmployee ,addZoo  } = require('../controllers/Zoo_Emp');

router.get('/all' , getAllZoo);
router.get('/:zooid',getZooByid);
router.post('/add_zoo' ,addZoo);
router.post('/add_ani',addAnimalToZoo);
router.post('/register',RegisterEmployee);
router.post('/login',LoginEmployee);
router.post('/add_emp',addEmployeeToZoo);
router.post('/add_anim_emp',addAnimalToEmployee);

module.exports = router;
