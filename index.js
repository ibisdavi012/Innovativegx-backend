const express = require('express');
const mongoose = require('mongoose');
const appConfig = require('./config/app.config');
const routes = require('./routes');
const app = express();
const sampleDataLoader = require('./tools/sampleDataLoader')
const settings = require('./settings');

settings(app);

routes(app);

mongoose.connect(appConfig.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', err => {
	console.log('Error');
});

db.once('open', () => {
		app.listen(appConfig.port, () => {
		// Server started
		console.log(` Server is listening on port: ${appConfig.port}`);

		// Copy JSON file to the database
		sampleDataLoader.load().then(() => {
			console.log("Sample Data was Copied")
		}).catch(err => {
			console.log(err)
		});
	});
});


