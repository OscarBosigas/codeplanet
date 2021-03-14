'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/cursoController');

    app.route('/curso')
        .post(todoList.crearCurso)
        .get(todoList.cursos);

    app.route('/curso/:id_curso')
        .get(todoList.curso)
        .post(todoList.editar)
        .delete(todoList.eliminar);

};