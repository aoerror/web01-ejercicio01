
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'nodejs',
    password : 'prueba123',
    database : 'estudiantedb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;