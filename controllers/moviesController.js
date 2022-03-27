const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const op = db.Sequelize.Op;


const Movie = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movie => {
                res.render('moviesList.ejs', {movie: movie})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: [{ association: "genre"}, { association: "character"}]
        })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie: movie});
            });
    },
   
   
    add: function (req, res) {
        db.Genres.findAll()
        .then(function(genres){
            return res.render("moviesCreates", {genres:genres})
        })
          
    },
    create: function (req, res) {
        db.Movie.create({
            image: req.body.image,
            title: req.body.title,
            creationDate: req.body.creationDate,
            ranking: req.body.ranking,
            character_associate: req.body.character_associate
        });
        res.redirect("/movies"); 
        
    },
    edit: function(req, res) {
        
        let getMovie = db.Movie.findByPk(req.params.id);

        let getGenre= db.Genres.findAll();

        Promise.all([getMovie, getGenre])
        .then(function([movie, genre]){
            res.render("editMovie", {movie:movie, genre: genre})
        })
        
    },
    update: function (req,res) {
        db.Movie.update({
            image: req.body.image,
            title: req.body.title,
            creationDate: req.body.creationDate,
            ranking: req.body.ranking,
            character_associate: req.body.character_associate
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/movies/" + req.params.id)        
     
    },
 
    destroy: function (req, res) {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/movies");
       
    }

}

module.exports = moviesController;