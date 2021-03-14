'use strict';

var Curso = require('../models/cursoModel');

exports.crearCurso = function (req, res) {
    var new_Curso = new Curso(req.body);

    if (!new_Curso.id_curso || !new_Curso.id_profesor || !new_Curso.nombre_curso
        || !new_Curso.duracion || !new_Curso.detalles) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Curso.crearCurso(new_Curso, function (err, curso) {
            if (err)
                res.send(err);
            res.json(curso);
        });
    }
};

exports.cursos = function (req, res) {
    Curso.cursos(function (err, curso) {
        if (err)
            res.send(err);
        res.send(curso);
    });
};

exports.curso = function (req, res) {
    Curso.curso(req.params.id_curso, function (err, curso) {
        if (err)
            res.send(err);
        res.send(curso);
    });
};

exports.editar = function (req, res) {
    Curso.editar(req.params.id_curso, new Curso(req.body), function (err, curso) {
        if (err)
            res.send(err);
        res.json(curso);
    });
};

exports.eliminar = function (req, res) {
    Curso.eliminar(req.params.id_curso, function (err, curso) {
        if (err)
            res.send(err);
        res.json({ message: "Curso eliminado" });
    });
};
