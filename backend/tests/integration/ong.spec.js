const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=> {
    //antes de executar o teste 
    beforeEach(async ()=> {
        //limpando o banco
        await connection.migrate.rollback();
        //ira executar as migrates
        await connection.migrate.latest();
    });
    //executa depois do teste
    afterAll(async ()=>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name:"APAMED",
                email:"contato@contato.com",
                whatsapp:"4700000000",
                city:"Sao Paulo",
                uf:"SP"  
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
  
});