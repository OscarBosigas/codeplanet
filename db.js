'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: "lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    database: "gzlvbu6hk5tgv6sp",
    user: "fmwsgtz5qxagudk2",
    password: "u3y7s7klkj25y9h6"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;