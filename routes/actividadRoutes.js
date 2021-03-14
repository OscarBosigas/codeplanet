'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/actividadController');

    app.route('/actividad')
        .post(todoList.crearActividad)
        .get(todoList.actividades);

    app.route('/actividad/:id_actividad')
        .get(todoList.actividad)
        .post(todoList.editar)
        .delete(todoList.eliminar);

};