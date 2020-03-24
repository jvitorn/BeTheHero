const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
//criando rotas na aplicação
/** 
 * Metodos HTTP 
 * GET: Buscar alguma informação do servidor 
 * POST : criar uma informação no servidor
 * PUT : alterar uma informação no servidor 
 * DELETE : Deletar uma informação no servidor 
*/
/** 
 * Tipos de Parametros:
 *  QUERY PARAMS:Parametros omeados nenviados na rota apos o "?"(Filtros,Paginação)
 *  ROUTE PARAMS:Parametros utiliados para identificar recursos
 *  REQUEST BODY:Corpo da requisição ,utilizado para criar ou alterar recursos
*/

app.use(routes);
app.listen(3333);