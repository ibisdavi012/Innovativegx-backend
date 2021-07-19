const express = require('express');

const Sample = require('../models/Sample');

const router = express.Router();

// Get all samples in the Database
router.get('/', (req, res) => {
	// TODO
});

// Get sample By sampleNumber and render it using PUG template engine
router.get('/:sampleNumber', (req, res) => {
	Sample.findOne({ SampleNumber: req.params.sampleNumber }, (err, sample) => {
		if (err) throw err;

		res.render('SampleDetails', {
			currentMedications: sample.CurrentMedications,
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
