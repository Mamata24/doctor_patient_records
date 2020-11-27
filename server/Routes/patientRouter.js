const express = require('express')
const router = new express.Router()
const patientController = require('../Controllers/patientController')

router.post('/patients', patientController.getPatient)

module.exports = router