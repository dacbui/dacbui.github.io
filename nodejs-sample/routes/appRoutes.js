'use strict';
module.exports = function (app) {
    var userContrl = require('../controllers/userController');

    app.route('/users')
        .get(userContrl.getAllUsers)
        .post(userContrl.createUser);

    app.route('/users/:id')
        .get(userContrl.getUserById)
        .put(userContrl.updateUser)
        .delete(userContrl.deleteUser);
};