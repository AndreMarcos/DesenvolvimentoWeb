var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.get('/clientelist', function(req, res) {
    var db = require("../db");
    var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Users.find({}).lean().exec(
       function (e, docs) {
           res.render('cliente', { "cliente": docs });
       });
});

router.get('/novocliente', function (req, res, next) {
    res.render('novocliente', { title: 'Novo Cliente' });
});

router.post('/addcliente', function (req, res) {

    var db = require("../db");
    var nome = req.body.nome;
    var cpf = req.body.cpf;

    var Clientes = db.Mongoose.model('usercollection', db.clienteSchema, 'usercollection');
    var cliente = new Users({ nome: nome, cpf: cpf });
    user.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Post saved");
            res.redirect("clientelist");
        }
    });
});

module.exports = router;