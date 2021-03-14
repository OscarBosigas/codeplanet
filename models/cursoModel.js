'user strict';
var sql = require('../db');

var Curso = function (curso) {
    this.id_curso = curso.ID_CURSO;
    this.id_profesor = curso.ID_PROFESOR;
    this.nombre_curso = curso.NOMBRE_CURSO;
    this.duracion = curso.DURACION;
    this.detalles = curso.DETALLES;
}

Curso.crearCurso = function crearCurso(curso, result) {
    sql.query("INSERT INTO CURSO set ?", curso, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.curso);
        }
    });
};

Curso.cursos = function cursos(result) {
    sql.query("SELECT id_curso, nombres_profesor, apellidos_profesor, nombre_curso, duracion, detalles FROM CURSO c, PROFESOR p WHERE c.id_profesor = p.id_profesor", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Curso.curso = function cursos(id_curso, result) {
    sql.query("SELECT nombres_profesor, apellidos_profesor, nombre_curso, duracion, detalles FROM CURSO c, PROFESOR p WHERE c.id_profesor = p.id_profesor and c.id_curso = ?", id_curso, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Curso.editar = function editarCurso(id_curso, curso, result) {
    sql.query("UPDATE CURSO SET nombre_curso = ?, detalles = ?, duracion = ? where id_curso = ?",
        [curso.nombre_curso, curso.detalles, curso.duracion, id_curso],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Curso.eliminar = function (id_curso, result) {
    sql.query("DELETE FROM CURSO WHERE id_curso = ?",
        [id_curso], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

module.exports = Curso;