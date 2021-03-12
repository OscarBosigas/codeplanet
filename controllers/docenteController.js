'use strict';

var Docente = require('../models/docenteModel');

exports.createdocente = function (req, res) {
    var new_docente = new Docente(req.body);

    if (!new_docente.doc_docente || !new_docente.nom_docente ||
        !new_docente.apellido_doc || !new_docente.contrasena_doc) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Docente.createdocente(new_docente, function (err, docente) {
            if (err)
                res.send(err);
            res.json(docente);
        });
    }

};

exports.list_docentes = function (req, res) {
    Docente.getdocentes(function (err, docente) {
        if (err)
            res.send(err);
        res.send(docente);
    });
};

exports.docente = function (req, res) {
    Docente.getAdocente(req.params.doc_docente, function (err, docente) {
        if (err)
            res.send(err);
        res.send(docente);
    });
};

exports.edit = function (req, res) {
    Docente.editdocente(req.params.doc_docente, new Docente(req.body), function (err, docente) {
        if (err)
            res.send(err);
        res.json(docente);
    });
};

exports.remove = function (req, res) {
    Docente.remove(req.params.doc_docente, function (err, docente) {
        if (err)
            res.send(err);
        res.json(docente);
    });
};

exports.cambiarContrasena = function (req, res) {
    Docente.cambiarContrasena(req.params.doc, req.params.nombre, req.params.apellido, new Docente(req.body), function (err, admin) {
        if (err)
            res.send(err);
        res.send(admin);
    });
};