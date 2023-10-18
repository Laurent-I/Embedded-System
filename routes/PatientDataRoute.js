const express = require('express');
const router = express.Router();
const patientDataController = require('../controllers/PatientDataController');

// Create a new PatientData
router.post('/patient', patientDataController.createPatientData);

// Get all PatientData
router.get('/patient', patientDataController.getAllPatientData);

module.exports = router;