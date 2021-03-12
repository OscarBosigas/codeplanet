'use strict';

var Estudiante = require('../models/estudianteModel');

exports.createEstudiante = function(req, res) {
    var new_Estudiante = new Estudiante(req.body);
    
    if (!new_Estudiante.doc || !new_Estudiante.nombre || !new_Estudiante.apellido
        || !new_Estudiante.codigo || !new_Estudiante.contrasena || !new_Estudiante.cod_curso) {

            res.status(400).send({ error: true, message: "Falta informacion"});
    } else {
        
        Estudiante.createEstudiante(new_Estudiante, function(err, estudiante) {
            if(err)
                res.send(err);
            res.json(estudiante);
        });
    }
    
};

exports.list_estudiantes = function (req, res) {
    Estudiante.getEstudiantes(function (err, estudiante) {
        if (err)
            res.send(err);
        res.send(estudiante);
    });
};

exports.estudiante = function(req, res) {
    Estudiante.getAEstudiante(req.params.doc, function (err, estudiante){
        if (err)
            res.send(err);
        res.send(estudiante);
    });
};

exports.estudianteByCod = function (req, res) {
    Estudiante.getAEstudianteByCod(req.params.codigo, function (err, estudiante) {
        if (err)
            res.send(err);
        res.send(estudiante);
    });
};

exports.edit = function(req, res) {
    Estudiante.editEstudiante(req.params.doc, new Estudiante(req.body), function(err, estudiante) {
        if(err)
            res.send(err);
        res.json(estudiante);
    });
};

exports.remove = function(req, res) {
    Estudiante.remove(req.params.doc, function(err, estudiante) {
        if(err)
            res.send(err);
        res.json({ message: "Estudiante eliminado"});
    });
};

exports.cambiarContrasena = function (req, res) {
    Estudiante.cambiarContrasena(req.params.doc, req.params.nombre, req.params.apellido, new Estudiante(req.body), function (err, admin) {
        if (err)
            res.send(err);
        res.send(admin);
    });
};