const router=require('express').Router();

const {Add_Teacher ,GetAll_Teachers}=require('../controllers/Teachers');
router.post("/add",Add_Teacher);
router.get('/all',GetAll_Teachers);

module.exports = router;