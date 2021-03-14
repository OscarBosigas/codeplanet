'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/calificacionController');

    app.route('/calificacion')
        .post(todoList.calificar)
        .delete(todoList.eliminar);

    app.route('/editarCalificacion')
        .post(todoList.editar);

    app.route('/calificacion/:id_curso')
        .get(todoList.calificaciones)




};