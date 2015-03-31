var UsersModel = require('../models/users');
var UsersController = module.exports = {
    list: function(req, res) {
        var users = UsersModel.findAll();
        res.json(users);
    },
    detail:  function(req, res) {
        var user = UsersModel.findById(req.params.id);
        //
        res.json(user);
    }
//    ,
//    create:  function(req, res) {
//        res.json(users[req.params.id]);
//        // comes from named route.
//    },
//    update:  function(req, res) {
//        res.json(users[req.params.id]);
//        // comes from named route.
//    },
//    del:  function(req, res) {
//        res.json(users[req.params.id]);
//        // comes from named route.
//    }
};