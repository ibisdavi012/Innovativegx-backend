const mongoose = require('mongoose');

module.exports = mongoose.Schema({Gene: String, Genotype:String, Phenotype:String}, { strict: false });