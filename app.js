var express = require('express');

var app = express();

var port = 8300;

//view engine
app.set('view engine','ejs');

//Routes
var routes = require('./routes');

//directory routing for static assets
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//home
app.get('/', routes.home);

//movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

app.get('*', routes.notFound);

app.listen(process.env.PORT || 8300);

