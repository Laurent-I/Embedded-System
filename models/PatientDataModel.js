const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const PatientData = sequelize.define('PatientData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    PatientName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PatientNationalID: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    FrequentSickness: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    HeartRate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    BodyTemperature: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

module.exports = PatientData;