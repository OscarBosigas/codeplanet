'user strict';
var sql = require('../db');

var Admin = function(admin){
    this.usuario = admin.usuario;
    this.contrasena_admin = admin.contrasena_admin;
}

Admin.login = function login(usuario, contrasena1, result) {
    sql.query("SELECT * FROM ESTUDIANTE WHERE doc = ?", usuario, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        if (res.length <= 0) {
            sql.query("SELECT * FROM DOCENTE WHERE doc_docente = ?", usuario, (err, res1) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                if (res1.length <= 0){
                    sql.query("SELECT * FROM Admin WHERE usuario = ?", usuario, (err, res2) => {
                        if (err) {
                            console.log("error: ", err);
                            result(err, null);
                        } 
                        if (res2.length <= 0) {
                            result(err, null);                            
                        } else if (res2[0].contrasena == contrasena1) {
                            result(null, res2); 
                        }
                    });
                } else if (res1[0].CONTRASENA_DOC == contrasena1) {
                    result(null, res1);
                }
            });
        } else if (res[0].CONTRASENA == contrasena1) {
            result(null, res);
        }
    });            

};

Admin.getEstudiantesPorMateria = function(COD_MATERIA, result) {
    sql.query("SELECT nombre, apellido, codigo from ESTUDIANTE e, MATERIA m where m.COD_CURSO = e.COD_CURSO and m.COD_MATERIA = ?",
     COD_MATERIA, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    });
};

module.exports = Admin;