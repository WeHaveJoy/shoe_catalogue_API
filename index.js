const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const ShoeInstance = require('./shoe_catalogue');
//const Routes = require('./routes');
const session = require('express-session');
const flash = require('express-flash');
const _ = require('lodash');

const app = express();

const pg = require("pg");
const Pool = pg.Pool;

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://sinovuyo:pg123@localhost:5432/shoe_catalogue';

const pool = new Pool({
    connectionString
});

const shoeInstance = ShoeInstance(pool);
//const routes = Routes(Wavailability);


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


app.use(flash());

//setup template handlebars as the template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: "./views/layouts"
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get('/api/shoes', async function (req, res) {

    res.render('shoes')
})

app.get('/api/shoes/:brand', async function (req, res){

    res.render('shoes')
})

app.get('/api/shoes/:colour', async function (req, res) {
    

})

app.get('/api/shoes/:size', async function(req, res){


})

app.post('/api/shoes/:updateCart', async function(req, res){


})

app.post('/api/shoes/:addCart', async function(req, res){

    
})


const PORT = process.env.PORT || 3015
app.listen(PORT, function () {

});