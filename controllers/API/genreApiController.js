const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Character;

const genreApiController = {
    'list': (req, res) => {
        db.Genre.findAll()
        .then(genres => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: genres.length,
                    url: 'API/genres'
                },
                data: genres
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: '/API/genre/:id'
                    },
                    data: genre
                }
                res.json(respuesta);
            });
    
        }
    }


module.exports = genreApiController;