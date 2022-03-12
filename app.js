const express = require('express');
const path = require('path');


const indexRouter = require ('./routes/indexRoute');

const moviesRoutes = require('./routes/moviesRoute');
const genresRoutes = require('./routes/genresRoute');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen(2704, () =>{ console.log ("Servidor Funcionando") })