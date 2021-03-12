'use strict';

var Nota = require('../models/notaModel');

exports.calificar = function (req, res) {
    var new_Nota = new Nota(req.body);

    if (!new_Nota.doc || !new_Nota.cod_materia || !new_Nota.valor) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Nota.calificar(new_Nota, function (err, nota) {
            if (err)  
                res.send(err);
            res.json(nota);            
        });
    }
};

exports.edit = function (req, res) {
    Nota.editar(req.params.cod_materia, req.params.doc, new Nota(req.body), function (err, nota) {
        if (err)
            res.send(err);
        res.json(nota);
    });
};

exports.getNota = function(req, res) {
    Nota.getNota(req.params.cod_materia, req.params.cod, function(err, nota) {
        if (err)
            res.send(err);
        res.send(nota);
    });
};

exports.getNotasCurso = function(req, res) {
    Nota.getNotasCurso(req.params.doc, function (err, nota) {
        if (err)
            res.send(err);
        res.send(nota);
    });
};

exports.getNotasMateria = function (req, res) {
    Nota.getNotasMateria(req.params.cod_materia, function (err, nota) {
        if (err)
            res.send(err);
        res.send(nota);
    });
};