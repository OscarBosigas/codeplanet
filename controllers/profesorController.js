'use strict';

var Profesor = require('../models/profesorModel');

exports.crearprofesor = function (req, res) {
    var new_profesor = new Profesor(req.body);

    if (!new_profesor.id_profesor || !new_profesor.nombres_profesor ||
        !new_profesor.apellidos_profesor || !new_profesor.password_profesor || !new_profesor.email_profesor) {

        console.log(new_profesor)
        res.status(400).send({ error: true, message: "Falta infomacion" });
    } else {

        Profesor.crearprofesor(new_profesor, function (err, profesor) {
            if (err)
                res.send(err);
            res.json(profesor);
        });
    }

};

exports.list_profesores = function (req, res) {
    Profesor.profesores(function (err, profesor) {
        if (err)
            res.send(err);
        res.send(profesor);
    });
};

exports.profesor = function (req, res) {
    Profesor.profesor(req.params.id_profesor, function (err, profesor) {
        if (err)
            res.send(err);
        res.send(profesor);
    });
};

exports.editar = function (req, res) {
    Profesor.editarprofesor(req.params.id_profesor, new Profesor(req.body), function (err, profesor) {
        if (err)
            res.send(err);
        res.json(profesor);
    });
};

exports.eliminarProfesor = function (req, res) {
    Profesor.eliminarProfesor(req.params.id_profesor, function (err, profesor) {
        if (err)
            res.send(err);
        res.json(profesor);
    });
};