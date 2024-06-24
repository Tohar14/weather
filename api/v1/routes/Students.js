const router = require('express').Router();
const authenticateToken = require('../../../auth');

const { Add_Student, Student_Login, getallStu } = require('../controllers/Students');
router.post("/add", Add_Student);
router.post('/login', Student_Login);
router.get('/all',authenticateToken, getallStu);

module.exports = router;
