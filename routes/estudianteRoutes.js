'use strict';

module.exports = function(app){
    var todoList = require('../controllers/estudianteController');

    app.route('/estudiante')
        .post(todoList.createEstudiante)
        .get(todoList.list_estudiantes);
    
    app.route('/estudiante/:doc')
        .get(todoList.estudiante)
        .post(todoList.edit)
        .delete(todoList.remove);

    app.route('/estudiante/codigo/:codigo')
        .get(todoList.estudianteByCod);

    app.route('/cambiarContrasena/estudiante/:doc/:nombre/:apellido')
        .post(todoList.cambiarContrasena);

};
