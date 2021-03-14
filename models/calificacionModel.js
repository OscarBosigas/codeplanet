'user strict';
var sql = require('../db');

var Calificacion = function (calificacion) {
    this.id_estudiante = calificacion.ID_ESTUDIANTE;
    this.id_curso = calificacion.ID_CURSO;
    this.valor = calificacion.VALOR;
}

Calificacion.calificar = function calificar(email, password, calificacion, result) {
    sql.query("SELECT email_estudiante, password_estudiante from ESTUDIANTE where email_estudiante = ? and password_estudiante = ?"
        , [email, password], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                sql.query("INSERT INTO CALIFICACION set ?", calificacion, function (err, res) {

                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                    } else {
                        result(null, res.calificacion);
                    }
                });
            }
        })


};

Calificacion.calificaciones = function calificaciones(id_curso, result) {
    sql.query("SELECT nombre_curso, valor FROM CALIFICACION ca, CURSO cu WHERE ca.id_curso = cu.id_curso and cu.id_curso = ?", id_curso, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Calificacion.editar = function editar(email, password, calificacion, result) {
    sql.query("SELECT email_estudiante, password_estudiante from ESTUDIANTE where email_estudiante = ? and password_estudiante = ?"
        , [email, password], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                sql.query("UPDATE CALIFICACION SET valor = ? where id_estudiante = ? and id_curso = ?",
                    [calificacion.valor, calificacion.id_estudiante, calificacion.id_curso],
                    function (err, res) {
                        if (err) {
                            console.log("error: ", err);
                            result(null, err);
                        } else {
                            result(null, res);
                        }
                    });
            }
        });
};

Calificacion.eliminar = function (email, password, id_estudiante, id_curso, result) {
    sql.query("SELECT email_estudiante, password_estudiante from ESTUDIANTE where email_estudiante = ? and password_estudiante = ?"
        , [email, password], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                sql.query("DELETE FROM CALIFICACION WHERE id_estudiante = ? and id_curso = ?",
                    [id_estudiante, id_curso], function (err, res) {
                        if (err) {
                            console.log("error: ", err);
                            result(null, err);
                        } else {
                            result(null, res);
                        }
                    });
            }
        });
};

module.exports = Calificacion;