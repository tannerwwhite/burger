// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callback(res);
        });
    },
    update: function(set, condition, callback) {
        orm.updateOne("burgers", set, condition, function(res) {
            callback(res);
        });
    },
    updateAll: function(set, callback) {
        orm.updateAll("burgers", set, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;