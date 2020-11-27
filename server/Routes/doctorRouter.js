const express = require('express')
const router = new express.Router()
const doctorController = require('../Controllers/doctorController')

router.post('/signupDoctor', doctorController.addDoctor)
router.post('/loginDoctor', doctorController.getDoctor)
module.exports = router