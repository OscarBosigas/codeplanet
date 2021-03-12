'user strict';
var sql = require('../db');

var Estudiante = function (estudiante) {
    this.id_estudiante = estudiante.ID_ESTUDIANTE;
    this.nombres_estudiante = estudiante.NOMBRES_ESTUDIANTE;
    this.apellidos_estudiante = estudiante.APELLIDOS_ESTUDIANTE;
    this.email_estudiante = estudiante.EMAIL_ESTUDIANTE;
    this.password_estudiante = estudiante.PASSWORD_ESTUDIANTE;
};

Estudiante.crearEstudiante = function createEstudiante(estudiante, result) {
    sql.query("INSERT INTO ESTUDIANTE set ?", estudiante, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.estudiante);
        }
    });
};

Estudiante.estudiantes = function getEstudiantes(result) {
    sql.query("SELECT nombres_estudiante, apellidos_estudiante, email_estudiante FROM `ESTUDIANTE`", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Estudiante.estudiante = function getAEstudiante(id_estudiante, result) {
    sql.query("SELECT * FROM ESTUDIANTE WHERE id_estudinate = ? ", id_estudiante, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    })
};



Estudiante.editarEstudiante = function editEstudiante(id_estudiante, estudiante, result) {
    sql.query("UPDATE ESTUDIANTE SET nombres_estudiante = ?, apellidos_estudiante = ?, email_estudiante = ?, password_estudiante = ? where id_estudiante = ?",
        [estudiante.nombres_estudiante, estudiante.apellidos_estudiante, estudiante.email_estudiante, estudiante.password_estudiante, id_estudiante],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Estudiante.eliminarEstudiante = function (id_estudiante, result) {
    sql.query("DELETE FROM ESTUDIANTE WHERE id_estudiante = ?",
        [id_estudiante], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

module.exports = Estudiante;