var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req,res) {
	res.render('home.pug')
})

app.get('/auth/google', function(req,res) {
	res.render('index.pug');
});

app.get('/logged', function(req,res) {
	res.render('logged.pug', {username: req.query.username});
});

app.listen(3000);

app.use(function(req, res, next) {
	res.status(404).send('Wybacz, nie moglismy odnaleźć tego, czego żądasz!');
});