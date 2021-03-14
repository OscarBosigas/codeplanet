'user strict';
var sql = require('../db');

var Actividad = function (actividad) {
    this.id_actividad = actividad.ID_ACTIVIDAD;
    this.id_curso = actividad.ID_CURSO;
    this.descripcion = actividad.DESCRIPCION;
    this.fecha = actividad.FECHA;
}

Actividad.crearActividad = function crearActividad(actividad, result) {
    sql.query("INSERT INTO ACTIVIDAD set ?", actividad, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.actividad);
        }
    });
};

Actividad.actividades = function actividades(result) {
    sql.query("SELECT id_actividad, descripcion, fecha FROM ACTIVIDAD a, CURSO c WHERE a.id_curso = c.id_curso", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Actividad.actividad = function actividad(id_actividad, result) {
    sql.query("SELECT nombre_curso, descripcion, fecha FROM ACTIVIDAD a, CURSO c WHERE a.id_curso = c.id_curso and id_actividad = ?", id_actividad, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Actividad.editar = function editaractividad(id_actividad, actividad, result) {
    sql.query("UPDATE ACTIVIDAD SET descripcion = ?, fecha = ? where id_actividad = ?",
        [actividad.descripcion, actividad.fecha, id_actividad],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Actividad.eliminar = function (id_actividad, result) {
    sql.query("DELETE FROM ACTIVIDAD WHERE id_actividad = ?",
        [id_actividad], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

module.exports = Actividad;