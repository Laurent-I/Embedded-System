const PatientData  = require('../models/PatientDataModel');

// Create new PatientData
exports.createPatientData = async (req, res) => {
  try {
    const { PatientName, PatientNationalID, FrequentSickness, HeartRate, BodyTemperature } = req.body;

    if (!PatientName || !PatientNationalID || !FrequentSickness || !HeartRate || !BodyTemperature) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newPatientData = await PatientData.create({
      PatientName,
      PatientNationalID,
      FrequentSickness,
      HeartRate,
      BodyTemperature
    });

    res.status(201).json(newPatientData);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create PatientData' });
    console.log(error)
  }
};

// Retrieve all PatientData
exports.getAllPatientData = async (req, res) => {
  try {
    const patientData = await PatientData.findAll();
    res.status(200).json(patientData);
  } catch (error) {
    res.status(400).json({ error: 'Unable to fetch PatientData' });
  }
};

// Other CRUD operations can be added here