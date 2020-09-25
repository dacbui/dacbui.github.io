'use strict';
var sql = require('../db.js');

var User = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.birthday = user.birthday;
    this.password = user.password;
    this.active = user.active;
    this.created_date = new Date();
    this.modified_date = new Date();
};

User.getAllUsers = function (result) {
    sql.query("SELECT * FROM Users WHERE active = 1", function (err, res) {
        if (err) {
            console.log('error: ', err);
            result(null, err)
        } else {
            console.log('success: ', res);
            result(null, res)
        }
    });
};

User.getUserById = function(id, result){
    sql.query("SELECT * FROM Users WHERE id = ?", id, function(err, res){
        if (err) {
            console.log('error: ', err);
            result(null, err)
        } else {
            console.log('success: ', res);
            result(null, res)
        }
    });
};

User.createUser = function(newUser, result){
    sql.query("INSERT INTO Users SET ?", newUser, function(err, res){
        if (err) {
            console.log('error: ', err);
            result(null, err)
        } else {
            console.log('success: ', res.insertId);
            result(null, res.insertId)
        }
    });
};

User.updateUser = function(id, user, result){
    sql.query("UPDATE Users SET ? WHERE id = ?", [user.user, id], function(err, res){
        if (err) {
            console.log('error: ', err);
            result(null, err)
        } else {
            console.log('success: ', res);
            result(null, res)
        }
    });
};

User.deleteUser = function(id, result){
    sql.query("DELETE FROM Users WHERE id = ?", id, function(err, res){
        if (err) {
            console.log('error: ', err);
            result(null, err)
        } else {
            console.log('success: ', res);
            result(null, res)
        }
    });
};

module.exports = User;