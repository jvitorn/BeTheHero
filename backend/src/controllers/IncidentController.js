//conexao com o banco de dados 
const connection = require('../database/connection');

module.exports ={
    async index(req,res){
        //adicionando paginação
        const { page = 1 } = req.query;
        //contador de registros
        const [count] = await connection('incidents').count()
            
        //contagem de 5 em 5 incidents
        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id')
            .limit(5)
            .offset((page - 1)*5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
            //contador de registros passando o o dado pelo cabeçalho
            res.header('X-Total-Count',count['count(*)']);
        return res.json(incidents);
    },
    async create(req,res){
        const { title , description , value } = req.body;
        //capturando id da ong passada pelo cabecalho da aplicação
        const ong_id = req.headers.authorization;
        //inserindo dados da table incidents 
        const [id]  = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return res.json({ id });
    },
    async delete(req,res){
        const { id } = req.params;
        //capturando id da ong passada pelo cabecalho da aplicação
        const ong_id = req.headers.authorization;
        //esta filtrando o id do usuario logado
        const incidents = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        if(incidents.ong_id != ong_id){
            return  res.status(401).json({error: 'Operation not permitted.'});
        }
        await connection('incidents').where('id',id).delete();

        return res.status(204).send();
    }
}