'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/docenteController');

    app.route('/docente')
        .post(todoList.createdocente)
        .get(todoList.list_docentes);

    app.route('/docente/:doc_docente')
        .get(todoList.docente)
        .post(todoList.edit)
        .delete(todoList.remove);
    
    app.route('/cambiarContrasena/docente/:doc/:nombre/:apellido')
        .post(todoList.cambiarContrasena);

};
