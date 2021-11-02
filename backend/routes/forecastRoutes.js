const router = require('express').Router();

const { createForecast, getAllRain } = require('../controllers/forecastController');

router.get('/', getAllRain);
router.post('/', createForecast);

module.exports = router;
