
exports.up = function(knex) {
  return knex.schema.createTable(
    'todos', (table) => {
      table.increments('id')
      table.string('tasks')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};
