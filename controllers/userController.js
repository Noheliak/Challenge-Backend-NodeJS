const { request } = require('http');
const path = require('path');
const encripta = require('bcryptjs');
const { localsName } = require('ejs');
const { append, cookie } = require('express/lib/response'); 
const {validationResult, body} = require('express-validator');
const db = require('../database/models');

const { Op, where } = require('sequelize');
const res = require('express/lib/response');
const { Router } = require('express');



const userController = {

    login: (req,res) => {
            res.render('login');
    },
    validarUsuario:(req,res) => { 
    
    
        let error = validationResult( req ); 

        if (error.isEmpty()) {
        
            db.users.findAll({where:{users: req.body.user}})
            .then(resultado => { 
                          if ( resultado.length != 0 ) {
 
                    if ( encripta.compareSync( req.body.password, resultado[0].dataValues.password ) ) {                    
                                         
                        req.session.userAcept = resultado[0].dataValues.user;
                        console.log( "Guarda sesión de:  " + req.session.userAcept );
                        userLogged =  resultado[0].dataValues;       

                    
                        if ( req.body.recordarme != undefined ) { 
                            recordarme = req.body.recordarme;
                            res.cookie('usuarioRecordado', usuarioLogueado.usuario, { maxAge: 24 * 60 * 60 * 1000 }); 
                        } 
                        
                                           
                    } else { 
                        res.render('login', {'resultadoValidaciones': [{
                            value: 'invalido',
                            msg: 'Usuario o Contraseña incorrecto',
                            param: 'validarUsuario',
                            location: 'userController'
                          }, {msg:'Usuario o Contraseña incorrecto '}], 'datosAnteriores': req.body});
                        console.log('Entro por distinto/incorrecto usuario o pasword');
                    }
                } else { 
                    res.render('login', {'resultadoValidaciones': [{
                        value: 'noregistrado',
                        msg: 'Usuario no registrado',
                        param: 'validarUsuario',
                        location: 'userController'
                      },{msg:'Usuario no registrado '}], 'datosAnteriores': req.body});
                    console.log('Usuario no resitrado.');
                }
            
            }); 

        } else { 
            res.render('login', {'resultadoValidaciones': error.mapped(), 'datosAnteriores': req.body});
            console.log('Datos incompletos en el login.')
        }

        return usuarioLogueado
    
    }
}
        module.exports = userController
