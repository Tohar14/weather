const router=require('express').Router();

const { apiAutoComplete , apiLocationWeatherFiveDays , apiLocationWeatherDaily }=require('../controllers/Weather');
router.post("/place_codes", apiAutoComplete);
router.post('/forcast',apiLocationWeatherDaily);
router.post('/forcast_5',apiLocationWeatherFiveDays);

module.exports = router;