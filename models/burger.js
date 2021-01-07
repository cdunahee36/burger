var orm = require("../config/orm.js");

var burger = {
    all: function (done) {
        orm.all("burger", function (res) {
            done(res);
        });
    },
    create: function (cols, vals, done) {
        orm.create("burger", cols, vals, function (res) {
            done(res);
        });
    },
    update: function (objColVals, condition, done) {
        orm.update("burger", objColVals, condition, function (res) {
            done(res);
        });
    },
    delete: function (condition, done) {
        orm.delete("burger", condition, function (res) {
            done(res);
        });
    }
};

module.exports = burger;
