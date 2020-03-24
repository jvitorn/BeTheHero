const express = require('express');

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
app.post('/users',(req,res)=>{
    const params = req.body;
    console.log(params);
    return res.json({
        evento:'Semana OminiStack 11',
        aluno : 'Joao Vitor'
    });
});
app.listen(3333);