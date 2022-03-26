const db = require('../database/models');
const sequelize = db.sequelize;


const Movies = db.Movies;

const moviesController = {
    'list': (req, res) => {
        db.Movies.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies: movies})
            })
    },
    'detail': (req, res) => {
        db.Movies.findByPk(req.params.id, {
            include: [{ association: "genre"}, { association: "character"}]
        })
            .then(movies => {
                res.render('moviesDetail.ejs', {movies: movies});
            });
    },
   
   
    add: function (req, res) {
        db.Genres.findAll()
        .then(function(genres){
            return res.render("moviesCreates", {genres:genres})
        })
          
    },
    create: function (req, res) {
        db.Movies.create({
            image: req.body.image,
            title: req.body.title,
            creationDate: req.body.creationDate,
            ranking: req.body.ranking,
            character_associate: req.body.character_associate
        });
        res.redirect("/movies"); 
        
    },
    edit: function(req, res) {
        
        let getMovie = db.Movies.findByPk(req.params.id);

        let getGenre= db.Genres.findAll();

        Promise.all([getMovie, getGenre])
        .then(function([movie, genre]){
            res.render("editMovie", {movie:movie, genre: genre})
        })
        
    },
    update: function (req,res) {
        db.Movies.update({
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
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/movies");
       
    }

}

module.exports = moviesController;