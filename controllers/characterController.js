const db = require('../database/models');
const sequelize = db.sequelize;


const characterController = {
    'list': (req, res) => {
        db.Character.findAll()
            .then(Character => {
                res.render('characterList.ejs', {character})
            })
    },
    'detail': (req, res) => {
        db.Character.findByPk(req.params.id)
            .then(Character => {
                res.render('characterDetail.ejs', {character});
            });
    },

    add: function (req, res) {
        db.Genres.findAll()
        .then(function(genres){
            return res.render("characterCreates", {genres:genres})
        })
          
    },
    create: function (req, res) {
        db.Character.create({
            image: req.body.image,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            history: req.body.history,
            movies_associate: req.body.movies_associate
        });
        res.redirect("/characters"); 
        
    },
    edit: function(req, res) {
        
        let getCharacter = db.Character.findByPk(req.params.id);

        let getMovie= db.Movies.findAll();

        Promise.all([getCharacter, getMovie])
        .then(function([character, movie]){
            res.render("editCharacter", {character:character, movie:movie})
        })
        
    },
    update: function (req,res) {
        db.Character.update({
            image: req.body.image,
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            history: req.body.history,
            movies_associate: req.body.movies_associate
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect("/characters/" + req.params.id)        
     
    },
 
    destroy: function (req, res) {
        db.Character.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect("/characters");
       
    }


}

module.exports = characterController;