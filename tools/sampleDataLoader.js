const Sample = require('../models/Sample');
const appConfig = require('../config/app.config');
const fs = require('fs');
const path = require('path');

module.exports.load = () => {
	return new Promise(async (resolve, reject) => {
		console.log('Loading Sample Data');

		// Copy the FakeSample into the database.
		// It can be improved by adding all .json files in the seeds directory,
		await fs.readFile(
			path.resolve('seeds', 'FakeSample.json'),
			'utf-8',
			async (err, content) => {
				if (err) throw err;

				let jsonContent;

				try {
					jsonContent = JSON.parse(content);

					await Sample.findOne(
						{ SampleNumber: 12345 },
						async (err, sample) => {
							if (sample != null) await sample.delete();
						},
					);

					const sample = new Sample(jsonContent);

					sample.save();

					resolve();
				} catch (err) {
					reject('Wrong JSON file format.');
				}
			},
		);
	});
};
