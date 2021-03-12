'use strict';

var Estudiante = require('../models/estudianteModel');

exports.crearEstudiante = function (req, res) {
    var new_Estudiante = new Estudiante(req.body);

    if (!new_Estudiante.id_estudiante || !new_Estudiante.nombres_estudiante || !new_Estudiante.apellidos_estudiante
        || !new_Estudiante.email_estudiante || !new_Estudiante.password_estudiante) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Estudiante.crearEstudiante(new_Estudiante, function (err, estudiante) {
            if (err)
                res.send(err);
            res.json(estudiante);
        });
    }

};

exports.list_estudiantes = function (req, res) {
    Estudiante.estudiantes(function (err, estudiante) {
        if (err)
            res.send(err);
        res.send(estudiante);
    });
};

exports.estudiante = function (req, res) {
    Estudiante.estudiante(req.params.id_estudiante, function (err, estudiante) {
        if (err)
            res.send(err);
        res.send(estudiante);
    });
};


exports.editar = function (req, res) {
    Estudiante.editarEstudiante(req.params.id_estudiante, new Estudiante(req.body), function (err, estudiante) {
        if (err)
            res.send(err);
        res.json(estudiante);
    });
};

exports.eliminarEstudinate = function (req, res) {
    Estudiante.eliminarEstudiante(req.params.id_estudiante, function (err, estudiante) {
        if (err)
            res.send(err);
        res.json({ message: "Estudiante eliminado" });
    });
};
