const mongoose = require('mongoose');

const medication = require('./MedicationSchema');

module.exports = mongoose.Schema(
    {
        SampleNumber: { type: Number, createIndexes: true },
        CurrentMedications: [medication]
    },
    { strict: false });
