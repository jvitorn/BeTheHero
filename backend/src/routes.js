const express =  require('express');
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
     //- ONGS -cadastrando uma ong no banco de dados 
    routes.post('/ongs',OngController.create);
    //- PROFILE - Listando todas os casos de uma ong espeficia do banco de dados
    routes.get('/profile',ProfileController.index);
    // - INCIDENTS - Listando um novo caso no banco de dados
    routes.get('/incidents',IncidentController.index);
    // - INCIDENTS - um novo caso no banco de dados
    routes.post('/incidents',IncidentController.create);
    //- INCIDENTS - um caso no banco de dados
    routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;