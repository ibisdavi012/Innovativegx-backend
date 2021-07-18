const mongoose = require('mongoose');

const drugSchema = require('./DrugSchema');

const geneInfoSchema = require('./GeneInfoSchema');

module.exports = mongoose.Schema({
    Drugs: [drugSchema],
    TheraputicArea: Array,
    GeneInfo: [geneInfoSchema],
    GroupPhenotype: String,
    Action: Array,
    Recommendation: String
}, {strict:false});