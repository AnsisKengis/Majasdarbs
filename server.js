var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var items = [
    {title:'Item one', done:false},
    {title:'Item two', done:true},
    {title:'Item three', done:false},
    {title:'Item four', done:true},
    {title:'Item five', done:false},
    {title:'Item six', done:true},
    {title:'Item seven', done:false},
    {title:'Item eight', done:true},
    {title:'Item nine', done:false},
    {title:'Item ten', done:true}
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));



app.post('/login',function(req,res){
    var allowedUser = {
        email: 'ansis.kengis@homework.com',
        password: 'pass123'
    }

    if (allowedUser.email === req.body.email && allowedUser.password === req.body.password) {
        console.log("User name = " + allowedUser.email + ", password is "+allowedUser.password);
        res.json({authenticated: 1});
    } else {
        res.status(403).send('Forbidden');       // HTTP status 403: Forbidden
    }
});

app.get('/get-todo-items', function(req, res) {
    res.json(items);
});

app.listen(3000, function() {
    console.log('Running on port 3000')
});


module.exports = app;
