'user strict';
var sql = require('../db');

var Logica = function (logica) {
    this.id_estudiante = logica.ID_ESTUDIANTE;
    this.id_curso = logica.ID_CURSO;
}

Logica.vincularEstudiante = function vincularEstudiante(estudiante_curso, result) {
    sql.query("INSERT INTO ESTUDIANTE_CURSO set ?", estudiante_curso, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.estudiante_curso);
        }
    });
}

Logica.vincularEstudiantes = function vincularEstudiantes(estudiante_curso, result) {
    sql.query("INSERT INTO ESTUDIANTE_CURSO set ?", estudiante_curso, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.estudiante_curso[index]);
        }
    });


}

module.exports = Logica;