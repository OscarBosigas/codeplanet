'use strict';

var Materia = require('../models/materiaModel');

exports.getMateriasDocente = function (req, res) {
    Materia.getMateriasDocente(req.params.doc_docente, function (err, materia) {
        if (err)
            res.send(err);
        res.json(materia);
    });
};

exports.getMateriasCurso = function (req, res) {
    Materia.getMateriasCurso(req.params.cod_curso, function (err, materia) {
        if (err)
            res.send(err);
        res.json(materia);
    });
};

exports.getMateria = function(req, res) {
    Materia.getMateria(req.params.cod_materia, function (err, materia) {
        if (err)
            res.send(err);
        res.json(materia);
    });
};

exports.create = function(req, res) {

    var new_Materia = new Materia(req.body);

    if (!new_Materia.cod_materia || !new_Materia.cod_curso || !new_Materia.doc_docente ||
        !new_Materia.cod_periodo || !new_Materia.nom_materia || !new_Materia.num_horas) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Materia.create(new_Materia, function (err, materia) {
            if (err)
                res.send(err);
            res.json(materia);
        });
    }
};

exports.remove = function (req, res) {
    Materia.remove(req.params.cod_materia, function (err, materia) {
        if (err)
            res.send(err);
        res.json({ message: "Materia eliminado" });
    });
};

exports.getMaterias = function (req, res) {
    Materia.getMaterias(function(err, materia) {
        if (err)
            res.send(err);
        res.json(materia);
    })
};