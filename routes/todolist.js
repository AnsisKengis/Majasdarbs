var express = require('express');
var router = express.Router();

/* GET todolist listing. */
router.get('/', function(req, res, next) {
    res.render('todolist', {title: 'To Do List'});

});

module.exports = router;