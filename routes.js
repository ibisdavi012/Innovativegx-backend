const samples = require('./routes/samples');

module.exports = (app) => {
    app.use('/samples', samples);
}