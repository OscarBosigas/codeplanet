var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.listen(port, function () {
    console.log('API server started on: ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var estudianteRoutes = require('./routes/estudianteRoutes.js');
estudianteRoutes(app);

var profesorRoutes = require('./routes/profesorRoutes.js');
profesorRoutes(app);

var actividadRoutes = require('./routes/actividadRoutes.js');
actividadRoutes(app);

var cursoRoutes = require('./routes/cursoRoutes.js');
cursoRoutes(app);

var calificacionRoutes = require('./routes/calificacionRoutes.js');
calificacionRoutes(app);

var logicaRoutes = require('./routes/logicaRoutes.js');
logicaRoutes(app);

