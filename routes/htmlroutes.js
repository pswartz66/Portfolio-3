
/* const express = require("express"); */
const path = require('path');

module.exports = function (app) {

    // load main home page, currently only one page for entire portoflio
    app.get('/', (req, res, next) => {

        res.sendFile(path.join(__dirname, '../public/html/', 'index.html'));

    })

}


