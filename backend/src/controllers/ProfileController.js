//conexao com o banco de dados 
const connection = require('../database/connection');
module.exports = {
    // buscando sobre todos os incidents da ong que esta logada
    async index(req,res){
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id',ong_id)
        .select('*');
        //retornando todos os casos daquela ong
        return res.json(incidents);
    }
}