const express = require('express');
const path = require('path');
const method_override = require('method-override');
const app = express();
const indexRouter = require ('./routes/indexRoute');


const moviesRoutes = require('./routes/moviesRoute');
const genresRoutes = require('./routes/genresRoute');
const charactersRoutes= require('./routes/charactersRoute');


//RUTAS APIS
const moviesApiRoutes = require('./routes/API/moviesApiRoutes');
const characterApiRoutes = require('./routes/API/characterApiRoutes');
const genreApiRoutes = require('./routes/API/genreApiRoutes');

//ENDPOINTS
app.use('/API/movies', moviesApiRoutes);
app.use('/API/character', characterApiRoutes);
app.use('/API/genre', genreApiRoutes);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use( method_override('_method'));

app.use('/', indexRouter);
app.use("/movies",moviesRoutes);
app.use("/genres",genresRoutes);
app.use("/characters", charactersRoutes)

//PARA LOGIN DE USUARIO
const encripta = require('bcryptjs');
const session = require('express-session');
app.use(session( {  secret: "Challenge", 
                    resave: false,
                    saveUninitialized: false,
                    cookie: {maxAge: 1000 * 60 * 60 * 24}
                } ));

const cookieParser = require('cookie-parser');
app.use( cookieParser() )


app.listen(2704, () =>{ console.log ("Servidor Funcionando en el Puerto 2704") })