'use strict';

var Calificacion = require('../models/calificacionModel');

exports.calificar = function (req, res) {
    var email = req.body.email_estudiante;
    var password = req.body.password_estudiante;
    var new_calificacion = new Calificacion(req.body);

    if (!new_calificacion.id_estudiante || !new_calificacion.id_curso
        || !new_calificacion.valor) {

        res.status(400).send({ error: true, message: "Falta informacion" });
    } else {

        Calificacion.calificar(email, password, new_calificacion, function (err, calificacion) {
            if (err)
                res.send(err);
            res.json(calificacion);
        });
    }
};

exports.calificaciones = function (req, res) {
    Calificacion.calificaciones(req.params.id_curso, function (err, calificacion) {
        if (err)
            res.send(err);
        res.send(calificacion);
    });
}


exports.editar = function (req, res) {
    Calificacion.editar(req.params.email, req.params.password, new Calificacion(req.body), function (err, curso) {
        if (err)
            res.send(err);
        res.json(curso);
    });
};

exports.eliminar = function (req, res) {
    Calificacion.eliminar(req.params.email, req.params.password, req.params.id_estudiante, req.params.id_curso, function (err, curso) {
        if (err)
            res.send(err);
        res.json({ message: "Calificacion eliminado" });
    });
};
