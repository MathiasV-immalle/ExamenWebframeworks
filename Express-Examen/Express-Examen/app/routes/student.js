var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) return console.log(err);
    db = database.db('exam');
})

router.get('/add', (req, res) => {
    res.render('add.ejs', {})
})

router.get('/list', function (req, res, next) {
    var query = { name: req.body.name }
    db.collection('students').find().toArray((err, result) => {
        result = result.sort(function (a, b) {
            var x = a.name < b.name ? -1 : 1;
            return x;
        });
        if (err) return console.log(err)
        res.render('index.ejs', { students: result })
    })
});

module.exports = router;
