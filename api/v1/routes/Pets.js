const router = require('express').Router();

const { getAllPets  ,addNewPet} = require('../controllers/Pets');


router.get('/all',getAllPets );
router.post('/add',addNewPet );
module.exports = router;