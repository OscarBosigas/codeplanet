'use strict';

var sql = require('../db');

var Estructura = function (estructura) {
    this.cod_materia = estructura.cod_materia;
    this.descripcion = estructura.descripcion;
    this.value = estructura.value;
}

Estructura.addEstructura = function (estructura, result) {
    sql.query("INSERT INTO ESTRUCTURAM set ?", estructura, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.estructura);
        }
    });
};

Estructura.editEstructura = function editEstructura(cod_materia, descripcion, estructura, result) {
    sql.query("UPDATE ESTRUCTURAM SET descripcion = ?, value = ? where cod_materia = ? and descripcion = ?",
        [estructura.descripcion, estructura.value, cod_materia, descripcion],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Estructura.remove = function (cod_materia, descripcion, result) {
    sql.query("DELETE FROM ESTRUCTURAM WHERE cod_materia = ? and descripcion = ?",
        [cod_materia, descripcion], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};


Estructura.getEstructura = function (cod_materia, result) {
    sql.query("SELECT * FROM ESTRUCTURAM WHERE cod_materia = ?", cod_materia, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};


module.exports = Estructura;