// up -> responsavel pela criação de tablelas do knex 
exports.up = function(knex) {
    //criando uma tabela com o knex
    return knex.schema.createTable('incidents',function(table){
        //criação de uma coluna com autoincremento
      table.increments();
      //criação de uma coluna string 'title' onde valor nao pode ser null
      table.string('title').notNullable();
      //criação de uma coluna string 'description' onde valor nao pode ser null
      table.string('description').notNullable();
      //criação de uma coluna decimal 'value' onde valor nao pode ser null
      table.decimal('value').notNullable();

      //criando um relacionamento com a table 'ongs'
      table.string('ong_id').notNullable();
      //chamando chave estrangeira
      table.foreign('ong_id').references('id').inTable('ongs');
    });
};
// down -> caso de algum problema
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
