//Pulls the orm methods to this file
var orm = require("../config/orm.js");

var burgeregrub = {
    all: function (done) {
        orm.all("burgeregrub", function (res) {
            done(res);
        });
    },
    create: function (cols, vals, done) {
        orm.create("burgeregrub", cols, vals, function (res) {
            done(res);
        });
    },
    update: function (objColVals, condition, done) {
        orm.update("burgeregrub", objColVals, condition, function (res) {
            done(res);
        });
    },
    delete: function (condition, done) {
        orm.delete("burgeregrub", condition, function (res) {
            done(res);
        });
    }
};

module.exports = burgeregrub;