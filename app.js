const express = require('express');
const path = require('path');


const indexRouter = require ('./routes/indexRoute');

const moviesRoutes = require('./routes/moviesRoute');
const genresRoutes = require('./routes/genresRoute');
const charactersRoutes= require('./routes/charactersRoute');
const app = express();




app.use('/', indexRouter);
app.use("/movies",moviesRoutes);
app.use("/genres",genresRoutes);
app.use("/characters", charactersRoutes)

app.listen(2704, () =>{ console.log ("Servidor Funcionando") })