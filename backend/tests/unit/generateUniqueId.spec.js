const generateUniqueId = require('../../src/utils/generateUniqueId');
//descrição do teste
describe('Generate Unique ID',() =>{
    //para cada um dos testes sera utilizado a função 'it'
    it('should generate an unique ID',()=>{
        //gerando um id 
        const id = generateUniqueId();
        // expect espera algo e 'tobe' é o resultado esperado 
        expect(id).toHaveLength(8);    
    });
})