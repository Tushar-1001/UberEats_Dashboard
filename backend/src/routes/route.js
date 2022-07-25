const express = require('express')
const router = express.Router()
const restaurantController = require('../controllers/restaurantController')


router.post('/register' , restaurantController.restaurantRegistration)
router.post('/login' , restaurantController.restaurantLogin)

module.exports = router;