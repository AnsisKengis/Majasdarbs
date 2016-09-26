var express = require('express');
var router = express.Router();


/* GET page3 listing. */
router.get('/', function(req, res, next) {
    res.render('page3', {title: 'Page 3'});

});

module.exports = router;