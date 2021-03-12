'use strict';

var Estructura = require('../models/estructuraModel');

exports.addEstructure = function (req, res) {
    var new_Estructure = new Estructura(req.body);

    if (!new_Estructure.cod_materia || !new_Estructure.descripcion || !new_Estructure.value) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Estructura.addEstructura(new_Estructure, function (err, estructura) {
            if (err)
                res.send(err);
            res.json(estructura);
        });
    }
};

exports.edit = function (req, res) {
    Estructura.editEstructura(req.params.cod_materia, req.params.descripcion, new Estructura(req.body), function (err, estructura) {
        if (err)
            res.send(err);
        res.json(estructura);
    });
};

exports.remove = function (req, res) {
    Estructura.remove(req.params.cod_materia, req.params.descripcion, function (err, estructura) {
        if (err)
            res.send(err);
        res.json({ message: "Estructura eliminado" });
    });
};


exports.getEstructura = function (req, res) {
    Estructura.getEstructura(req.params.cod_materia, function (err, estructura) {
        if (err)
            res.send(err);
        res.json(estructura);
    });
};