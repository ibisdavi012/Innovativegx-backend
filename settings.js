const express = require('express');
const path = require('path');

module.exports = (app) => {

    app.set('views', path.join(__dirname, 'views'));

    app.set('view engine', 'pug');

    app.use(express.static(path.join(__dirname, 'public')));

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
        res.header("Developed-By", "ibisdavi012@gmail.com");
        next();
    });

    app.set('json spaces', ' ');

}
