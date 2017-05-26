var express = require('express');
var router = express.Router();
var db = require('../models');

router.get("/", function(req, res) {
    db.Burgers.findAll({}).then(function(sqlBurgerData) {
        console.log(sqlBurgerData);
        var hbsBurgerObj = {
            burgers: sqlBurgerData
        };
        res.render('index', hbsBurgerObj);
    });
});

router.post("/", function(req, res) {
    db.Burgers.create({
        name: req.body.name,
        devoured: false
    }).then(function() {
        res.redirect("/");
    });
});

router.post("/eat/:id", function(req, res) {
    db.Burgers.update({
        devoured: true
    },{
        where: {
            id: req.params.id
        }
    }).then(function(db) {
        res.redirect("/");
    });
});

router.post("/poop/:id", function(req, res) {
    db.Burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(db){
        res.redirect('/');
    })
});

module.exports = router;
