'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/estudianteController');

    app.route('/estudiante')
        .post(todoList.crearEstudiante)
        .get(todoList.list_estudiantes);

    app.route('/estudiante/:id_estudiante')
        .get(todoList.estudiante)
        .post(todoList.editar)
        .delete(todoList.eliminarEstudinate);

};
