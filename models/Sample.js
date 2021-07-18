const mongoose = require('mongoose');

const sampleSchema = require('../schemas/SampleSchema');

module.exports = mongoose.model('sample', sampleSchema);
