var express        =        require("express");
var bodyParser     =        require("body-parser");
var router            =        express.Router();
var app = express();

router.get('/', function (req, res) {
    res.render('todolist');
});


module.exports = router;