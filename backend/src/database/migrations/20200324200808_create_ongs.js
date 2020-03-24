// up -> responsavel pela criação de tablelas do knex 
exports.up = function(knex) {
    //criando uma tabela com o knex
  return knex.schema.createTable('ongs',function(table){
      //criação de uma coluna string 'id' e definindo como chave primaria
    table.string('id').primary();
    //criação de uma coluna string 'name' onde valor nao pode ser null
    table.string('name').notNullable();
    //criação de uma coluna string 'email' onde valor nao pode ser null
    table.string('email').notNullable();
    //criação de uma coluna string 'whatsapp' onde valor nao pode ser null
    table.string('whatsapp').notNullable();
    //criação de uma coluna string 'city' onde valor nao pode ser null
    table.string('city').notNullable();
    //criação de uma coluna string 'uf'  onde valor nao pode ser null e atribuindo o 2 como numero de caracteres
    table.string('uf',2).notNullable();
  });
};
// down -> caso de algum problema
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
