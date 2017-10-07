var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded({extened: true}));
// app.set('views', __dirname + '/views');
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index')
})
app.post('/result', function(request, response) {
    if (!request.body.name) {
        console.log("no name");
        response.redirect('/')
    } else {
        console.log("yes name");    
        response.render('result', {info: request.body})
    }
})
app.get('/goback', function(request, response) {
    response.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})