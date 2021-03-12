'use strict';

var Admin = require('../models/logicaModel');

exports.login = function (req, res) {
    Admin.login(req.params.usuario, req.params.contrasena, function (err, admin) {
        if (err)
            res.send(err);
        res.send(admin);
    });
};

exports.getEstudiantesPorMateria = function(req, res) {
    Admin.getEstudiantesPorMateria(req.params.cod_materia, function(err, estudiante) {
        if (err)
            res.send(err);
        res.send(estudiante);
    });
};