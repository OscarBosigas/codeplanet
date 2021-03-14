'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/logicaController');

    app.route('/logica')
        .post(todoList.vincularEstudiante);
    app.route('/logicas')
        .post(todoList.vincularEstudiantes);
};