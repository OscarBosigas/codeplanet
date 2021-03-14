'use strict';

const { vincularEstudiante } = require('../models/logicaModel');
var Logica = require('../models/logicaModel');

exports.vincularEstudiante = function (req, res) {
    var newVincular = new Logica(req.body)
    if (!newVincular.id_curso || !newVincular.id_estudiante) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Logica.vincularEstudiante(newVincular, function (err, logica) {
            if (err)
                res.send(err);
            res.json(logica);
        });
    }
};


exports.vincularEstudiantes = function (req, res) {
    var newVincular = new Logica(req.body)
    for (let index = 0; index < newVincular.id_estudiante.length; index++) {
        if (!newVincular.id_curso || !newVincular.id_estudiante[index]) {

            res.status(400).send({ error: true, message: "Falta informacion" });
        } else {

            Logica.vincularEstudiante(newVincular, function (err, logica) {
                if (err)
                    res.send(err);
                res.json(logica);
            });
        }

    }

};