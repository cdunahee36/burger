const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    try {

        burger.all((data) => {
            res.render('index', { burger: data });
        });
    } catch {
        res.status(500).end();
    }
});

router.get('/add', (req, res) => {
    try {

        res.render('add-burger');
    } catch {
        res.status(500).end();
    }
});

router.post('/api/burgers', (req, res) => {
    try {

        burger.create(req.body, (result) => {
            res.redirect("/");
        });
    } catch {
        res.status(500).end();
    }
});

router.put('/api/burger/:id', (req, res) => {
    try {
        const conditionCol = 'id = ' + req.params.id;

        burger.update({
            devoured: req.body.devoured
        }, conditionCol, (result) => {
            if (result.changedRows = 0) {
                res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    } catch {
        res.status(500).end();
    }
});

router.delete('/api/burger/:id', (req, res) => {
    try {
        const condition = "id = " + req.params.id;
        burger.delete(condition, (result) => {
            if (result.affectedRows == 0) {
                res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    } catch {
        res.status(500).end();
    }
});

module.exports = router;