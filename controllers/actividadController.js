'use strict';

var Actividad = require('../models/actividadModel');

exports.crearActividad = function (req, res) {
    var new_actividad = new Actividad(req.body);

    if (!new_actividad.id_actividad || !new_actividad.id_curso
        || !new_actividad.descripcion || !new_actividad.fecha) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Actividad.crearActividad(new_actividad, function (err, actividad) {
            if (err)
                res.send(err);
            res.json(actividad);
        });
    }
};

exports.actividades = function (req, res) {
    Actividad.actividades(function (err, actividad) {
        if (err)
            res.send(err);
        res.send(actividad);
    });
};

exports.actividad = function (req, res) {
    Actividad.actividad(req.params.id_actividad, function (err, actividad) {
        if (err)
            res.send(err);
        res.send(actividad);
    });
};

exports.editar = function (req, res) {
    Actividad.editar(req.params.id_actividad, new Actividad(req.body), function (err, actividad) {
        if (err)
            res.send(err);
        res.json(actividad);
    });
};

exports.eliminar = function (req, res) {
    Actividad.eliminar(req.params.id_actividad, function (err, actividad) {
        if (err)
            res.send(err);
        res.json({ message: "actividad eliminado" });
    });
};
