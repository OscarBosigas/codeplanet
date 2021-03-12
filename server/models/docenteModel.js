'user strict';
var sql = require('../db');
var materia = require('./materiaModel');

var Docente= function (docente) {
    this.doc_docente = docente.doc_docente;
    this.nom_docente = docente.nom_docente;
    this.apellido_doc = docente.apellido_doc;
    this.contrasena_doc = docente.contrasena_doc;
};

Docente.createdocente = function createdocente(docente, result) {
    sql.query("INSERT INTO DOCENTE set ?", docente, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res.docente);
        }
    });
};

Docente.getdocentes = function getdocentes(result) {
    sql.query("SELECT * FROM DOCENTE", (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Docente.getAdocente = function getAdocente(doc_docente, result) {
    sql.query("SELECT * FROM DOCENTE WHERE doc_docente = ? ", doc_docente, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    })
};

Docente.editdocente = function editdocente(doc_docente, docente, result) {
    sql.query("UPDATE DOCENTE SET nom_docente = ?, apellido_doc = ?, contrasena_doc = ? where doc_docente = ?",
        [docente.nom_docente, docente.apellido_doc, docente.contrasena_doc, doc_docente],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Docente.remove = function (doc_docente, result) {
    sql.query("DELETE FROM DOCENTE WHERE doc_docente = ?",
        [doc_docente], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

Docente.cambiarContrasena = function (doc, name, lastName, docente, result) {
    sql.query("UPDATE DOCENTE SET contrasena_doc = ? WHERE doc_docente = ? and nom_docente = ? and apellido_doc = ?", [docente.contrasena_doc, doc, name, lastName], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    });
};

module.exports = Docente;