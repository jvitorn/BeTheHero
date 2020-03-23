const express = require('express');

const app = express();
//criando rotas na aplicação
app.get('/',(req,res)=>{
    return res.json({
        evento:'Semana OminiStack 11',
        aluno : 'Joao Vitor'
    });
});
app.listen(3333);