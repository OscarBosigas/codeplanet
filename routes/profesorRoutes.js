'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/profesorController');

    app.route('/profesor')
        .post(todoList.crearprofesor)
        .get(todoList.list_profesores);

    app.route('/profesor/:id_profesor')
        .get(todoList.profesor)
        .post(todoList.editar)
        .delete(todoList.eliminarProfesor);


};
