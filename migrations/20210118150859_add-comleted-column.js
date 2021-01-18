
exports.up = function(knex) {
  return knex.schema.createTable('completed', (table) => {
    table.increments('id')
    table.boolean('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("completed")
};
