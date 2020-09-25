'use strict';

var User = require('../models/userModel.js');

exports.getAllUsers = function (req, res) {
    User.getAllUsers(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data)
        }
    });
};

exports.getUserById = function (req, res) {
    User.getUserById(req.params.id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data)
        }
    });
};

exports.createUser = function (req, res) {
    var new_user = new User(req.body);
    User.createUser(new_user, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data)
        }
    });
};

exports.updateUser = function (req, res) {
    var user = new User(req.body);
    User.updateUser(rep.params.id, user, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data)
        }
    });
};

exports.deleteUser = function (req, res) {
    User.deleteUser(rep.params.id, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({ message: `User was deleted successfully!` })
        }
    });
};