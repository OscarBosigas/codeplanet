'user strict';
var sql = require('../db');

var Profesor = function (profesor) {
    this.id_profesor = profesor.ID_PROFESOR;
    this.nombres_profesor = profesor.NOMBRES_PROFESOR;
    this.apellidos_profesor = profesor.APELLIDOS_PROFESOR;
    this.email_profesor = profesor.EMAIL_PROFESOR;
    this.password_profesor = profesor.PASSWORD_PROFESOR;
};

Profesor.crearprofesor = function createprofesor(profesor, result) {
    sql.query("INSERT INTO profesor set ?", profesor, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.profesor);
        }
    });
};

Profesor.profesores = function getprofesors(result) {
    sql.query("SELECT nombres_profesor, apellidos_profesor, email_profesor FROM profesor", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Profesor.profesor = function getAprofesor(id_profesor, result) {
    sql.query("SELECT * FROM profesor WHERE id_profesor = ? ", id_profesor, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    })
};

Profesor.editarprofesor = function editprofesor(id_profesor, profesor, result) {
    sql.query("UPDATE profesor SET nombres_profesor = ?, apellidos_profesor = ?, password_profesor= ?, email_profesor = ? where id_profesor = ? ",
        [profesor.nombres_profesor, profesor.apellidos_doc, profesor.email_profesor, id_profesor],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Profesor.eliminarProfesor = function (id_profesor, result) {
    sql.query("DELETE FROM profesor WHERE id_profesor = ?",
        [id_profesor], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};


module.exports = Profesor;