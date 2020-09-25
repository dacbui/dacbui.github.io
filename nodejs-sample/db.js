'use strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'admin',
    database: 'nodejs_mysql'
});

connection.connect(function (err) {
    if (err) throw err;
});
module.exports = connection;