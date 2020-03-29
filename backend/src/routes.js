const express =  require('express');
//validaçoes de dados 
const { celebrate,Segments,Joi} = require('celebrate');
//Controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController  = require('./controllers/SessionController');

const routes = express.Router();
/** 
    *Rotas de todos os Controllers
    *Ongs
    *Incidents
    *Profile 
    *Sessions - Login  
*/
    //Iniciando uma nova sessao de usuario
    routes.post('/sessions',SessionsController.create);
    //- ONGS - Listando todas as ongs do banco de dados
    routes.get('/ongs',OngController.index);
     //- ONGS -cadastrando uma ong no banco de dados caso a validação de dados esteja correta
    routes.post('/ongs',celebrate({
        //validando o body da requisição 
        [Segments.BODY]:Joi.object().keys({
            //descrevendo cada uma das informações passadas para criar uma ong
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            whatsapp:Joi.number().required().min(10).max(11),
            city:Joi.string().required(),
            uf:Joi.string().required().length(2),
        })
    }),OngController.create);
    //- PROFILE - Listando todas os casos de uma ong espeficia do banco de dados
    routes.get('/profile',celebrate({
       //validando o headers da requisião
       [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
        }).unknown(),
    }),ProfileController.index);
    // - INCIDENTS - Listando um novo caso no banco de dados
    routes.get('/incidents',celebrate({
        //validando o query da aplicação
        [Segments.QUERY]:Joi.object().keys({
            page:Joi.number(),
        })
    }),IncidentController.index);
    // - INCIDENTS - um novo caso no banco de dados
    routes.post('/incidents',IncidentController.create);
    //- INCIDENTS - um caso no banco de dados
    routes.delete('/incidents/:id',celebrate({
        //validando os parametros da requisição
        [Segments.PARAMS]:Joi.object().keys({
           id:Joi.number().required(), 
        })  
    }),IncidentController.delete);

module.exports = routes;