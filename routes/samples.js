const express = require('express');

const Sample = require('../models/Sample');

const router = express.Router();

// Get all samples in the Database
router.get('/', (req, res) => {
    // TODO
});

// Get sample By sampleNumber and render it using PUG template engine
router.get('/:sampleNumber', (req, res) => {
    Sample.findOne({SampleNumber:req.params.sampleNumber},(err, sample) => {
        if (err) throw err;        
        res.render('SampleDetails', {
            TheraputicArea: sample.CurrentMedications[0].TheraputicArea,
            Generic: sample.CurrentMedications[0].Drugs[0].Generic,
            Trade:  sample.CurrentMedications[0].Drugs[0].Trade,
            GeneInfo: sample.CurrentMedications[0].GeneInfo,
            Action: sample.CurrentMedications[0].Action.toString(),
            GroupPhenotype: sample.CurrentMedications[0].GroupPhenotype.toString(),            
            Recommendation: sample.CurrentMedications[0].Recommendation            
        });
    });
});

// Get sample By sampleNumber and returns it as JSON format
router.get('/:sampleNumber/json', (req, res) => {
    Sample.findOne({ SampleNumber: req.params.sampleNumber }, (err, sample) => {
        if (err) throw err;        
        res.json(sample);
    });
});

module.exports = router;