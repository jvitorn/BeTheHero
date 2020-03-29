//geração de id 
const generateUniqueId = require('../utils/generateUniqueId');
//conexao com o banco de dados 
const connection = require('../database/connection');



module.exports = {
    //listagem da tablela ongs
    async index (req,res){
             const ongs = await connection('ongs').select('*');
        
        //     //retornando todas as ongs cadastradas
            return res.json(ongs);
    },
    //criação de dados da tabela ongs
    async create (req,res){

        const { name,email,whatsapp,city,uf } = req.body;
        //criando ids aleatorios atraves do crýpto 
        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        //retornando id gerado pelo cryto no banco de dados 
        return res.json({ id });
    }
};