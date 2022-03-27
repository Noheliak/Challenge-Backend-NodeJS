const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const characterApiController = {
    'list': (req, res) => {
        db.Character.findAll()
        .then(characters => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: characters.length,
                    url: 'API/character'
                },
                data: characters
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Character.findByPk(req.params.id)
            .then(character => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: character.length,
                        url: '/API/character/:id'
                    },
                    data: character
                }
                res.json(respuesta);
            });
    },

    create: (req,res) => {
        Characters
        .create(
            {
                image: req.body.image,
                name: req.body.name,
                age: req.body.age,
                weight: req.body.weight,
                history: req.body.history,
                movies_associate: req.body.movies_associate
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'API/character/create'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'API/characters/create'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    update: (req,res) => {
        let Characters = req.params.id;
        Characters.update(
            {
                image: req.body.image,
                name: req.body.name,
                age: req.body.age,
                weight: req.body.weight,
                history: req.body.history,
                movies_associate: req.body.movies_associate
            
            },
            {
                where: {id: actorId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'API/characters/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'API/characters/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    },
    destroy: (req,res) => {
        let Character = req.params.id;
        Character.destroy({where: {id: actorId}, force: true}) 
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'API/character/delete/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'API/characters/delete/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
    
}

module.exports = characterApiController;